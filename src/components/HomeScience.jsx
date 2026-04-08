import React, { useState } from "react";

export default function HomeScienceAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC HOME SCIENCE ASSESSMENT</h1>
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
        <li>Use diagrams and examples where necessary.</li>
        <li>Demonstrate knowledge of nutrition, hygiene, home management, and family studies.</li>
      </ul>

      <hr />

      {/* SECTION A: THEORY */}
      <h2>SECTION A: THEORY (40 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Nutrition</li>
            <li>Hygiene</li>
            <li>Housekeeping</li>
          </ul>
        </li>

        <li>Explain three factors affecting healthy eating habits. (6 marks)</li>

        <li>List four essential nutrients, their sources, and functions. (8 marks)</li>

        <li>Discuss the importance of personal and household hygiene. (10 marks)</li>

        <li>Explain methods of home management to save time and resources. (10 marks)</li>
      </ol>

      <hr />

      {/* SECTION B: PRACTICAL APPLICATIONS */}
      <h2>SECTION B: PRACTICAL APPLICATIONS (40 MARKS)</h2>
      <ol>
        <li>Plan a balanced meal for a family of four. Include portions and food groups. (15 marks)</li>

        <li>Describe steps to maintain cleanliness in a kitchen and dining area. (10 marks)</li>

        <li>Explain how to budget household expenses effectively. (15 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#f57c00",
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

          <h3>SECTION A: THEORY (40 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each × 3 = 6</li>
            <li>Factors affecting healthy eating: 2 marks each × 3 = 6</li>
            <li>Essential nutrients: 2 marks each × 4 + sources/functions = 8</li>
            <li>Personal & household hygiene: 2.5 marks each × 4 = 10</li>
            <li>Home management methods: 2 marks each × 5 = 10</li>
          </ul>

          <h3>SECTION B: PRACTICAL APPLICATIONS (40 MARKS)</h3>
          <ul>
            <li>Balanced meal planning: 15 marks (nutrient balance, portions, food groups)</li>
            <li>Kitchen/dining cleanliness: 10 marks (steps, hygiene practices, organization)</li>
            <li>Budgeting household expenses: 15 marks (accuracy, planning, efficiency)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}