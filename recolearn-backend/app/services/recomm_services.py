from app.model.response_wrapper import ResponseWrapper

from app.database.content_types_repository import (
    get_most_popular_content_type,
    get_contents_by_ids,
)
from app.database.activities_repository import (
    get_most_popular_activity_by_content,
    get_activities_by_ids,
)
from app.database.students_repository import get_student_by_id
from app.database.students_repository import get_students_data
from app.database.students_interactions_repository import get_students_interactions


from app.model.recommender.get_content_recomm import get_content_recomm

from app.model.recommender.get_activity_recomm import get_activity_recomm

_CONTENT_MODEL_FILE = "data/content_model.pkl"
_ACTIVITY_MODEL_FILE = "data/activity_model.pkl"


def get_content_recommendation(student_id: int) -> tuple:
    try:
        student = get_student_by_id(student_id)

        if not student:
            recom = get_most_popular_content_type()
            return ResponseWrapper(recom, True, None).to_dict(), 200

        students_data = get_students_data()
        students_interactions = get_students_interactions()

        result = get_content_recomm(
            student=student,
            students_data=students_data,
            students_interactions=students_interactions,
            model_file=_CONTENT_MODEL_FILE,
        )

        content_ids = [recomm["content_id"] for recomm in result]
        content_recomms = get_contents_by_ids(content_ids)

        content_recomms = _merge_by_scores(content_recomms, result, "content_id")

        return ResponseWrapper(content_recomms, True, None).to_dict(), 200

    except Exception as e:
        return ResponseWrapper(None, False, str(e)).to_dict(), 500


def get_activity_recommendation(student_id: int, content_id: int) -> tuple:
    try:
        student = get_student_by_id(student_id)

        if not student:
            recom = get_most_popular_activity_by_content(content_id)
            return ResponseWrapper(recom, True, None).to_dict(), 200

        students_data = get_students_data()
        students_interactions = get_students_interactions()

        results = get_activity_recomm(
            student=student,
            content_id=content_id,
            students_data=students_data,
            students_interactions=students_interactions,
            model_file=_ACTIVITY_MODEL_FILE,
        )

        activity_ids = [recomm["activity_id"] for recomm in results]
        activity_recomms = get_activities_by_ids(activity_ids)

        activity_recomms = _merge_by_scores(activity_recomms, results, "activity_id")
        return ResponseWrapper(activity_recomms, True, None).to_dict(), 200

    except Exception as e:
        return ResponseWrapper(None, False, str(e)).to_dict(), 500


def _merge_by_scores(items, scores, identifier):
    items_dict = {item["id"]: item for item in items}

    result = []
    for score_item in scores:
        item_id = score_item[identifier]
        if item_id in items_dict:
            merged = items_dict[item_id].copy()
            merged["score"] = score_item["score"]
            result.append(merged)

    return result

