// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from "socket.io-client";

/* ALL COMPONENTS (UNCHANGED) */
import MpesaPayment from './components/MpesaPayment';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Gallery from './components/Gallery';
import News from './components/News';
import Boarding from './components/Boarding';
import Classes from './components/Classes';
import ContactUs from './components/ContactUs';
import Curriculum from './components/Curriculum';
import Services from './components/Services';
import Sports from './components/Sports';
import StudentDashboard from './components/StudentDashboard';
import HomePage from './components/HomePage';
import StudentLife from './components/StudentLife';
import Admissions from './components/Admissions';
import Alumni from './components/Alumni';
import Academics from './components/Academics';
import Teachers from './components/Teachers';
import NewsLetter from './components/NewsLetter';
import UpcomingEvents from './components/UpcomingEvents';
import SchoolEvents from './components/SchoolEvents';
import Parents from './components/Parents';
import OpeningRequirements from './components/OpeningRequirements';
import KcsePredictions from './components/KcsePredictions';
import NewFacilities from './components/NewFacilities';
import HolidayAssignment from './components/HolidayAssignment';
import MainMenu from './components/MainMenu';
import GetFiles from './components/GetFiles';
import AddFiles from './components/AddFiles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import TeacherDashboard from './components/TeacherDashboard';
import TeacherSignUp from './components/TeacherSignUp';
import PrincipalDashboard from './components/PrincipalDashboard';
import PhysicsPage from "./components/Physics";
import Chemistry from "./components/Chemistry";
import WoodTechnology from "./components/WoodTechnology";
import TheatreFilm from "./components/TheatreFilm";
import PowerMechanics from "./components/PowerMechanics";
import SportsRecreation from "./components/SportsRecreation";
import PhysicalEducation from "./components/PhysicalEducation";
import MusicDance from "./components/MusicDance";
import MediaTechnology from "./components/MediaTechnology";
import MarineTechnology from "./components/MarineTechnology";
import Mandarine from "./components/Mandarine";
import Kiswahili from "./components/Kiswahili";
import Ict from "./components/Ict";
import HomeScience from "./components/HomeScience";
import HistoryCitizenship from "./components/HistoryCitizenship";
import GeographyPage from "./components/Geography";
import FrenchPage from "./components/French";
import FineArts from "./components/FineArts";
import Mathematics from "./components/Mathematics";
import English from "./components/English";
import GeneralScience from "./components/GeneralScience";

/* ================= API ================= */
const API_BASE_URL = "https://butere-boys-flask-j2x3.onrender.com";

/* ================= SOCKET FIX (PRODUCTION SAFE) ================= */
const socket = io("https://butere-boys-flask-j2x3.onrender.com", {
  transports: ["polling", "websocket"],
  withCredentials: true,
  reconnection: true,
  reconnectionAttempts: 5,
  timeout: 10000
});

const ALL_ROOMS = ["General", "Classes", "Announcements", "Teachers Only"];

/* ================= CHAT ================= */
function Chat({ username, role }) {
  const [currentRoom, setCurrentRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (role === "teacher") setRooms(ALL_ROOMS);
    else if (role === "parent") setRooms(["General", "Announcements"]);
    else setRooms(["General"]);
  }, [role]);

  /* FIXED SOCKET LISTENER */
  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const joinRoom = (room) => {
    if (!username) return;

    if (currentRoom) {
      socket.emit("leave_room", { username, room: currentRoom });
    }

    setCurrentRoom(room);
    setMessages([]);

    socket.emit("join_room", {
      username,
      room,
      role
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim() || !currentRoom) return;

    const msgData = {
      username,
      room: currentRoom,
      text: message,
      role,
      time: new Date().toISOString()
    };

    socket.emit("send_message", msgData);
    setMessages((prev) => [...prev, msgData]);
    setMessage("");
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Chat Rooms</h4>

      <div className="d-flex flex-wrap mb-3">
        {rooms.map((r, i) => (
          <button
            key={i}
            className={`btn me-2 mb-2 ${currentRoom === r ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => joinRoom(r)}
          >
            {r}
          </button>
        ))}
      </div>

      {currentRoom && (
        <>
          <h5>Room: {currentRoom}</h5>

          <div className="border p-3 mb-3" style={{ height: 300, overflowY: "scroll" }}>
            {messages.map((m, i) => (
              <div key={i}>
                <b>{m.username}:</b> {m.text}
              </div>
            ))}
          </div>

          <form className="d-flex" onSubmit={sendMessage}>
            <input
              className="form-control me-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
            />
            <button className="btn btn-success">Send</button>
          </form>
        </>
      )}
    </div>
  );
}

/* ================= APP ================= */
function App() {
  const [chatLoginVisible, setChatLoginVisible] = useState(true);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [chatActive, setChatActive] = useState(false);

  const [loginData, setLoginData] = useState({
    usernameInput: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const loginToChat = () => {
    if (!loginData.usernameInput || !role) {
      alert("Fill all fields");
      return;
    }

    setUsername(loginData.usernameInput);
    setChatActive(true);
    setChatLoginVisible(false);
  };

  const sendContactMessage = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/api/contact`, {
        message: `${username}: ${message}`
      });

      setMessage("");
      alert("Message sent!");
    } catch {
      alert("Failed to send message");
    }
  };

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100 container-fluid p-0">

        {/* NAVBAR (UNCHANGED) */}
        <header className="bg-danger text-success">
          <nav className="navbar navbar-expand-lg navbar-dark container py-2">

            <Link className="navbar-brand d-flex align-items-center" to="/homepage">
              <img src="/images/Logo.jpg" alt="Logo" style={{ height: "60px", width: "100px" }} className="me-2" />
              Butere Boys
            </Link>

            <div className="navbar-nav ms-auto flex-wrap">
              <Link className="nav-link text-white" to="/homepage">Home</Link>
              <Link className="nav-link text-white" to="/AddFiles">Upload</Link>
              <Link className="nav-link text-white" to="/PrincipalDashboard">Principal</Link>
              <Link className="nav-link text-white" to="/signup">Signup</Link>
              <Link className="nav-link text-white" to="/classes">Classes</Link>
              <Link className="nav-link text-white" to="/news">News</Link>
                <Link className="nav-link text-white" to="/GetFiles">GetFiles</Link>
                  <Link className="nav-link text-white" to="/TeacherDashboard">Teacher</Link>
                    <Link className="nav-link text-white" to="/StudentDashboard">student</Link>
              <Link className="nav-link text-white" to="/Chat" onClick={() => setChatLoginVisible(true)}>Chat</Link>
              <Link className="nav-link text-white" to="/gallery">Gallery</Link>
              <Link className="nav-link text-white" to="/sports">Sports</Link>
              <Link className="nav-link text-white" to="/curriculum">Academics</Link>
            </div>

          </nav>
        </header>

        {/* ROUTES (🔥 ALL YOUR ORIGINAL ROUTES KEPT) */}
        <div className="container mt-4 flex-grow-1">
          <Routes>

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/studentlife" element={<StudentLife />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/upcomingevents" element={<UpcomingEvents />} />
            <Route path="/schoolevents" element={<SchoolEvents />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/ict" element={<Ict />} />
            <Route path="/MpesaPayment" element={<MpesaPayment />} />
            <Route path="/openingrequirements" element={<OpeningRequirements />} />
            <Route path="/kcsepredictions" element={<KcsePredictions />} />
            <Route path="/newfacilities" element={<NewFacilities />} />
            <Route path="/holidayassignment" element={<HolidayAssignment />} />
            <Route path="/mainmenu" element={<MainMenu />} />
            <Route path="/getfiles" element={<GetFiles />} />
            <Route path="/addfiles" element={<AddFiles />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/teacherdashboard" element={<TeacherDashboard />} />
            <Route path="/teachersignup" element={<TeacherSignUp />} />
            <Route path="/principaldashboard" element={<PrincipalDashboard />} />
            <Route path="/physics" element={<PhysicsPage />} />
            <Route path="/chemistry" element={<Chemistry />} />
            <Route path="/generalscience" element={<GeneralScience />} />
            <Route path="/wood-technology" element={<WoodTechnology />} />
            <Route path="/theatre-film" element={<TheatreFilm />} />
            <Route path="/power-mechanics" element={<PowerMechanics />} />
            <Route path="/sports-recreation" element={<SportsRecreation />} />
            <Route path="/physical-education" element={<PhysicalEducation />} />
            <Route path="/music-dance" element={<MusicDance />} />
            <Route path="/media-technology" element={<MediaTechnology />} />
            <Route path="/marine-technology" element={<MarineTechnology />} />
            <Route path="/mandarine" element={<Mandarine />} />
            <Route path="/kiswahili" element={<Kiswahili />} />
            <Route path="/french" element={<FrenchPage />} />
            <Route path="/english" element={<English />} />
            <Route path="/home-science" element={<HomeScience />} />
            <Route path="/history-citizenship" element={<HistoryCitizenship />} />
            <Route path="/geography" element={<GeographyPage />} />
            <Route path="/fine-arts" element={<FineArts />} />
            <Route path="/mathematics" element={<Mathematics />} />

            <Route path="/Chat" element={
              chatActive ? <Chat username={username} role={role} /> : null
            } />

          </Routes>

          {/* CHAT LOGIN */}
          {chatLoginVisible && !chatActive && (
            <div className="card p-3 mb-3">
              <h4>Login to Chat</h4>

              <input className="form-control mb-2" placeholder="Username"
                onChange={(e) => setLoginData({ ...loginData, usernameInput: e.target.value })}
              />

              <select className="form-select mb-2" onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
              </select>

              <button className="btn btn-primary" onClick={loginToChat}>
                Enter Chat
              </button>
            </div>
          )}
        </div>

        {/* FOOTER (UNCHANGED FULL SECTION) */}
        <section className="row bg-success p-3 mt-4">
          <div className="col-md-4 text-center text-white">
            <h3>About Us</h3>
            <p className="text-dark">
              We are committed to excellence in education and student development.
            </p>
          </div>

          <div className="col-md-4 text-center text-white">
            <h3>Contact Us</h3>

            <form onSubmit={sendContactMessage}>
              <input className="form-control mb-2" value={username}
                onChange={(e) => setUsername(e.target.value)} placeholder="Your username"
              />

              <textarea className="form-control mb-2" value={message}
                onChange={(e) => setMessage(e.target.value)} placeholder="Type message..."
              />

              <button className="btn btn-dark w-100">Send</button>
            </form>
          </div>

          <div className="col-md-4 text-center text-white">
            <h3>Stay Connected</h3>
            <h4>Visit our websites @</h4>

<div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
  <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/fb.webp" alt="Facebook" width="40" />
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/IG.webp" alt="Instagram" width="40" />
  </a>

  <a href="https://www.x.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/Twitter.webp" alt="X (Twitter)" width="40" />
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/utube.webp" alt="YouTube" width="40" />
  </a>
</div>
          </div>
        </section>

        <footer className="bg-dark text-white text-center p-3">
          Developed by Butere Boys High School © 2026
        </footer>

      </div>
    </Router>
  );
}

export default App;