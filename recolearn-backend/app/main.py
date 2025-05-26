from flask import Flask
from app.routes.student_routes import student_blueprint
from app.routes.recomm_routes import recomm_blueprint

app = Flask(__name__)

app.register_blueprint(student_blueprint)
app.register_blueprint(recomm_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
