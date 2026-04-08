import React, { useState } from "react";

export default function ICTAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC ICT ASSESSMENT</h1>
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
        <li>Show screenshots or diagrams where applicable.</li>
        <li>Demonstrate practical ICT skills along with theory knowledge.</li>
      </ul>

      <hr />

      {/* SECTION A: THEORY */}
      <h2>SECTION A: THEORY (40 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Hardware</li>
            <li>Software</li>
            <li>Network</li>
          </ul>
        </li>

        <li>Explain three types of software and give examples. (6 marks)</li>

        <li>Discuss three benefits of using ICT in schools. (6 marks)</li>

        <li>Describe the steps involved in creating a database and its uses. (10 marks)</li>

        <li>Explain data security measures and safe internet practices. (12 marks)</li>
      </ol>

      <hr />

      {/* SECTION B: PRACTICAL APPLICATIONS */}
      <h2>SECTION B: PRACTICAL APPLICATIONS (40 MARKS)</h2>
      <ol>
        <li>Create a simple spreadsheet showing student marks and calculate the average. (15 marks)</li>

        <li>Design a basic webpage using HTML and CSS. Include headings, paragraphs, and a list. (15 marks)</li>

        <li>Demonstrate how to send an email with an attachment and proper etiquette. (10 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#0288d1",
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
            <li>Types of software: 2 marks each × 3 + examples = 6</li>
            <li>Benefits of ICT in schools: 2 marks each × 3 = 6</li>
            <li>Database creation steps: 2 marks each × 5 = 10</li>
            <li>Data security & safe internet: 3 marks each × 4 = 12</li>
          </ul>

          <h3>SECTION B: PRACTICAL APPLICATIONS (40 MARKS)</h3>
          <ul>
            <li>Spreadsheet: 15 marks (correct formulae, accuracy, formatting)</li>
            <li>Webpage design: 15 marks (structure, HTML correctness, CSS styling)</li>
            <li>Email demonstration: 10 marks (proper etiquette, attachment handling, clarity)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}