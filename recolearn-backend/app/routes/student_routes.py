from flask import Blueprint, jsonify
from app.services.student_services import get_student_id, get_all_students as get_students_data

student_blueprint = Blueprint("student", __name__, url_prefix="/student")

@student_blueprint.route("/", methods=["GET"])
def get_all_students():
    response, status = get_students_data()
    return jsonify(response), status

@student_blueprint.route("/<int:student_id>", methods=["GET"])
def get_by_id(student_id: int):
    response, status = get_student_id(student_id)
    return jsonify(response), status

