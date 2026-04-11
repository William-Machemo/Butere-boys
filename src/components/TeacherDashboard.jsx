import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

function TeacherDashboard() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${API_BASE_URL}/api/teachers`, {
        timeout: 15000,
      });

      const data = res.data;

      // SAFE parsing (handles different backend formats)
      if (Array.isArray(data)) {
        setTeachers(data);
      } else if (Array.isArray(data?.teachers)) {
        setTeachers(data.teachers);
      } else {
        setTeachers([]);
      }

    } catch (err) {
      console.error("Error fetching teachers:", err);

      if (err.code === "ECONNABORTED") {
        setError("Server is slow. Try again.");
      } else {
        setError("Failed to load teachers.");
      }

      setTeachers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1>All Teachers 🧑‍🏫</h1>

      {loading && <p className="text-primary">Loading teachers...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && teachers.length === 0 && !error && (
        <p>No teachers found.</p>
      )}

      {!loading && teachers.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={teacher.id || index}>
                  <td>{teacher.id || "N/A"}</td>
                  <td>{teacher.username || "N/A"}</td>
                  <td>{teacher.email || "N/A"}</td>
                  <td>{teacher.phone || "N/A"}</td>
                  <td>{teacher.role || "teacher"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TeacherDashboard;