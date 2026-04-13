import React, { useState } from "react";

function Athletics() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/athletics1.jpg",
    "/images/athletics2.jpg",
    "/images/athletics3.jpg"
  ];

  const fixtures = [
    { date: "15 May 2026", opponent: "County Championships", result: "Upcoming" },
    { date: "22 May 2026", opponent: "Regional Trials", result: "Upcoming" },
    { date: "30 May 2026", opponent: "National Qualifiers", result: "Upcoming" }
  ];

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success">🏃‍♂️ Athletics at Butere Boys</h1>
        <p>Speed • Endurance • Discipline</p>
      </div>

      {/* HERO */}
      <img
        src="/images/athletics-main.jpg"
        alt="Athletics team training at Butere Boys High School"
        className="img-fluid rounded shadow mb-4"
      />

      {/* DESCRIPTION */}
      <div className="card p-3 mb-4">
        <p>
          The Butere Boys athletics team is built on speed, stamina, and discipline.
          Students participate in sprints, middle-distance, and long-distance races.
          The school has produced outstanding athletes at county and national levels.
        </p>
      </div>

      {/* IMAGES */}
      <div className="row">
        {images.map((img, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <img
              src={img}
              alt={`Athletics training session ${i + 1}`}
              className="img-fluid rounded shadow"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

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
            alignItems: "center"
          }}
        >
          <img
            src={selectedImage}
            alt="Full athletics view"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}

      {/* FIXTURES */}
      <h3 className="text-success mt-4">Fixtures</h3>
      <table className="table table-bordered">
        <thead className="table-success">
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((f, i) => (
            <tr key={i}>
              <td>{f.date}</td>
              <td>{f.opponent}</td>
              <td>{f.result}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Athletics;