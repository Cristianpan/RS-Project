from lightfm.data import Dataset

def get_content_dataset(students_df, content_interactions_df): 
        # 1. Dataset para CONTENIDOS
    content_dataset = Dataset()

    # Basado en contenido de usuario
    content_dataset.fit_partial(
        users=students_df["student_id"].unique(),
        items=content_interactions_df["content_id"].unique(),
        user_features=students_df["blindness_level"].astype(str).unique(),
    )

    return content_dataset

def get_activity_dataset(students_df, activity_interactions_df):
        # 1. Dataset para ACTIVIDADES
    activity_dataset = Dataset()
    activity_dataset.fit(
        students_df["student_id"].unique(),  # Los usuarios son los mismos
        activity_interactions_df[
            "activity_id"
        ].unique(),  # << ¡Ahora con IDs de ACTIVIDAD!
    )

    return activity_dataset