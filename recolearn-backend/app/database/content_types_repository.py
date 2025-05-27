from app.config.connect_to_database import connect_to_database


def get_most_popular_content_type() -> dict:
    conn = connect_to_database()
    query = (
        "SELECT content_id as id, content, AVG(content_rate) as score FROM student_interactions "
        "INNER JOIN content_types on student_interactions.content_id = content_types.id "
        "GROUP BY content_id ORDER BY content_rate DESC LIMIT 5"
    )

    cursor = conn.cursor()

    cursor.execute(query)
    popular_content_types = cursor.fetchall()
    popular_content_types = [dict(popular_content_type) for popular_content_type in popular_content_types]

    conn.close()

    return popular_content_types

def get_contents_by_ids(content_ids: list) -> list:
    if not content_ids:
        return []

    conn = connect_to_database()
    query = "SELECT * FROM content_types WHERE id IN ({})".format(','.join('?' * len(content_ids)))

    cursor = conn.cursor()

    cursor.execute(query, content_ids)
    contents = cursor.fetchall()
    contents = [dict(content) for content in contents]

    conn.close()

    return contents