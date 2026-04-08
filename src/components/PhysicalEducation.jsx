import React, { useState } from "react";

export default function PhysicalEducationAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "1000px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC PHYSICAL EDUCATION ASSESSMENT</h1>
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
        <li>Give examples for your answers.</li>
        <li>Show understanding of fitness, sports, and health principles.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: THEORY (35 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Cardiovascular endurance</li>
            <li>Muscular strength</li>
            <li>Flexibility</li>
          </ul>
        </li>

        <li>Explain three benefits of regular exercise. (6 marks)</li>

        <li>Discuss the components of a balanced diet. (6 marks)</li>

        <li>List the rules of any one team sport you know. (6 marks)</li>

        <li>Explain the importance of warm-up and cool-down in physical activities. (6 marks)</li>

        <li>Describe the effects of physical activity on mental health. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: FITNESS & PRACTICAL APPLICATION (30 MARKS)</h2>
      <ol>
        <li>Describe five different types of exercises for improving muscular strength. (10 marks)</li>
        <li>Explain the differences between aerobic and anaerobic exercises with examples. (10 marks)</li>
        <li>Design a simple weekly fitness plan for a teenager. Include types of exercises, duration, and frequency. (10 marks)</li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: HEALTH & SAFETY (15 MARKS)</h2>
      <ol>
        <li>Explain three common sports injuries and how to prevent them. (9 marks)</li>
        <li>Discuss the importance of hygiene and safety during physical activities. (6 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#388e3c",
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

          <h3>SECTION A: THEORY (35 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each (6)</li>
            <li>Benefits of exercise: 2 marks each × 3 = 6</li>
            <li>Balanced diet components: 2 marks each × 3 = 6</li>
            <li>Rules of team sport: 6 marks</li>
            <li>Warm-up & cool-down: 3 marks each × 2 = 6</li>
            <li>Effects on mental health: 5 marks</li>
          </ul>

          <h3>SECTION B: FITNESS & PRACTICAL APPLICATION (30 MARKS)</h3>
          <ul>
            <li>Muscular strength exercises: 2 marks each × 5 = 10</li>
            <li>Aerobic vs anaerobic: 5 marks each explanation = 10</li>
            <li>Weekly fitness plan: 10 marks (exercise choice, duration, frequency)</li>
          </ul>

          <h3>SECTION C: HEALTH & SAFETY (15 MARKS)</h3>
          <ul>
            <li>Sports injuries & prevention: 3 marks each × 3 = 9</li>
            <li>Hygiene & safety: 6 marks</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}