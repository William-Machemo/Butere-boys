import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

// ✅ ONE SOCKET ONLY
const socket = io(API_BASE_URL, {
  transports: ["websocket"],
  reconnection: true,
});

const ROOMS = ["General Chat", "Parents Chat", "Teachers Chat"];

const Chat = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = useRef(null);

  // ================= SOCKET =================
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("chat_history", (msgs) => {
      setMessages(msgs);
    });

    return () => {
      socket.off("message");
      socket.off("chat_history");
    };
  }, []);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // ================= JOIN =================
  const joinChat = () => {
    if (!username) return alert("Enter username");
    setJoined(true);
  };

  const joinRoom = (r) => {
    setRoom(r);
    setMessages([]);

    socket.emit("join_room", { username, room: r });
  };

  // ================= SEND =================
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const msg = {
      username,
      message,
      room,
      time: new Date().toISOString(),
    };

    socket.emit("send_message", msg);
    setMessage("");
  };

  const formatTime = (t) =>
    new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // ================= LOGIN =================
  if (!joined) {
    return (
      <div style={styles.center}>
        <div style={styles.login}>
          <h2>Login</h2>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={joinChat}>Enter</button>
        </div>
      </div>
    );
  }

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
              background: room === r ? "#4CAF50" : "#ddd",
            }}
          >
            {r}
          </div>
        ))}
      </div>

      {/* CHAT */}
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
                  width: "100%",
                }}
              >
                <div
                  style={{
                    maxWidth: "70%",
                    padding: 10,
                    borderRadius: 12,
                    background: isMine ? "#dcf8c6" : "#fff",
                    margin: 4,
                  }}
                >
                  <b>{m.username}</b>
                  <div>{m.message}</div>
                  <small>{formatTime(m.time)}</small>
                </div>
              </div>
            );
          })}
        </div>

        {/* INPUT */}
        {room && (
          <form onSubmit={sendMessage} style={styles.inputArea}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.input}
            />
            <button type="submit">Send</button>
          </form>
        )}
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
  },

  topBar: {
    display: "flex",
    padding: 10,
    gap: 10,
  },

  room: {
    padding: 10,
    borderRadius: 20,
    cursor: "pointer",
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
    display: "flex",
    flexDirection: "column",
  },

  inputArea: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #ccc",
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    border: "1px solid #ccc",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  login: {
    padding: 20,
    background: "#fff",
  },
};