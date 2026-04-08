import React, { useState } from "react";

export default function GeographyAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "1000px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC GEOGRAPHY ASSESSMENT</h1>
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
        <li>Use maps, diagrams, and examples where necessary.</li>
        <li>Show all workings for calculations.</li>
        <li>Use clear geographical terminology.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: PHYSICAL GEOGRAPHY (20 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Weather</li>
            <li>Climate</li>
            <li>Erosion</li>
          </ul>
        </li>

        <li>Explain three factors that influence climate. (6 marks)</li>

        <li>Describe the process of river formation. (4 marks)</li>

        <li>Differentiate between weathering and erosion. (4 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: MAP WORK & SKILLS (20 MARKS)</h2>
      <ol>
        <li>Define a map scale and state its importance. (4 marks)</li>

        <li>Convert a map scale of 1:50,000 into statement form. (4 marks)</li>

        <li>
          Study the map extract provided and answer:
          <ul>
            <li>Identify two physical features. (4 marks)</li>
            <li>State the direction of the river flow. (4 marks)</li>
            <li>Calculate the distance between two points. (4 marks)</li>
          </ul>
        </li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: HUMAN & ECONOMIC GEOGRAPHY (15 MARKS)</h2>
      <ol>
        <li>Explain factors influencing population distribution. (5 marks)</li>
        <li>Describe two types of settlement patterns. (5 marks)</li>
        <li>Explain the importance of transport in economic development. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: ENVIRONMENT & SUSTAINABILITY (15 MARKS)</h2>
      <ol>
        <li>Explain causes of climate change. (5 marks)</li>
        <li>Discuss effects of deforestation. (5 marks)</li>
        <li>Suggest sustainable environmental management practices. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION E */}
      <h2>SECTION E: FIELDWORK & GIS (10 MARKS)</h2>
      <ol>
        <li>
          Describe steps followed when conducting a geographical field study. (5 marks)
        </li>
        <li>
          Explain the importance of GIS (Geographic Information Systems). (5 marks)
        </li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#795548",
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

          <h3>SECTION A: PHYSICAL GEOGRAPHY (20 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each</li>
            <li>Climate factors:
              <ul>
                <li>Identification (3)</li>
                <li>Explanation (3)</li>
              </ul>
            </li>
            <li>River formation: stages explained (4)</li>
            <li>Comparison:
              <ul>
                <li>Weathering (2)</li>
                <li>Erosion (2)</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION B: MAP WORK (20 MARKS)</h3>
          <ul>
            <li>Scale definition & importance: 4</li>
            <li>Conversion: correct statement (4)</li>
            <li>Map skills:
              <ul>
                <li>Features (4)</li>
                <li>Direction (4)</li>
                <li>Distance calculation (4)</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION C: HUMAN GEOGRAPHY (15 MARKS)</h3>
          <ul>
            <li>Population factors: 5</li>
            <li>Settlement patterns: 5</li>
            <li>Transport: 5</li>
          </ul>

          <h3>SECTION D: ENVIRONMENT (15 MARKS)</h3>
          <ul>
            <li>Climate change: 5</li>
            <li>Deforestation: 5</li>
            <li>Sustainability: 5</li>
          </ul>

          <h3>SECTION E: FIELDWORK & GIS (10 MARKS)</h3>
          <ul>
            <li>Fieldwork steps: 5</li>
            <li>GIS importance: 5</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>

        </div>
      )}
    </div>
  );
}