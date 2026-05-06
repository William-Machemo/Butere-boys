import React, { useState } from "react";
import axios from "axios";

const Admissions = () => {
  const [curriculum, setCurriculum] = useState("8-4-4");

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    index: "",
    parent: "",
    phone: "",
    email: "",
    type: "Day Scholar",
    notes: "",
  });

  const [files, setFiles] = useState({
    birthCert: null,
    results: null,
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FILE CHANGE
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();

      // text fields
      data.append("name", formData.name);
      data.append("dob", formData.dob);
      data.append("index", formData.index);
      data.append("parent", formData.parent);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("type", formData.type);
      data.append("notes", formData.notes);
      data.append("curriculum", curriculum);

      // files
      data.append("birthCert", files.birthCert);
      data.append("results", files.results);
      data.append("photo", files.photo);

      // SEND TO BACKEND
      const res = await axios.post(
        "http://localhost:5000/apply",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(res.data.message || "Application submitted successfully!");

      // RESET FORM
      setFormData({
        name: "",
        dob: "",
        index: "",
        parent: "",
        phone: "",
        email: "",
        type: "Day Scholar",
        notes: "",
      });

      setFiles({
        birthCert: null,
        results: null,
        photo: null,
      });

    } catch (error) {
      console.log(error);
      setMessage("❌ Submission failed. Check backend.");
    }

    setLoading(false);
  };

  return (
    <div className="container py-4">

      <h1 className="text-success mb-3">Admissions</h1>

      {/* CURRICULUM SELECT */}
      <select
        className="form-select mb-3"
        value={curriculum}
        onChange={(e) => setCurriculum(e.target.value)}
      >
        <option value="8-4-4">8-4-4</option>
        <option value="CBC">CBC</option>
      </select>

      {/* MESSAGE */}
      {message && (
        <div className="alert alert-info">{message}</div>
      )}

      <form onSubmit={handleSubmit} className="card p-3 shadow">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Full Name"
          required
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />

        <input
          name="index"
          value={formData.index}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="KCPE / Index Number"
          required
        />

        <input
          name="parent"
          value={formData.parent}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Parent Name"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Phone Number"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Email"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="form-select mb-2"
        >
          <option>Day Scholar</option>
          <option>Boarding</option>
        </select>

        {/* FILES */}
        <label>Birth Certificate</label>
        <input
          type="file"
          name="birthCert"
          onChange={handleFileChange}
          className="form-control mb-2"
          required
        />

        <label>Results Slip</label>
        <input
          type="file"
          name="results"
          onChange={handleFileChange}
          className="form-control mb-2"
          required
        />

        <label>Passport Photo</label>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          className="form-control mb-2"
          required
        />

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Additional Notes"
        />

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>

      </form>
    </div>
  );
};

export default Admissions;