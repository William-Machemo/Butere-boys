import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const StudentChat = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  const [unreadCount, setUnreadCount] = useState(0);
  const [lastId, setLastId] = useState(null);

  const chatRef = useRef(null);

  // ================= LOGIN =================
  const handleLogin = () => {
    if (!username.trim()) return alert("Enter username");

    localStorage.setItem("chatUser", username);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const saved = localStorage.getItem("chatUser");
    if (saved) {
      setUsername(saved);
      setIsLoggedIn(true);
    }
  }, []);

  // ================= NOTIFICATIONS =================
  const playSound = () => {
    const audio = new Audio("/notification.mp3");
    audio.play().catch(() => {});
  };

  const pushNotify = (text) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("New Message", { body: text });
    }
  };

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // ================= FETCH MESSAGES =================
  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/chat/messages`);
      const data = Array.isArray(res.data) ? res.data : [];

      // detect new message
      if (data.length > 0) {
        const latest = data[0].id;

        if (lastId && latest !== lastId) {
          setUnreadCount((p) => p + 1);
          playSound();
          pushNotify("New message received");
        }

        setLastId(latest);
      }

      setMessages(data);

      // fake online users (replace later with backend socket)
      setOnlineUsers([...new Set(data.map((m) => m.username))]);

    } catch (err) {
      console.error(err);
    }
  };

  // ================= AUTO REFRESH =================
  useEffect(() => {
    if (!isLoggedIn) return;

    fetchMessages();

    const interval = setInterval(fetchMessages, 3000);

    return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  // ================= SEND MESSAGE =================
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msg = message;
    setMessage("");

    // optimistic UI
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        username,
        message: msg,
      },
    ]);

    try {
      await axios.post(`${API_BASE_URL}/api/chat/send`, {
        username,
        message: msg,
      });

      fetchMessages();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= DELETE =================
  const deleteMessage = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/chat/delete/${id}`);
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ================= LOGIN SCREEN =================
  if (!isLoggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Student Chat Login</h2>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{ width: "100%", padding: 10 }}
        />

        <button onClick={handleLogin} style={{ marginTop: 10 }}>
          Enter Chat
        </button>
      </div>
    );
  }

  // ================= CHAT UI =================
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f4f6f9" }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        background: "#fff"
      }}>
        <div>🟢 Online: {onlineUsers.length}</div>
        <div>👤 {username}</div>
        <div>
          💬 Unread: {unreadCount}
          <button
            onClick={() => setUnreadCount(0)}
            style={{ marginLeft: 10 }}
          >
            Clear
          </button>
        </div>
      </div>

      {/* CHAT BOX */}
      <div
        ref={chatRef}
        style={{
          width: "100%",
          height: "70vh",
          overflowY: "auto",
          padding: 10,
        }}
      >
        {/* typing indicator */}
        {typingUser && (
          <p style={{ fontStyle: "italic", color: "gray" }}>
            💬 {typingUser} is typing...
          </p>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.username === username ? "right" : "left",
              marginBottom: 10,
            }}
          >
            <b>{msg.username}</b>

            <div
              style={{
                display: "inline-block",
                padding: 8,
                background: msg.username === username ? "#dcf8c6" : "#fff",
                borderRadius: 10,
              }}
            >
              {msg.message}
              {msg.username === username && <span> ✓✓</span>}
            </div>

            {msg.username === username && (
              <button
                onClick={() => deleteMessage(msg.id)}
                style={{ marginLeft: 10, color: "red" }}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <form onSubmit={sendMessage} style={{ padding: 10 }}>
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setTypingUser(username);

            setTimeout(() => setTypingUser(""), 1000);
          }}
          placeholder="Type message..."
          style={{ width: "80%", padding: 10 }}
        />

        <button style={{ width: "20%", padding: 10 }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default StudentChat;