import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const StudentChat = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);

  // ================= LOGIN =================
  const handleLogin = () => {
    if (!username.trim()) {
      alert("Enter username");
      return;
    }

    setIsLoggedIn(true);
    localStorage.setItem("chatUser", username);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("chatUser");
    if (savedUser) {
      setUsername(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // ================= AUTO FETCH =================
  useEffect(() => {
    if (!isLoggedIn) return;

    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/chat/messages`
      );

      // sort by id (important)
      const sorted = (res.data || []).sort((a, b) => a.id - b.id);

      setMessages(sorted);
    } catch (error) {
      console.error(error);
    }
  };

  // ================= SEND MESSAGE =================
  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const tempMessage = {
      id: Date.now(),
      username,
      message,
    };

    // 🔥 1. SHOW IMMEDIATELY (OPTIMISTIC UI)
    setMessages((prev) => [...prev, tempMessage]);

    const msgToSend = message;
    setMessage("");

    try {
      await axios.post(`${API_BASE_URL}/api/chat/send`, {
        username,
        message: msgToSend,
      });

      // 🔥 2. refresh real DB messages
      fetchMessages();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  // ================= AUTO SCROLL =================
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================= LOGIN SCREEN =================
  if (!isLoggedIn) {
    return (
      <div className="container mt-5 text-center">
        <h2>Student Chat Login</h2>

        <input
          className="form-control mb-3"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleLogin}>
          Enter Chat
        </button>
      </div>
    );
  }

  // ================= CHAT UI =================
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
        background: "#f4f6f9",
      }}
    >
      <h3 className="text-center mb-3">💬 Student Chat Room</h3>

      {/* CHAT BOX */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          height: "450px",
          overflowY: "auto",
          background: "#fff",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign:
                msg.username === username ? "right" : "left",
              marginBottom: "10px",
            }}
          >
            <b className="text-success">{msg.username}</b>
            <p className="text-danger" style={{ margin: 0 }}>{msg.message}</p>
          </div>
        ))}

        {/* scroll anchor */}
        <div ref={chatEndRef} />
      </div>

      {/* INPUT */}
      <form
        onSubmit={sendMessage}
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <input
          className="form-control mb-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />

        <button className="btn btn-success w-100">
          Send
        </button>
      </form>
    </div>
  );
};

export default StudentChat;