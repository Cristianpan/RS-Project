from app.config.connect_to_database import connect_to_database


def get_students_interactions():
    conn = connect_to_database()
    query = (
        "SELECT student_id, content_id, content_rate, activity_id, activity_rate, messages_teacher "
        "FROM student_interactions"
    )
    cursor = conn.cursor()

    cursor.execute(query)
    user_interactions = cursor.fetchall()
    user_interactions = [dict(interaction) for interaction in user_interactions]

    conn.close()

    return user_interactions

def has_interactions_by_student_id(student_id: int):
    conn = connect_to_database()
    query = "SELECT COUNT(*) FROM student_interactions WHERE student_id =?"
    cursor = conn.cursor()

    cursor.execute(query, (student_id,))
    count = cursor.fetchone()[0]

    conn.close()

    return count > 0
