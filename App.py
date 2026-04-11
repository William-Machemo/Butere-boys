from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_socketio import SocketIO, join_room, leave_room, emit
import pymysql
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode="threading")

UPLOAD_FOLDER = "static/images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

PRINCIPAL_PASSWORD = "1234"
TEACHER_UPLOAD_PASSWORD = "butere123"


# ---------------- DATABASE ----------------
def get_connection():
    return pymysql.connect(
        host="mysql-williammachemo.alwaysdata.net",
        user="williammachemo",
        password="modcom1234",
        database="williammachemo_sokogarden",
        cursorclass=pymysql.cursors.DictCursor,
        connect_timeout=5,
        read_timeout=5,
        write_timeout=5,
        autocommit=True
    )


# ---------------- STUDENT SIGNUP ----------------
@app.route("/api/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")
        phone = data.get("phone")

        if not username or not password or not phone:
            return jsonify({"message": "All fields are required"}), 400

        conn = get_connection()
        cursor = conn.cursor()

        sql = """
        INSERT INTO users(username, password, phone, role)
        VALUES(%s, %s, %s, %s)
        """

        cursor.execute(sql, (username, password, phone, "student"))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Student registered successfully"})

    except Exception as e:
        print("SIGNUP ERROR:", e)
        return jsonify({"message": str(e)}), 500
    
    


# ---------------- TEACHER SIGNUP ----------------
@app.route("/api/teacher_signup", methods=["POST"])
def teacher_signup():
    try:
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")
        phone = data.get("phone")

        if not username or not password or not phone:
            return jsonify({"message": "All fields are required"}), 400

        conn = get_connection()
        cursor = conn.cursor()

        sql = """
        INSERT INTO users(username, password, phone, role)
        VALUES(%s, %s, %s, %s)
        """

        cursor.execute(sql, (username, password, phone, "teacher"))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Teacher registered successfully"})

    except Exception as e:
        print("TEACHER SIGNUP ERROR:", e)
        return jsonify({"message": str(e)}), 500


# ---------------- SIGNIN ----------------
@app.route("/api/signin", methods=["POST"])
def signin():
    try:
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        conn = get_connection()
        cursor = conn.cursor(pymysql.cursors.DictCursor)

        sql = "SELECT * FROM users WHERE username=%s AND password=%s"
        cursor.execute(sql, (username, password))

        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if not user:
            return jsonify({"message": "Login failed"}), 401

        return jsonify({
            "message": "Login successful",
            "user": user,
            "role": user["role"]
        })

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# ---------------- CHAT LOGIN ----------------
@app.route("/api/chat_login", methods=["POST"])
def chat_login():
    try:
        data = request.get_json()
        username = data.get("username")

        conn = get_connection()
        cursor = conn.cursor(pymysql.cursors.DictCursor)

        cursor.execute(
            "SELECT username, role FROM users WHERE username=%s",
            (username,)
        )

        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if not user:
            return jsonify({"message": "User not found"}), 404

        role = "parent" if user["role"] == "student" else user["role"]

        return jsonify({
            "username": user["username"],
            "role": role
        })

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# ---------------- GET STUDENTS ----------------
@app.route("/api/students", methods=["GET"])
def get_students():
    conn = get_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)

    cursor.execute("SELECT * FROM users WHERE role='student'")
    students = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({"students": students})


# ---------------- GET TEACHERS ----------------
@app.route("/api/teachers", methods=["GET"])
def get_teachers():
    conn = get_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)

    cursor.execute("SELECT * FROM users WHERE role='teacher'")
    teachers = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({"teachers": teachers})


# ---------------- DASHBOARD COUNTS ----------------
@app.route("/api/dashboard_counts", methods=["GET"])
def dashboard_counts():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM users WHERE role='student'")
    students_count = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM users WHERE role='teacher'")
    teachers_count = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM file_details")
    assignments_count = cursor.fetchone()[0]

    cursor.close()
    conn.close()

    return jsonify({
        "students": students_count,
        "teachers": teachers_count,
        "assignments": assignments_count
    })


# ---------------- UPLOAD FILES ----------------
@app.route("/api/addfiles", methods=["POST"])
def add_files():
    try:
        file_photo = request.files.get("file_photo")
        file_name = request.form.get("file_name")
        file_description = request.form.get("file_description")
        grade = request.form.get("grade")
        subject = request.form.get("subject")
        password = request.form.get("password")

        if password != TEACHER_UPLOAD_PASSWORD:
            return jsonify({"message": "Wrong teacher password"}), 403

        filename = file_photo.filename
        file_photo.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO file_details
            (file_name, file_description, grade, subject, file_photo)
            VALUES(%s,%s,%s,%s,%s)
        """, (file_name, file_description, grade, subject, filename))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "File uploaded successfully"})

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# ---------------- GET FILES ----------------
@app.route("/api/getfiles", methods=["GET"])
def get_files():
    conn = get_connection()
    cursor = conn.cursor(pymysql.cursors.DictCursor)

    cursor.execute("SELECT * FROM file_details")
    files = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(files)


# ---------------- DOWNLOAD ----------------
@app.route("/download/<filename>")
def download_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename, as_attachment=True)


# ---------------- CONTACT ----------------
messages_store = []

@app.route("/api/contact", methods=["POST"])
def contact_principal():
    data = request.get_json()
    message = data.get("message")

    messages_store.append(message)

    return jsonify({"message": "Message sent successfully"})


@app.route("/api/get_messages")
def get_messages():
    return jsonify(messages_store)


# ---------------- CHAT SYSTEM ----------------
active_users = {}

CHAT_ROOMS = [
    "Classes Chat",
    "General Chat",
    "Announcement Chat",
    "Teachers & Parents",
    "Teachers Only"
]

ROOM_HISTORY = {room: [] for room in CHAT_ROOMS}


@socketio.on("join_room")
def handle_join(data):
    username = data.get("username")
    room = data.get("room")
    role = data.get("role")

    if role == "parent" and room == "Teachers Only":
        emit("message", {"text": "Access denied", "system": True})
        return

    join_room(room)
    active_users[username] = room

    for msg in ROOM_HISTORY[room]:
        emit("message", msg)

    join_msg = {
        "text": f"{username} has joined the room.",
        "system": True,
        "time": datetime.now().isoformat()
    }

    ROOM_HISTORY[room].append(join_msg)

    emit("message", join_msg, room=room)
    emit("online_users", list(active_users.keys()), broadcast=True)


@socketio.on("send_message")
def handle_message(data):
    room = data.get("room")

    ROOM_HISTORY[room].append(data)

    emit("message", data, room=room)


@socketio.on("leave_room")
def handle_leave(data):
    username = data.get("username")
    room = active_users.get(username)

    if room:
        leave_room(room)

        leave_msg = {
            "text": f"{username} has left the room.",
            "system": True,
            "time": datetime.now().isoformat()
        }

        ROOM_HISTORY[room].append(leave_msg)

        emit("message", leave_msg, room=room)

        active_users.pop(username, None)

        emit("online_users", list(active_users.keys()), broadcast=True)


@app.route("/api/chat_rooms")
def get_chat_rooms():
    return jsonify(CHAT_ROOMS)


# ---------------- PRINCIPAL LOGIN ----------------
@app.route("/api/principal_login", methods=["POST"])
def principal_login():
    try:
        data = request.get_json(force=True)

        password = data.get("password")

        print("DEBUG PASSWORD RECEIVED:", password)

        if password == PRINCIPAL_PASSWORD:
            return jsonify({"message": "Login successful"}), 200

        return jsonify({"message": "Wrong password"}), 403

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# ---------------- RUN SERVER ----------------
if __name__ == "__main__":
    socketio.run(app, debug=True)

@app.route("/")
def home():
    return "Backend is running successfully"