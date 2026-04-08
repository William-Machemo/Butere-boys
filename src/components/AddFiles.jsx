import React, { useState } from "react";
import axios from "axios";

const AddFiles = () => {
  const [file_name, setFilename] = useState("");
  const [file_description, setFiledescription] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [file_photo, setPhoto] = useState(null);
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Uploading...");
    setSuccess("");
    setError("");

    // 🔒 validations
    if (!password) {
      setLoading("");
      setError("Password is required to upload files!");
      return;
    }

    if (!file_photo) {
      setLoading("");
      setError("Please select a file!");
      return;
    }

    try {
      const data = new FormData();
      data.append("file_name", file_name);
      data.append("file_description", file_description);
      data.append("grade", grade);
      data.append("subject", subject);
      data.append("file_photo", file_photo);
      data.append("password", password);

      const response = await axios.post(
        "http://127.0.0.1:5000/api/addfiles",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setLoading("");
      setSuccess(response.data.message || "Uploaded successfully!");

      // ✅ reset fields
      setFilename("");
      setFiledescription("");
      setGrade("");
      setSubject("");
      setPhoto(null);
      setPassword("");

      // 🔥 optional safe download
      if (file_photo && file_photo.name) {
        const downloadLink = document.createElement("a");
        downloadLink.href = `http://127.0.0.1:5000/download/${file_photo.name}`;
        downloadLink.download = file_photo.name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }

    } catch (err) {
      setLoading("");
      setError(
        err.response?.data?.detail ||  // FastAPI style
        err.response?.data?.message || // Flask style
        "Upload failed"
      );
    }
  };

  return (
    <div className="container mt-4">
      <h2>Upload Assignment</h2>

      {loading && <p className="text-warning">{loading}</p>}
      {success && <p className="text-success">{success}</p>}
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="File Name"
          className="form-control mb-2"
          required
          value={file_name}
          onChange={(e) => setFilename(e.target.value)}
        />

        <textarea
          placeholder="File Description"
          className="form-control mb-2"
          required
          value={file_description}
          onChange={(e) => setFiledescription(e.target.value)}
        />

        <select
          className="form-control mb-2"
          required
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 11">Grade 11</option>
          <option value="Grade 12">Grade 12</option>
          <option value="Form 3">Form 3</option>
          <option value="Form 4">Form 4</option>
          <option value="NewsLetter">NewsLetter</option>
        </select>

        <select
          className="form-control mb-2"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="CRE">CRE</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Computer Studies">Computer Studies</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Music">Music</option>
          <option value="Woodwork">Woodwork</option>
          <option value="French">French</option>
          <option value="Fine Arts">Fine Arts</option>
          <option value="General Science">General Science</option>
          <option value="Mandarin">Mandarin</option>
          <option value="ICT">ICT</option>
          <option value="Marine Technology">Marine Technology</option>
          <option value="Media Technology">Media Technology</option>
          <option value="Home Science">Home Science</option>
          <option value="Wood Technology">Wood Technology</option>
          <option value="Sports & Recreation">Sports & Recreation</option>
          <option value="Power Mechanics">Power Mechanics</option>
          <option value="Physics">Physics</option>
          <option value="Physical Education">Physical Education</option>
          <option value="Music & Dance">Music & Dance</option>
          <option value="Metal Technology">Metal Technology</option>
          <option value="Theatre & Film">Theatre & Film</option>
          <option value="Business Studies">Business Studies</option>
        </select>

        <input
          type="file"
          className="form-control mb-2"
          required
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <input
          type="password"
          placeholder="Enter Teacher Password"
          className="form-control mb-2"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default AddFiles;