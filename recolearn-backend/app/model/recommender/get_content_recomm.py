import numpy as np
import pandas as pd
from collections import defaultdict
from app.model.recommender.get_data_frames import get_data_frames

from app.model.recommender.get_penalty_arrays import (
    get_penalty_content_array,
)

from app.model.recommender.generate_models import generate_content_model

from app.model.recommender.get_recomm_model import get_recomm_model
from app.model.recommender.get_lightfm_dataset import (
    get_content_dataset,
)

_CONTENT_BOOST_FILE = "data/content_boosting.csv"

def get_content_recomm(student, students_data, students_interactions, model_file):
    students_df, content_interactions_df, _ = get_data_frames(
        students_data, students_interactions
    )

    penalty_content = get_penalty_content_array(
        content_interactions_df=content_interactions_df,
        students_df=students_df,
    )

    content_dataset = get_content_dataset(
        students_df=students_df,
        content_interactions_df=content_interactions_df,
    )

    content_model = get_recomm_model(model_file)

    if not content_model:
        content_model = generate_content_model(
            students_df=students_df,
            content_interactions_df=content_interactions_df,
            model_file=model_file,
        )

    recomms = _generate_recomm(
        student_id=student["id"],
        blindness_level=student["blindness_level"],
        content_df=content_interactions_df,
        model=content_model,
        dataset=content_dataset,
        disability_penalty=penalty_content,
    )

    return recomms


def _generate_recomm(
    student_id, blindness_level, content_df, model, dataset, disability_penalty
):
    # 2. Obtener los índices internos de todos los ítems (contenidos)
    all_item_internal_ids = np.arange(len(dataset.mapping()[2]))

    # 3. Score predicho por LightFM (predicción base)
    scores = model.predict(user_ids=student_id, item_ids=all_item_internal_ids)

    # 5. Obtener los ajustes (penalizaciones/boosts) específicos para el nivel de discapacidad de este usuario
    ajustes_para_usuario = disability_penalty.get(blindness_level, defaultdict(float))

    # 6. Aplicar los ajustes a las puntuaciones de LightFM
    scores_finales = {}
    for contenido_nombre, idx_interno in dataset.mapping()[2].items():
        score = scores[idx_interno]  # Puntuación inicial del model LightFM

        # 6.1. Ajuste por Discapacidad (Penalización/Boost)
        ajuste_discapacidad = ajustes_para_usuario.get(contenido_nombre, 0.0)
        score += ajuste_discapacidad  # Suma el ajuste (si es negativo, resta; si es positivo, suma)

        # 6.2. Bonificación y penalización por CALIFICACIÓN PROMEDIO pasada del usuario
        # Filtra todas las calificaciones que el usuario ha dado a este contenido específico.
        calificaciones_previas = content_df[
            (content_df["student_id"] == student_id)
            & (content_df["content_id"] == contenido_nombre)
        ]["content_rate"]

        if not calificaciones_previas.empty:
            # Si hay calificaciones previas, calcula el promedio de ellas.
            calificacion_promedio = calificaciones_previas.mean()

            # Aplica bonificación o penalización basada en el promedio
            if calificacion_promedio >= 4:
                score += 0.3  # Bonificación por calificación promedio alta
            elif (
                calificacion_promedio <= 3
            ):  # Considera 1 o menos de 1.5 como calificación baja
                score -= 0.5  # Penalización por calificación promedio muy baja

        scores_finales[contenido_nombre] = score

    for i, (k, v) in enumerate(scores_finales.items()):
        if i >= 5:
            break

    # 7. Ordenar las recomendaciones finales

    recomendaciones = scores_finales.items()

    recomendaciones = [
        {"content_id": int(content_id), "score": float(score)}
        for content_id, score in recomendaciones
    ]

    recomendaciones = _scores_adjust(recomendaciones)

    recomendaciones = sorted(recomendaciones, key=lambda x: -x["score"])

    return recomendaciones[0:5]  # Devuelve las 5 mejores recomendaciones

def _scores_adjust(content_recomms):
    df_boosts = pd.read_csv(_CONTENT_BOOST_FILE)

    boosts = dict(zip(df_boosts["id"], df_boosts["boost"]))

    for item in content_recomms:
        content_id = item["content_id"]
        if content_id in boosts:
            boost = boosts[content_id]
            if item["score"] >= 0:
                item["score"] *= 1 + boost
            else:
                item["score"] *= 1 - boost

    return content_recomms