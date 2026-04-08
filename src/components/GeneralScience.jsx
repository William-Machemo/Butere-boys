import React, { useState } from "react";

export default function GeneralScienceAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "950px", margin: "auto", lineHeight: "1.6" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC GENERAL SCIENCE ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p><strong>Name:</strong> __________________________</p>
        <p><strong>Date:</strong> __________________</p>
      </div>
      <p><strong>School:</strong> __________________________</p>
      <p><strong>Duration:</strong> 2 Hours</p>

      <hr />

      <h2>General Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Show all working where calculations are required.</li>
        <li>Use diagrams where necessary.</li>
        <li>Write clear and complete scientific explanations.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: SCIENCE THEORY (20 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Energy</li>
            <li>Force</li>
            <li>Cell (Biology)</li>
          </ul>
        </li>

        <li>State two forms of energy and give examples. (4 marks)</li>

        <li>Explain the importance of the cell in living organisms. (4 marks)</li>

        <li>Differentiate between mass and weight. (6 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: PRACTICAL & EXPERIMENTS (20 MARKS)</h2>
      <ol>
        <li>
          Describe an experiment to show that plants need sunlight for photosynthesis. (10 marks)
        </li>
        <li>
          State the safety precautions observed during a laboratory experiment. (10 marks)
        </li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: APPLICATION OF SCIENCE (20 MARKS)</h2>
      <ol>
        <li>Explain how science is used in agriculture. (5 marks)</li>
        <li>Describe the role of science in medicine. (5 marks)</li>
        <li>Explain how machines make work easier. (5 marks)</li>
        <li>Give examples of renewable and non-renewable resources. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: ENVIRONMENT & CONSERVATION (10 MARKS)</h2>
      <ol>
        <li>Explain the causes of environmental pollution. (5 marks)</li>
        <li>Suggest ways to conserve the environment. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION E */}
      <h2>SECTION E: SCIENTIFIC INVESTIGATION (10 MARKS)</h2>
      <ol>
        <li>
          Design a simple investigation to test how temperature affects dissolving of sugar in water.
          (10 marks)
        </li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#28a745",
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

          <h3>SECTION A: THEORY (20 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each (clarity + accuracy)</li>
            <li>Forms of energy: identification (2), examples (2)</li>
            <li>Cell importance: explanation (4)</li>
            <li>Mass vs weight:
              <ul>
                <li>Mass (3)</li>
                <li>Weight (3)</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION B: PRACTICAL (20 MARKS)</h3>
          <ul>
            <li>Experiment:
              <ul>
                <li>Setup (3)</li>
                <li>Procedure (4)</li>
                <li>Observation (2)</li>
                <li>Conclusion (1)</li>
              </ul>
            </li>
            <li>Safety precautions: 2 marks each × 5 points</li>
          </ul>

          <h3>SECTION C: APPLICATION (20 MARKS)</h3>
          <ul>
            <li>Agriculture: 5</li>
            <li>Medicine: 5</li>
            <li>Machines: 5</li>
            <li>Resources: 5</li>
          </ul>

          <h3>SECTION D: ENVIRONMENT (10 MARKS)</h3>
          <ul>
            <li>Causes: explanation (5)</li>
            <li>Conservation: relevance (5)</li>
          </ul>

          <h3>SECTION E: INVESTIGATION (10 MARKS)</h3>
          <ul>
            <li>Procedure: 4</li>
            <li>Variables identified: 3</li>
            <li>Conclusion: 3</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>

        </div>
      )}
    </div>
  );
}