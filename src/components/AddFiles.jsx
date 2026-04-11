import React, { useState, useRef } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const AddFiles = () => {
  const [file_name, setFilename] = useState("");
  const [file_description, setFiledescription] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [file_photo, setPhoto] = useState(null);
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const fileRef = useRef(null);

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    // validations
    if (!password) {
      setLoading(false);
      setError("Password is required to upload files!");
      return;
    }

    if (!file_photo) {
      setLoading(false);
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
        `${API_BASE_URL}/api/addfiles`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setSuccess(response.data.message || "Uploaded successfully!");

      // reset form
      setFilename("");
      setFiledescription("");
      setGrade("");
      setSubject("");
      setPhoto(null);
      setPassword("");

      // clear file input visually
      if (fileRef.current) {
        fileRef.current.value = "";
      }

      // optional safe download using backend filename
      const filename = response.data.filename;
      if (filename) {
        const downloadLink = document.createElement("a");
        downloadLink.href = `${API_BASE_URL}/download/${filename}`;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.detail ||
        "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Upload Assignment</h2>

      {loading && <p className="text-warning">Uploading...</p>}
      {success && <p className="text-success">{success}</p>}
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="File Name"
          className="form-control mb-2"
          value={file_name}
          onChange={(e) => setFilename(e.target.value)}
          required
        />

        <textarea
          placeholder="File Description"
          className="form-control mb-2"
          value={file_description}
          onChange={(e) => setFiledescription(e.target.value)}
          required
        />

        <select
          className="form-control mb-2"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
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
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
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
          onChange={(e) => setPhoto(e.target.files[0])}
          ref={fileRef}
          required
        />

        <input
          type="password"
          placeholder="Enter Teacher Password"
          className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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