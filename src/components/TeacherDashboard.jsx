import React, { useEffect, useState } from "react";
import axios from "axios";

function TeacherDashboard() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch all teachers from backend
    axios.get("http://127.0.0.1:5000/api/teachers")
      .then(res => {
        if (res.data.teachers) {
          setTeachers(res.data.teachers);
        } else {
          setTeachers([]);
        }
      })
      .catch(err => console.error("Error fetching teachers:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>All Teachers 🧑‍🏫</h1>
      {teachers.length === 0 ? (
        <p>No teachers found.</p>
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
              {teachers.map(teacher => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.username}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.role}</td>
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