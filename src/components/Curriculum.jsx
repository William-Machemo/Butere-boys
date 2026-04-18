import React, { useState } from "react";
import { Link } from "react-router-dom";
function Academics() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mt-4">
<section className="bg-light py-5 text-center">
  <div className="container" style={{ overflowX: "auto" }}>

    <h1 className="fw-bold mt-3">
      View Our Academic Desk
    </h1>

    <p className="text-muted mt-3">
      Discover teamwork, and excellence through our vibrant Academic programs scheduled in our School.
    </p>

    {/* FIXED BUTTON ROW */}
    <div className="mt-4 d-flex justify-content-center align-items-center">

      <Link 
        to="/GetFiles" 
        className="btn btn-danger me-2"
        style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "5px 9px" }}
      >
        View Assignments
      </Link>
      <br />
      <Link 
        to="/NewsLetter" 
        className="btn btn-danger"
        style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "5px 9px" }}
      >
        View News Letter
      </Link>

    </div>

  </div>
</section>
  
      {/* KCSE Results Release Section */}
      <section className="mt-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">KCSE Results Release</h3>
          <p>
            The school consistently posts excellent KCSE results. Recent results
            show improved mean scores and increased university admissions.
          </p>

          {/* KCSE Image */}
          <div style={{ position: "relative" }}>
            <img
              src="images/kcse.jpg"
              alt="KCSE Results"
              className="img-fluid rounded mt-3"
              style={{
                width: "100%",
                maxHeight: "180px",
                objectFit: "cover"
              }}
            />
            <button
              className="btn btn-success btn-sm"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)"
              }}
              onClick={() => setSelectedImage("images/kcse.jpg")}
            >
              Click to View
            </button>
          </div>
        </div>
      </section>

      {/* Exam Announcements */}
      <section className="mt-4">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">Exam Announcements</h3>
          <ul>
            <li>Mid-Term Exams begin on 15th May 2026</li>
            <li>End-Term Exams scheduled for July 2026</li>
            <li>Mock Exams for Form 4 starting August 2026</li>
          </ul>
        </div>
      </section>

      {/* Exam Improvement Section */}
      <section className="mt-4">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">Exam Improvement Programs</h3>
          <p>
            The school has introduced revision clinics, group discussions, and
            mentorship programs to help students improve performance.
          </p>
          <ul>
            <li>Weekend revision classes</li>
            <li>Peer group discussions</li>
            <li>Teacher-student mentorship sessions</li>
          </ul>
        </div>
      </section>

      {/* Opening Term Exams */}
      <section className="mt-4">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">Opening Term Exam Timetable</h3>
          <p>
            The school has introduced opening exams for all students to assess
            their readiness after holidays.
          </p>

          {/* Images Grid */}
          <div className="row mt-3">

            {/* IMAGE 1 */}
            <div className="col-md-4 col-12 mb-3">
              <div style={{ position: "relative" }}>
                <img
                  src="images/grade10exam.png"
                  alt="Grade 10 Exam"
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover"
                  }}
                />
                <button
                  className="btn btn-success btn-sm"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  onClick={() => setSelectedImage("images/grade10exam.png")}
                >
                  Click to View
                </button>
              </div>
              <p className="text-center mt-2">Grade 10</p>
            </div>

            {/* IMAGE 2 */}
            <div className="col-md-4 col-12 mb-3">
              <div style={{ position: "relative" }}>
                <img
                  src="images/form3exam.png"
                  alt="Form 3 Exam"
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover"
                  }}
                />
                <button
                  className="btn btn-success btn-sm"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  onClick={() => setSelectedImage("images/form3exam.png")}
                >
                  Click to View
                </button>
              </div>
              <p className="text-center mt-2">Form 3</p>
            </div>

            {/* IMAGE 3 */}
            <div className="col-md-4 col-12 mb-3">
              <div style={{ position: "relative" }}>
                <img
                  src="images/form4exam.jpg"
                  alt="Form 4 Exam Timetable"
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover"
                  }}
                />
                <button
                  className="btn btn-success btn-sm"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  onClick={() => setSelectedImage("images/form4exam.jpg")}
                >
                  Click to View
                </button>
              </div>
              <p className="text-center mt-2">Form 4</p>
            </div>

          </div>
        </div>
      </section>

      {/* School Contests Section */}
      <section className="mt-4 mb-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">School Academic Contests</h3>
          <p>
            Students actively participate in various academic competitions to
            sharpen their skills and gain exposure.
          </p>
          <ul>
            <li>Science Congress Competitions</li>
            <li>Mathematics Contests</li>
            <li>Essay Writing Competitions</li>
            <li>Debate and Public Speaking</li>
          </ul>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img
            src={selectedImage}
            alt="Full View"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px"
            }}
          />
        </div>
        
      )}
<section className="bg-light py-5 text-center">
  <div className="container" style={{ overflowX: "auto" }}>

    <h1 className="fw-bold mt-3">
      VIEW MORE PAGES
    </h1>

    <p className="text-muted mt-2">
      Stay updated
    </p>

    {/* FIXED BUTTON ROW */}
    <div className="mt-4 d-flex justify-content-center align-items-center">

      <Link 
        to="/OpeningRequirements" 
        className="btn btn-danger me-2"
        style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "5px 9px" }}
      >
        Opening Requirements
      </Link>
      <br />
      <Link 
        to="/Parents" 
        className="btn btn-outline-danger"
        style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "5px 9px" }}
      >
        View non-teaching Staff
      </Link>

    </div>

  </div>
</section>
    </div>
  );
}

export default Academics;