import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Get protected page user wanted before login
  const from = location.state?.from;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter username and password");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/signin`,
        { username, password },
        { timeout: 15000 }
      );

      const data = res.data;

      alert(data?.message || "Login successful");

      // Save session
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.role);

      // Return to protected page if it exists
      if (from) {
        navigate(from, { replace: true });
        return;
      }

      // Redirect based on role
      const role = data?.role;

      if (role === "student") {
        navigate("/studentdashboard");
      } else if (role === "teacher") {
        navigate("/teacherdashboard");
      } else if (role === "principal") {
        navigate("/principaldashboard");
      } else {
        alert("Unknown role returned from server");
      }

    } catch (err) {
      console.log("Login error:", err);

      if (err.response) {
        alert(err.response.data?.message || "Login failed");
      } else if (err.code === "ECONNABORTED") {
        alert("Server is taking too long. Try again.");
      } else {
        alert("Network error or server not reachable");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: 350,
        margin: "auto",
        marginTop: 50,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Login
      </h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            background: loading ? "gray" : "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: 5,
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* SIGN UP LINK */}
      <p
        style={{
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Don't have an account?{" "}
        <Link
          to="/signup"
          style={{
            color: "blue",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignIn;