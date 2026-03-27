import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Classes = () => {
  // Set a uniform size for all images
  const imgStyle = {
    width: "100%",       // full width of the column
    height: "200px",     // fixed height for all images
    objectFit: "cover",  // cover ensures images are cropped without distortion
    borderRadius: "8px", // rounded corners
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)" // subtle shadow
  };

  return (
    <div className="container mt-4">

      {/* TITLE */}
      <h1 className="text-center mb-4">Classrooms & Academic Structure</h1>

      {/* INTRO */}
      <section className="mb-5">
        <p>
          Since 2020, Butere Boys High School has experienced steady growth in
          student population and academic performance. The number of classes has
          expanded to accommodate more learners while maintaining high standards
          of discipline and excellence.
        </p>
      </section>

      {/* FORM 1 */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="text-primary">Form One Classes</h3>
          <p>
            Form One is the entry level where students are introduced to school life,
            discipline, and academic expectations. Orientation programs help learners
            adapt quickly and build a strong academic foundation.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images/1770396068156.jpg"
            alt="Form 1"
            style={imgStyle}
          />
        </div>
      </section>

      {/* FORM 2 */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <h3 className="text-primary">Form Two Classes</h3>
          <p>
            At this level, students build on foundational knowledge and begin
            identifying their strengths. Academic competition increases and
            co-curricular activities become more structured.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img
            src="/images/1769612330468.jpg"
            alt="Form 2"
            style={imgStyle}
          />
        </div>
      </section>

      {/* FORM 3 */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="text-primary">Form Three Classes</h3>
          <p>
            Form Three students begin serious preparation for KCSE examinations.
            Subject specialization becomes clearer and performance tracking is
            intensified.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images/1750716271830.jpg"
            alt="Form 3"
            style={imgStyle}
          />
        </div>
      </section>

      {/* FORM 4 */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <h3 className="text-primary">Form Four Classes</h3>
          <p>
            This is the final year where students prepare for KCSE examinations.
            Intensive revision programs, exams, and career guidance are provided
            to ensure excellent performance.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img
            src="/images/1769612200496.jpg"
            alt="Form 4"
            style={imgStyle}
          />
        </div>
      </section>

      {/* CBC */}
      <section className="row align-items-center m-2">
        <div className="col-md-6">
          <h3 className="text-warning">CBC Classes</h3>
          <p>
            The Competency-Based Curriculum (CBC) focuses on skill development,
            creativity, and practical learning. Students are assessed based on
            competencies, promoting innovation and real-life problem solving.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img
            src="/images/IMG-20250731-WA0014.jpg"
            alt="CBC Classes"
            style={imgStyle}
          />
        </div>
      </section>

      {/* STREAMS */}
      <section className="mt-5">
        <h3 className="text-center mb-4">Class Streams</h3>

        <div className="row text-center">

          {[
            "East",
            "West",
            "North",
            "South",
            "Central",
            "Red",
            "Green"
          ].map((stream, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-3">
              <div className="bg-light p-3 shadow-sm rounded h-100">
                <h5>{stream}</h5>
                <p>
                  {stream} stream promotes discipline and academic excellence.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Classes;