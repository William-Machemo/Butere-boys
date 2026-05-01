import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AIDashboard() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ---------------- SAFE FORMAT FUNCTION ----------------
  const formatReply = (data) => {
    if (!data) return "No response";

    // string
    if (typeof data === "string") return data;

    // array (fixtures, results, announcements)
    if (Array.isArray(data)) {
      return data
        .map((item) => Object.values(item).join(" - "))
        .join("\n");
    }

    // object
    if (typeof data === "object") {
      return Object.entries(data)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
    }

    return String(data);
  };

  // ---------------- SEND MESSAGE ----------------
  const sendMessage = async (customMessage = null) => {
    const msgToSend = customMessage || message;

    if (!msgToSend.trim()) return;

    const newChat = [...chat, { role: "user", text: msgToSend }];
    setChat(newChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("https://butere-boys-flask-j2x3.onrender.com/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msgToSend })
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      // ---------------- NAVIGATION ----------------
      if (data.redirect) {
        navigate(data.redirect);
      }

      // ---------------- SAFE RENDER ----------------
      const replyText = formatReply(data.reply);

      setChat([
        ...newChat,
        { role: "ai", text: replyText }
      ]);

    } catch (error) {
      setChat([
        ...newChat,
        { role: "ai", text: "❌ Cannot connect to server." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="ai-container">

      {/* TITLE */}
      <h1 className="title">AI Student Assistant</h1>

      {/* CHAT BOX */}
      <div className="chat-box">
        {chat.map((c, i) => (
          <div
            key={i}
            className={c.role === "user" ? "chat user" : "chat ai"}
          >
            <b>{c.role === "user" ? "You" : "AI"}:</b>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {c.text}
            </pre>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h3 className="section-title bg-danger">🔥 Frequently Asked Questions</h3>

      <div className="faq-container">
        {[
          "How many assignments have been uploaded?",
          "Show me the fixtures of upcoming football",
          "Show me sports results",
          "Show KCSE results",
          "How many pages",
          "How many students have signed up?",
          "How many teachers have signed up?",
          "Show announcements",
          "Take me to academics page"
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

      {/* INPUT */}
      <div className="input-wrapper">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
        />

        <button onClick={() => sendMessage()} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

    </div>
  );
}