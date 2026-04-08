import React, { useState } from "react";

export default function MarineTechnologyAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center" }}>CBC MARINE TECHNOLOGY ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <p><strong>Name:</strong> __________________________</p>
      <p><strong>School:</strong> _________________________</p>
      <p><strong>Date:</strong> ___________________________</p>
      <p><strong>Time:</strong> 2 Hours</p>

      <hr />

      <h2>Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Use clear diagrams where necessary.</li>
        <li>Write in complete sentences.</li>
      </ul>

      <hr />

      <h2>SECTION A: THEORY (20 MARKS)</h2>
      <ol>
        <li>Define marine technology. (2 marks)</li>
        <li>State two types of vessels used in marine transport. (4 marks)</li>
        <li>Explain the importance of marine transport. (4 marks)</li>
        <li>Identify two parts of a ship and state their functions. (4 marks)</li>
        <li>Describe two safety measures observed when working on a boat. (6 marks)</li>
      </ol>

      <hr />

      <h2>SECTION B: APPLICATION (15 MARKS)</h2>
      <ol>
        <li>
          Explain how weather conditions affect marine transport. (5 marks)
        </li>
        <li>
          Describe the process of maintaining a small boat. (5 marks)
        </li>
        <li>
          Give three uses of marine technology in daily life. (5 marks)
        </li>
      </ol>

      <hr />

      <h2>SECTION C: PRACTICAL / DRAWING (15 MARKS)</h2>
      <ol>
        <li>
          Draw and label a simple boat. (10 marks)
        </li>
        <li>
          Explain the function of the engine in a boat. (5 marks)
        </li>
      </ol>

      <hr />

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        {showMarking ? "Hide Marking Scheme" : "Show Marking Scheme"}
      </button>

      {showMarking && (
        <div style={{ marginTop: "20px", background: "#f4f4f4", padding: "15px" }}>
          <h2>MARKING SCHEME</h2>

          <h3>SECTION A (20 MARKS)</h3>
          <ol>
            <li>Application of technology in marine activities (2)</li>
            <li>e.g., Cargo ship, fishing boat, passenger ferry (any 2 × 2 = 4)</li>
            <li>
              Importance:
              <ul>
                <li>Transport of goods (2)</li>
                <li>Trade and economic growth (2)</li>
              </ul>
            </li>
            <li>
              Parts:
              <ul>
                <li>Hull – supports structure (2)</li>
                <li>Deck – working surface (2)</li>
              </ul>
            </li>
            <li>
              Safety measures:
              <ul>
                <li>Wear life jackets (3)</li>
                <li>Follow safety instructions (3)</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION B (15 MARKS)</h3>
          <ol>
            <li>
              Weather effects:
              <ul>
                <li>Storms delay travel (2)</li>
                <li>Strong winds affect navigation (3)</li>
              </ul>
            </li>
            <li>
              Maintenance:
              <ul>
                <li>Cleaning (2)</li>
                <li>Engine check (2)</li>
                <li>Repair damages (1)</li>
              </ul>
            </li>
            <li>
              Uses:
              <ul>
                <li>Fishing (2)</li>
                <li>Transport (2)</li>
                <li>Tourism (1)</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION C (15 MARKS)</h3>
          <ol>
            <li>
              Drawing:
              <ul>
                <li>Accuracy (4)</li>
                <li>Labels (4)</li>
                <li>Neatness (2)</li>
              </ul>
            </li>
            <li>
              Engine function:
              <ul>
                <li>Provides power for movement (3)</li>
                <li>Drives propeller (2)</li>
              </ul>
            </li>
          </ol>

          <h3>Total: 50 Marks</h3>
        </div>
      )}
    </div>
  );
}