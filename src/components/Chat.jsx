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

      setMessages(() => {
  return data.map((msg) => ({
    ...msg,
    replyTo: msg.replyTo || null,
  }));
});
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

  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
  // ================= SEND =================
 const sendMessage = async (e) => {
  e.preventDefault();
  if (!message.trim() && !selectedFile) return;

  let fileBase64 = null;

  if (selectedFile) {
    fileBase64 = await toBase64(selectedFile);
  }

  const msgObj = {
    username,
    message,
    time: getTime(),

    replyTo: replyTo
      ? {
          id: replyTo.id,
          username: replyTo.username,
          message: replyTo.message,
        }
      : null,

    file: fileBase64,
  };

  setMessage("");
  setReplyTo(null);
  setSelectedFile(null);

  try {
    await axios.post(`${API_BASE_URL}/api/chat/send`, msgObj);
  } catch (err) {
    console.error(err);
  }
};

  // ================= FIXED SWIPE (DOES NOT BREAK BUTTONS) =================
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // ================= LOGOUT =================
const handleLogout = () => {
  localStorage.removeItem("chatUser");
  setIsLoggedIn(false);
  setUsername("");
  setMessages([]);
  setUnreadCount(0);
  setOnlineUsers([]);
};

<button
  onClick={handleLogout}
  style={{
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: 5,
    cursor: "pointer"
  }}
>
  Logout
</button>

  const handleTouchEnd = (e, msg) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    // ONLY REAL SWIPE (NOT TAP)
 if (diff > 80) {
  setReplyTo(msg);
}
  }
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
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#0ad766" }}>

      {/* TOP BAR (UNCHANGED COLORS) */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        background: "#9c05e2",
        color: "white"
      }}>
        <div>🟢 Online: {onlineUsers.length}</div>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {avatar && (
       
   <img src={avatar} width={30} height={30} style={{ borderRadius: "50%" }}
    alt="avatar"
  />
)}
          
          👤 {username}
        </div>

        <div>💬 Unread: {unreadCount}</div>
      </div>

      {/* CHAT AREA */}
      <div ref={chatRef} style={{ flex: 1, overflowY: "auto", padding: 10 }}>

        {messages.map((msg) => (
          <div
            key={msg.id}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, msg)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: msg.username === username ? "flex-end" : "flex-start",
              marginBottom: 12,
            }}
          >
            <b style={{ fontSize: 12 }}>{msg.username}</b>

            <div style={{
              maxWidth: "75%",
              padding: 10,
              borderRadius: 12,
              background: msg.username === username ? "#dcf8c6" : "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}>

              {/* REPLY UI (WHATSAPP STYLE) */}
              {msg.replyTo && (
                <div style={{
                  borderLeft: "4px solid #9c05e2",
                  background: "rgba(0,0,0,0.06)",
                  padding: 6,
                  marginBottom: 6,
                  borderRadius: 6,
                  fontSize: 12
                }}>
                  <b>{msg.replyTo.username}</b>
                  <div>{msg.replyTo.message}</div>
                </div>
              )}

              <div style={{ wordBreak: "break-word" }}>
                {msg.message}
              </div>

   {msg.file && ( <img src={msg.file} alt=""
    style={{ width: "100%", borderRadius: 8 }}
  />
)}

              <div style={{
                fontSize: 10,
                opacity: 0.6,
                marginTop: 5,
                textAlign: "right"
              }}>
                {msg.time || getTime()}
              </div>
            </div>

            {/* ACTIONS */}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setReplyTo(msg);
                }}
                style={{ fontSize: 12, color: "#9c05e2", border: "none", background: "transparent" }}
              >
                Reply
              </button>

              {msg.username === username && (
                <button
                  onClick={() => deleteMessage(msg.id)}
                  style={{ color: "red", fontSize: 12 }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* reply to */}
{replyTo && (
  <div style={{
    padding: 8,
    background: "#eee",
    borderLeft: "4px solid #9c05e2",
    marginBottom: 5
  }}>
    Replying to <b>{replyTo.username}</b>: {replyTo.message}
    <button onClick={() => setReplyTo(null)} style={{ marginLeft: 10 }}>
      ✖
    </button>
  </div>
)}
      {/* INPUT (FIXED + RESPONSIVE + ALWAYS VISIBLE) */}
      <form
        onSubmit={sendMessage}
        style={{
          display: "flex",
          gap: 6,
          padding: 8,
          background: "#fff",
          alignItems: "center",
          borderTop: "1px solid #ddd",
          flexWrap: "nowrap"
        }}
      >
    <input
  type="file"
  onChange={async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("message", "");
    formData.append("reply_id", replyTo?.id || "");
    formData.append("reply_username", replyTo?.username || "");
    formData.append("reply_message", replyTo?.message || "");

    const res = await axios.post(
      `${API_BASE_URL}/api/chat/upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    const newMsg = {
      id: Date.now(),
      username,
      message: "",
      file: API_BASE_URL + res.data.file_url,
      replyTo,
      time: getTime(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setReplyTo(null);
  }}
  style={{ width: 80 }}
/>

<input
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Type message..."
  style={{ flex: 1, padding: 10, outline: "none" }}
/>


        <button
          type="submit"
          style={{
            padding: "10px 14px",
            background: "#9c05e2",
            color: "white",
            border: "none",
            borderRadius: 6
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default StudentChat;