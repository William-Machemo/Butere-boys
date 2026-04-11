import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://william9605.pythonanywhere.com/api/signup",
        { username, password, phone },
        { timeout: 10000 } // prevents infinite hanging
      );

      alert(res.data.message);

      // clear form after success
      setUsername("");
      setPassword("");
      setPhone("");

    } catch (err) {
      console.error("Signup error:", err);

      if (err.code === "ECONNABORTED") {
        alert("Server is taking too long. Try again.");
      } else if (err.response) {
        alert(err.response.data.message || "Signup failed");
      } else {
        alert("Network error. Check connection.");
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: 300,
        margin: "auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10,
      }}
    >
      <h2>Student Signup</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
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