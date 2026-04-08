// src/App.js
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

// Components
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
import Grade10 from './components/Grade10';
import Grade11 from './components/Grade11';
import Grade12 from './components/Grade12';
import Grade13 from './components/Grade13';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
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

// ---------------- CHAT SOCKET.IO ----------------
const socket = io("http://127.0.0.1:5000");

function Chat({ username, role }) {
  const [currentRoom, setCurrentRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);

  const ALL_ROOMS = ["General", "Classes", "Announcements", "Teachers Only"];

  useEffect(() => {
    if (role === "teacher") setRooms(ALL_ROOMS);
    else if (role === "parent") setRooms(["General", "Announcements"]);
  }, [role]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("message");
  }, []);

  const joinRoom = (room) => {
    if (currentRoom) socket.emit("leave_room", { username });
    setCurrentRoom(room);
    setMessages([]);
    socket.emit("join_room", { username, room });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !currentRoom) return;

    const prefix = role === "teacher" ? "(Teacher)" : "(Parent)";
    const formattedMessage = `${username} ${prefix}: ${message}`;

    setMessages((prev) => [...prev, formattedMessage]);
    socket.emit("send_message", {
      username,
      room: currentRoom,
      message: formattedMessage
    });

    setMessage("");
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Chat Rooms</h4>

      <div className="d-flex mb-3 flex-wrap">
        {rooms.map((room, idx) => (
          <button
            key={idx}
            className={`btn me-2 mb-2 ${currentRoom === room ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => joinRoom(room)}
          >
            {room}
          </button>
        ))}
      </div>

      {currentRoom && (
        <>
          <h5>Room: {currentRoom}</h5>

          <div className="border p-3 mb-3" style={{ height: "300px", overflowY: "scroll" }}>
            {messages.map((msg, i) => <div key={i}>{msg}</div>)}
          </div>

          <form className="d-flex" onSubmit={sendMessage}>
            <input
              className="form-control me-2"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-success" type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
}

// ---------------- APP ----------------
function App() {
  const [chatLoginVisible, setChatLoginVisible] = useState(true);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [chatActive, setChatActive] = useState(false);
  const [message, setMessage] = useState("");

  const STUDENT_PASSWORD = "student";
  const TEACHER_PASSWORD = "teacher";

  const loginToChat = () => {
    const passwordInput = document.getElementById("chat-password").value;
    const nameInput = document.getElementById("chat-username").value.trim();

    if (!nameInput) return alert("Enter a username");

    setUsername(nameInput);

    if (role === "parent" && passwordInput === STUDENT_PASSWORD) {
      alert("Parent login successful!");
      setChatLoginVisible(false);
      setChatActive(true);
    } else if (role === "teacher" && passwordInput === TEACHER_PASSWORD) {
      alert("Teacher login successful!");
      setChatLoginVisible(false);
      setChatActive(true);
    } else {
      alert("Invalid password for selected role!");
    }
  };

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100 container-fluid p-0">

        {/* NAVBAR */}
        <header className="bg-danger text-white shadow">
          <nav className="navbar navbar-expand-lg navbar-dark container py-2">

            <Link className="navbar-brand d-flex align-items-center" to="/homepage">
              <img
                src="/images/Logo.jpg"
                alt="Logo"
                className="me-2"
                style={{ height: '60px', width: '50px' }}
              />
              Butere Boys
            </Link>

            {/* TOGGLE BUTTON */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* COLLAPSIBLE NAV */}
            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="navbar-nav ms-auto flex-wrap">
                <Link className="nav-link" to="/homepage">Home</Link>
                <Link className="nav-link" to="/AddFiles">Upload</Link>
                <Link className="nav-link" to="/PrincipalDashboard">Principal Dashboard</Link>
                <Link className="nav-link" to="/signup">Signup</Link>
                <Link className="nav-link" to="/classes">Classes</Link>
                <a className='nav-link' href='#contact-form'>Contact</a>
                <Link className="nav-link" to="/news">News</Link>
                <Link className="nav-link" to="/Chat" onClick={()=>setChatLoginVisible(true)}>Chat</Link>
                <Link className="nav-link" to="/gallery">Gallery</Link>
                <Link className="nav-link" to="/sports">Sports</Link>
                <Link className="nav-link" to="/curriculum">Academics</Link>
              </div>
            </div>

          </nav>
        </header>

        <h3 className='text-start p-2'>Butere Boys(<i> EXODUS</i>)</h3>

        <div className="container mt-4 flex-grow-1">

          <Routes>
            <Route path="/OpeningRequirements" element={<OpeningRequirements />} />
            <Route path="/NewFacilities" element={<NewFacilities/>} />
            <Route path="/KcsePredictions" element={<KcsePredictions />} />
            <Route path="/Parents" element={<Parents />} />
            <Route path="/Academics" element={<Academics />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/HolidayAssignment" element={<HolidayAssignment/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/StudentDashboard" element={<StudentDashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/AddFiles" element={<AddFiles/>} />
            <Route path="/GetFiles" element={<GetFiles />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/news" element={<News />} />
            <Route path="/Grade10" element={<Grade10 />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Layout" element={<Layout />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/studentlife" element={<StudentLife />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/MainMenu" element={<MainMenu/>} />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/upcomingevents" element={<UpcomingEvents />} />
            <Route path="/schoolevents" element={<SchoolEvents />} />
            <Route path="/pay" element={<MpesaPayment />} />
            <Route path="/Grade11" element={<Grade11 />} />
            <Route path="/Grade12" element={<Grade12 />} />
            <Route path="/Grade13" element={<Grade13 />} />
            <Route path="/Form3" element={<Form3 />} />
            <Route path="/Form4" element={<Form4 />} />
            <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
            <Route path="/TeacherSignUp" element={<TeacherSignUp />} />
            <Route path="/PrincipalDashboard" element={<PrincipalDashboard/>} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/wood-technology" element={<WoodTechnology />} />
            <Route path="/theatre-film" element={<TheatreFilm />} />
            <Route path="/sports-recreation" element={<SportsRecreation />} />
            <Route path="/power-mechanics" element={<PowerMechanics />} />
            <Route path="/physics" element={<PhysicsPage />} />
            <Route path="/chemistry" element={<Chemistry />} />
            <Route path="/physical-education" element={<PhysicalEducation />} />
            <Route path="/music-dance" element={<MusicDance />} />
            <Route path="/media-technology" element={<MediaTechnology />} />
            <Route path="/marine-technology" element={<MarineTechnology />} />
            <Route path="/mandarine" element={<Mandarine />} />
            <Route path="/kiswahili" element={<Kiswahili />} />
            <Route path="/ict" element={<Ict />} />
            <Route path="/home-science" element={<HomeScience />} />
            <Route path="/history-citizenship" element={<HistoryCitizenship />} />
            <Route path="/geography" element={<GeographyPage />} />
            <Route path="/general-science" element={<GeneralScience />} />
            <Route path="/french" element={<FrenchPage />} />
            <Route path="/fine-arts" element={<FineArts />} />
            <Route path="/mathematics" element={<Mathematics />} />
            <Route path="/Chat" element={chatActive ? <Chat username={username} role={role}/> : null} />
            <Route path="/english" element={<English />} />
          </Routes>

          {chatLoginVisible && !chatActive && (
            <div className="card p-3 border border-primary mb-3">
              <h4>Login to Chat</h4>

              <input
                className="form-control mb-2"
                placeholder="Enter username"
                id="chat-username"
              />

              <select
                className="form-select mb-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
              </select>

              <input
                type="password"
                className="form-control mb-2"
                placeholder="Enter shared password"
                id="chat-password"
              />

              <button className="btn btn-primary" onClick={loginToChat}>
                Login
              </button>
            </div>
          )}

        </div>

        {/* FOOTER */}
        <section className="row bg-success p-3 mt-4">
          <div className="col-md-4 text-center text-white">
            <h3>About Us</h3>
            <p className="text-dark">
              We are committed to excellence in education and student development.
            </p>
          </div>

          <div className="col-md-4 text-center text-white">
            <h3>Contact Us</h3>
            <form
              id="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();

                if (!username?.trim()) {
                  alert("Please enter your username before sending the message.");
                  return;
                }

                if (!message?.trim()) {
                  alert("Message cannot be empty.");
                  return;
                }

                try {
                  await axios.post("http://127.0.0.1:5000/api/contact", {
                    message: `${username}: ${message}`,
                  });

                  alert("Message sent successfully!");
                  setMessage("");
                } catch (err) {
                  alert("Failed to send message. Try again.");
                }
              }}
            >
              <input
                type="text"
                placeholder="Your Username"
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control mb-2"
                placeholder="Type your message..."
              />

              <button className="btn btn-dark w-100">Send</button>
            </form>
          </div>

          <div className="col-md-4 text-center text-white">
            <h3>Stay Connected</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </section>

        <footer className="bg-dark p-3 mt-auto">
          <p className="text-white text-center">
            Developed by Butere Boys High School © 2026
          </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;