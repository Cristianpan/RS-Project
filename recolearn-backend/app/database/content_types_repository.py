from app.config.connect_to_database import connect_to_database
from app.utils.adjust_scores import adjust_scores

_CONTENT_BOOST_FILE = "data/content_boosting.csv"

def get_most_popular_content_type(blindness_level: int) -> dict:
    conn = connect_to_database()
    query = (
        "SELECT content_id as id, content, AVG(content_rate) as score, AVG(content_duration) as duration "
        "FROM student_interactions "
        "INNER JOIN content_types on student_interactions.content_id = content_types.id "
        "INNER JOIN students on student_interactions.student_id = students.id "
        "WHERE students.blindness_level >= ? "
        "GROUP BY content_id ORDER BY content_rate DESC"
    )

    cursor = conn.cursor()

    cursor.execute(query, (blindness_level,))
    popular_content_types = cursor.fetchall()
    popular_content_types = [dict(popular_content_type) for popular_content_type in popular_content_types]

    recomendaciones = adjust_scores(_CONTENT_BOOST_FILE, popular_content_types, "id")

    conn.close()

    return recomendaciones[0:5]

def get_contents_by_ids(content_ids: list) -> list:
    if not content_ids:
        return []

    conn = connect_to_database()

    query = (
        "SELECT content_id as id, content, AVG(content_duration) as duration FROM content_types "
        "INNER JOIN student_interactions on student_interactions.content_id = content_types.id "
        "WHERE content_id IN ({}) ".format(','.join('?' * len(content_ids))) + 
        "GROUP BY content_id"
    )
    
    cursor = conn.cursor()

    cursor.execute(query, content_ids)
    contents = cursor.fetchall()
    contents = [dict(content) for content in contents]

    conn.close()

    return contents