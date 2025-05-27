import pandas as pd
import numpy as np
from lightfm import LightFM
from lightfm.data import Dataset

from app.model.recommender.get_data_frames import get_data_frames
from app.model.recommender.get_penalty_arrays import (
    get_penalty_activity_array,
)

from app.model.recommender.get_affinity_between_content_and_activity import (
    get_affinity_between_content_and_activity,
)
from app.model.recommender.generate_models import generate_activity_model

from app.model.recommender.get_recomm_model import get_recomm_model
from app.model.recommender.get_lightfm_dataset import (
    get_activity_dataset,
)

from app.utils.adjust_scores import adjust_scores

_ACTIVITY_BOOST_FILE = "data/activity_boosting.csv"


def get_activity_recomm(
    student, content_id, students_data, students_interactions, model_file
):
    students_df, _, activity_interactions_df = get_data_frames(
        students_data, students_interactions
    )

    penalty_activity = get_penalty_activity_array(
        activity_interactions_df=activity_interactions_df,
        students_df=students_df,
    )

    affinity_between_content_and_activity = get_affinity_between_content_and_activity(
        students_interactions
    )
    activity_model = get_recomm_model(model_file)

    if not activity_model:
        activity_model = generate_activity_model(
            students_df=students_df,
            activity_interactions_df=activity_interactions_df,
            model_file=model_file,
        )

    activity_dataset = get_activity_dataset(
        students_df=students_df,
        activity_interactions_df=activity_interactions_df,
    )

    activity_recomms = _generate_recomms(
        student_id=student["id"],
        student_blindness_level=student["blindness_level"],
        content_ref=content_id,
        activity_df=activity_interactions_df,
        activity_model=activity_model,
        dataset=activity_dataset,
        matriz_penalizacion_actividad=penalty_activity,
        afinidad_contenido_actividad=affinity_between_content_and_activity,
    )

    return activity_recomms

def _generate_recomms(
    student_id: int,
    student_blindness_level: int,
    content_ref: str,
    activity_df: pd.DataFrame,
    activity_model: LightFM,
    dataset: Dataset,
    matriz_penalizacion_actividad: pd.DataFrame,
    afinidad_contenido_actividad: dict,
):
    """
    Recomienda actividades para `student_id`, penalizando con la matriz
    de calificaciones bajas y BONIFICANDO según la afinidad de
    `content_ref`→actividad.
    """

    factor_penalizacion: float = 0.2
    factor_freq: float = 0.1
    factor_calif_alta: float = 0.3
    factor_calif_baja: float = -0.5
    factor_afinidad: float = 1.5

    # ────────────────── 1⃣ Scores base LightFM ──────────────────
    user_idx = dataset.mapping()[0][
        student_id
    ]  # Mapea el ID de usuario externo a su índice interno usado por LightFM.
    n_items = len(
        dataset.mapping()[2]
    )  # Obtiene el número total de actividades (ítems) en el dataset de LightFM.
    scores = activity_model.predict(
        user_ids=user_idx, item_ids=np.arange(n_items)
    )  # Genera las puntuaciones de predicción iniciales para el usuario

    # Crea un diccionario para mapear los índices internos de LightFM
    # a los nombres de las actividades, facilitando la identificación.
    idx_to_actividad = {idx: act for act, idx in dataset.mapping()[2].items()}

    # ────────────────── 2⃣ Datos auxiliares ──────────────────
    # 2.1. Nivel de discapacidad visual del usuario
    # Busca el nivel de discapacidad visual del usuario en el DataFrame de usuarios.
    student_blindness_level

    # 2.2. Estadísticas de uso del propio usuario
    # Filtra las interacciones para obtener solo las del usuario actual.
    interacciones_usuario = activity_df[activity_df["student_id"] == student_id]
    # Cuenta la frecuencia con la que el usuario ha interactuado con cada actividad.
    freq_usuario = interacciones_usuario["activity_id"].value_counts()

    # 2.3. Diccionario de afinidades para el contenido de referencia
    # Obtiene las probabilidades de afinidad de actividades con el contenido
    # de referencia (`content_ref`). Si no hay afinidades, usa un diccionario vacío.
    prob_activ_por_contenido = afinidad_contenido_actividad.get(content_ref, {})

    # ────────────────── 3⃣ Ajuste score a score ──────────────────
    # Diccionario para almacenar las puntuaciones finales ajustadas.
    scores_finales = {}

    # Itera sobre cada actividad (usando su índice interno de LightFM).
    for idx in range(n_items):
        # Obtiene el nombre de la actividad.
        act = idx_to_actividad[idx]
        # Obtiene la puntuación base de LightFM para esta actividad.
        score = scores[idx]

        # 3.1 Penalización por mala calidad para este nivel de discapacidad
        # Busca si existe una penalización específica para esta actividad
        # y el nivel de discapacidad del usuario. Si no existe, es 0.0.
        penal_mala = matriz_penalizacion_actividad.loc[student_blindness_level].get(
            act, 0.0
        )
        # Aplica la penalización multiplicada por un factor de penalización.
        score -= penal_mala * factor_penalizacion

        # 3.2 Bonificación / castigo por historial propio de calificaciones
        # Filtra las calificaciones previas del usuario para esta actividad.
        califs_prev = interacciones_usuario.loc[
            interacciones_usuario["activity_id"] == act, "activity_rate"
        ]
        # Si el usuario ha calificado la actividad previamente:
        if not califs_prev.empty:
            # Calcula el promedio de las calificaciones previas.
            prom = califs_prev.mean()
            # Bonifica si el promedio es alto (>= 4).
            score += factor_calif_alta if prom >= 4 else 0.0
            # Castiga si el promedio es bajo (<= 3).
            score += factor_calif_baja if prom <= 3 else 0.0

        # 3.3 Penalización por frecuencia de uso (evita repeticiones)
        # Obtiene la frecuencia con la que el usuario ha usado esta actividad.
        freq = freq_usuario.get(act, 0)
        # Aplica una penalización proporcional a la frecuencia de uso.
        score -= freq * factor_freq

        # 3.4 Bonificación por afinidad con el content_ref
        # Obtiene la probabilidad de afinidad de la actividad con el contenido
        # de referencia. Si no hay afinidad, es 0.0.
        # Aplica una bonificación multiplicada por un factor de afinidad.
        score += prob_activ_por_contenido.get(act, 0.0) * factor_afinidad

        # Almacena la puntuación final ajustada para la actividad.
        scores_finales[act] = score

    recomendaciones = scores_finales.items()

    recomendaciones = [
        {"activity_id": int(content_id), "score": float(score)}
        for content_id, score in recomendaciones
    ]

    recomendaciones = adjust_scores(_ACTIVITY_BOOST_FILE, recomendaciones, "activity_id")
    
    return recomendaciones[0:5]