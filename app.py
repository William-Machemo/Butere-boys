from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pymysql
import os
import time
from datetime import datetime

app = Flask(__name__)
CORS(app)

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
        connect_timeout=20,
        read_timeout=20,
        write_timeout=20,
        autocommit=True
    )


# ---------------- STUDENT SIGNUP ----------------
@app.route("/api/signup", methods=["POST"])
def signup():
    start = time.time()

    try:
        data = request.get_json()

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            "INSERT INTO users(username, password, phone, role) VALUES(%s,%s,%s,%s)",
            (data["username"], data["password"], data["phone"], "student")
        )

        conn.commit()
        cursor.close()
        conn.close()

        print("SIGNUP TIME:", time.time() - start)  # 👈 ADD THIS

        return jsonify({"message": "Signup successful"})

    except Exception as e:
        print("SIGNUP ERROR:", e)
        return jsonify({"message": "Signup failed"}), 500

# ---------------- TEACHER SIGNUP ----------------
@app.route("/api/signup", methods=["POST"])
def teachersignup():
    start = time.time()

    try:
        data = request.get_json()

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            "INSERT INTO users(username, password, phone, role) VALUES(%s,%s,%s,%s)",
            (data["username"], data["password"], data["phone"], "student")
        )

        conn.commit()
        cursor.close()
        conn.close()

        print("SIGNUP TIME:", time.time() - start)  # 👈 ADD THIS

        return jsonify({"message": "Signup successful"})

    except Exception as e:
        print("SIGNUP ERROR:", e)
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


# ---------------- CHAT (HTTP VERSION) ----------------
chat_messages = []

@app.route("/api/chat", methods=["POST"])
def send_chat():
    try:
        data = request.get_json()

        msg = {
            "username": data.get("username"),
            "role": data.get("role"),
            "text": data.get("text"),
            "time": datetime.now().isoformat()
        }

        chat_messages.append(msg)

        return jsonify({"message": "sent", "data": msg})

    except Exception as e:
        return jsonify({"message": str(e)}), 500


@app.route("/api/chat", methods=["GET"])
def get_chat():
    return jsonify(chat_messages)


# ---------------- GET STUDENTS ----------------
@app.route("/api/students", methods=["GET"])
def get_students():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users WHERE role='student'")
    students = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({"students": students})


# ---------------- GET TEACHERS ----------------
@app.route("/api/teachers", methods=["GET"])
def get_teachers():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users WHERE role='teacher'")
    teachers = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({"teachers": teachers})


# ---------------- DASHBOARD COUNTS ----------------
@app.route("/api/dashboard_counts", methods=["GET"])
def dashboard_counts():
    start = time.time()

    try:
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

        print("DASHBOARD TIME:", time.time() - start)  # 👈 ADD THIS

        return jsonify({
            "students": students_count,
            "teachers": teachers_count,
            "assignments": assignments_count
        })

    except Exception as e:
        print("DASHBOARD ERROR:", e)
        return jsonify({"students": 0, "teachers": 0, "assignments": 0}), 500

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


# ---------------- CONTACT ----------------
messages_store = []

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    messages_store.append(data.get("message"))
    return jsonify({"message": "Message sent successfully"})


@app.route("/api/get_messages")
def get_messages():
    return jsonify(messages_store)


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


# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run()