// src/App.js
import './App.css';
import { Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import VolleyBall from './components/VolleyBall';
import TableTennis from './components/TableTennis';
import Rugby from './components/Rugby';
import AnnualMeeting from './components/AnnualMeeting';
import SchoolVideos from './components/SchoolVideos';
import NetBall from './components/NetBall';
import Hockey from './components/Hockey';
import HandBall from './components/HandBall';
import Chat from './components/Chat';
import FootBall from './components/FootBall';
import BasketBall from './components/BasketBall';
import Badminton from './components/Badminton';
import Athletics from './components/Athletics';
import Band from './components/Band';
import Scouts from './components/Scouts';
import Clubs from './components/Clubs';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


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

function App() {

const [username, setUsername] = useState("");
const [message, setMessage] = useState("");


  const sendContactMessage = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/api/contact`, {
        username: username,
        message: message
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
<header className="bg-danger text-success">
  <nav className="navbar navbar-expand-lg navbar-dark container py-2">

    {/* Brand */}
    <Link className="navbar-brand d-flex align-items-center" to="/homepage">
      <img
        src="/images/Logo.jpg"
        alt="Logo"
        style={{ height: "40px", width: "60px" }}
        className="me-2"
      />
      Butere Boys
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* COLLAPSIBLE MENU */}
    <div className="collapse navbar-collapse" id="mainNavbar">

      {/* Wrapper to hide overflow */}
      <div className="overflow-hidden w-100">

        {/* Auto scrolling nav */}
        <div className="navbar-nav flex-row auto-scroll">

<Link className="nav-link text-white px-3" to="/homepage">Home</Link>
<Link className="nav-link text-white px-3" to="/AddFiles">Upload</Link>
<Link className="nav-link text-white px-3" to="/PrincipalDashboard">Principal</Link>
<Link className="nav-link text-white px-3" to="/signup">Signup</Link>
<Link className="nav-link text-white px-3" to="/classes">Classes</Link>
<Link className="nav-link text-white px-3" to="/news">News</Link>
<Link className="nav-link text-white px-3" to="/GetFiles">Assignments</Link>
<Link className="nav-link text-white px-3" to="/Sports">Sports</Link>
<Link className="nav-link text-white px-3" to="/StudentDashboard">Students</Link>


<Link className="nav-link text-white px-3" to="/AnnualMeeting">AGM Meeting</Link>
<Link className="nav-link text-white px-3" to="/Admissions">Admission</Link>
<Link className="nav-link text-white px-3" to="/gallery">Gallery</Link>
<Link className="nav-link text-white px-3" to="/curriculum">Academics</Link>

<Link className="nav-link text-white px-3" to="/homepage">Home</Link>
<Link className="nav-link text-white px-3" to="/AddFiles">Upload</Link>
<Link className="nav-link text-white px-3" to="/PrincipalDashboard">Principal</Link>
<Link className="nav-link text-white px-3" to="/signup">Signup</Link>
<Link className="nav-link text-white px-3" to="/classes">Classes</Link>
<Link className="nav-link text-white px-3" to="/Clubs">Clubs</Link>
<Link className="nav-link text-white px-3" to="/news">News</Link>
<Link className="nav-link text-white px-3" to="/GetFiles">Assignments</Link>
<Link className="nav-link text-white px-3" to="/Sports">Sports</Link>
<Link className="nav-link text-white px-3" to="/Dashboard">AI</Link>
      
<Link className="nav-link text-white px-3" to="/Admissions">Admission</Link>
<Link className="nav-link text-white px-3" to="/gallery">Gallery</Link>
<Link className="nav-link text-white px-3" to="/curriculum">Academics</Link>
<Link className="nav-link text-white px-3" to="/SchoolVideos">School Videos</Link>
<Link className="nav-link text-white px-3" to="/Chat">Chatboard</Link>


        </div>

      </div>
    </div>

  </nav>
</header>
<br></br>
<h3 className="text-center">
  <span className="bg-success text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    Welcome to Butere Boys School
  </span>
</h3>



        {/* ROUTES (🔥 ALL YOUR ORIGINAL ROUTES KEPT) */}
       <div className="container-fluid mt-4 flex-grow-1 px-0">
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/boarding" element={<Boarding />} />
              <Route path="/scouts" element={<Scouts/>} />
               <Route path="/clubs" element={<Clubs/>} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/band" element={<Band />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/studentlife" element={<StudentLife />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/alumni" element={<Alumni />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/annualmeeting" element={<AnnualMeeting />} />

             <Route path="/rugby" element={<Rugby/>} />
               <Route path="/football" element={<FootBall />} />
                 <Route path="/handball" element={<HandBall/>} />
               <Route path="/hockey" element={<Hockey/>} />
               <Route path="/netball" element={<NetBall />} />
                 <Route path="/tabletennis" element={<TableTennis />} />
                   <Route path="/volleyball" element={<VolleyBall />} />
                   <Route path="/basketball" element={<BasketBall />} />
                 <Route path="/athletics" element={<Athletics/>} />
               <Route path="/badminton" element={<Badminton/>} />


            <Route path="/academics" element={<Academics />} />
             <Route path="/schoolvideos" element={<SchoolVideos />} />
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

           <Route
  path="/holidayassignment"
  element={
    <ProtectedRoute>
      <HolidayAssignment />
    </ProtectedRoute>
  }
/>
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
             <Route path="/chat" element={<Chat />} />


     

          </Routes>

        
    

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
    <img src="/images/fb.webp" alt="Facebook" width="40" height="40" />
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/IG.webp" alt="Instagram" width="40" height="40" />
  </a>

  <a href="https://www.x.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/Twitter.webp" alt="X (Twitter)" width="40" height="40" />
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener">
    <img src="/images/utube.webp" alt="YouTube" width="40" height="40" />
  </a>
</div>
          </div>
        </section>

        <footer className="bg-dark text-white text-center p-3">
          Developed by William @ Sanny Jones © 2026
        </footer>
      </div>
      </div>
    </Router>

  );
}

export default App;