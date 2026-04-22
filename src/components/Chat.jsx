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

const [username, setUsername] = useState("");
const [role, setRole] = useState("student");
const [profilePic, setProfilePic] = useState("");

const [joined, setJoined] = useState(false);
const [currentRoom, setCurrentRoom] = useState("");
const [message, setMessage] = useState("");

const [messagesByRoom, setMessagesByRoom] = useState({});
const [onlineUsers, setOnlineUsers] = useState([]);
const [typingUser, setTypingUser] = useState("");

const [search, setSearch] = useState("");
const [dark, setDark] = useState(false);
const [showEmoji, setShowEmoji] = useState(false);

const messagesContainerRef = useRef(null);

// ================= SOCKET =================
useEffect(() => {

  const handleMessage = (msg) => {
    setMessagesByRoom((prev) => ({
      ...prev,
      [msg.room]: [...(prev[msg.room] || []), msg],
    }));
  };

  const handleOnlineUsers = (users) => {
    setOnlineUsers(users);
  };

  const handleTyping = ({ username: user, room }) => {
    if (room === currentRoom && user !== username) {
      setTypingUser(user);
      setTimeout(() => setTypingUser(""), 1500);
    }
  };

  socket.on("message", handleMessage);
  socket.on("online_users", handleOnlineUsers);
  socket.on("typing", handleTyping);

  return () => {
    socket.off("message", handleMessage);
    socket.off("online_users", handleOnlineUsers);
    socket.off("typing", handleTyping);
  };

}, [currentRoom, username]);

// ================= SCROLL =================
useEffect(() => {
  const el = messagesContainerRef.current;
  if (el) el.scrollTop = el.scrollHeight;
}, [messagesByRoom, currentRoom]);

// ================= TIME =================
const formatTime = (t) => {
  if (!t) return "";
  return new Date(t).toLocaleTimeString();
};

// ================= LOGIN =================
const enterChat = () => {
  if (!username.trim()) return alert("Enter username");

  setJoined(true);

  socket.emit("user_joined", {
    username,
    role,
    profilePic,
  });
};

// ================= JOIN ROOM =================
const joinRoom = async (room) => {

  if (room === "Teachers Chat") {
    const pass = prompt("Enter teacher password");
    if (pass !== TEACHER_PASS) {
      alert("Wrong password");
      return;
    }
  }

  setCurrentRoom(room);

  socket.emit("join_room", { username, room, role });

  try {
    const res = await axios.get(`${API_BASE_URL}/api/chat/${room}`);

    setMessagesByRoom((prev) => ({
      ...prev,
      [room]: res.data || [],
    }));

  } catch (err) {
    console.log("Fetch error:", err);
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
    message,
    time: new Date().toISOString(),
    profilePic,
  };

  socket.emit("send_message", msg);

  try {
    await axios.post(`${API_BASE_URL}/api/chat/send`, msg);
  } catch (err) {
    console.log(err);
  }

  setMessage("");
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

        <button onClick={enterChat}>Enter</button>
      </div>
    </div>
  );
}

const messages = messagesByRoom[currentRoom] || [];

return (
  <div style={{ ...styles.container, background: dark ? "#111" : "#f5f5f5" }}>

    {/* TOP ROOMS */}
    <div style={styles.topBar}>
      {ROOMS.map((r) => (
        <div
          key={r}
          onClick={() => joinRoom(r)}
          style={{
            ...styles.room,
            background: currentRoom === r ? "#4CAF50" : "#eee",
            color: currentRoom === r ? "white" : "black",
          }}
        >
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
          <div key={u}>🟢 {u}</div>
        ))}
      </div>

      {/* CHAT */}
      <div style={styles.chat}>

        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div ref={messagesContainerRef} style={styles.messages}>
          {messages.map((m, i) => {
            const isMine = m.username === username;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: isMine ? "flex-end" : "flex-start",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    maxWidth: "70%",
                    padding: 10,
                    borderRadius: 12,
                    background: isMine ? "#dcf8c6" : "#fff",
                  }}
                >
                  <b>{m.username}</b>
                  <div>{m.text || m.message}</div>
                  <small>{formatTime(m.time)}</small>
                </div>
              </div>
            );
          })}

          {typingUser && <div>{typingUser} is typing...</div>}
        </div>

        {/* INPUT */}
        <form onSubmit={sendMessage} style={styles.inputArea}>
          <button type="button" onClick={() => setShowEmoji(!showEmoji)}>😀</button>
<input
  type="file"
  onChange={(e) =>
    setProfilePic(URL.createObjectURL(e.target.files[0]))
  }
/>
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);

              if (!socket.connected) return;

              socket.emit("typing", {
                username,
                room: currentRoom,
              });
            }}
            style={styles.input}
          />

          <button type="submit">Send</button>
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
  </div>
);
};

export default Chat;

/* ================= STYLES ================= */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topBar: {
    display: "flex",
    padding: 10,
    gap: 8,
  },
  room: {
    padding: 10,
    borderRadius: 20,
    cursor: "pointer",
  },
  main: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: 200,
    padding: 10,
    borderRight: "1px solid #ddd",
  },
  chat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: 10,
  },
  inputArea: {
    display: "flex",
    padding: 10,
    gap: 5,
  },
  input: {
    flex: 1,
    padding: 10,
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