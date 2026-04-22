import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const socket = io(API_BASE_URL, {
  transports: ["websocket", "polling"],
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
  const [messagesByRoom, setMessagesByRoom] = useState({});
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  const [dark, setDark] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const messagesRef = useRef(null);
  const lastCount = useRef(0);

  // ================= SOCKET =================
  useEffect(() => {
    const handleMessage = (msg) => {
      setMessagesByRoom((prev) => {
        const roomMsgs = prev[msg.room] || [];

        const exists = roomMsgs.some(
          (m) => m.username === msg.username && m.time === msg.time
        );

        if (exists) return prev;

        return {
          ...prev,
          [msg.room]: [...roomMsgs, msg],
        };
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

    return () => {
      socket.off("message", handleMessage);
      socket.off("online_users");
      socket.off("typing");
    };
  }, [currentRoom, username]);

  // ================= SMART SCROLL =================
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

  // ================= JOIN ROOM (FAST + MYSQL BACKUP) =================
  const joinRoom = async (room) => {
    if (room === "Teachers Chat") {
      const pass = prompt("Enter teacher password");
      if (pass !== TEACHER_PASS) return;
    }

    setCurrentRoom(room);
    sessionStorage.setItem("room", room);

    socket.emit("join_room", { username, room, role });

    // FAST LOAD FIRST (NO BLANK SCREEN)
    setMessagesByRoom((prev) => ({
      ...prev,
      [room]: prev[room] || [],
    }));

    // BACKGROUND MYSQL LOAD
    try {
      const res = await axios.get(`${API_BASE_URL}/api/chat/${room}`);

      setMessagesByRoom((prev) => ({
        ...prev,
        [room]: res.data || [],
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // ================= SEND MESSAGE (WHATSAPP STYLE) =================
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
      status: "sent",
    };

    // INSTANT UI
    setMessagesByRoom((prev) => ({
      ...prev,
      [currentRoom]: [...(prev[currentRoom] || []), msg],
    }));

    socket.emit("send_message", msg);
    setMessage("");

    try {
      await axios.post(`${API_BASE_URL}/api/chat/send`, msg);
    } catch (err) {
      console.log(err);
    }
  };

  const formatTime = (t) => {
    if (!t) return "";
    return new Date(t).toLocaleTimeString();
  };

  // ================= LOGIN SCREEN =================
  if (!joined) {
    return (
      <div style={styles.center}>
        <div style={styles.login}>
          <h2>Chat Login</h2>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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
    <div style={{ ...styles.container, background: dark ? "#111" : "#f5f5f5" }}>

      {/* TOP BAR */}
      <div style={styles.topBar}>
        {ROOMS.map((r) => (
          <div
            key={r}
            onClick={() => joinRoom(r)}
            style={{
              ...styles.room,
              background: currentRoom === r ? "#4CAF50" : "#eee",
              color: currentRoom === r ? "#fff" : "#000",
            }}
          >
            {r}
          </div>
        ))}
        <button onClick={() => setDark(!dark)}>🌙</button>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* ONLINE (DESKTOP) */}
        <div className="desktopOnline" style={styles.sidebar}>
          <h4>Online</h4>
          {onlineUsers.map((u) => (
            <div key={u}>🟢 {u}</div>
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

          {/* MESSAGES */}
          <div ref={messagesRef} style={styles.messages}>
            {messages.map((m, i) => {
              const isMine = m.username === username;

              return (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: isMine ? "flex-end" : "flex-start",
                  marginBottom: 6,
                }}>
                  <div style={{
                    maxWidth: "70%",
                    padding: 10,
                    borderRadius: 12,
                    background: isMine ? "#dcf8c6" : "#fff",
                  }}>

                    {/* PROFILE PIC FIX */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {m.profilePic && (
                        <img src={m.profilePic} style={styles.pic} />
                      )}
                      <b>{m.username}</b>
                    </div>

                    <div>{m.message}</div>

                    {/* TIME */}
                    <small style={{ opacity: 0.6 }}>
                      {formatTime(m.time)}
                    </small>

                    {/* BLUE TICKS */}
                    {isMine && (
                      <div style={{ color: "#1976d2", fontSize: 12 }}>
                        ✔✔
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {typingUser && (
              <div style={{ fontStyle: "italic", fontSize: 12 }}>
                {typingUser} is typing...
              </div>
            )}
          </div>

          {/* INPUT */}
          <form onSubmit={sendMessage} style={styles.inputArea}>
            <button type="button" onClick={() => setShowEmoji(!showEmoji)}>
              😀
            </button>

            <input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                socket.emit("typing", { username, room: currentRoom });
              }}
              style={styles.input}
            />

            <button type="submit">Send</button>
          </form>

          {/* EMOJIS */}
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
          .desktopOnline { display: none; }

          .mobileOnline {
            display: flex;
            gap: 10px;
            overflow-x: auto;
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

/* ================= STYLES ================= */
const styles = {
  container: { height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" },
  topBar: { display: "flex", padding: 10, gap: 8 },
  room: { padding: 10, borderRadius: 20, cursor: "pointer" },

  main: { display: "flex", flex: 1 },

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
    gap: 6,
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
  },

  pic: {
    width: 25,
    height: 25,
    borderRadius: "50%",
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