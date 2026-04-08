import React, { useState } from "react";
import axios from "axios";

function TeacherSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/api/teacher_signup", { username, password, phone })
      .then(res => alert(res.data.message))
      .catch(err => {
        console.log(err.response?.data);
        alert("Signup failed");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Teacher Signup</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br/>
      <input placeholder="Phone" onChange={e => setPhone(e.target.value)} /><br/>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default TeacherSignup;