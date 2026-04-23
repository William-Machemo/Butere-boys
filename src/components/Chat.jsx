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
  const [messagesByRoom, setMessagesByRoom] = useState(() => {
    return JSON.parse(localStorage.getItem("chat_cache") || "{}");
  });

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

    return () => {
      socket.off("message", handleMessage);
      socket.off("online_users");
      socket.off("typing");
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

  // ================= JOIN ROOM (INSTANT LOAD) =================
  const joinRoom = async (room) => {
    if (room === "Teachers Chat") {
      const pass = prompt("Enter teacher password");
      if (pass !== TEACHER_PASS) return;
    }

    setCurrentRoom(room);
    sessionStorage.setItem("room", room);

    socket.emit("join_room", { username, room, role });

    // ⚡ INSTANT LOAD FROM CACHE
    const cached = JSON.parse(localStorage.getItem("chat_cache") || "{}");
    if (cached[room]) {
      setMessagesByRoom(cached);
    }

    // ⚡ BACKGROUND MYSQL FETCH
    try {
      const res = await axios.get(`${API_BASE_URL}/api/chat/${room}`);

      setMessagesByRoom((prev) => {
        const updated = {
          ...prev,
          [room]: res.data || [],
        };
        localStorage.setItem("chat_cache", JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      console.log(err);
    }
  };

  // ================= SEND =================
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

    try {
      await axios.post(`${API_BASE_URL}/api/chat/send`, msg);
    } catch (err) {
      console.log(err);
    }
  };

  const formatTime = (t) => {
    if (!t) return "";
    return new Date(t).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
      {/* TOP */}
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
            {typingUser && (
  <div style={{ fontStyle: "italic", fontSize: 12, padding: "5px 10px" }}>
    {typingUser} is typing...
  </div>
)}
            {r}
          </div>
        ))}
      </div>

      <div style={styles.main}>
        <div className="desktopOnline" style={styles.sidebar}>
          <h4>Online</h4>
          {onlineUsers.map((u) => (
            <div key={u}>🟢 {u}</div>
          ))}
        </div>

        <div style={styles.chat}>
          <div ref={messagesRef} style={styles.messages}>
            {messages.map((m, i) => {
              const isMine = m.username === username;

              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: isMine ? "flex-end" : "flex-start",
                    marginBottom: 6,
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
                    <div style={{ display: "flex", gap: 6 }}>
                      {m.profilePic ? (
                        <img
                          src={m.profilePic}
                          alt="profile"
                          style={styles.pic}
                        />
                      ) : (
                        <div style={styles.pic}>
                          {m.username?.charAt(0)}
                        </div>
                      )}
                      <b>{m.username}</b>
                    </div>

                    <div>{m.message}</div>

                    <small>{formatTime(m.time)}</small>
                  </div>
                </div>
              );
            })}
          </div>

          {/* INPUT FIXED */}
          <form onSubmit={sendMessage} style={styles.inputArea}>
            <input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                socket.emit("typing", { username, room: currentRoom });
              }}
              style={styles.input}
            />

            <button type="button" onClick={() => setShowEmoji((p) => !p)}>
              😀
            </button>
              <button onClick={() => setDark(prev => !prev)}>
  {dark ? "☀️" : "🌙"}
</button>
            <button type="submit">Send</button>
          </form>

          {/* EMOJIS */}
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

      {/* RESPONSIVE FIX */}
      <style>{`
        @media (max-width:768px){
          .desktopOnline{display:none;}
        }
      `}</style>
    </div>
  );
};

export default Chat;

const styles = {
  container: { height: "100vh", display: "flex", flexDirection: "column" },
  topBar: { display: "flex", padding: 10, gap: 8 },
  room: { padding: 10, borderRadius: 20, cursor: "pointer" },

  main: { display: "flex", flex: 1, minHeight: 0 },

  sidebar: { width: 200, padding: 10 },

  chat: { flex: 1, display: "flex", flexDirection: "column" },

  messages: { flex: 1, overflowY: "auto", padding: 10 },

  inputArea: {
    display: "flex",
    padding: 10,
    gap: 6,
    position: "sticky",
    bottom: 0,
    background: "#fff",
  },

  input: { flex: 1, padding: 10, borderRadius: 20 },

  emojiBox: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    background: "#fff",
  },

  pic: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    background: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
  },

  center: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" },
  login: { background: "#fff", padding: 20 },
};