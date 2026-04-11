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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [loadingCounts, setLoadingCounts] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const navigate = useNavigate();

  // FETCH DATA AFTER LOGIN
  useEffect(() => {
    if (isAuthenticated) {
      fetchCounts();
      fetchMessages();

      // 🔥 auto refresh every 10 seconds
      const interval = setInterval(() => {
        fetchCounts();
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // ---------------- COUNT DATA ----------------
  const fetchCounts = async () => {
    setLoadingCounts(true);

    try {
      const res = await axios.get(`${API_BASE_URL}/api/dashboard_counts`);

      console.log("DASHBOARD RESPONSE:", res.data); // 🔥 DEBUG

      setCounts({
        students: res.data?.students ?? 0,
        teachers: res.data?.teachers ?? 0,
        assignments: res.data?.assignments ?? 0,
      });

    } catch (err) {
      console.error("Counts error:", err);

      setError(
        err.response?.data?.error ||
        "Failed to fetch dashboard data"
      );

      setCounts({ students: 0, teachers: 0, assignments: 0 });

    } finally {
      setLoadingCounts(false);
    }
  };

  // ---------------- MESSAGES ----------------
  const fetchMessages = async () => {
    setLoadingMessages(true);

    try {
      const res = await axios.get(`${API_BASE_URL}/api/get_messages`);

      console.log("MESSAGES:", res.data);

      setMessages(Array.isArray(res.data) ? res.data : []);

    } catch (err) {
      console.error("Messages error:", err);
      setMessages([]);

    } finally {
      setLoadingMessages(false);
    }
  };

  // ---------------- LOGIN ----------------
  const handleLogin = async () => {
    if (!password.trim()) {
      setError("Enter password");
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${API_BASE_URL}/api/principal_login`, {
        password,
      });

      setIsAuthenticated(true);
      setError("");

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Wrong principal password"
      );

    } finally {
      setLoading(false);
    }
  };

  // ---------------- LOGIN SCREEN ----------------
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

        <button
          className="btn btn-primary"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </div>
    );
  }

  // ---------------- DASHBOARD ----------------
  return (
    <div className="container mt-4">
      <h2>Principal Dashboard</h2>

      {error && <p className="text-danger">{error}</p>}

      {/* TEACHER SIGNUP */}
      <div className="col-md-3 mb-3 text-center">
        <Link
          className="btn btn-success w-100 p-3"
          to="/teachersignup"
        >
          Teachers signup here
        </Link>
      </div>

      {/* COUNTS */}
      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div
            className="card bg-warning text-dark p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/studentdashboard")}
          >
            <h4>Total Students</h4>
            <p style={{ fontSize: "24px" }}>
              {loadingCounts ? "Loading..." : counts.students}
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card bg-warning text-dark p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/teacherdashboard")}
          >
            <h4>Total Teachers</h4>
            <p style={{ fontSize: "24px" }}>
              {loadingCounts ? "Loading..." : counts.teachers}
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card bg-warning text-dark p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/getfiles")}
          >
            <h4>Total Assignments</h4>
            <p style={{ fontSize: "24px" }}>
              {loadingCounts ? "Loading..." : counts.assignments}
            </p>
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="mt-5">
        <h3>Messages from Contact Form</h3>

        {loadingMessages ? (
          <p>Loading messages...</p>
        ) : messages.length === 0 ? (
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