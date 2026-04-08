import React, { useState } from "react";

export default function MandarinAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "1000px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC MANDARIN (CHINESE) ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p><strong>姓名 (Name):</strong> __________________________</p>
        <p><strong>日期 (Date):</strong> __________________</p>
      </div>
      <p><strong>学校 (School):</strong> __________________________</p>
      <p><strong>时间 (Duration):</strong> 2 Hours</p>

      <hr />

      <h2>考试说明 (Instructions)</h2>
      <ul>
        <li>回答所有问题。</li>
        <li>使用正确的汉字和拼音。</li>
        <li>认真阅读每个问题。</li>
        <li>注意书写清晰。</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: LISTENING (听力) – 15 MARKS</h2>
      <p><em>(Teacher reads a passage)</em></p>
      <ol>
        <li>Who is speaking in the passage? (3 marks)</li>
        <li>What activity is being described? (4 marks)</li>
        <li>Where does the conversation take place? (4 marks)</li>
        <li>Write two key words you heard (in Pinyin or characters). (4 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: READING (阅读) – 15 MARKS</h2>
      <p>
        <strong>Passage:</strong><br />
        我叫李明。我每天早上七点起床，然后去学校。我喜欢学习汉语和打篮球。
      </p>

      <ol>
        <li>What is the name of the person? (3 marks)</li>
        <li>What time does he wake up? (3 marks)</li>
        <li>Name one subject he likes. (3 marks)</li>
        <li>Translate the passage into English. (6 marks)</li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: GRAMMAR & LANGUAGE USE (语法) – 15 MARKS</h2>
      <ol>
        <li>Fill in the blanks: (6 marks)<br />
          我 ______ 学生。(是 / 有)<br />
          他 ______ 去学校。(在 / 去)
        </li>

        <li>Rewrite in Pinyin: (4 marks)<br />
          我喜欢学习。
        </li>

        <li>Arrange the words to form a correct sentence: (5 marks)<br />
          去 / 我 / 学校 / 每天
        </li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: WRITING (写作) – 20 MARKS</h2>
      <p>
        Write a composition of 80–120 words in Chinese or Pinyin:
      </p>
      <p><strong>“我的学校生活” (My School Life)</strong></p>

      <hr />

      {/* SECTION E */}
      <h2>SECTION E: CULTURE & COMMUNICATION (文化) – 15 MARKS</h2>
      <ol>
        <li>Describe one Chinese cultural practice. (5 marks)</li>
        <li>Explain the importance of learning Mandarin in today’s world. (5 marks)</li>
        <li>Write a short dialogue (4–6 lines) introducing yourself in Chinese. (5 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#d32f2f",
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

          <h3>SECTION A: LISTENING (15 MARKS)</h3>
          <ul>
            <li>Identification: 3</li>
            <li>Activity: 4</li>
            <li>Location: 4</li>
            <li>Keywords: 2 marks each</li>
          </ul>

          <h3>SECTION B: READING (15 MARKS)</h3>
          <ul>
            <li>Name: 李明 (3)</li>
            <li>Time: 七点 (3)</li>
            <li>Subject: 汉语 (3)</li>
            <li>Translation:
              <ul>
                <li>Accuracy: 3</li>
                <li>Clarity: 3</li>
              </ul>
            </li>
          </ul>

          <h3>SECTION C: GRAMMAR (15 MARKS)</h3>
          <ul>
            <li>是 (3), 去 (3)</li>
            <li>Pinyin correctness: 4</li>
            <li>Sentence arrangement: 5</li>
          </ul>

          <h3>SECTION D: WRITING (20 MARKS)</h3>
          <ul>
            <li>Content: 6</li>
            <li>Grammar: 5</li>
            <li>Vocabulary: 5</li>
            <li>Structure: 4</li>
          </ul>

          <h3>SECTION E: CULTURE (15 MARKS)</h3>
          <ul>
            <li>Cultural explanation: 5</li>
            <li>Importance: 5</li>
            <li>Dialogue:
              <ul>
                <li>Accuracy: 3</li>
                <li>Fluency: 2</li>
              </ul>
            </li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>

        </div>
      )}
    </div>
  );
}