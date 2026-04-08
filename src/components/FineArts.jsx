import React, { useState } from "react";

export default function FineArtsAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center" }}>CBC FINE ARTS ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <p><strong>Name:</strong> __________________________</p>
      <p><strong>School:</strong> _________________________</p>
      <p><strong>Date:</strong> ___________________________</p>
      <p><strong>Time:</strong> 2 Hours</p>

      <hr />

      <h2>Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Use sketches where necessary.</li>
        <li>Be creative and neat.</li>
      </ul>

      <hr />

      <h2>SECTION A: THEORY (15 MARKS)</h2>
      <ol>
        <li>Define Fine Arts. (2 marks)</li>
        <li>List three elements of art. (3 marks)</li>
        <li>State two principles of design. (2 marks)</li>
        <li>Explain the importance of art in society. (4 marks)</li>
        <li>Name two tools used in drawing. (4 marks)</li>
      </ol>

      <hr />

      <h2>SECTION B: ART APPRECIATION (15 MARKS)</h2>
      <ol>
        <li>
          Describe a piece of artwork you have seen. (5 marks)
        </li>
        <li>
          Explain how color is used to express emotion in art. (5 marks)
        </li>
        <li>
          Discuss the role of artists in society. (5 marks)
        </li>
      </ol>

      <hr />

      <h2>SECTION C: PRACTICAL (20 MARKS)</h2>
      <ol>
        <li>
          Create a drawing of a still life composition (e.g., fruits, books, or tools). (15 marks)
        </li>
        <li>
          Briefly explain your artwork. (5 marks)
        </li>
      </ol>

      <hr />

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#e83e8c",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        {showMarking ? "Hide Marking Scheme" : "Show Marking Scheme"}
      </button>

      {showMarking && (
        <div style={{ marginTop: "20px", background: "#f4f4f4", padding: "15px" }}>
          <h2>MARKING SCHEME</h2>

          <h3>SECTION A (15 MARKS)</h3>
          <ol>
            <li>Visual art forms used for expression (2)</li>
            <li>Line, color, shape, texture, form (any 3 × 1 = 3)</li>
            <li>Balance, contrast, unity, rhythm (any 2 × 1 = 2)</li>
            <li>
              Importance:
              <ul>
                <li>Communication (2)</li>
                <li>Cultural expression (2)</li>
              </ul>
            </li>
            <li>Pencil, brush, charcoal, etc. (any 2 × 2 = 4)</li>
          </ol>

          <h3>SECTION B (15 MARKS)</h3>
          <ol>
            <li>
              Description:
              <ul>
                <li>Clarity (2)</li>
                <li>Details (3)</li>
              </ul>
            </li>
            <li>
              Color use:
              <ul>
                <li>Explanation (3)</li>
                <li>Examples (2)</li>
              </ul>
            </li>
            <li>
              Role of artists:
              <ul>
                <li>Creativity (2)</li>
                <li>Social influence (3)</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION C (20 MARKS)</h3>
          <ol>
            <li>
              Drawing:
              <ul>
                <li>Creativity (5)</li>
                <li>Proportion (5)</li>
                <li>Shading/technique (3)</li>
                <li>Neatness (2)</li>
              </ul>
            </li>
            <li>
              Explanation:
              <ul>
                <li>Clarity (3)</li>
                <li>Relevance (2)</li>
              </ul>
            </li>
          </ol>

          <h3>Total: 50 Marks</h3>
        </div>
      )}
    </div>
  );
}