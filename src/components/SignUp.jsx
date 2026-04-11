import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim() || !phone.trim()) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/signup`,
        {
          username: username.trim(),
          password: password.trim(),
          phone: phone.trim(),
        },
        {
          timeout: 20000, // increased for Render cold start
        }
      );

      alert(res.data?.message || "Signup successful");

      // clear form
      setUsername("");
      setPassword("");
      setPhone("");

    } catch (err) {
      console.error("Signup error:", err);

      if (err.code === "ECONNABORTED") {
        alert("Server is waking up or slow. Try again.");
      } else if (err.response) {
        alert(err.response.data?.message || "Signup failed");
      } else {
        alert("Network error. Check internet or backend URL.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: 320,
        margin: "auto",
        marginTop: 40,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Student Signup</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
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
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignUp;