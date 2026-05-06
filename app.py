from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pymysql
import time
import os
from werkzeug.utils import secure_filename


app = Flask(__name__)
CORS(app)


# ================= DB CONNECTION =================
def get_connection():
    try:
        return pymysql.connect(
            host="mysql-williammachemo.alwaysdata.net",
            user="williammachemo",
            password="modcom1234",
            database="williammachemo_sokogarden",
            cursorclass=pymysql.cursors.DictCursor,
            autocommit=True
        )
    except pymysql.MySQLError as e:
        print("❌ DATABASE CONNECTION ERROR:", e)
        return None


# ================= HARDCODED DATA =================

fixtures = [
    {"sport": "Football", "match": "Butere vs Kakamega High", "date": "10 June"},
    {"sport": "Netball", "match": "Butere vs Mukumu Boys", "date": "12 June"},
    {"sport": "Basketball", "match": "Butere vs Maseno School", "date": "15 June"},
    {"sport": "Rugby", "match": "Butere vs Kisumu Boys", "date": "18 June"},
    {"sport": "Volleyball", "match": "Butere vs St Mary’s", "date": "20 June"}
]

sports_results = [
    {"sport": "Football", "result": "Butere 2 - 1 Kakamega High"},
    {"sport": "Netball", "result": "Butere 30 - 25 Mukumu Boys"},
    {"sport": "Basketball", "result": "Butere 60 - 55 Maseno"},
]

kcse_results = [
    {"year": "2025", "mean": "8.2, Entry to University = 401"},
    {"year": "2024", "mean": "7.2"},
    {"year": "2023", "mean": "6.8"}
]

announcements = [
    {"title": "School Opening", "message": "School opens on 28th April."},
    {"title": "Exam Week", "message": "Midterm exams start next week for all students."},
    {"title": "Sports Day", "message": "Annual sports day on 20th June."},
    {"title": "General", "message": "All students must report by 2:00pm on 28th April."}
]

students_count = 540
teachers_count = 42
assignments_count = 12


# ================= NAVIGATION =================

def detect_navigation(msg):
    routes = {
        "dashboard": "/PrincipalDashboard",
        "home": "/HomePage",
        "videos": "/SchoolVideos",
        "sports": "/Sports",
        "academics": "/Curriculum",
        "assignments": "/GetFiles",
        "boarding": "/Boarding",
        "admissions": "/Admissions",
        "news": "/News",
        "alumni": "/Alumni",
        "newsletter": "/NewsLetter",
        "login": "/SignIn",
         "annualmeeting": "/AnnualMeeting",
        "signup": "/SignUp"
    }

    triggers = ["go to", "navigate to", "open", "take me to", "visit"]

    if not any(t in msg for t in triggers):
        return None

    for key in routes:
        if key in msg:
            return routes[key]

    return None


# ================= AI ROUTE =================

@app.route("/ask-ai", methods=["POST"])
def ask_ai():
    data = request.get_json()
    msg = data.get("message", "").lower().strip()

    print("MESSAGE:", msg)

    # ================= NAVIGATION =================
    nav = detect_navigation(msg)
    if nav:
        return jsonify({
            "reply": "📍 Navigating...",
            "redirect": nav
        })

    # ================= COUNTS =================
    if "how many assignments" in msg:
        return jsonify({"reply": f"📊 {assignments_count} assignments uploaded."})

    if "how many students" in msg:
        return jsonify({"reply": f"👨‍🎓 {students_count} students registered."})

    if "how many teachers" in msg:
        return jsonify({"reply": f"👩‍🏫 {teachers_count} teachers registered."})

    # ================= FIXTURES =================
    if any(x in msg for x in ["fixture", "fixtures", "match", "games"]):
        text = "⚽ Upcoming Fixtures:\n\n"
        for f in fixtures:
            text += f"{f['sport']} - {f['match']} on {f['date']}\n"
        return jsonify({"reply": text})

    # ================= SPORTS RESULTS =================
    if any(x in msg for x in ["sports results", "results of sports"]):
        text = "🏆 Sports Results:\n\n"
        for r in sports_results:
            text += f"{r['sport']} → {r['result']}\n"
        return jsonify({"reply": text})

    # ================= KCSE =================
    if "kcse" in msg:
        text = "🎓 KCSE Results:\n\n"
        for r in kcse_results:
            text += f"{r['year']} → Mean Score: {r['mean']}\n"
        return jsonify({"reply": text})

    # ================= ANNOUNCEMENTS =================
    if "announcement" in msg:
        text = "📢 Announcements:\n\n"
        for a in announcements:
            text += f"{a['title']} → {a['message']}\n"
        return jsonify({"reply": text})

    # ================= DEFAULT =================
    return jsonify({
        "reply": "🤖 Ask about assignments, students, sports, KCSE, announcements or navigation."
    })
@app.route("/api/delete_message/<int:id>", methods=["DELETE"])
def delete_message(id):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("DELETE FROM contact_messages WHERE id=%s", (id,))
        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({"message": "Deleted successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ---------------- CHAT SEND ----------------
@app.route("/api/chat/send", methods=["POST"])
def send_chat():
    data = request.get_json()

    username = data.get("username")
    message = data.get("message")
    file = data.get("file")

    reply = data.get("replyTo")

    # reply fields
    reply_id = None
    reply_username = None
    reply_message = None

    if reply:
        reply_id = reply.get("id")
        reply_username = reply.get("username")
        reply_message = reply.get("message")

    if not username:
        return jsonify({"error": "Missing username"}), 400

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO chat_messages 
        (username, message, file, reply_id, reply_username, reply_message)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (username, message, file, reply_id, reply_username, reply_message))

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Sent successfully"})
# get chat messages
@app.route("/api/chat/messages", methods=["GET"])
def get_chat_messages():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT * FROM chat_messages
        ORDER BY id ASC
    """)
    rows = cursor.fetchall()

    messages = []

    for row in rows:
        msg = dict(row)

        # convert reply fields into replyTo object
        if msg.get("reply_id"):
            msg["replyTo"] = {
                "id": msg["reply_id"],
                "username": msg["reply_username"],
                "message": msg["reply_message"]
            }
        else:
            msg["replyTo"] = None

        messages.append(msg)

    cursor.close()
    conn.close()

    return jsonify(messages)
# delete chat messages
@app.route("/api/chat/delete/<int:id>", methods=["DELETE"])
def delete_chat(id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM chat_messages WHERE id=%s", (id,))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Deleted"})



@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory("uploads", filename)

# file upload
@app.route("/api/chat/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file"}), 400

    file = request.files["file"]
    username = request.form.get("username")
    message = request.form.get("message", "")
    reply_id = request.form.get("reply_id")
    reply_username = request.form.get("reply_username")
    reply_message = request.form.get("reply_message")

    if file.filename == "":
        return jsonify({"error": "No file name"}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(filepath)

    file_url = f"/uploads/{filename}"

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO chat_messages 
        (username, message, file_url, reply_id, reply_username, reply_message)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (
        username,
        message,
        file_url,
        reply_id,
        reply_username,
        reply_message
    ))

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Uploaded", "file_url": file_url})

# post route
# ================= APPLY =================
@app.route("/apply", methods=["POST"])
def apply():
    try:
        data = request.form

        full_name = data.get("name")
        date_of_birth = data.get("dob")
        index_number = data.get("index")
        parent_name = data.get("parent")
        phone = data.get("phone")
        email = data.get("email")
        curriculum = data.get("curriculum")
        student_type = data.get("type")
        notes = data.get("notes")

        files = request.files

        birth = files.get("birthCert")
        results = files.get("results")
        photo = files.get("photo")

        # ================= SAFE FILE SAVE =================
        def save_file(file):
            if file:
                filename = secure_filename(file.filename)
                unique_name = f"{int(time.time())}_{filename}"
                filepath = os.path.join(ADMISSION_UPLOAD_FOLDER, unique_name)
                file.save(filepath)
                return f"uploads/admissions/{unique_name}"
            return None

        birth_path = save_file(birth)
        results_path = save_file(results)
        photo_path = save_file(photo)

        # ================= DB CONNECTION =================
        conn = get_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500

        cursor = conn.cursor()

        sql = """
        INSERT INTO applications
        (full_name, date_of_birth, index_number, parent_name, phone, email,
         curriculum, student_type, birth_certificate, results_slip, passport_photo, notes, status)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,'Pending')
        """

        cursor.execute(sql, (
            full_name,
            date_of_birth,
            index_number,
            parent_name,
            phone,
            email,
            curriculum,
            student_type,
            birth_path,
            results_path,
            photo_path,
            notes
        ))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Application submitted successfully"}), 200

    except Exception as e:
        print("❌ APPLY ERROR:", str(e))
        return jsonify({"error": str(e)}), 500
def save_file(file):
    if file:
        filename = secure_filename(file.filename)

        unique_name = f"{int(time.time())}_{filename}"
        filepath = os.path.join(ADMISSION_UPLOAD_FOLDER, unique_name)

        file.save(filepath)

        # IMPORTANT: return correct URL path
        return f"uploads/admissions/{unique_name}"

    return None

@app.route("/uploads/admissions/<filename>")
def serve_admission_file(filename):
    return send_from_directory("uploads/admissions", filename)

@app.route("/admin/applications", methods=["GET"])
def get_all_applications():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM applications ORDER BY id DESC")
        data = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500
# update message
@app.route("/admin/message/<int:id>", methods=["PUT"])
def update_application_status(id):
    try:
        data = request.json

        message = data.get("message")
        status = data.get("status")

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            UPDATE applications
            SET message=%s, status=%s
            WHERE id=%s
        """, (message, status, id))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Updated successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ================= UPLOAD FOLDERS =================

CHAT_UPLOAD_FOLDER = "uploads"
ASSIGNMENT_UPLOAD_FOLDER = "static/images"
ADMISSION_UPLOAD_FOLDER = "uploads/admissions"
os.makedirs(ADMISSION_UPLOAD_FOLDER, exist_ok=True)

os.makedirs(CHAT_UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ASSIGNMENT_UPLOAD_FOLDER, exist_ok=True)


# set default (used by chat if needed)
app.config["UPLOAD_FOLDER"] = CHAT_UPLOAD_FOLDER

PRINCIPAL_PASSWORD = "1234"
TEACHER_UPLOAD_PASSWORD = "butere123"
ROOM_PASSWORDS = {
    "Teachers Only": "teach123",
}


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
    try:
        return send_from_directory(
            app.config["UPLOAD_FOLDER"],
            filename,
            as_attachment=True
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
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
    app.run(debug=True)