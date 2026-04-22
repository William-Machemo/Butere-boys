import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const socket = io(API_BASE_URL, {
  transports: ["websocket", "polling"],
});

const ROOMS = ["General Chat", "Parents Chat", "Teachers Chat"];
const emojis = ["😀", "😂", "😍", "🔥", "👍", "🎉", "❤️"];
const TEACHER_PASS = "teach123";

const Chat = () => {

 const [username, setUsername] = useState(
  localStorage.getItem("username") || ""
);

const [role, setRole] = useState(
  localStorage.getItem("role") || "student"
);

const [profilePic, setProfilePic] = useState(
  localStorage.getItem("profilePic") || ""
);
const messagesContainerRef = useRef(null);

const [joined, setJoined] = useState(
  localStorage.getItem("joined") === "true"
);

const [currentRoom, setCurrentRoom] = useState(
  localStorage.getItem("room") || ""
);

const [message, setMessage] = useState("");

const [messagesByRoom, setMessagesByRoom] = useState({});
const [onlineUsers, setOnlineUsers] = useState([]);

const [typingUser, setTypingUser] = useState("");
const [search, setSearch] = useState("");
const [dark, setDark] = useState(false);
const [showEmoji, setShowEmoji] = useState(false);

const [privateUser, setPrivateUser] = useState("");
const [dmMessages, setDmMessages] = useState({});

const messagesEndRef = useRef(null);
  // ================= SOCKET =================
  useEffect(() => {
  socket.on("message", (msg) => {
  setMessagesByRoom((prev) => {
    const updated = {
      ...prev,
      [msg.room]: [...(prev[msg.room] || []), msg],
    };

    // save history per room
    localStorage.setItem(
      "chat_" + msg.room,
      JSON.stringify(updated[msg.room])
    );

    return updated;
  });
});
  
    socket.on("online_users", setOnlineUsers);

    socket.on("typing", (user) => {
      if (user !== username) {
        setTypingUser(user);
        setTimeout(() => setTypingUser(""), 1500);
      }
    });

    return () => {
      socket.off("message");
      socket.off("private_message");
      socket.off("online_users");
      socket.off("typing");
    };
  }, [username]);

  // ================= SCROLL =================
useEffect(() => {
  const el = messagesContainerRef.current;
  if (el) {
    el.scrollTop = 0; // 👈 go to top
  }
}, [currentRoom]);
  // ================= TIME FORMAT =================
 const formatTime = (t) => {
  if (!t) return "";
  return new Date(t).toLocaleTimeString();
};
  // ================= LOGIN =================
const enterChat = () => {
  if (!username.trim()) return alert("Enter username");

  // ✅ persist user data (so refresh keeps user logged in)
  localStorage.setItem("username", username);
  localStorage.setItem("role", role);
  localStorage.setItem("profilePic", profilePic);
  localStorage.setItem("joined", "true");

  setJoined(true);

  socket.emit("user_joined", {
    username,
    role,
    profilePic,
  });
};

// useEffect
useEffect(() => {
  if (currentRoom) {
    const saved = localStorage.getItem("chat_" + currentRoom);

    if (saved) {
      setMessagesByRoom((prev) => ({
        ...prev,
        [currentRoom]: JSON.parse(saved),
      }));
    }
  }
}, [currentRoom]);
const joinRoom = async (room) => {

  // 🔒 BLOCK TEACHER ROOM FIRST (BEFORE ANYTHING ELSE)
  if (room.trim() === "Teachers Chat") {
    const pass = prompt("Enter teacher password");

    if (!pass || pass.trim() !== TEACHER_PASS) {
      alert("Access denied: wrong password");
      return; // ❌ STOP HERE
    }
  }

  // ✅ ONLY AFTER PASS IS CORRECT
  setCurrentRoom(room);

  socket.emit("join_room", { username, room, role });

  try {
    const res = await axios.get(`${API_BASE_URL}/api/chat/${room}`);

    setMessagesByRoom((prev) => ({
      ...prev,
      [room]: res.data || [],
    }));
  } catch (err) {
    console.log("Failed to load messages", err);
  }
};
  // ================= SEND MESSAGE =================
  const sendMessage = async (e) => {
  e.preventDefault();
  if (!message.trim()) return;

  const msg = {
    username,
    role,
    room: currentRoom,
    message: message, // MUST be message (not text)
    time: new Date().toISOString(),
    profilePic,
  };

  // 🔥 optimistic UI update
  setMessagesByRoom((prev) => ({
    ...prev,
    [currentRoom]: [...(prev[currentRoom] || []), msg],
  }));

  socket.emit("send_message", msg);

  try {
    await axios.post(`${API_BASE_URL}/api/chat/send`, msg);

    // 🔥 reload messages after saving (IMPORTANT FIX)
    const res = await axios.get(`${API_BASE_URL}/api/chat/${currentRoom}`);

    setMessagesByRoom((prev) => ({
      ...prev,
      [currentRoom]: (res.data || []).map((m) => ({
        ...m,
        message: m.message || m.text,
      })),
    }));
  } catch (err) {
    console.log("Send error:", err.message);
  }

  setMessage("");
};

  // ================= DM =================
  const sendDM = () => {
    if (!message || !privateUser) return;

    const msg = {
      from: username,
      to: privateUser,
       message: message,
      time: new Date().toISOString(),
      profilePic,
    };

    socket.emit("private_message", msg);

    setDmMessages((prev) => ({
      ...prev,
      [privateUser]: [...(prev[privateUser] || []), msg],
    }));

    setMessage("");
  };

  // ================= FILE =================
  const sendFile = async (file) => {
    const form = new FormData();
    form.append("file_photo", file);

    await axios.post(`${API_BASE_URL}/api/addfiles`, form);

    socket.emit("send_message", {
      username,
      room: currentRoom,
      file: file.name,
      time: new Date().toISOString(),
      profilePic,
    });
  };

  // ================= LOGIN SCREEN =================
  if (!joined) {
    return (
      <div style={styles.center}>
        <div style={styles.login}>
          <h2>Chat Login</h2>

          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>

          <input type="file" onChange={(e) =>
            setProfilePic(URL.createObjectURL(e.target.files[0]))
          } />

          <button onClick={enterChat}>Enter</button>
        </div>
      </div>
    );
  }

  const messages = messagesByRoom[currentRoom] || [];
  const dms = dmMessages[privateUser] || [];

  return (
    <div style={{ ...styles.container, background: dark ? "#111" : "#f5f5f5" }}>

      {/* TOP ROOMS */}
      <div style={styles.topBar}>
        {ROOMS.map((r) => (
          <div key={r} onClick={() => joinRoom(r)} style={styles.room}>
            {r}
          </div>
        ))}
        <button onClick={() => setDark(!dark)}>🌙</button>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* SIDEBAR */}
        <div style={styles.sidebar} className="sidebar">
          <h4>Online</h4>
          {onlineUsers.map((u) => (
            <div key={u} onClick={() => setPrivateUser(u)}>
              🟢 {u}
            </div>
          ))}
        </div>

        {/* CHAT */}
        <div style={styles.chat}>

          {/* MOBILE ONLINE */}
          <div className="mobileOnline">
            {onlineUsers.map((u) => (
              <span key={u}>🟢 {u}</span>
            ))}
          </div>

          {/* SEARCH */}
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />


{/* ✅ ADD THIS WRAPPER */}
<div
  ref={messagesContainerRef}
  style={styles.messages}
>
  {messages.map((m, i) => {
    const isMine = m.username === username;

    return (
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent: isMine ? "flex-end" : "flex-start",
          width: "100%",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            maxWidth: "70%",
            padding: 10,
            borderRadius: 12,
            background: isMine ? "#dcf8c6" : "#fff",
            wordBreak: "break-word",
          }}
        >
          <b>{m.username}</b>
          <div>{m.text || m.message}</div>
          <small>{formatTime(m.time)}</small>
          {isMine && <div>✔✔</div>}
        </div>
      </div>
    );
  })}

  {/* DM */}
  {privateUser &&
    dms.map((m, i) => (
      <div key={i}>
        <b>{m.from}</b>: {m.message}
      </div>
    ))}

  {typingUser && <i>{typingUser} typing...</i>}

  <div ref={messagesEndRef} />
</div>
          {/* INPUT */}
          <form onSubmit={sendMessage} style={styles.inputArea}>

            <button type="button" onClick={() => alert("🎤 Voice UI")}>🎤</button>

            <button type="button" onClick={() => setShowEmoji(!showEmoji)}>😀</button>

            <input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                socket.emit("typing", username);
              }}
              style={styles.input}
            />

            <input type="file" onChange={(e) => sendFile(e.target.files[0])} />

            <button type="button" onClick={privateUser ? sendDM : sendMessage}>
              {privateUser ? "DM" : "Send"}
            </button>

          </form>

          {showEmoji && (
            <div>
              {emojis.map((e, i) => (
                <span key={i} onClick={() => setMessage(message + e)}>
                  {e}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar { display: none; }
          .mobileOnline {
            display: flex;
            overflow-x: auto;
            gap: 10px;
            padding: 10px;
            background: #ddd;
          }
        }
        @media (min-width: 769px) {
          .mobileOnline { display: none; }
        }
      `}</style>

    </div>
  );
};

export default Chat;
/* ================= STYLES (FIXED) ================= */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxSizing: "border-box",
  },

  topBar: {
    display: "flex",
    overflowX: "auto",
    padding: 10,
    gap: 8,
    flexShrink: 0,
  },

  room: {
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    cursor: "pointer",
    whiteSpace: "nowrap",
    background: "#eee",
    flexShrink: 0,
  },

  main: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    minHeight: 0,
  },

  sidebar: {
    width: 200,
    padding: 10,
    overflowY: "auto",
    borderRight: "1px solid #ddd",
    flexShrink: 0,
    background: "#fafafa",
  },

  chat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    overflow: "hidden",
  },

  messages: {
    flex: 1,
    overflowY: "auto",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  pic: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 6,
    flexShrink: 0,
  },

  inputArea: {
    display: "flex",
    padding: 8,
    position: "sticky",
    bottom: 0,
    background: "#fff",
    gap: 6,
    flexShrink: 0,
    alignItems: "center",
    flexWrap: "wrap",   // 🔥 FIX mobile overflow
  },

  input: {
    flex: 1,
    minWidth: 0,        // 🔥 FIX input disappearing on mobile
    padding: 10,
    borderRadius: 20,
    border: "1px solid #ccc",
    outline: "none",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  login: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
  },
};