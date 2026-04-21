import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    username: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.message.trim()) {
      setStatus("Please fill all fields");
      return;
    }

    try {
      console.log("📤 Sending:", formData);

      const res = await axios.post(
        `${API_BASE_URL}/api/contact`,
        formData   // ✅ Axios already sends JSON automatically
      );

      console.log("✅ Response:", res.data);

      setStatus("Message sent successfully!");

      setFormData({
        username: "",
        message: ""
      });

    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-md-6 mb-4">
          <h2 className="fw-bold text-danger">Contact Us</h2>
          <p>Send us a message and we will respond.</p>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4">
            <h4>Send Message</h4>

            {status && <div className="alert alert-info">{status}</div>}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}