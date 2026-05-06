import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const AdmissionsAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState({});
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/admin/applications`);
      setApplications(res.data || []);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  const handleMessageChange = (id, value) => {
    setMessages((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

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

  const getFile = (path) => {
    if (!path) return "";
    return `${API_BASE_URL}/${path}`;
  };

  const isPDF = (file) =>
    typeof file === "string" && file.toLowerCase().includes(".pdf");

  return (
    <div className="container mt-3">

      {/* TITLE */}
      <h4 className="text-center text-success mb-3">
        Admissions Management
      </h4>

      <div className="row g-2">

        {applications.slice(0, visibleCount).map((app) => (
          <div key={app.id} className="col-6 col-sm-6 col-md-4 col-lg-3">

            <div className="card shadow-sm p-2 h-100 admission-card">

              {/* NAME */}
              <h6 className="text-primary mb-1">
                {app.full_name}
              </h6>

              <p className="mb-1 small">
                <b>Phone:</b> {app.phone}
              </p>

              <p className="mb-1 small">
                <b>Parent:</b> {app.parent_name}
              </p>

              <p className="mb-1 small">
                <b>Status:</b> {app.status}
              </p>

              {/* FILES SECTION */}
              <div className="mb-2">

                {/* Birth Certificate */}
                {app.birth_certificate && (
                  isPDF(app.birth_certificate) ? (
                    <a
                      href={getFile(app.birth_certificate)}
                      target="_blank"
                      rel="noreferrer"
                      className="small"
                    >
                      View Birth Cert PDF
                    </a>
                  ) : (
                    <img
                      src={getFile(app.birth_certificate)}
                      alt="birth"
                      className="img-fluid rounded mb-1"
                      style={{ height: "80px", width: "100%", objectFit: "cover" }}
                    />
                  )
                )}

                {/* Results Slip */}
                {app.results_slip && (
                  isPDF(app.results_slip) ? (
                    <a
                      href={getFile(app.results_slip)}
                      target="_blank"
                      rel="noreferrer"
                      className="small"
                    >
                      View Results PDF
                    </a>
                  ) : (
                    <img
                      src={getFile(app.results_slip)}
                      alt="results"
                      className="img-fluid rounded mb-1"
                      style={{ height: "80px", width: "100%", objectFit: "cover" }}
                    />
                  )
                )}

                {/* Passport Photo */}
                {app.passport_photo ? (
                  <img
                    src={getFile(app.passport_photo)}
                    alt="passport"
                    className="img-fluid rounded"
                    style={{
                      height: "80px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <p className="text-muted small">No photo</p>
                )}

              </div>

              {/* MESSAGE */}
              <textarea
                className="form-control form-control-sm"
                placeholder="Message..."
                value={messages[app.id] || ""}
                onChange={(e) =>
                  handleMessageChange(app.id, e.target.value)
                }
              />

              {/* BUTTONS */}
              <div className="d-flex gap-1 mt-2">

                <button
                  className="btn btn-success btn-sm w-50"
                  onClick={() => sendDecision(app.id, "Accepted")}
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger btn-sm w-50"
                  onClick={() => sendDecision(app.id, "Rejected")}
                >
                  Reject
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* SHOW MORE */}
      {visibleCount < applications.length && (
        <div className="text-center mt-3">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setVisibleCount((prev) => prev + 8)}
          >
            Show More
          </button>
        </div>
      )}

      {/* RESPONSIVE CARD FIX (important for mobile) */}
      <style>{`
        .admission-card {
          font-size: 12px;
          border-radius: 10px;
        }
      `}</style>

    </div>
  );
};

export default AdmissionsAdmin;