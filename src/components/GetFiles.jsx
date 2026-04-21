import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const GetFiles = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  // ✅ LOGIN PROTECTION + FETCH FILES
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login first");
      navigate("/signin");
    } else {
      fetchFiles();
    }
  }, [navigate]); // ✅ FIXED ESLINT ERROR

  // ---------------- FETCH FILES ----------------
  const fetchFiles = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/getfiles`);
      setFiles(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching files:", err);
      setFiles([]);
    }
  };

  // ---------------- VIEW FILE ----------------
  const openFile = (file) => setSelectedFile(file);
  const closeFile = () => setSelectedFile(null);

  // ---------------- DOWNLOAD ----------------
  const downloadFile = async (filename) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/download/${filename}`,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  // ---------------- GROUP FILES ----------------
  const grouped = files.reduce((acc, file) => {
    if (!file.grade || !file.subject) return acc;

    if (!acc[file.grade]) acc[file.grade] = {};
    if (!acc[file.grade][file.subject]) acc[file.grade][file.subject] = [];

    acc[file.grade][file.subject].push(file);

    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <h2>Assignments</h2>

      {/* ---------------- FILE VIEW ---------------- */}
      {selectedFile ? (
        <div>
          <button className="btn btn-secondary mb-3" onClick={closeFile}>
            ← Back
          </button>

          <button
            className="btn btn-success mb-3 ms-2"
            onClick={() => downloadFile(selectedFile.file_photo)}
          >
            Download File
          </button>

          <h3>{selectedFile.file_name}</h3>
          <p><strong>Grade:</strong> {selectedFile.grade}</p>
          <p><strong>Subject:</strong> {selectedFile.subject}</p>
          <p>{selectedFile.file_description}</p>

          {/* FILE PREVIEW */}
          {selectedFile.file_photo?.toLowerCase().endsWith("pdf") ? (
            <iframe
              src={`${API_BASE_URL}/static/images/${selectedFile.file_photo}`}
              width="100%"
              height="600px"
              title={selectedFile.file_name}
              style={{ border: "1px solid #ccc" }}
            />
          ) : (
            <img
              src={`${API_BASE_URL}/static/images/${selectedFile.file_photo}`}
              alt={selectedFile.file_name}
              className="img-fluid"
            />
          )}
        </div>
      ) : (
        /* ---------------- FILE LIST ---------------- */
        Object.keys(grouped)
          .sort()
          .map((grade) => (
            <div key={grade} className="mb-4">
              <h3>Grade {grade}</h3>

              {Object.keys(grouped[grade])
                .sort()
                .map((subject) => (
                  <div key={subject} className="mb-4">
                    <h5>{subject}</h5>

                    <div className="row g-4">
                      {grouped[grade][subject].map((file) => (
                        <div
                          key={file.id || file.file_name}
                          className="col-12 col-sm-6 col-md-4 col-lg-3"
                          style={{ cursor: "pointer" }}
                          onClick={() => openFile(file)}
                        >
                          <div className="card h-100 shadow-sm">

                            {/* FILE PREVIEW IMAGE / PDF LABEL */}
                            {file.file_photo?.toLowerCase().endsWith("pdf") ? (
                              <div
                                className="card-body d-flex align-items-center justify-content-center"
                                style={{ height: "150px", fontWeight: "bold" }}
                              >
                                PDF File
                              </div>
                            ) : (
                              <img
                                src={`${API_BASE_URL}/static/images/${file.file_photo}`}
                                alt={file.file_name}
                                className="card-img-top"
                                style={{ height: "150px", objectFit: "cover" }}
                              />
                            )}

                            <div className="card-body">
                              <h6 className="card-title">
                                {file.file_name}
                              </h6>

                              <p className="card-text">
                                {file.file_description?.substring(0, 50)}...
                              </p>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))
      )}
    </div>
  );
};

export default GetFiles;