import React, { useState } from "react";

export default function TheatreFilmAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC THEATRE & FILM ASSESSMENT</h1>
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
        <li>Use examples from plays, films, and performances where necessary.</li>
        <li>Include diagrams, storyboards, or sketches if applicable.</li>
        <li>Demonstrate understanding of performance, production, and critique.</li>
      </ul>

      <hr />

      {/* SECTION A: THEORY */}
      <h2>SECTION A: THEORY (35 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Stagecraft</li>
            <li>Screenplay</li>
            <li>Blocking</li>
          </ul>
        </li>

        <li>Discuss three roles in theatre production. (6 marks)</li>

        <li>Explain the differences between theatre and film as art forms. (6 marks)</li>

        <li>Describe the elements of a story in film production: plot, character, setting, conflict, and theme. (8 marks)</li>

        <li>Explain how costume, lighting, and sound contribute to storytelling. (9 marks)</li>
      </ol>

      <hr />

      {/* SECTION B: PRACTICAL APPLICATION */}
      <h2>SECTION B: PRACTICAL APPLICATIONS (45 MARKS)</h2>
      <ol>
        <li>Create a short storyboard for a 2-minute scene. Include camera angles and key actions. (15 marks)</li>

        <li>Outline steps to rehearse and perform a short theatre scene. Include roles, timing, and stage directions. (15 marks)</li>

        <li>Explain how to critique a performance effectively, including criteria for evaluation. (15 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#6a1b9a",
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
            <li>Theatre production roles: 2 marks each × 3 = 6</li>
            <li>Theatre vs Film differences: 2 marks each × 3 = 6</li>
            <li>Story elements: 2 marks each × 4 = 8</li>
            <li>Costume, lighting, sound: 3 marks each × 3 = 9</li>
          </ul>

          <h3>SECTION B: PRACTICAL APPLICATIONS (45 MARKS)</h3>
          <ul>
            <li>Storyboard: 15 marks (clarity, camera angles, key actions)</li>
            <li>Theatre rehearsal plan: 15 marks (roles, timing, stage directions, sequence)</li>
            <li>Performance critique: 15 marks (evaluation criteria, reasoning, examples)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}