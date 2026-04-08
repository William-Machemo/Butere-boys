import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/signin", { password });

      alert(res.data.message);

      if (!res.data.role) return; // fail-safe

      const role = res.data.role;

      // redirect based on role
      if (role === "student") navigate("/student-dashboard");
      else if (role === "teacher") navigate("/teacher-dashboard");
      else if (role === "principal") navigate("/principal-dashboard");

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
      <button type="submit">Login</button>
    </form>
  );
}

export default SignIn;