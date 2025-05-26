import pandas as pd


def get_affinity_between_content_and_activity(students_interactions):
    # ===========================================
    # Afinidad entre contenido y actividad
    # ===========================================
    cooc = (
        pd.DataFrame(students_interactions)
        .groupby(["content_id", "activity_id"])
        .size()
        .reset_index(name="freq")
    )
    cooc["prob"] = cooc.groupby("content_id")["freq"].transform(lambda x: x / x.sum())

    affinity_between_content_and_activity = (
        cooc.groupby("content_id")
        .apply(lambda sub: dict(zip(sub["activity_id"], sub["prob"])))
        .to_dict()
    )

    return affinity_between_content_and_activity
