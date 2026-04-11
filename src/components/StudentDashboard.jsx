import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${API_BASE_URL}/api/students`, {
        timeout: 15000,
      });

      // SAFE parsing (handles different backend formats)
      const data = res.data;

      if (Array.isArray(data)) {
        setStudents(data);
      } else if (Array.isArray(data?.students)) {
        setStudents(data.students);
      } else {
        setStudents([]);
      }

    } catch (err) {
      console.error("Error fetching students:", err);

      if (err.code === "ECONNABORTED") {
        setError("Server is slow. Try again.");
      } else {
        setError("Failed to load students.");
      }

      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1>All Students 🎓</h1>

      {loading && <p className="text-primary">Loading students...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && students.length === 0 && !error && (
        <p>No students found.</p>
      )}

      {!loading && students.length > 0 && (
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
              {students.map((student, index) => (
                <tr key={student.id || index}>
                  <td>{student.id || "N/A"}</td>
                  <td>{student.username || "N/A"}</td>
                  <td>{student.email || "N/A"}</td>
                  <td>{student.phone || "N/A"}</td>
                  <td>{student.role || "student"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;