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

  // Page user tried to access
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

      // Save user
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.role);

      alert(data?.message || "Login successful");

      // IMPORTANT:
      // If redirected from protected page,
      // go back there and STOP execution
      if (from) {
        navigate(from, { replace: true });
        return;
      }

      // Otherwise normal dashboard redirect
      const role = data?.role;

      if (role === "student") {
        navigate("/studentdashboard", { replace: true });
      } else if (role === "teacher") {
        navigate("/teacherdashboard", { replace: true });
      } else if (role === "principal") {
        navigate("/principaldashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(err.response.data?.message || "Login failed");
      } else {
        alert("Server error");
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
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
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
            marginBottom: 10,
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 10,
            background: loading ? "gray" : "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;