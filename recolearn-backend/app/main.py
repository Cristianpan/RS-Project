from flask import Flask
from flask_cors import CORS
from app.routes.student_routes import student_blueprint
from app.routes.recomm_routes import recomm_blueprint
from dotenv import load_dotenv
import os

load_dotenv()
origins = os.getenv("ALLOWED_ORIGINS", "")
origins = origins.split(",")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": origins}})

app.register_blueprint(student_blueprint)
app.register_blueprint(recomm_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
