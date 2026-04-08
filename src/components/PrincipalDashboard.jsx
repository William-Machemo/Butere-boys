import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrincipalDashboard = () => {
  const [counts, setCounts] = useState({ students: 0, teachers: 0, assignments: 0 });
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 🔐 auth state
  const [password, setPassword] = useState(""); // 🔐 principal password input
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch counts and messages only if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchCounts();
      fetchMessages();
    }
  }, [isAuthenticated]);

  const fetchCounts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/dashboard_counts");
      setCounts(response.data);
    } catch (error) {
      console.error("Error fetching dashboard counts:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/get_messages");
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // 🔐 Handle principal login
  const handleLogin = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/api/principal_login", { password });
      setIsAuthenticated(true);
      setError("");
    } catch (err) {
      setError("Wrong principal password");
    }
  };

  // 🔒 If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="container mt-5">
        <h2>Principal Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <input
          type="password"
          placeholder="Enter Principal Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }

  // 🔓 Authenticated dashboard view
  return (
    <div className="container mt-4">
      <h2>Principal Dashboard</h2>

      {/* Teacher Signup */}
      <div className="col-md-3 mb-3 text-center">
        <Link className="btn btn-success text-center w-100 p-3" to="/TeacherSignUp">
          Teachers signup here
        </Link>
      </div>

      {/* COUNTS */}
      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div
            className="card bg-warning text-dark p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/StudentDashboard")}
          >
            <h4>Total Students</h4>
            <p style={{ fontSize: "24px" }}>{counts.students}</p>
            <small>Click to view students</small>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card bg-warning text-dark p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/TeacherDashboard")}
          >
            <h4>Total Teachers</h4>
            <p style={{ fontSize: "24px" }}>{counts.teachers}</p>
            <small>Click to view teachers</small>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card bg-warning text-dark p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/GetFiles")}
          >
            <h4>Total Assignments</h4>
            <p style={{ fontSize: "24px" }}>{counts.assignments}</p>
            <small>Click to view assignments</small>
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="mt-5">
        <h3>Messages from Contact Form</h3>
        {messages.length === 0 ? (
          <p className="text-muted">No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="card p-3 mb-2 shadow-sm">
              {msg}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PrincipalDashboard;