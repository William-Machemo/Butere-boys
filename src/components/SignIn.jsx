import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://william9605.pythonanywhere.com/api/signin",
        { username, password },
        { timeout: 10000 }
      );

      alert(res.data.message);

      const role = res.data.role;

      if (role === "student") navigate("/student-dashboard");
      else if (role === "teacher") navigate("/teacher-dashboard");
      else if (role === "principal") navigate("/principal-dashboard");

    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(err.response.data.message || "Login failed");
      } else {
        alert("Network error or server slow");
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        width: 300,
        margin: "auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
      }}
    >
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
        required
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
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default SignIn;