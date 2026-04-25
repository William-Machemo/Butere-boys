from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_socketio import SocketIO, join_room
import pymysql
import os
import time
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


socketio = SocketIO(app, cors_allowed_origins="*", async_mode="eventlet")
# ================= SOCKET EVENTS =================



# 🔹 JOIN ROOM
@socketio.on("join_room")
def handle_join(data):
    username = data.get("username")
    room = data.get("room")

    print(f"{username} joined {room}")

    join_room(room)
    print("JOINED ROOM:", room, "USER:", username)

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            "SELECT * FROM chat_messages WHERE room=%s ORDER BY created_at ASC",
            (room,)
        )

        messages = cursor.fetchall()

        # ✅ format time
        for msg in messages:
            msg["time"] = msg["created_at"].isoformat()

        # ✅ FIX: OUTSIDE LOOP
        socketio.emit("chat_history", messages)

        cursor.close()
        conn.close()

    except Exception as e:
        print("❌ JOIN ROOM ERROR:", e)


# 🔹 SEND MESSAGE
@socketio.on("send_message")
def handle_message(data):
    try:
        print("MESSAGE:", data)

        username = data.get("username")
        message = data.get("message")
        room = data.get("room")

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO chat_messages (username, message, room)
            VALUES (%s, %s, %s)
        """, (username, message, room))

        conn.commit()

        cursor.close()
        conn.close()

        # ✅ send to room only
        socketio.emit("message", data, room=room)

    except Exception as e:
        print("❌ MESSAGE ERROR:", e)


# 🔹 TYPING INDICATOR
@socketio.on("typing")
def handle_typing(data):
    socketio.emit("typing", data, room=data.get("room"))


# 🔹 ONLINE USERS (FIXED PROPERLY)
user_sessions = {}

@socketio.on("user_joined")
def user_joined(data):
    username = data.get("username")

    # store user by session id
    user_sessions[request.sid] = username

    # send updated list
    socketio.emit("online_users", list(user_sessions.values()))


@socketio.on("disconnect")
def handle_disconnect():
    # remove user safely
    if request.sid in user_sessions:
        user_sessions.pop(request.sid)

    socketio.emit("online_users", list(user_sessions.values()))


@socketio.on("mark_seen")
def mark_seen(data):
    room = data.get("room")
    username = data.get("username")

    socketio.emit("seen_messages", {
        "room": room,
        "username": username
    }, room=room)

UPLOAD_FOLDER = "static/images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

PRINCIPAL_PASSWORD = "1234"
TEACHER_UPLOAD_PASSWORD = "butere123"
ROOM_PASSWORDS = {
    "Teachers Only": "teach123",
}

def get_connection():
    return pymysql.connect(
        host="mysql-williammachemo.alwaysdata.net",
        user="williammachemo",
        password="modcom1234",
        database="williammachemo_sokogarden",
        cursorclass=pymysql.cursors.DictCursor,
        connect_timeout=10,
        read_timeout=10,
        write_timeout=10,
        autocommit=True
    )
@app.before_request
def log_request():
    print("REQUEST HIT:", request.path)
    #student signup 
@app.route("/api/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()
        print("RECEIVED DATA:", request.get_json())
        print("RAW DATA RECEIVED:", data)  # 🔥 DEBUG (KEEP THIS)

        username = data.get("username")
        password = data.get("password")
        phone = data.get("phone")
        student_class = data.get("class")  # frontend still sends "class"

        if not username or not password or not phone or not student_class:
            return jsonify({"message": "All fields are required"}), 400

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            INSERT INTO users(username, password, phone, student_class, role)
            VALUES(%s, %s, %s, %s, %s)
            """,
            (username, password, phone, student_class, "student")
        )

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Signup successful"}), 201

    except Exception as e:
        print("SIGNUP ERROR:", e)
        print("RECEIVED FROM FRONTEND:", data)
        return jsonify({"message": "Signup failed"}), 500

# ---------------- TEACHER SIGNUP ----------------
@app.route("/api/teacher_signup", methods=["POST"])
def teacher_signup():
    start = time.time()

    try:
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")
        phone = data.get("phone")

        if not username or not password or not phone:
            return jsonify({"message": "All fields are required"}), 400

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users WHERE username=%s", (username,))
        existing = cursor.fetchone()

        if existing:
            return jsonify({"message": "Username already exists"}), 400

        cursor.execute(
            "INSERT INTO users (username, password, phone, role) VALUES (%s, %s, %s, %s)",
            (username, password, phone, "teacher")
        )

        conn.commit()

        cursor.close()
        conn.close()

        print("TEACHER SIGNUP TIME:", time.time() - start)

        return jsonify({"message": "Teacher registered successfully"})

    except Exception as e:
        print("TEACHER SIGNUP ERROR:", e)
        return jsonify({"message": "Signup failed"}), 500
# ---------------- SIGNIN ----------------
@app.route("/api/signin", methods=["POST"])
def signin():
    try:
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT * FROM users WHERE username=%s AND password=%s
        """, (username, password))

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

        
# ---------------- DASHBOARD COUNTS (FIXED STABLE VERSION) ----------------
@app.route("/api/dashboard_counts", methods=["GET"])
def dashboard_counts():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        # students
        cursor.execute("SELECT COUNT(*) FROM users WHERE role=%s", ("student",))
        students = cursor.fetchone()["COUNT(*)"]

        # teachers
        cursor.execute("SELECT COUNT(*) FROM users WHERE role=%s", ("teacher",))
        teachers = cursor.fetchone()["COUNT(*)"]

        # assignments
        cursor.execute("SELECT COUNT(*) FROM file_details")
        assignments = cursor.fetchone()["COUNT(*)"]

        cursor.close()
        conn.close()

        return jsonify({
            "students": int(students),
            "teachers": int(teachers),
            "assignments": int(assignments)
        }), 200

    except Exception as e:
        print("DASHBOARD ERROR:", str(e))
        return jsonify({
            "students": 0,
            "teachers": 0,
            "assignments": 0,
            "error": str(e)
        }), 500

# get teachers
@app.route("/api/teachers", methods=["GET"])
def get_teachers():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT user_id AS id, username, phone, role FROM users WHERE role='teacher'")
        teachers = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(teachers)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


            # get students
@app.route("/api/students", methods=["GET"])
def get_students():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT user_id AS id, username, phone,student_class, role FROM users  WHERE role='student'")
        students = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(students)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

print("ROUTE HIT")
@app.route("/api/get_messages", methods=["GET"], strict_slashes=False)
def get_contact_messages():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM contact_messages ORDER BY id DESC")
        messages = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(messages)

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
# assignment login
@app.route("/api/verify_user", methods=["POST"])
def verify_user():
    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT * FROM users 
        WHERE username=%s AND password=%s
    """, (username, password))

    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if user:
        return jsonify({"valid": True, "user": user})

    return jsonify({"valid": False}), 401
        
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
            INSERT INTO file_details(file_name, file_description, grade, subject, file_photo)
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
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM file_details")
    files = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(files)


# ---------------- DOWNLOAD ----------------
@app.route("/download/<filename>")
def download_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename, as_attachment=True)

    # contact
@app.route("/api/contact", methods=["POST"])
def save_contact_message():
    try:
        data = request.get_json()
        print("🔥 REQUEST RECEIVED:", data)

        username = data.get("username")
        message = data.get("message")

        print("USERNAME:", username)
        print("MESSAGE:", message)

        conn = get_connection()
        cursor = conn.cursor()

        sql = "INSERT INTO contact_messages (username, message) VALUES (%s, %s)"
        values = (username, message)

        print("SQL:", sql)
        print("VALUES:", values)

        cursor.execute(sql, values)
        conn.commit()

        print("✅ INSERT DONE")

        cursor.close()
        conn.close()

        return jsonify({"message": "Saved successfully"})

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({"error": str(e)}), 500
@app.route("/test", methods=["GET"])
def test():
    return "TEST OK"

# ---------------- PRINCIPAL LOGIN ----------------
@app.route("/api/principal_login", methods=["POST"])
def principal_login():
    try:
        data = request.get_json()
        password = data.get("password")

        if password == PRINCIPAL_PASSWORD:
            return jsonify({"message": "Login successful"})

        return jsonify({"message": "Wrong password"}), 403

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# ---------------- HOME ----------------
@app.route("/")
def home():
    return "Backend is running successfully"


# -------------- RUN ----------------
if __name__ == "__main__":
    print(app.url_map)
    socketio.run(app, host="0.0.0.0", port=5000)
