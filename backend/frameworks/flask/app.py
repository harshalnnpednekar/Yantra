from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import os
from datetime import timedelta

app = Flask(__name__)
CORS(app)

# Configuration
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "yantra-secret-key")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "healthy",
        "engine": "Flask",
        "database": "Extensible (Postgres/Mongo/MySQL)"
    })

@app.route('/auth/login', methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    
    # Simple Mock Auth for Boilerplate
    if username == "admin@yantra.io" and password == "password123":
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)
    
    return jsonify({"msg": "Bad username or password"}), 401

@app.route('/api/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()
    return jsonify({
        "logged_in_as": current_user,
        "stats": {
            "uptime": "99.9%",
            "active_nodes": 4,
            "security_score": 98
        }
    })

if __name__ == '__main__':
    app.run(port=8000, debug=True)
