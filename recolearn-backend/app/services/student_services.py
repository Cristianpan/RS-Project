from app.database.students_repository import get_student_by_id, get_students_data, save_student as db_save_student
from app.model.response_wrapper import ResponseWrapper


def get_student_id(user_id: int) -> tuple:
    try:
        student = get_student_by_id(user_id)
        if student:
            return ResponseWrapper(dict(student), True, None).to_dict(), 200
        else:
            return ResponseWrapper(None, False, "student not found").to_dict(), 404
    except Exception as e:
        return ResponseWrapper(None, False, str(e)).to_dict(), 500

def save_student(name: str, blindness_level: int) -> tuple:
    try:
        new_student = db_save_student(name, blindness_level)
        
        return ResponseWrapper(new_student, True, None).to_dict(), 201
    except Exception as e:
        return ResponseWrapper(None, False, str(e)).to_dict(), 500    

def get_all_students() -> tuple:
    try:
        students = get_students_data()
        return ResponseWrapper(students, True, None).to_dict(), 200
    except Exception as e:
        return ResponseWrapper(None, False, str(e)).to_dict(), 500
