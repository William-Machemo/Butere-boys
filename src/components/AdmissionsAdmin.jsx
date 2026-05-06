import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const AdmissionsAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState({});

  // ================= FETCH DATA =================
  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/admin/applications`);
      setApplications(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // ================= HANDLE MESSAGE =================
  const handleMessageChange = (id, value) => {
    setMessages({ ...messages, [id]: value });
  };

  // ================= SEND DECISION =================
  const sendDecision = async (id, status) => {
    try {
      await axios.put(`${API_BASE_URL}/admin/message/${id}`, {
        message: messages[id] || "",
        status,
      });

      alert("Updated successfully");
      fetchApplications();

    } catch (err) {
      console.log(err);
      alert("Failed to update");
    }
  };

  // ================= FILE URL =================
  const getFile = (path) => {
    if (!path) return null;
    return `${API_BASE_URL}/${path}`;
  };

  if (loading) {
    return <h4 className="text-center mt-5">Loading applications...</h4>;
  }

  return (
    <div className="container mt-4">

      <h2 className="text-center text-success mb-4">
        Admissions Management
      </h2>

      {applications.length === 0 ? (
        <p className="text-center">No applications yet</p>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="card p-3 mb-4 shadow-sm">

            {/* ================= DETAILS ================= */}
            <h4 className="text-primary">{app.full_name}</h4>

            <p><b>DOB:</b> {app.date_of_birth}</p>
            <p><b>Index:</b> {app.index_number}</p>
            <p><b>Parent:</b> {app.parent_name}</p>
            <p><b>Phone:</b> {app.phone}</p>
            <p><b>Email:</b> {app.email}</p>
            <p><b>Curriculum:</b> {app.curriculum}</p>
            <p><b>Type:</b> {app.student_type}</p>
            <p><b>Status:</b> {app.status}</p>

            {/* ================= FILES ================= */}
            <div className="row mt-3">

              {/* Birth Certificate */}
         <div className="col-md-4">
  <h6>Birth Certificate</h6>

  {app.birth_certificate ? (
    app.birth_certificate.includes(".pdf") ? (
      <a
        href={getFile(app.birth_certificate)}
        target="_blank"
        rel="noreferrer"
      >
        View PDF
      </a>
    ) : (
      <img
        src={getFile(app.birth_certificate)}
        alt="Birth Certificate"
        className="img-fluid rounded"
      />
    )
  ) : (
    <p className="text-muted">No file</p>
  )}
</div>
   <div className="col-md-4">
  <h6>Results</h6>

  {app.results_slip ? (
    app.results_slip.includes(".pdf") ? (
      <a
        href={getFile(app.results_slip)}
        target="_blank"
        rel="noreferrer"
      >
        View PDF
      </a>
    ) : (
      <img
        src={getFile(app.results_slip)}
        alt="Results Slip"
        className="img-fluid rounded"
      />
    )
  ) : (
    <p className="text-muted">No results uploaded</p>
  )}
</div>
              {/* Results */}
              {/* Passport */}
        
            </div>

            {/* ================= NOTES ================= */}
            <p className="mt-3"><b>Notes:</b> {app.notes}</p>

            {/* ================= MESSAGE ================= */}
            <textarea
              className="form-control mt-2"
              placeholder="Message to parent..."
              value={messages[app.id] || ""}
              onChange={(e) => handleMessageChange(app.id, e.target.value)}
            />

            {/* ================= ACTION BUTTONS ================= */}
            <div className="mt-2">
              <button
                className="btn btn-success me-2"
                onClick={() => sendDecision(app.id, "Accepted")}
              >
                Approve
              </button>

              <button
                className="btn btn-danger"
                onClick={() => sendDecision(app.id, "Rejected")}
              >
                Reject
              </button>
            </div>

          </div>
        ))
      )}

    </div>
  );
};

export default AdmissionsAdmin;