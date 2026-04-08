import React, { useState } from "react";

export default function HistoryCitizenshipAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "1000px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC HISTORY & CITIZENSHIP ASSESSMENT</h1>
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
        <li>Use historical and civic terms correctly.</li>
        <li>Give evidence for your answers where required.</li>
        <li>Write clear and structured answers.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: HISTORY (40 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Colonialism</li>
            <li>Independence</li>
            <li>Nationalism</li>
          </ul>
        </li>

        <li>Explain three causes of the scramble for Africa. (6 marks)</li>

        <li>Describe the impact of colonial rule on African economies. (6 marks)</li>

        <li>Study the source below and answer the questions: (10 marks)
          <blockquote>
            “In 1952, the Mau Mau rebellion intensified as Kenyans demanded land and freedom from British settlers.”
          </blockquote>
          <ul>
            <li>Which country is being described? (2 marks)</li>
            <li>What was the main cause of the rebellion? (4 marks)</li>
            <li>What was the effect on the colonial administration? (4 marks)</li>
          </ul>
        </li>

        <li>Arrange these events in chronological order: (12 marks)
          <ul>
            <li>Kenya attains independence</li>
            <li>Start of World War II</li>
            <li>Berlin Conference</li>
            <li>Mau Mau uprising</li>
          </ul>
        </li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: CITIZENSHIP (40 MARKS)</h2>
      <ol>
        <li>Define the following: (6 marks)
          <ul>
            <li>Rights</li>
            <li>Duties</li>
            <li>Democracy</li>
          </ul>
        </li>

        <li>Explain three responsibilities of a good citizen. (6 marks)</li>

        <li>Discuss how citizens can participate in governance. (6 marks)</li>

        <li>Case Study: 
          <blockquote>
            A community is facing challenges of poor waste management and pollution. The local youth form a group to educate residents about proper waste disposal and plant trees.
          </blockquote>
          <ul>
            <li>Identify two civic issues in the case study. (4 marks)</li>
            <li>Suggest two ways the community can solve these problems. (4 marks)</li>
          </ul>
        </li>

        <li>Explain why understanding citizenship is important in nation-building. (14 marks)</li>
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

          <h3>SECTION A: HISTORY (40 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each (Colonialism, Independence, Nationalism) = 6</li>
            <li>Causes of Scramble for Africa: 2 marks each × 3 = 6</li>
            <li>Impact of colonial rule: Economic, social, political points = 6</li>
            <li>Source-based questions:
              <ul>
                <li>Country: Kenya = 2</li>
                <li>Cause: land & freedom grievances = 4</li>
                <li>Effect: increased colonial repression/administration actions = 4</li>
              </ul>
            </li>
            <li>Chronological order:
              <ul>
                <li>Berlin Conference → Start WWII → Mau Mau uprising → Kenya attains independence = 12</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION B: CITIZENSHIP (40 MARKS)</h3>
          <ul>
            <li>Definitions: Rights, Duties, Democracy = 6</li>
            <li>Responsibilities of citizens: 2 marks each × 3 = 6</li>
            <li>Participation in governance: 2 marks each × 3 = 6</li>
            <li>Case study:
              <ul>
                <li>Civic issues identified = 4</li>
                <li>Solutions suggested = 4</li>
              </ul>
            </li>
            <li>Importance of citizenship in nation-building = 14</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}