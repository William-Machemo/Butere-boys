import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const socket = io(API_BASE_URL, {
  transports: ["polling", "websocket"], // ✅ FIX
  reconnection: true,
});

const ROOMS = ["General Chat", "Parents Chat", "Teachers Chat"];
const emojis = ["😀", "😂", "😍", "🔥", "👍", "🎉", "❤️"];
const TEACHER_PASS = "teach123";

const Chat = () => {
  const [username, setUsername] = useState(sessionStorage.getItem("username") || "");
  const [role, setRole] = useState(sessionStorage.getItem("role") || "student");
  const [profilePic, setProfilePic] = useState(sessionStorage.getItem("profilePic") || "");

  const [joined, setJoined] = useState(!!sessionStorage.getItem("joined"));
  const [currentRoom, setCurrentRoom] = useState(sessionStorage.getItem("room") || "");

  const [message, setMessage] = useState("");
  const [messagesByRoom, setMessagesByRoom] = useState(() => {
    return JSON.parse(localStorage.getItem("chat_cache") || "{}");
  });

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUser, setTypingUser] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const messagesRef = useRef(null);
  const lastCount = useRef(0);

  // ================= SOCKET =================
  useEffect(() => {
    const handleMessage = (msg) => {
      msg.status = "delivered";
      setMessagesByRoom((prev) => {
        const roomMsgs = prev[msg.room] || [];

        const exists = roomMsgs.some(
          (m) => m.time === msg.time && m.username === msg.username
        );

        if (exists) return prev;

        const updated = {
          ...prev,
          [msg.room]: [...roomMsgs, msg],
        };

        localStorage.setItem("chat_cache", JSON.stringify(updated));
        return updated;
      });
    };

    socket.on("message", handleMessage);
    socket.on("online_users", setOnlineUsers);

    socket.on("typing", ({ username: user, room }) => {
      if (room === currentRoom && user !== username) {
        setTypingUser(user);
        setTimeout(() => setTypingUser(""), 1200);
      }
    });

    socket.on("chat_history", (msgs) => {
      if (!msgs.length) return;

      const room = msgs[0].room;

      setMessagesByRoom((prev) => ({
        ...prev,
        [room]: msgs,
      }));
    });

    return () => {
      socket.off("message", handleMessage);
      socket.off("online_users");
      socket.off("typing");
      socket.off("chat_history");
      socket.disconnect();
  
  if (!currentRoom) return;

  socket.emit("mark_seen", {
    room: currentRoom,
    username,
  });


  socket.on("seen_messages", (data) => {
  setMessagesByRoom((prev) => {
    const roomMsgs = prev[data.room] || [];

    const updated = roomMsgs.map((m) => {
      if (m.username === username) {
        return { ...m, status: "seen" };
      }
      return m;
    });

    return {
      ...prev,
      [data.room]: updated,
    };
  });
});
    };
  }, [currentRoom, username]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    const msgs = messagesByRoom[currentRoom] || [];

    if (msgs.length > lastCount.current) {
      messagesRef.current?.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }

    lastCount.current = msgs.length;
  }, [messagesByRoom, currentRoom]);

  // ================= LOGIN =================
  const enterChat = () => {
    if (!username.trim()) return alert("Enter username");

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("profilePic", profilePic);
    sessionStorage.setItem("joined", "true");

    setJoined(true);
    socket.emit("user_joined", { username, role, profilePic });
  };
  // delete message
  const deleteMessage = (id) => {
  if (!window.confirm("Delete this message?")) return;

  socket.emit("delete_message", {
    id,
    room: currentRoom,
  });
};

  // ================= JOIN ROOM =================
  const joinRoom = (room) => {
    if (room === "Teachers Chat") {
      const pass = prompt("Enter teacher password");
      if (pass !== TEACHER_PASS) return;
    }

    setCurrentRoom(room);
    sessionStorage.setItem("room", room);

    socket.emit("join_room", { username, room, role });

    const cached = JSON.parse(localStorage.getItem("chat_cache") || "{}");
    if (cached[room]) {
      setMessagesByRoom((prev) => ({
        ...prev,
        [room]: cached[room],
      }));
    }
  };

  // ================= SEND =================
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msg = {
      username,
      role,
      room: currentRoom,
      message,
      time: new Date().toISOString(),
      profilePic,
      status: "sent", 
    };
    

    setMessagesByRoom((prev) => {
      const updated = {
        ...prev,
        [currentRoom]: [...(prev[currentRoom] || []), msg],
      };

      localStorage.setItem("chat_cache", JSON.stringify(updated));
      return updated;
    });

    socket.emit("send_message", msg);
    setMessage("");
  };

  const formatTime = (t) =>
    t ? new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

  // ================= LOGIN SCREEN =================
  if (!joined) {
    return (
      <div style={styles.center}>
        <div style={styles.login}>
          <h2>Chat Login</h2>

          <input value={username} onChange={(e) => setUsername(e.target.value)} />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>

          <input
            type="file"
            onChange={(e) =>
              setProfilePic(URL.createObjectURL(e.target.files[0]))
            }
          />

          <button onClick={enterChat}>Enter</button>
        </div>
      </div>
    );
  }

  const messages = messagesByRoom[currentRoom] || [];

  return (
    <div style={styles.container}>
      {/* ROOMS */}
      <div style={styles.topBar}>
        {ROOMS.map((r) => (
          <div
            key={r}
            onClick={() => joinRoom(r)}
            style={{
              ...styles.room,
              background: currentRoom === r ? "#4CAF50" : "#c7d024",
              color: currentRoom === r ? "#d51d4b" : "#000",
            }}
          >
            {r}
          </div>
        ))}
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        <div style={styles.sidebar}>
          <h4>Online</h4>
          {onlineUsers.map((u) => (
            <div key={u}>🟢 {u}</div>
          ))}
        </div>

        <div style={styles.chat}>
          {typingUser && (
            <div style={{ fontStyle: "italic", fontSize: 12 }}>
              {typingUser} is typing...
            </div>
          )}
          <div ref={messagesRef} style={styles.messages}>
  {messages.map((m, i) => {
    const isMine = m.username === username;

    return (
      <div
        key={i}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: isMine ? "flex-end" : "flex-start",
        }}
      >
        <div
          style={{
            maxWidth: "70%",
            padding: "10px 12px",
            borderRadius: 12,
            background: isMine ? "#b097789b" : "rgba(33, 191, 33, 0.57)",
            textAlign: "left",
            boxShadow: "0 1px 2px rgba(241, 34, 34, 0.1)",
          }}
        >
          <b style={{ fontSize: 12 }}>{m.username}</b>
          <div>{m.message}</div>

         <small style={{ fontSize: 10, opacity: 0.7, display: "flex", gap: 4, alignItems: "center" }}>
  {formatTime(m.time)}


  {/* 🗑️ DELETE BUTTON */}
   {isMine && (
          <span
          onClick={() => deleteMessage(m.id)}
            style={{
              position: "absolute",
              top: 5,
              right: 8,
              cursor: "pointer",
              fontSize: 12,
              color: "red",
            }}
          >
            🗑️
          </span>
        )}
        
  {/* ✅ TICKS */}
  <span style={{ marginLeft: 6 }}>
    {m.status === "sent" && "✓"}

    {m.status === "delivered" && "✓✓"}

    {m.status === "seen" && (
      <span style={{ color: "#4fc3f7", fontWeight: "bold" }}>✓✓</span>
    )}
  </span>
</small>
        </div>
      </div>
    );
  })}
</div>

          <form onSubmit={sendMessage} style={styles.inputArea}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.input}
            />

            <button type="button" onClick={() => setShowEmoji((p) => !p)}>
              😀
            </button>

            <button type="submit">Send</button>
          </form>

          {showEmoji && (
            <div style={styles.emojiBox}>
              {emojis.map((e, i) => (
                <span key={i} onClick={() => setMessage((p) => p + e)}>
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
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", // 🔴 prevents page overflow
  },

  topBar: {
    display: "flex",
    padding: 10,
    gap: 8,
    flexShrink: 0,
  },

  room: {
    padding: 10,
    borderRadius: 20,
    cursor: "pointer",
  },

  main: {
    flex: 1,
    display: "flex",
    width: "100%",
    overflow: "hidden", // 🔴 important
  },

  chat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
  },

  messages: {
    flex: 1,
    overflowY: "auto",
    padding: 10,

    // 🔴 IMPORTANT FIXES FOR CENTERING ISSUE
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  // 🔴 INPUT BAR FIX (ALWAYS VISIBLE + NOT PUSHING CONTENT)
  inputArea: {
    display: "flex",
    width: "100%",
    padding: 10,
    gap: 6,
    flexShrink: 0,
    background: "#ce2929",
    alignItems: "center",
  },

  input: {
    flex: 1,
    minWidth: 0,
    padding: "10px 12px",
    borderRadius: 20,
    border: "1px solid #60ad0e",
    outline: "none",
  },

  emojiBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  login: {
    padding: 20,
    background: "#dfb071",
  },
};