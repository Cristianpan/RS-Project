from lightfm import LightFM
from app.model.recommender.get_lightfm_dataset import (
    get_activity_dataset,
    get_content_dataset,
)
import pickle


def generate_activity_model(students_df, activity_interactions_df, model_file):
    # 1. Dataset para ACTIVIDADES
    activity_dataset = get_activity_dataset(students_df, activity_interactions_df)

    # 2. Interacciones para ACTIVIDADES
    (activity_interactions, activity_weights) = activity_dataset.build_interactions(
        [
            (
                row["student_id"],
                row["activity_id"],
                row["activity_rate"],
            )  # << ¡Ahora con IDs de ACTIVIDAD!
            for idx, row in activity_interactions_df.iterrows()
        ]
    )

    # 3. Modelo LightFM para ACTIVIDADES
    activity_model = LightFM(loss="warp", random_state=42)  # Un nuevo modelo
    activity_model.fit(
        activity_interactions, sample_weight=activity_weights, epochs=10, num_threads=2
    )

    save_model(activity_model, model_file)

    return activity_model


def generate_content_model(students_df, content_interactions_df, model_file):
    # 1. Dataset para CONTENIDOS
    content_dataset = get_content_dataset(students_df, content_interactions_df)

    user_features = content_dataset.build_user_features(
        [
            (row["student_id"], [str(row["blindness_level"])])
            for idx, row in students_df.iterrows()
        ]
    )

    # 2. Interacciones para CONTENIDOS
    # Colaborativo
    (content_interactions, content_weights) = content_dataset.build_interactions(
        [
            (row["student_id"], row["content_id"], row["content_rate"])
            for idx, row in content_interactions_df.iterrows()
        ]
    )

    # 3. Modelo LightFM para CONTENIDOS
    content_model = LightFM(
        loss="warp", random_state=42
    )  # Es buena práctica usar random_state
    content_model.fit(
        content_interactions,
        user_features=user_features,
        sample_weight=content_weights,
        epochs=10,
        num_threads=2,
    )
    save_model(content_model, model_file)

    return content_model


def save_model(model, filename):
    with open(filename, "wb") as f:
        pickle.dump(model, f)
