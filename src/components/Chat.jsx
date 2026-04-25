import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

// ✅ IMPORTANT: socket OUTSIDE component (FIX)
const socket = io(API_BASE_URL, {
  transports: ["websocket", "polling"],
  reconnection: true,
});

const Chat = () => {
  const [username] = useState(sessionStorage.getItem("username") || "User");
  const [currentRoom, setCurrentRoom] = useState("General Chat");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const messagesEndRef = useRef(null);

  // ================= SOCKET =================
  useEffect(() => {
    socket.emit("user_joined", { username });

    socket.on("online_users", (users) => {
      setOnlineUsers(users);
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("chat_history", (history) => {
      setMessages(history);
    });

    return () => {
      socket.off("message");
      socket.off("online_users");
      socket.off("chat_history");
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ================= JOIN ROOM =================
  const joinRoom = (room) => {
    setCurrentRoom(room);
    setMessages([]);

    socket.emit("join_room", {
      username,
      room,
    });
  };

  // ================= SEND MESSAGE =================
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msg = {
      username,
      room: currentRoom,
      message,
      time: new Date().toISOString(),
      status: "sent", // for ticks
    };

    setMessages((prev) => [...prev, msg]);

    socket.emit("send_message", msg);
    setMessage("");
  };

  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================= FORMAT TIME =================
  const formatTime = (t) =>
    new Date(t).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div style={styles.container}>
      {/* ROOMS */}
      <div style={styles.rooms}>
        {["General Chat", "Parents Chat", "Teachers Chat"].map((room) => (
          <button
            key={room}
            onClick={() => joinRoom(room)}
            style={{
              ...styles.roomBtn,
              background: currentRoom === room ? "#0b93f6" : "#eee",
              color: currentRoom === room ? "white" : "black",
            }}
          >
            {room}
          </button>
        ))}
      </div>

      {/* ONLINE USERS */}
      <div style={styles.online}>
        <b>Online:</b> {onlineUsers.join(", ")}
      </div>

      {/* CHAT BOX */}
      <div style={styles.chatBox}>
        {messages.map((m, i) => {
          const isMe = m.username === username;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: isMe ? "flex-end" : "flex-start",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  maxWidth: "70%",
                  padding: 10,
                  borderRadius: 15,
                  background: isMe ? "#dcf8c6" : "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: 12 }}>
                  {m.username}
                </div>

                <div>{m.message}</div>

                <div style={styles.meta}>
                  {formatTime(m.time)}

                  {/* BLUE TICKS (SIMULATED) */}
                  {isMe && (
                    <span style={{ color: "blue", marginLeft: 6 }}>
                      ✔✔
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <form onSubmit={sendMessage} style={styles.inputBox}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          style={styles.input}
        />

        <button type="submit" style={styles.sendBtn}>
          Send
        </button>
      </form>
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
    background: "#f0f0f0",
  },

  rooms: {
    display: "flex",
    gap: 8,
    padding: 10,
    flexWrap: "wrap",
  },

  roomBtn: {
    padding: 8,
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
  },

  online: {
    padding: 10,
    fontSize: 14,
  },

  chatBox: {
    flex: 1,
    padding: 10,
    overflowY: "auto",
  },

  inputBox: {
    display: "flex",
    padding: 10,
    background: "#fff",
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    border: "1px solid #ccc",
  },

  sendBtn: {
    marginLeft: 10,
    padding: "10px 20px",
    borderRadius: 20,
    background: "#0b93f6",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  meta: {
    fontSize: 10,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 4,
  },
};