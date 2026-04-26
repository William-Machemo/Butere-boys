import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const socket = io(API_BASE_URL, {
  transports: ["polling", "websocket"],
  reconnection: true,
});

const ROOMS = ["General Chat", "Parents Chat", "Teachers Chat"];
const emojis = ["😀", "😂", "😍", "🔥", "👍", "🎉", "❤️"];
const TEACHER_PASS = "teach123";

const Chat = () => {
  const [username, setUsername] = useState(sessionStorage.getItem("username") || "");
  const [joined, setJoined] = useState(!!sessionStorage.getItem("joined"));
  const [currentRoom, setCurrentRoom] = useState("");

  const [message, setMessage] = useState("");
  const [messagesByRoom, setMessagesByRoom] = useState({});
  const [showEmoji, setShowEmoji] = useState(false);

  const messagesRef = useRef(null);

  // ✅ SOCKET
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessagesByRoom((prev) => ({
        ...prev,
        [msg.room]: [...(prev[msg.room] || []), msg],
      }));
    });

    socket.on("chat_history", (msgs) => {
      if (!msgs.length) return;

      const room = msgs[0].room;
      setMessagesByRoom((prev) => ({
        ...prev,
        [room]: msgs,
      }));
    });

  

    socket.on("message_deleted", ({ id }) => {
      setMessagesByRoom((prev) => {
        const updated = {};
        for (const room in prev) {
          updated[room] = prev[room].filter((m) => m.id !== id);
        }
        return updated;
      });
    });

    return () => {
      socket.off("message");
      socket.off("chat_history");
      socket.off("online_users");
      socket.off("message_deleted");
    };
  }, []);

  // ✅ AUTO SCROLL
  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messagesByRoom, currentRoom]);

  // ✅ LOGIN
  const enterChat = () => {
    if (!username.trim()) return alert("Enter username");

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("joined", "true");

    setJoined(true);
    socket.emit("user_joined", { username });
  };

  // ✅ JOIN ROOM
  const joinRoom = (room) => {
    if (room === "Teachers Chat") {
      const pass = prompt("Enter teacher password");
      if (pass !== TEACHER_PASS) return;
    }

    setCurrentRoom(room);
    socket.emit("join_room", { username, room });
  };

  // ✅ SEND (NO LOCAL ADD = NO DUPLICATES)
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    socket.emit("send_message", {
      username,
      room: currentRoom,
      message,
      time: new Date().toISOString(),
    });

    setMessage("");
  };

  // ✅ DELETE
  const deleteMessage = (id) => {
    socket.emit("delete_message", {
      id,
      room: currentRoom,
    });
  };

  const formatTime = (t) =>
    new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // LOGIN UI
  if (!joined) {
    return (
      <div style={styles.center}>
        <div style={styles.login}>
          <h2>Chat Login</h2>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
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
              background: currentRoom === r ? "#4CAF50" : "#eee",
            }}
          >
            {r}
          </div>
        ))}
      </div>

      <div style={styles.main}>
        <div style={styles.chat}>
          <div ref={messagesRef} style={styles.messages}>
            {messages.map((m, i) => {
              const isMine = m.username === username;

              return (
                <div
                  key={m.id || i}
                  style={{
                    display: "flex",
                    justifyContent: isMine ? "flex-end" : "flex-start",
                  }}
                >
                  <div style={styles.bubble}>
                    {isMine && (
                      <span
                        onClick={() => deleteMessage(m.id)}
                        style={styles.delete}
                      >
                        🗑️
                      </span>
                    )}

                    <div>{m.message}</div>

                    <small style={styles.time}>
                      {formatTime(m.time)}
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
  container: { height: "100vh", display: "flex", flexDirection: "column" },

  topBar: { display: "flex", padding: 10, gap: 8 },

  room: { padding: 10, borderRadius: 20, cursor: "pointer" },

  main: { flex: 1, display: "flex" },

  chat: { flex: 1, display: "flex", flexDirection: "column" },

  messages: {
    flex: 1,
    overflowY: "auto",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  bubble: {
    position: "relative",
    maxWidth: "70%",
    padding: 10,
    borderRadius: 12,
    background: "#fff",
  },

  delete: {
    position: "absolute",
    top: 5,
    right: 8,
    cursor: "pointer",
    fontSize: 12,
    color: "red",
  },

  time: {
    fontSize: 10,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 4,
  },

  inputArea: {
    display: "flex",
    padding: 10,
    gap: 6,
    background: "#eee",
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
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

  login: { padding: 20, background: "#fff" },
};