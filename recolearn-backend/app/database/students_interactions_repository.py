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
