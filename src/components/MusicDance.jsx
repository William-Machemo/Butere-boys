import React, { useState } from "react";

export default function MusicDanceAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.6" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC MUSIC & DANCE ASSESSMENT</h1>
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
        <li>Write clearly and use correct musical terms.</li>
        <li>Where required, illustrate with diagrams or examples.</li>
        <li>Practical tasks should demonstrate creativity and originality.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: MUSIC THEORY (20 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Rhythm</li>
            <li>Melody</li>
            <li>Harmony</li>
          </ul>
        </li>

        <li>Identify and explain two types of musical instruments. (4 marks)</li>

        <li>Write a short note on the importance of music in society. (4 marks)</li>

        <li>Differentiate between traditional and modern music. (6 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: LISTENING & ANALYSIS (15 MARKS)</h2>
      <p><em>(Teacher plays a musical piece)</em></p>
      <ol>
        <li>Identify the genre of the music. (3 marks)</li>
        <li>Name two instruments you hear. (4 marks)</li>
        <li>Describe the mood of the music. (4 marks)</li>
        <li>Explain the tempo and rhythm. (4 marks)</li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: MUSIC COMPOSITION (15 MARKS)</h2>
      <ol>
        <li>
          Compose a short song (8–12 lines) on the theme:
          <br /><strong>"Unity and Cooperation"</strong> (10 marks)
        </li>
        <li>Identify the rhythm or beat pattern used. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: DANCE PRACTICAL & THEORY (20 MARKS)</h2>
      <ol>
        <li>Explain the importance of dance in cultural expression. (5 marks)</li>
        <li>Describe two traditional dances in your community. (5 marks)</li>
        <li>
          Perform or describe a dance routine including:
          <ul>
            <li>Body movement</li>
            <li>Timing</li>
            <li>Expression</li>
          </ul>
          (10 marks)
        </li>
      </ol>

      <hr />

      {/* SECTION E */}
      <h2>SECTION E: CREATIVE EXPRESSION (10 MARKS)</h2>
      <ol>
        <li>
          Describe how music and dance can be used to communicate a social message. (5 marks)
        </li>
        <li>
          Give an example of a performance that promotes culture. (5 marks)
        </li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#ff9800",
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
            <li>Definitions: 2 marks each (clarity + correctness)</li>
            <li>Instruments: identification (2), explanation (2)</li>
            <li>Importance: relevance (2), explanation (2)</li>
            <li>Comparison:
              <ul>
                <li>Traditional (3)</li>
                <li>Modern (3)</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION B: LISTENING (15 MARKS)</h3>
          <ul>
            <li>Genre identification: 3</li>
            <li>Instruments: 2 marks each</li>
            <li>Mood description: clarity (2), relevance (2)</li>
            <li>Tempo & rhythm: explanation (4)</li>
          </ul>

          <h3>SECTION C: COMPOSITION (15 MARKS)</h3>
          <ul>
            <li>Creativity: 4</li>
            <li>Relevance to theme: 3</li>
            <li>Structure: 3</li>
            <li>Language & flow: 2</li>
            <li>Rhythm identification: 3</li>
          </ul>

          <h3>SECTION D: DANCE (20 MARKS)</h3>
          <ul>
            <li>Cultural explanation: 5</li>
            <li>Traditional dances: 2.5 each</li>
            <li>Performance:
              <ul>
                <li>Movement: 4</li>
                <li>Timing: 3</li>
                <li>Expression: 3</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION E: CREATIVE (10 MARKS)</h3>
          <ul>
            <li>Communication: 5</li>
            <li>Example: 5</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>

        </div>
      )}
    </div>
  );
}