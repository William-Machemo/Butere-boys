import React, { useState } from "react";

export default function EnglishAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center" }}>CBC ENGLISH ASSESSMENT EXAM</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <p><strong>Name:</strong> __________________________</p>
      <p><strong>School:</strong> _________________________</p>
      <p><strong>Date:</strong> ___________________________</p>
      <p><strong>Time:</strong> 2 Hours</p>

      <hr />

      <h2>Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Write clearly and in complete sentences.</li>
        <li>Read each question carefully.</li>
      </ul>

      <hr />

      <h2>SECTION A: READING COMPREHENSION (20 MARKS)</h2>
      <p>
        <em>
          Technology has changed the way people communicate. Today, many people use
          smartphones and social media to stay connected. While this has made communication
          faster, it has also reduced face-to-face interactions.
        </em>
      </p>

      <ol>
        <li>What has changed communication? (2 marks)</li>
        <li>Name two tools people use to communicate today. (4 marks)</li>
        <li>State one advantage of modern communication. (2 marks)</li>
        <li>State one disadvantage mentioned in the passage. (2 marks)</li>
        <li>Do you think technology improves communication? Explain. (10 marks)</li>
      </ol>

      <hr />

      <h2>SECTION B: GRAMMAR (15 MARKS)</h2>
      <ol>
        <li>Rewrite the sentence in past tense: (3 marks)<br />
          <em>She goes to school every day.</em>
        </li>
        <li>Fill in the blanks: (4 marks)<br />
          a) They ______ playing football. (is/are)<br />
          b) He ______ a car. (have/has)
        </li>
        <li>Identify the adjective: (2 marks)<br />
          <em>The tall boy won the race.</em>
        </li>
        <li>Write the plural of: (2 marks)<br />
          Child → ______
        </li>
        <li>Use the word “quickly” in a sentence. (4 marks)</li>
      </ol>

      <hr />

      <h2>SECTION C: WRITING (15 MARKS)</h2>
      <p>
        Write a composition of about 150–200 words on the topic:
      </p>
      <p><strong>“The Importance of Education in Society”</strong></p>

      <hr />

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007BFF",
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

          <h3>SECTION A (20 MARKS)</h3>
          <ol>
            <li>Technology (2)</li>
            <li>Smartphones, social media (4)</li>
            <li>Faster communication (2)</li>
            <li>Reduced face-to-face interaction (2)</li>
            <li>
              Explanation (10):
              <ul>
                <li>Content: 4 marks</li>
                <li>Grammar: 3 marks</li>
                <li>Clarity: 3 marks</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION B (15 MARKS)</h3>
          <ol>
            <li>She went to school every day. (3)</li>
            <li>
              a) are (2)<br />
              b) has (2)
            </li>
            <li>tall (2)</li>
            <li>Children (2)</li>
            <li>
              Sentence correctness:
              <ul>
                <li>Grammar: 2 marks</li>
                <li>Meaning: 2 marks</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION C (15 MARKS)</h3>
          <ul>
            <li>Content: 6 marks</li>
            <li>Organization: 4 marks</li>
            <li>Grammar & spelling: 5 marks</li>
          </ul>

          <h3>Total: 50 Marks</h3>
        </div>
      )}
    </div>
  );
}