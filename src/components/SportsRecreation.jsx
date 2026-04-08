import React, { useState } from "react";

export default function SportsRecreationAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC SPORTS & RECREATION ASSESSMENT</h1>
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
        <li>Use diagrams where appropriate.</li>
        <li>Provide examples for your answers.</li>
        <li>Demonstrate knowledge of sports, recreation, rules, and fitness.</li>
      </ul>

      <hr />

      {/* SECTION A: THEORY */}
      <h2>SECTION A: THEORY (40 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Recreation</li>
            <li>Leisure</li>
            <li>Fitness</li>
          </ul>
        </li>

        <li>Explain three benefits of participating in sports and recreation. (6 marks)</li>

        <li>List four types of recreational activities and give examples. (8 marks)</li>

        <li>Discuss the rules of any one team sport you know. (10 marks)</li>

        <li>Explain how sports and recreation contribute to mental health and social development. (10 marks)</li>
      </ol>

      <hr />

      {/* SECTION B: PRACTICAL APPLICATIONS */}
      <h2>SECTION B: PRACTICAL APPLICATIONS (40 MARKS)</h2>
      <ol>
        <li>Describe the preparation and warm-up exercises before participating in a sports activity. (10 marks)</li>
        <li>Explain the procedure for organizing a mini sports tournament in your school. Include planning, scheduling, and roles. (15 marks)</li>
        <li>Demonstrate knowledge of safety and first aid during sports activities. (15 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px"
        }}
      >
        {showMarking ? "Hide Marking Scheme" : "Show Marking Scheme"}
      </button>

      {/* MARKING SCHEME */}
      {showMarking && (
        <div style={{ marginTop: "25px", background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
          <h2>DETAILED MARKING SCHEME (CBC RUBRIC)</h2>

          <h3>SECTION A: THEORY (40 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each × 3 = 6</li>
            <li>Benefits of sports & recreation: 2 marks each × 3 = 6</li>
            <li>Recreational activities examples: 2 marks each × 4 = 8</li>
            <li>Rules of team sport: 10 marks (clarity, completeness, accuracy)</li>
            <li>Mental health & social development: 10 marks (examples, explanation)</li>
          </ul>

          <h3>SECTION B: PRACTICAL APPLICATIONS (40 MARKS)</h3>
          <ul>
            <li>Warm-up exercises: 10 marks (types, sequence, relevance)</li>
            <li>Mini tournament organization: 15 marks (planning, roles, scheduling, communication)</li>
            <li>Safety & first aid: 15 marks (procedures, precautions, examples)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}