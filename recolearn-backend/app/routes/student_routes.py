from flask import Blueprint, jsonify
from app.services.student_services import get_student_id

student_blueprint = Blueprint("student", __name__, url_prefix="/student")

@student_blueprint.route("/<int:student_id>", methods=["GET"])
def get(student_id: int):
    response, status = get_student_id(student_id)
    return jsonify(response), status
