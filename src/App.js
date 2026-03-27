import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
import HomePage from './components/HomePage';
import StudentLife from './components/StudentLife';
import Admissions from './components/Admissions';
import Alumni from './components/Alumni';
import Academics from './components/Academics';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">

        {/* NAVBAR WITH LOGO */}
        <header className="bg-danger text-white shadow">
          <nav className="container d-flex justify-content-between align-items-center flex-wrap py-2">

            {/* Logo + Links */}
            <div className="d-flex align-items-center flex-wrap">
              <img 
                src="/images/Logo.jpg"       
                alt="Logo" 
                className="me-3"
                style={{ height: '60px', width: '100px' }} 
              />

              <Link className="btn btn-success m-1" to="/HomePage">Home</Link>
              <Link className="btn btn-success m-1" to="/signup">Signup</Link>
              <Link className="btn btn-success m-1" to="/signin">Sign In</Link>
              <Link className="btn btn-success m-1" to="/classes">Classes</Link>
              <Link className="btn btn-success m-1" to="/boarding">Boarding</Link>
              <Link className="btn btn-success m-1" to="/news">News</Link>
              <Link className="btn btn-success m-1" to="/gallery">Gallery</Link>
              <Link className="btn btn-success m-1" to="/contactus">Contact</Link>
              <Link className="btn btn-success m-1" to="/sports">Sports</Link>
              {/* Academics now points to Curriculum page */}
              <Link className="btn btn-success m-1" to="/curriculum">Academics</Link>
              <Link className="btn btn-success m-1" to="/services">Services</Link>
            </div>

            {/* SEARCH FORM */}
            <form className="d-flex mt-2 mt-md-0">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search..." 
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>

          </nav>
        </header>

        {/* SECONDARY NAVBAR / BRAND */}
        <section className="row">
          <div className="col-md-12">
            <nav className="navbar bg-light navbar-light navbar-expand-md">
              <a href="#" className="navbar-brand">
                <b>BUTERE BOYS (<i>EXODUS</i>)</b>
              </a>
            </nav>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/Academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/studentlife" element={<StudentLife />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/curriculum" element={<Curriculum />} /> {/* Academics points here */}
            <Route path="/pay" element={<MpesaPayment />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/boarding" element={<Boarding />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/news" element={<News />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
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
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-2" />
              <textarea placeholder="Leave a comment" className="form-control mb-2"></textarea>
              <input type="submit" className="btn btn-outline-light" value="Send Message" />
            </form>
          </div>

          <div className="col-md-4 text-center text-white">
            <h3>Stay Connected</h3>
            <p>Facebook</p>
            <img src="images/fb.png" alt="Facebook" className="social-icon" />
            <p>Instagram</p>
            <img src="images/image (18).png" alt="Instagram" className="social-icon" />
            <p>Twitter</p>
            <img src="images/x.png" alt="Twitter" className="social-icon" />
          </div>
        </section>

        <footer className="bg-dark p-3 mt-auto">
          <p className="text-white text-center">
            Developed by William &copy; 2026 All rights reserved
          </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;