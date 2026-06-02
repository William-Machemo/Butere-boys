import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const AdmissionsAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState({});
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedApp, setSelectedApp] = useState(null);
  const [search, setSearch] = useState("");
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
  fetchApplications();
  }, []);

  const fetchApplications = async () => {
  try {
  const res = await axios.get(`${API_BASE_URL}/admin/applications`);
  setApplications(res.data || []);
  } catch (err) {
  console.log(err);
  }
  };

  const handleMessageChange = (id, value) => {
  setMessages((prev) => ({ ...prev, [id]: value }));
  };

  const sendDecision = async (id, status) => {
  try {
  await axios.put(`${API_BASE_URL}/admin/message/${id}`, {
  message: messages[id] || "",
  status,
  });

      // WhatsApp send
  if (selectedApp?.phone) {
  const msg = messages[id] || `Your admission has been ${status}`;
  const phone = selectedApp.phone.replace(/\D/g, "");
  window.open(
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank"
  );
  }

  alert("Updated successfully");
  fetchApplications();
  setSelectedApp(null);
  } catch (err) {
  alert("Failed to update");
  }
  };

  const getFile = (path) => {
  if (!path) return "";
  return `${API_BASE_URL}/${path}`;
  };

  const isPDF = (file) =>
  typeof file === "string" && file.toLowerCase().includes(".pdf");

  const downloadFile = (file) => {
  const link = document.createElement("a");
  link.href = getFile(file);
  link.download = "document";
  link.click();
  };

  const filtered = applications.filter((a) =>
  `${a.full_name} ${a.phone}`
  .toLowerCase()
  .includes(search.toLowerCase())
  );

  return (
  <div className="container mt-3">

      {/* SEARCH */}
  <input className="form-control mb-3" placeholder="Search student..."
  value={search} onChange={(e) => setSearch(e.target.value)}/>

  <h4 className="text-center text-success mb-3"> Admissions Management</h4>

      {/* CARDS */}
  <div className="row g-2">

  {filtered.slice(0, visibleCount).map((app) => (
  <div key={app.id} className="col-6 col-md-3">

  <div className="card p-2 shadow-sm" style={{ cursor: "pointer", fontSize: "12px" }} onClick={() => setSelectedApp(app)} >

  <b className="text-primary">{app.full_name}</b>
  <small>{app.phone}</small>
  <small>Status: {app.status}</small>

  {app.passport_photo && (
  <img src={getFile(app.passport_photo)} alt=""
  style={{
  height: "60px",
  width: "100%",
  objectFit: "cover",
  borderRadius: "5px",
   }}/>
  )}

  <small className="text-muted">Click to open</small>

  </div>
  </div>
  ))}

  </div>

      {/* SHOW MORE */}
  {visibleCount < filtered.length && (
  <div className="text-center mt-3">
  <button className="btn btn-outline-primary btn-sm" onClick={() => setVisibleCount((p) => p + 8)}>Show More
  </button>
  </div>
  )}

      {/* ================= MODAL ================= */}
  {selectedApp && (
  <div className="modal d-block" style={{ background: "#0008" }}>

  <div className="modal-dialog modal-lg">
  <div className="modal-content p-3">

  <div className="d-flex justify-content-between">
  <h5>{selectedApp.full_name}</h5>
  <button className="btn btn-danger btn-sm" onClick={() => setSelectedApp(null)} > X</button>
  </div>

  <hr />

              {/* DETAILS */}
  <p><b>Phone:</b> {selectedApp.phone}</p>
  <p><b>Parent:</b> {selectedApp.parent_name}</p>
  <p><b>Status:</b> {selectedApp.status}</p>
  <p><b>Email:</b> {selectedApp.email}</p>
  <p><b>Note:</b> {selectedApp.note}</p>


  {/* FILES */}
  <div className="row">

  {/* Birth Cert */}
  <div className="col-md-4">
  <h6 className="text-danger">Birth Certificate</h6>
  {selectedApp.birth_certificate &&
  (isPDF(selectedApp.birth_certificate) ? (
  <div>
  <a
  href={getFile(selectedApp.birth_certificate)}
  target="_blank"
  rel="noopener noreferrer"
>
  View PDF
</a>
        
  <button className="btn btn-sm btn-secondary ms-2"
   onClick={() => downloadFile(selectedApp.birth_certificate)}>Download
  </button>
  </div>
  ) : (
  <img src={getFile(selectedApp.birth_certificate)} className="img-fluid rounded"
  onClick={() => setZoomImage(getFile(selectedApp.birth_certificate))}
   alt="" />
  ))}
  </div>

  {/* Results */}
  <div className="col-md-4">
  <h6 className="text-danger">Results Slip</h6>
  {selectedApp.results_slip &&
  (isPDF(selectedApp.results_slip) ? (
  <div>
  <a
  href={getFile(selectedApp.results_slip)}
  target="_blank"
  rel="noopener noreferrer"
>
  View PDF
</a>
  <button className="btn btn-sm btn-secondary ms-2"
   onClick={() => downloadFile(selectedApp.results_slip)}>Download</button>
  </div>
  ) : (
  <img src={getFile(selectedApp.results_slip)}
  className="img-fluid rounded"
  onClick={() => setZoomImage(getFile(selectedApp.results_slip))}
  alt=""/>
   ))}
  </div>

  {/* Passport Photo */}
  <div className="col-md-4">
  <h6 className="text-danger">Passport Photo</h6>
  {selectedApp.passport_photo ? (
  <img src={getFile(selectedApp.passport_photo)}
  className="img-fluid rounded"
  onClick={() => setZoomImage(getFile(selectedApp.passport_photo))}
  alt="" />
  ) : (
  <p>No photo</p>
  )}
  </div>

  </div>

  {/* MESSAGE */}
  <textarea className="form-control mt-3" placeholder="Message..."
   value={messages[selectedApp.id] || ""}
  onChange={(e) =>
  handleMessageChange(selectedApp.id, e.target.value)
   }/>

  {/* ACTIONS */}
  <div className="d-flex gap-2 mt-2">

  <button className="btn btn-success w-50" onClick={() => sendDecision(selectedApp.id, "Accepted")}>Approve</button>

  <button className="btn btn-danger w-50" onClick={() => sendDecision(selectedApp.id, "Rejected")}> Reject</button>

  </div>

  </div>
  </div>
  </div>
  )}

  {/* IMAGE ZOOM MODAL */}
  {zoomImage && (
  <div className="modal d-block" onClick={() => setZoomImage(null)}>
  <div className="modal-dialog modal-lg">
  <img src={zoomImage} style={{ width: "100%" }} alt="zoom" />
  </div>
  </div>
  )}

  </div>
  );
};

export default AdmissionsAdmin;