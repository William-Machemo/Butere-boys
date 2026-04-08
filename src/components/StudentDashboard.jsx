import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch all students from backend
    axios.get("http://127.0.0.1:5000/api/students")
      .then(res => {
        if (res.data.students) {
          setStudents(res.data.students);
        } else {
          setStudents([]);
        }
      })
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>All Students 🎓</h1>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
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
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.username}</td>
                  <td>{student.email}</td>
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