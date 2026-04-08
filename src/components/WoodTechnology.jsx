import React, { useState } from "react";

export default function WoodTechnologyAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC WOOD TECHNOLOGY ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p><strong>Name:</strong> __________________________</p>
        <p><strong>Date:</strong> __________________</p>
      </div>
      <p><strong>School:</strong> __________________________</p>
      <p><strong>Duration:</strong> 2 Hours</p>

      <hr />

      <h2>Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Use diagrams where necessary.</li>
        <li>Show correct units and dimensions.</li>
        <li>Demonstrate understanding of tools, materials, and safety rules.</li>
      </ul>

      <hr />

      {/* SECTION A: THEORY */}
      <h2>SECTION A: THEORY (35 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Hardwood</li>
            <li>Softwood</li>
            <li>Joinery</li>
          </ul>
        </li>

        <li>List three properties of good quality timber. (6 marks)</li>

        <li>Explain three factors affecting the selection of wood for a project. (6 marks)</li>

        <li>Describe four types of joints used in woodworking. (8 marks)</li>

        <li>Discuss the importance of safety in the workshop. (9 marks)</li>
      </ol>

      <hr />

      {/* SECTION B: PRACTICAL & DESIGN (45 MARKS) */}
      <ol>
        <li>Draw a working drawing for a simple wooden stool. Include dimensions and labeling. (15 marks)</li>

        <li>Describe the tools required to make the stool and their uses. (10 marks)</li>

        <li>Explain the step-by-step procedure for making the stool. (10 marks)</li>

        <li>Discuss the finishing techniques for wooden furniture. (10 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#8d6e63",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px"
        }}
      >
        {showMarking ? "Hide Marking Scheme" : "Show Marking Scheme"}
      </button>

      {showMarking && (
        <div style={{ marginTop: "25px", background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
          <h2>DETAILED MARKING SCHEME (CBC RUBRIC)</h2>

          <h3>SECTION A: THEORY (35 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each × 3 = 6</li>
            <li>Properties of timber: 2 marks each × 3 = 6</li>
            <li>Factors affecting wood selection: 2 marks each × 3 = 6</li>
            <li>Types of joints: 2 marks each × 4 = 8</li>
            <li>Workshop safety: 3 marks each × 3 = 9</li>
          </ul>

          <h3>SECTION B: PRACTICAL & DESIGN (45 MARKS)</h3>
          <ul>
            <li>Working drawing: accuracy, dimensions, labeling = 15</li>
            <li>Tools and uses: 2 marks each × 5 = 10</li>
            <li>Procedure steps: clarity, sequence, completeness = 10</li>
            <li>Finishing techniques: sanding, polishing, varnishing, painting = 10</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}