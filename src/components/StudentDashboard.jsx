import React, { useEffect, useState } from "react";
import axios from "axios";

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

      const res = await axios.get(
        "https://butere-boys-flask-j2x3.onrender.com/api/students",
        { timeout: 20000 }
      );

      console.log("STUDENTS RAW:", res.data);

      const data = res.data;

      if (Array.isArray(data)) {
        setStudents(data);
      } else if (Array.isArray(data.students)) {
        setStudents(data.students);
      } else {
        setStudents([]);
      }

    } catch (err) {
      console.error("STUDENTS ERROR:", err);
      setError("Failed to load students");
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
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.user_id}>
                  <td>{student.user_id}</td>
                  <td>{student.username}</td>
                  <td>{student.phone}</td>
                  <td>{student.role}</td>
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