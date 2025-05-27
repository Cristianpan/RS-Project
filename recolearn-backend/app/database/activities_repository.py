from app.config.connect_to_database import connect_to_database
from app.utils.adjust_scores import adjust_scores

_ACTIVITY_BOOST_FILE = "data/activity_boosting.csv"

def get_most_popular_activity_by_content(content_id: int, blindness_level: int) -> dict:
    conn = connect_to_database()
    query = (
        "SELECT activity_id as id, activity, AVG(activity_rate) as score, AVG(activity_duration) as duration "
        "FROM student_interactions "
        "INNER JOIN activities on student_interactions.activity_id = activities.id "
        "INNER JOIN students on student_interactions.student_id = students.id "
        "WHERE students.blindness_level >= ? "
        "GROUP BY activity_id ORDER BY activity_rate DESC"
    )

    cursor = conn.cursor()

    cursor.execute(query, (blindness_level,))
    popular_activities = cursor.fetchall()
    popular_activities = [dict(popular_activity) for popular_activity in popular_activities]

    recomendaciones = adjust_scores(_ACTIVITY_BOOST_FILE, popular_activities, "id")

    conn.close()

    return recomendaciones[0:5]

def get_activities_by_ids(activity_ids: list) -> list:
    if not activity_ids:
        return []

    conn = connect_to_database()

    query = (
        "SELECT activity_id as id, activity, AVG(activity_duration) as duration FROM activities "
        "INNER JOIN student_interactions on student_interactions.activity_id = activities.id "
        "WHERE activity_id IN ({}) ".format(','.join('?' * len(activity_ids))) + 
        "GROUP BY activity_id"
    )

    cursor = conn.cursor()

    cursor.execute(query, activity_ids)
    contents = cursor.fetchall()
    contents = [dict(content) for content in contents]

    conn.close()

    return contents
