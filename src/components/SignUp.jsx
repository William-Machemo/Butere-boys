import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send only username, password, and phone
    axios
      .post("http://127.0.0.1:5000/api/signup", { username, password, phone })
      .then((res) => alert(res.data.message))
      .catch((err) => {
        console.error(err);
        alert("Signup failed");
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 300, margin: "auto", padding: 20, border: "1px solid #ccc" }}>
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
      <button type="submit" style={{ width: "100%", padding: 10 }}>Sign Up</button>
    </form>
  );
}

export default SignUp;