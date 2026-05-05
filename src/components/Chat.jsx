import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const StudentChat = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [unreadCount, setUnreadCount] = useState(0);
  const [lastSeenId, setLastSeenId] = useState(null);

  const [replyTo, setReplyTo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const chatRef = useRef(null);
  const startX = useRef(0);

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

  // ================= TIME =================
  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ================= NOTIFY =================
  const notify = (msg, sender) => {
    if (sender === username) return;

    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(`💬 ${sender}`, { body: msg });
    }

    const audio = new Audio("/notification.mp3");
    audio.play().catch(() => {});
  };

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // ================= FETCH =================
  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/chat/messages`);
      const data = Array.isArray(res.data) ? res.data : [];

      setOnlineUsers([...new Set(data.map((m) => m.username))]);

      if (data.length > 0) {
        const latest = data[0].id;

        if (lastSeenId && latest !== lastSeenId) {
          setUnreadCount((p) => p + 1);
          notify(data[0].message, data[0].username);
        }

        setLastSeenId(latest);
      }

      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  // ================= SEND =================
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() && !selectedFile) return;

    const msgObj = {
      id: Date.now(),
      username,
      message,
      time: getTime(),
      avatar,

      // ✅ FIXED REPLY STRUCTURE
      replyTo: replyTo
        ? {
            id: replyTo.id,
            username: replyTo.username,
            message: replyTo.message,
          }
        : null,

      file: selectedFile ? URL.createObjectURL(selectedFile) : null,
    };

    setMessages((prev) => [...prev, msgObj]);
    setMessage("");
    setReplyTo(null);
    setSelectedFile(null);

    try {
      await axios.post(`${API_BASE_URL}/api/chat/send`, msgObj);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= SWIPE REPLY =================
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, msg) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 80) setReplyTo(msg);
  };

  // ================= DELETE =================
  const deleteMessage = async (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    try {
      await axios.delete(`${API_BASE_URL}/api/chat/delete/${id}`);
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

        <input
          type="file"
          onChange={(e) =>
            setAvatar(URL.createObjectURL(e.target.files[0]))
          }
          style={{ marginTop: 10 }}
        />

        <button onClick={handleLogin} style={{ marginTop: 10 }}>
          Enter Chat
        </button>
      </div>
    );
  }

  // ================= CHAT UI =================
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0ad766",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          background: "#9c05e2",
          color: "white",
        }}
      >
        <div>🟢 Online: {onlineUsers.length}</div>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {avatar && (
            <img
              src={avatar}
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
              alt=""
            />
          )}
          👤 {username}
        </div>

        <div>💬 Unread: {unreadCount}</div>
      </div>

      {/* CHAT AREA */}
      <div
        ref={chatRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 10,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, msg)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems:
                msg.username === username ? "flex-end" : "flex-start",
              marginBottom: 12,
            }}
          >
            <b style={{ fontSize: 12 }}>{msg.username}</b>

            {/* MESSAGE BUBBLE */}
            <div
              style={{
                maxWidth: "75%",
                padding: 10,
                borderRadius: 12,
                background:
                  msg.username === username ? "#dcf8c6" : "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* ✅ WHATSAPP REPLY (TRUE STYLE) */}
              {msg.replyTo && (
                <div
                  style={{
                    borderLeft: "4px solid #9c05e2",
                    background: "rgba(0,0,0,0.05)",
                    padding: "5px 8px",
                    marginBottom: 6,
                    borderRadius: 6,
                    fontSize: 12,
                    opacity: 0.8,
                  }}
                >
                  <b>{msg.replyTo.username}</b>
                  <div>{msg.replyTo.message}</div>
                </div>
              )}

              {/* MESSAGE */}
              <div style={{ wordBreak: "break-word" }}>
                {msg.message}
              </div>

              {/* FILE */}
              {msg.file && (
                <img
                  src={msg.file}
                  alt=""
                  style={{
                    width: "100%",
                    marginTop: 6,
                    borderRadius: 8,
                  }}
                />
              )}

              {/* TIME */}
              <div
                style={{
                  fontSize: 10,
                  opacity: 0.6,
                  marginTop: 5,
                  textAlign: "right",
                }}
              >
                {msg.time}
              </div>

              {msg.username === username && (
                <span style={{ color: "blue" }}>✓✓</span>
              )}
            </div>

            {/* ACTIONS */}
            <div style={{ display: "flex", gap: 10 }}>
              {msg.username === username && (
                <button
                  onClick={() => deleteMessage(msg.id)}
                  style={{ color: "red", fontSize: 12 }}
                >
                  Delete
                </button>
              )}

              <button
                onClick={() => setReplyTo(msg)}
                style={{ fontSize: 12 }}
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= FIXED RESPONSIVE INPUT ================= */}
      <form
        onSubmit={sendMessage}
        style={{
          display: "flex",
          gap: 6,
          padding: 8,
          background: "#fff",
          alignItems: "center",
          flexWrap: "wrap", // ✅ FIX FOR SMALL SCREENS
          borderTop: "1px solid #ddd",
        }}
      >
        <input
          type="file"
          style={{ maxWidth: 90 }}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          style={{
            flex: 1,
            minWidth: 120,
            padding: 10,
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 14px",
            background: "#9c05e2",
            color: "white",
            border: "none",
            borderRadius: 6,
            flexShrink: 0,
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default StudentChat;