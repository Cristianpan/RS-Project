from flask import Blueprint, jsonify
from app.services.recomm_services import (
    get_content_recommendation,
    get_activity_recommendation,
)

recomm_blueprint = Blueprint("recomm", __name__, url_prefix="/recomm/")


@recomm_blueprint.route("/content/<int:student_id>/", methods=["GET"])
def get_content_recomm(student_id: int):
    response, status = get_content_recommendation(student_id)
    return jsonify(response), status


@recomm_blueprint.route("/activity/<int:student_id>/<int:content_id>/", methods=["GET"])
def get_activity_recomm(student_id: int, content_id: int):
    response, status = get_activity_recommendation(student_id, content_id)
    return jsonify(response), status
