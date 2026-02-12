from flask import Blueprint, jsonify, request
from app.services.student_services import (
    get_student_id,
    get_all_students as get_students_data,
    save_student as save_student_service,
)

student_blueprint = Blueprint("student", __name__, url_prefix="/student/")


@student_blueprint.route("", methods=["GET"])
def get_all_students():
    response, status = get_students_data()
    return jsonify(response), status


@student_blueprint.route("", methods=["POST"])
def save_student():
    data = request.get_json()
    name = data.get("name")
    blindness_level = data.get("blindness_level")
    response, status = save_student_service(name, blindness_level)
    return jsonify(response), status


@student_blueprint.route("/<int:student_id>", methods=["GET"])
def get_by_id(student_id: int):
    response, status = get_student_id(student_id)
    return jsonify(response), status
