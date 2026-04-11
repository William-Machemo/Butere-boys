import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

      const role = data?.role;

      // FIXED ROUTES (must match App.js routes exactly)
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
    <form
      onSubmit={handleLogin}
      style={{
        width: 320,
        margin: "auto",
        marginTop: 50,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
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
  );
}

export default SignIn;