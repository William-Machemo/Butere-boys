import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// ⚠️ Connect safely
const socket = io("https://butere-boys-flask-j2x3.onrender.com", {
  transports: ["websocket", "polling"], // fallback support
});

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

  // Set rooms based on role
  useEffect(() => {
    if (role === "teacher") setRooms(ALL_ROOMS);
    else if (role === "parent")
      setRooms(["General Chat", "Announcement Chat", "Teachers & Parents"]);
  }, [role]);

  // Socket listeners
  useEffect(() => {
    // Receive messages
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);

      // Notification
      if (
        msg.username !== username &&
        Notification.permission === "granted"
      ) {
        new Notification(`${msg.username}:`, { body: msg.text });
      }
    });

    // Receive online users
    socket.on("online_users", (users) => {
      setOnlineUsers(users);
    });

    // Request notification permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    return () => {
      socket.off("message");
      socket.off("online_users");
    };
  }, [username]);

  // Join room
  const joinRoom = (room) => {
    if (!username) return;

    if (currentRoom) {
      socket.emit("leave_room", { username });
    }

    setCurrentRoom(room);
    setMessages([]);

    socket.emit("join_room", { username, room, role });
  };

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !currentRoom) return;

    const myMsg = {
      username,
      role,
      text: message,
      room: currentRoom,
      time: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, myMsg]);

    socket.emit("send_message", myMsg);

    setMessage("");
  };

  return (
    <div className="chat-container d-flex">

      {/* ROOMS */}
      <div className="rooms p-2 border-end" style={{ minWidth: "200px" }}>
        <h5>Rooms</h5>
        {rooms.map((r) => (
          <button
            key={r}
            className={`btn w-100 mb-2 ${
              currentRoom === r ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => joinRoom(r)}
          >
            {r}
          </button>
        ))}

        {/* ONLINE USERS */}
        <div className="mt-4">
          <h6>Online Users</h6>
          {onlineUsers.length === 0 ? (
            <p className="text-muted">No users online</p>
          ) : (
            onlineUsers.map((user, i) => (
              <div key={i} className="small">
                🟢 {user}
              </div>
            ))
          )}
        </div>
      </div>

      {/* CHAT WINDOW */}
      <div className="chat-window flex-grow-1 p-3 d-flex flex-column">

        {/* MESSAGES */}
        <div className="messages flex-grow-1 mb-3" style={{ overflowY: "auto" }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 ${
                msg.username === username ? "text-end" : "text-start"
              }`}
            >
              {!msg.system && (
                <small className="text-muted">
                  {msg.username} ({msg.role})
                </small>
              )}
              <div className="p-2 bg-light rounded">
                {msg.text}
                {msg.file_name && (
                  <div>
                    <a
                      href={`https://william9605.pythonanywhere.com/download/${msg.file_name}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {msg.file_name}
                    </a>
                  </div>
                )}
              </div>
              <small className="text-muted">
                {new Date(msg.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <form className="d-flex" onSubmit={sendMessage}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;