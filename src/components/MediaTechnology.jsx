import React, { useState } from "react";

export default function MediaTechnologyAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "950px", margin: "auto", lineHeight: "1.6" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC MEDIA TECHNOLOGY ASSESSMENT</h1>
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
        <li>Use clear explanations and examples.</li>
        <li>Where applicable, include diagrams or sketches.</li>
        <li>Be creative and apply practical knowledge.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: MEDIA THEORY (20 MARKS)</h2>
      <ol>
        <li>Define the following terms: (6 marks)
          <ul>
            <li>Media Technology</li>
            <li>Digital Media</li>
            <li>Broadcasting</li>
          </ul>
        </li>

        <li>Identify and explain two types of media platforms. (4 marks)</li>

        <li>Explain the role of media in society. (4 marks)</li>

        <li>Differentiate between print media and electronic media. (6 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: MEDIA ANALYSIS (15 MARKS)</h2>
      <p><em>(Teacher provides a video, advertisement, or article)</em></p>
      <ol>
        <li>Identify the type of media provided. (3 marks)</li>
        <li>State the target audience. (4 marks)</li>
        <li>Describe the message being communicated. (4 marks)</li>
        <li>Evaluate the effectiveness of the media. (4 marks)</li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: MEDIA PRODUCTION (20 MARKS)</h2>
      <ol>
        <li>
          Create a short media script (advertisement or short video) on the topic:
          <br /><strong>"Promoting Environmental Conservation"</strong> (10 marks)
        </li>
        <li>
          Outline the steps you would follow to produce this media content. (10 marks)
        </li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: DIGITAL SKILLS (15 MARKS)</h2>
      <ol>
        <li>Explain how social media platforms are used for communication. (5 marks)</li>
        <li>Describe two tools used in media production (e.g., camera, editing software). (5 marks)</li>
        <li>Explain the importance of internet safety and responsible media use. (5 marks)</li>
      </ol>

      <hr />

      {/* SECTION E */}
      <h2>SECTION E: MEDIA ETHICS & CREATIVITY (10 MARKS)</h2>
      <ol>
        <li>Explain two ethical issues in media. (5 marks)</li>
        <li>Describe how media can influence behavior in society. (5 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#17a2b8",
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
            <li>Media platforms: identification (2), explanation (2)</li>
            <li>Role of media: relevance (2), explanation (2)</li>
            <li>Comparison:
              <ul>
                <li>Print media (3)</li>
                <li>Electronic media (3)</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION B: ANALYSIS (15 MARKS)</h3>
          <ul>
            <li>Media type: 3</li>
            <li>Audience: clarity (2), relevance (2)</li>
            <li>Message: clarity (2), accuracy (2)</li>
            <li>Evaluation: reasoning (4)</li>
          </ul>

          <h3>SECTION C: PRODUCTION (20 MARKS)</h3>
          <ul>
            <li>Creativity: 5</li>
            <li>Relevance to topic: 4</li>
            <li>Structure/script: 3</li>
            <li>Production steps:
              <ul>
                <li>Planning: 3</li>
                <li>Execution: 3</li>
                <li>Editing: 1</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION D: DIGITAL SKILLS (15 MARKS)</h3>
          <ul>
            <li>Social media use: 5</li>
            <li>Tools: explanation (5)</li>
            <li>Internet safety: clarity (3), relevance (2)</li>
          </ul>

          <h3>SECTION E: ETHICS (10 MARKS)</h3>
          <ul>
            <li>Ethical issues: 2.5 each</li>
            <li>Influence: explanation (5)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>

        </div>
      )}
    </div>
  );
}