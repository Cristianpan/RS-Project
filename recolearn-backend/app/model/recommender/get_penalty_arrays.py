def get_penalty_arryays(activity_interactions_df, content_interactions_df, students_df):
    penalty_content_array = get_penalty_content_array(
        content_interactions_df=content_interactions_df, students_df=students_df
    )
    penalty_activity_array = get_penalty_activity_array(
        activity_interactions_df=activity_interactions_df, students_df=students_df
    )

    return penalty_activity_array, penalty_content_array


def get_penalty_activity_array(activity_interactions_df, students_df):
    # ===========================================
    # Matriz de penalización para ACTIVIDADES (calificaciones bajas)
    # ===========================================
    low_used_activity_df = activity_interactions_df[
        activity_interactions_df["activity_rate"] <= 3
    ].merge(students_df, on="student_id")

    # Cuenta cuántas veces cada discapacidad ha tenido calificaciones bajas por actividad
    low_use_activity_array = (
        low_used_activity_df.groupby(["blindness_level", "activity_id"])
        .size()
        .unstack(fill_value=0)
    )

    # Penalización solo para actividades que han sido mal evaluadas
    penalty_activity_value = 0.4
    penalty_activity_array = (low_use_activity_array > 0).astype(
        float
    ) * penalty_activity_value

    return penalty_activity_array


def get_penalty_content_array(content_interactions_df, students_df):
    # ===========================================
    # Matriz de penalización para CONTENIDOS (calificaciones bajas)
    # ===========================================

    # Filtra las interacciones con calificación <= 3
    low_used_content_df = content_interactions_df[
        content_interactions_df["content_rate"] <= 3
    ].merge(students_df, on="student_id")

    # Cuenta cuántas veces cada discapacidad ha tenido calificaciones bajas por contenido
    low_used_content_array = (
        low_used_content_df.groupby(["blindness_level", "content_id"])
        .size()
        .unstack(fill_value=0)
    )

    # Penalización solo para contenidos que han sido mal evaluados
    penalty_content_value = 0.4
    penalty_content_array = (low_used_content_array > 0).astype(
        float
    ) * penalty_content_value

    return penalty_content_array
