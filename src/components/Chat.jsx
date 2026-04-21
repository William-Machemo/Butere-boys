import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

const socket = io(API_BASE_URL, {
  transports: ["websocket", "polling"],
});

const Chat = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("student");
  const [joined, setJoined] = useState(false);

  const [currentRoom, setCurrentRoom] = useState("");
  const [message, setMessage] = useState("");

  const [messagesByRoom, setMessagesByRoom] = useState({});
  const [onlineUsers, setOnlineUsers] = useState([]);

  const ROOMS = [
    "General Chat",
    "Parents Chat",
    "Teachers Chat",
  ];

  // ---------------- SOCKET ----------------
  useEffect(() => {
    const handleMessage = (msg) => {
      setMessagesByRoom((prev) => {
        const roomMsgs = prev[msg.room] || [];
        return {
          ...prev,
          [msg.room]: [...roomMsgs, msg],
        };
      });
    };

    socket.on("message", handleMessage);

    socket.on("online_users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("message", handleMessage);
      socket.off("online_users");
    };
  }, []);

  // ---------------- LOGIN ----------------
  const enterChat = () => {
    if (!username.trim()) {
      alert("Enter username first");
      return;
    }
    setJoined(true);
    socket.emit("user_joined", { username, role });
  };

  // ---------------- LOAD MESSAGES ----------------
  const loadMessages = async (room) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/chat/${room}`
      );

      setMessagesByRoom((prev) => ({
        ...prev,
        [room]: res.data || [],
      }));
    } catch (err) {
      console.error("Load error:", err);
    }
  };

  // ---------------- JOIN ROOM ----------------
  const joinRoom = async (room) => {
    if (!username) return;

    // Teacher protection
    if (room === "Teachers Chat" && role !== "teacher") {
      alert("Access denied");
      return;
    }

    if (room === "Teachers Chat") {
      const pass = prompt("Enter teacher password:");
      if (pass !== "teach123") {
        alert("Wrong password");
        return;
      }
    }

    setCurrentRoom(room);

    socket.emit("join_room", { username, room, role });

    // ALWAYS reload from DB (fix persistence issue)
    await loadMessages(room);
  };

  // ---------------- SEND MESSAGE ----------------
  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim() || !currentRoom) return;

    const msgData = {
      username,
      role,
      room: currentRoom,
      text: message,
      time: new Date().toISOString(),
    };

    // UI update
    setMessagesByRoom((prev) => ({
      ...prev,
      [currentRoom]: [
        ...(prev[currentRoom] || []),
        msgData,
      ],
    }));

    socket.emit("send_message", msgData);

    try {
      await axios.post(`${API_BASE_URL}/api/chat/send`, {
        username,
        role,
        room: currentRoom,
        message,
      });
    } catch (err) {
      console.error(err);
    }

    setMessage("");
  };

  // ---------------- LOGIN SCREEN ----------------
  if (!joined) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Chat Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 10, width: 220 }}
        />

        <br /><br />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: 10 }}
        >
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
        </select>

        <br /><br />

        <button onClick={enterChat} style={{ padding: 10 }}>
          Enter Chat
        </button>
      </div>
    );
  }

  const messages = messagesByRoom[currentRoom] || [];

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* ROOMS */}
      <div style={{ width: 220, borderRight: "1px solid #ccc", padding: 10 }}>
        <h4>Rooms</h4>

        {ROOMS.map((r) => (
          <button
            key={r}
            onClick={() => joinRoom(r)}
            style={{
              width: "100%",
              marginBottom: 8,
              padding: 8,
              background: currentRoom === r ? "green" : "white",
              color: currentRoom === r ? "white" : "black",
            }}
          >
            {r}
          </button>
        ))}

        <h5>Online</h5>
        {onlineUsers.map((u, i) => (
          <div key={i}>🟢 {u}</div>
        ))}
      </div>

      {/* CHAT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                textAlign: m.username === username ? "right" : "left",
              }}
            >
              <small>{m.username} ({m.role})</small>
              <div style={{ background: "#eee", padding: 6, margin: 5 }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} style={{ display: "flex", padding: 10 }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flex: 1, padding: 10 }}
          />
          <button style={{ marginLeft: 10 }}>Send</button>
        </form>

      </div>
    </div>
  );
};

export default Chat;