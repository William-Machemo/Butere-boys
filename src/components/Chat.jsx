import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

// ✅ SINGLE GLOBAL SOCKET
const socket = io(API_BASE_URL, {
  transports: ["polling", "websocket"],
  reconnection: true,
});

const ROOMS = ["General Chat", "Parents Chat", "Teachers Chat"];
const TEACHER_PASS = "teach123";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [currentRoom, setCurrentRoom] = useState("");

  const [message, setMessage] = useState("");
  const [messagesByRoom, setMessagesByRoom] = useState({});

  const messagesRef = useRef(null);

  // ================= SOCKET =================
  useEffect(() => {
    const handleMessage = (msg) => {
      setMessagesByRoom((prev) => {
        const roomMsgs = prev[msg.room] || [];

        // ✅ prevent duplicates using ID
        if (roomMsgs.some((m) => m.id === msg.id)) return prev;

        return {
          ...prev,
          [msg.room]: [...roomMsgs, msg],
        };
      });
    };

    socket.on("message", handleMessage);

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
      socket.off("chat_history");
    };
  }, []);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messagesByRoom, currentRoom]);

  // ================= LOGIN =================
  const enterChat = () => {
    if (!username.trim()) return alert("Enter username");
    setJoined(true);
  };

  // ================= JOIN ROOM =================
  const joinRoom = (room) => {
    if (room === "Teachers Chat") {
      const pass = prompt("Enter teacher password");
      if (pass !== TEACHER_PASS) return;
    }

    setCurrentRoom(room);

    socket.emit("join_room", {
      username,
      room,
    });
  };

  // ================= SEND =================
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !currentRoom) return;

    const msg = {
      id: Date.now(), // ✅ important
      username,
      room: currentRoom,
      message,
      time: new Date().toISOString(),
    };

    // ❗ DO NOT add locally
    socket.emit("send_message", msg);

    setMessage("");
  };

  const formatTime = (t) =>
    new Date(t).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  // ================= LOGIN UI =================
  if (!joined) {
    return (
      <div style={styles.center}>
        <div style={styles.login}>
          <h2>Chat Login</h2>
          <input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              background: currentRoom === r ? "#4CAF50" : "#eee",
              color: currentRoom === r ? "#fff" : "#000",
            }}
          >
            {r}
          </div>
        ))}
      </div>

      {/* CHAT */}
      <div style={styles.chat}>
        <div ref={messagesRef} style={styles.messages}>
          {messages.map((m) => {
            const isMine = m.username === username;

            return (
              <div
                key={m.id}
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
                    background: isMine ? "#dcf8c6" : "#fff",
                    margin: "4px 0",
                  }}
                >
                  <b style={{ fontSize: 12 }}>{m.username}</b>
                  <div>{m.message}</div>

                  <small style={{ fontSize: 10, opacity: 0.7 }}>
                    {formatTime(m.time)}
                  </small>
                </div>
              </div>
            );
          })}
        </div>

        {/* INPUT */}
        <form onSubmit={sendMessage} style={styles.inputArea}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.input}
            placeholder="Type a message..."
          />

          <button type="submit" style={styles.sendBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

// ================= STYLES =================
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
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
    width: "100%",
    padding: 10,
    gap: 6,
    background: "#f5f5f5",
  },

  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 20,
    border: "1px solid #ccc",
  },

  sendBtn: {
    padding: "10px 16px",
    borderRadius: 20,
    border: "none",
    background: "#4CAF50",
    color: "#fff",
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