import pandas as pd


def get_data_frames(students_data: dict, students_interactions: dict):
    interactions_df = pd.DataFrame(students_interactions)
    students_df = pd.DataFrame(students_data)
    content_interactions_df = interactions_df[
        ["student_id", "content_id", "content_rate"]
    ].dropna()
    activity_interactions_df = interactions_df[
        ["student_id", "activity_id", "activity_rate", "messages_teacher"]
    ].dropna()

    return students_df, content_interactions_df, activity_interactions_df
