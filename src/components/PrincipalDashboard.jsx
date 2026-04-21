import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const PrincipalDashboard = () => {
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    assignments: 0,
  });

  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ KEEP LOGIN AFTER REFRESH
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("principalAuth") === "true";
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchCounts();
      fetchMessages();
    }
  }, [isAuthenticated]);

  const fetchCounts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/dashboard_counts`);
      setCounts({
        students: Number(res.data?.students) || 0,
        teachers: Number(res.data?.teachers) || 0,
        assignments: Number(res.data?.assignments) || 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/get_messages`);
      setMessages(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    if (!password.trim()) {
      setError("Enter password");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/principal_login`, {
        password,
      });

      setIsAuthenticated(true);
      localStorage.setItem("principalAuth", "true"); // ✅ SAVE LOGIN
      setError("");
    } catch {
      setError("Wrong principal password");
    }
  };

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("principalAuth");
    setIsAuthenticated(false);
  };

  // ================= LOGIN PAGE =================
  if (!isAuthenticated) {
    return (
      <div className="container mt-5">
        <h2>Principal Login</h2>

        {error && <p className="text-danger">{error}</p>}

        <input
          type="password"
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

  // ================= DASHBOARD =================
  return (
    <div className="container mt-4">
      <h2>Principal Dashboard</h2>

      {/* LOGOUT BUTTON */}
      <button className="btn btn-danger mb-3" onClick={handleLogout}>
        Logout
      </button>

      <div className="col-md-3 mb-3 text-center">
        <Link className="btn btn-success w-100 p-3" to="/teachersignup">
          Teachers signup here
        </Link>
      </div>

      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div
            className="card bg-warning p-3"
            onClick={() => navigate("/studentdashboard")}
          >
            <h4>Total Students</h4>
            <p>{counts.students}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card bg-warning p-3"
            onClick={() => navigate("/teacherdashboard")}
          >
            <h4>Total Teachers</h4>
            <p>{counts.teachers}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card bg-warning p-3"
            onClick={() => navigate("/getfiles")}
          >
            <h4>Total Assignments</h4>
            <p>{counts.assignments}</p>
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="mt-5">
        <h3>Messages from Contact Form</h3>

        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="card p-3 mb-2">
              <h5>{msg.username}</h5>
              <p>{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PrincipalDashboard;