import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AIDashboard() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  

  // ---------------- TEXT TO SPEECH ----------------
  const speak = (text) => {
    if (!text) return;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  // ---------------- VOICE INPUT ----------------
  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setMessage(voiceText);
    };
  };
  <div
  className="ai-container"
  style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}
></div>

  // ---------------- SEND MESSAGE ----------------
  const sendMessage = async (customMessage = null) => {
    const msgToSend = customMessage || message;
    if (!msgToSend.trim()) return;

    setChat((prev) => [...prev, { role: "user", text: msgToSend }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://butere-boys-flask-j2x3.onrender.com/ask-ai",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: msgToSend }),
        }
      );

      const data = await res.json();

      // ---------------- NAVIGATION ----------------
      if (data.redirect) {
        navigate(data.redirect);
      }

      // ---------------- FORMAT RESPONSE ----------------
      let output = "";

      if (data.type === "list") {
        output = data.reply
          .map((item) => `📌 ${item.title} - ${item.message}`)
          .join("\n");
      } else if (Array.isArray(data.reply)) {
        output = data.reply
          .map((item) => Object.values(item).join(" - "))
          .join("\n");
      } else if (typeof data.reply === "object") {
        output = Object.entries(data.reply)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
      } else {
        output = data.reply;
      }

      setChat((prev) => [
        ...prev,
        { role: "ai", text: output || "No response from AI" },
      ]);

      // 🔊 speak response (optional)
      speak(output);

    } catch (error) {
      setChat((prev) => [
        ...prev,
        { role: "ai", text: "❌ Cannot connect to server." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="ai-container">

      

      {/* TITLE */}
      
      <h3 className="text-center">
  <span className="bg-danger text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    🤖 AI Student Assistant
  </span>
</h3>

      <p className="subtitle"><i>Ask anything about your school system</i></p>

      {/* CHAT BOX */}
      <div className="chat-box">
        {chat.map((c, i) => (
          <div
            key={i}
            className={c.role === "user" ? "chat user" : "chat ai"}
          >
            <b>{c.role === "user" ? "You" : "AI"}:</b>

            <div style={{ whiteSpace: "pre-wrap" }}>
              {c.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <div className="input-area">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
        />

        <button onClick={() => sendMessage()} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>

        <button onClick={startVoiceInput}>
          🎤 Speak
        </button>

      </div>

      {/* FAQ BUTTONS */}
      <div className="faq-container">
            <h3 className="text-center">
  <span className="bg-danger text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    Frequently asked questions
  </span>
</h3>
        {[
          "How many assignments have been uploaded?",
          "Show announcements",
          "Show KCSE results",
          "Show me sports results",
          "How many students have signed up?",
          "How many teachers have signed up?",
          "Take me to academics page",
        ].map((q, i) => (
          <div
            key={i}
            className="faq-card"
            onClick={() => sendMessage(q)}
          >
            {q}
          </div>
        ))}
      </div>

    </div>
  );
}