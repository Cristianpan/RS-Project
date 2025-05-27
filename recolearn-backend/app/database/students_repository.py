from app.config.connect_to_database import connect_to_database


def get_student_by_id(user_id: int) -> dict:
    conn = connect_to_database()
    query = "SELECT * FROM students WHERE id = ?"
    cursor = conn.cursor()

    cursor.execute(query, (user_id,))
    user = cursor.fetchone()

    conn.close()

    return user


def get_students_data() -> dict:
    conn = connect_to_database()
    query = "SELECT id as student_id, blindness_level, name FROM students"
    cursor = conn.cursor()

    cursor.execute(query)
    students = cursor.fetchall()
    students = [dict(student) for student in students]

    conn.close()

    return students


def save_student(name: str, blindness_level: int) -> dict:
    conn = connect_to_database()
    query = "INSERT INTO students (name, blindness_level) values (?,?)"
    cursor = conn.cursor()

    cursor.execute(query, (name, blindness_level))
    id = cursor.lastrowid

    conn.commit()
    conn.close()

    return {"id": id, "name": name, "blindness_level": blindness_level}
