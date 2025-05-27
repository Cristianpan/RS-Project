from app.config.connect_to_database import connect_to_database


def get_most_popular_activity_by_content(content_id: int, blindness_level: int) -> dict:
    conn = connect_to_database()
    query = (
        "SELECT activity_id as id, activity, AVG(activity_rate) as score, AVG(activity_duration) as duration "
        "FROM student_interactions "
        "INNER JOIN activities on student_interactions.activity_id = activities.id AND content_id = ? "
        "INNER JOIN students on student_interactions.student_id = students.id "
        "WHERE students.blindness_level >= ? "
        "GROUP BY activity_id ORDER BY activity_rate DESC LIMIT 5"
    )

    cursor = conn.cursor()

    cursor.execute(query, (content_id,blindness_level,))
    popular_activies = cursor.fetchall()
    popular_activies = [dict(popular_activity) for popular_activity in popular_activies]

    conn.close()

    return popular_activies

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