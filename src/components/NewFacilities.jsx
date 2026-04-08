import React, { useState } from "react";

export default function ButereBoysFacilitiesDetailed() {
  const [showReferences, setShowReferences] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "auto", padding: "25px", lineHeight: "1.8" }}>
      
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>Butere Boys High School - Facilities</h1>
      <h3 style={{ textAlign: "center", color: "#555" }}>Overview of School Infrastructure and Amenities</h3>

      <hr />

      <p><strong>Location:</strong> Butere, Kakamega County, Kenya</p>
      <p><strong>Type:</strong> Public Boys Boarding School</p>

      <hr />

      <h2>🏫 Library</h2>
      <p>
        The school library is equipped with a wide collection of textbooks, reference books, and periodicals to support both CBC curriculum and extracurricular research. It provides a quiet study environment for students.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Library+Image" alt="Butere Boys Library" style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

      <h2>📚 Classrooms</h2>
      <p>
        Spacious and well-ventilated classrooms facilitate effective learning. Each class is equipped with blackboards, desks, and seating arrangements designed to enhance student engagement.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Classroom+Image" alt="Classroom" style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

      <h2>🍽 Dining Hall</h2>
      <p>
        The dining hall accommodates students comfortably during meal times. It maintains hygiene standards and provides a conducive environment for social interaction.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Dining+Hall+Image" alt="Dining Hall" style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

      <h2>🏗 Infrastructure & Laboratories</h2>
      <p>
        The school has modern infrastructure including science laboratories for Chemistry, Physics, and Biology. The labs are equipped with essential apparatus and safety equipment for practical learning.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Laboratory+Image" alt="Science Laboratory" style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

      <h2>🛌 Boarding Dormitories</h2>
      <p>
        New dormitories accommodate about 180 students, providing comfortable sleeping arrangements and improved living conditions.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Dormitory+Image" alt="Dormitory" style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

      <h2>🚌 Transport & Other Facilities</h2>
      <p>
        The school has acquired buses to enhance safe student transport. There are also outdoor sports fields, a computer lab, and administrative offices supporting the school's daily operations.
      </p>
      <img src="https://via.placeholder.com/800x400?text=School+Bus+Image" alt="School Transport" style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

      <button
        onClick={() => setShowReferences(!showReferences)}
        style={{
          padding: "12px 20px",
          backgroundColor: "#2e7d32",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "25px",
          fontSize: "16px",
          borderRadius: "5px"
        }}
      >
        {showReferences ? "Hide References" : "Show References"}
      </button>

      {showReferences && (
        <div style={{ marginTop: "20px", background: "#f1f8e9", padding: "20px", borderRadius: "8px" }}>
          <h3>References</h3>
          <ul>
            <li><a href="https://www.kenyanews.go.ke/butere-girls-ibokolo-secondary-to-receive-school-buses/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Kenya News - School Buses</a></li>
            <li><a href="https://www.vipasho.co.ke/2025/02/governor-barasa-graces-launch-of-butere.html?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Vipasho - County Development Support</a></li>
          </ul>
        </div>
      )}

    </div>
  );
}