import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://127.0.0.1:5000"); // match your Flask backend

const Chat = ({ username, role }) => {
  const [currentRoom, setCurrentRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const ALL_ROOMS = [
    "General Chat",
    "Classes Chat",
    "Announcement Chat",
    "Teachers & Parents",
    "Teachers Only"
  ];

  useEffect(() => {
    if (role === "teacher") setRooms(ALL_ROOMS);
    else if (role === "parent") setRooms(["General Chat","Announcement Chat","Teachers & Parents"]);
  }, [role]);

  // Listen for messages
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);

      // Notification for other users
      if (msg.username !== username && Notification.permission === "granted") {
        new Notification(`${msg.username}:`, { body: msg.text });
      }
    });

    socket.on("online_users", (users) => setOnlineUsers(users));

    Notification.requestPermission();

    return () => {
      socket.off("message");
      socket.off("online_users");
    };
  }, [username]);

  const joinRoom = (room) => {
    if (currentRoom) socket.emit("leave_room", { username });

    setCurrentRoom(room);
    setMessages([]);
    socket.emit("join_room", { username, room, role });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const myMsg = { username, role, text: message, time: new Date().toISOString() };
    setMessages((prev) => [...prev, myMsg]);

    socket.emit("send_message", { ...myMsg });
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="rooms">
        {rooms.map((r) => (
          <button
            key={r}
            className={`room-btn ${currentRoom === r ? "active" : ""}`}
            onClick={() => joinRoom(r)}
          >
            {r} {messages.filter(m => m.room === r && !m.read).length > 0 ? "🔴" : ""}
          </button>
        ))}
      </div>

      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.username === username ? "me" : "other"}`}>
              {!msg.system && <div className="name">{msg.username} ({msg.role})</div>}
              <div className="bubble">{msg.text} {msg.file_name && <a href={`/download/${msg.file_name}`} target="_blank">{msg.file_name}</a>}</div>
              <div className="time">{new Date(msg.time).toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}</div>
            </div>
          ))}
        </div>

        <form className="input-area" onSubmit={sendMessage}>
          <input type="text" placeholder="Type a message" value={message} onChange={e => setMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;