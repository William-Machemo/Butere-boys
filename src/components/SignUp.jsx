import React, { useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";

// ✅ LOCALHOST (change port if your Flask runs on different one)
const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

function SignUp() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");
const [studentClass, setStudentClass] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();

if (
!username.trim() ||
!password.trim() ||
!phone.trim() ||
!studentClass.trim()
) {
alert("All fields are required");
return;
}

    //  DEBUG (VERY IMPORTANT FOR YOUR ISSUE)
console.log("SIGNUP DATA:", {
username,
password,
phone,
class: studentClass
});

setLoading(true);

try {
const res = await axios.post(
`${API_BASE_URL}/api/signup`,
{
username: username.trim(),
password: password.trim(),
phone: phone.trim(),
class: studentClass.trim(), 
},
{ timeout: 30000 }
);

alert(res.data?.message || "Signup successful");

setUsername("");
setPassword("");
setPhone("");
setStudentClass("");
} catch (err) {
console.error("Signup error:", err);

if (err.code === "ECONNABORTED") {
alert("Server is slow or not running.");
} else if (err.response) {
alert(err.response.data?.message || "Signup failed");
} else {
alert("Network error. Is Flask running?");
}
} finally {
setLoading(false);
}
};

return (
<form onSubmit={handleSubmit} style={{
width: 340,
margin: "auto",
marginTop: 40,
padding: 20,
border: "1px solid #ccc",
borderRadius: 10,
background: "#fff",
}}>
<h2 style={{ textAlign: "center" }}>Student Signup</h2>

<input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }}/>

<input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }}/>

<input type="password" placeholder="Password" value={password}
onChange={(e) => setPassword(e.target.value)}
style={{ width: "100%", padding: 10, marginBottom: 10 }}/>

<label style={{ fontWeight: "bold" }}>Select Class</label>

<select
value={studentClass}
onChange={(e) => setStudentClass(e.target.value)}
style={{ width: "100%", padding: 10, marginBottom: 10 }}>
<option value="">Select Class</option>
<option value="Form 3">Form 3</option>
<option value="Form 4">Form 4</option>
<option value="Grade 10">Grade 10</option>
<option value="Grade 11">Grade 11</option>
<option value="Grade 12">Grade 12</option>
</select>

<button type="submit" disabled={loading} style={{
 width: "100%",
padding: 10,
background: loading ? "gray" : "green",
color: "white",
border: "none",
cursor: "pointer",
}}>
{loading ? "Signing up..." : "Sign Up"}
</button>
</form>

  );
  
}
<p style={{ textAlign: "center", marginTop: 20 }}>
  Already have an account?{" "}
  <Link
    to="/signin"
    style={{
      color: "green",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Now Login
  </Link>
</p>
export default SignUp;