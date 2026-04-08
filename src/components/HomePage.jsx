import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const announcements = [
  "Admissions Open for 2026",
  "KCSE Results Released",
  "Upcoming School Events",
  "Term Reopening Dates Announced",
  "End Term Newsletter"
  
];


const HomePage = () => {
  return (
    <div className="container-fluid">
      <h1><b>Butere Boys High School</b></h1>

      {/* HERO SECTION */}
      <div
        className="text-white d-flex align-items-center justify-content-center text-center mb-4"
        style={{
          backgroundImage: "url('/images/imageE.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          borderRadius: "5px",
          gap: "20px"
        }}
      >

        {/* SCHOOL ANTHEM */}
        <div className="bg-dark bg-opacity-50 p-3 rounded text-white">
          <h4 className="text-danger"><b>SCHOOL ANTHEM</b></h4>
          <p>
            <b>
              <i>
                In the tower of a strong ambition, we take a flight with a precious education, 
                success breeds success in succession high the sky, our reputation shield, 
                raising competent and responsible citizens, through quality education our mission, 
                to be exemplary school, all round the vision, ooh Lord lead us to our destination, 
                glory Butere boys, we're conquerors, purposeful, and diligent leaders, 
                ever shine in confident leaders, strive to, our future ever bright, 
                by discipline for excellence we're driven, through Exodus we be fasten, 
                we store in courage our golden anchor, we stand never to be beaten.
              </i>
            </b>
          </p>
        </div>

        {/* IMPORTANT NOTE */}
        <div className="bg-dark bg-opacity-50 p-3 rounded text-white">
          <h4 className="text-warning"><b>IMPORTANT NOTE</b></h4>
          <p>
            <b>
              The school aims to prepare students to make a positive contribution to society and acquire values such as 
              national patriotism, self-respect, self-reliance, cooperation, adaptability, a sense of purpose, and self-discipline. 
              News Promote the school as a leading institution dedicated to empowering young students through quality education, 
              discipline, and leadership development. Highlight the school's commitment to nurturing academic excellence and 
              strong moral values to prepare students for future success.
            </b>
          </p>
        </div>

      </div>


      {/* CAROUSEL + SIDEBAR */}
      <section className="row my-4">

        {/* CAROUSEL */}
        <div className="col-md-9">
          <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src="images/1743963068160~2.jpg" className="d-block w-100 rounded" height="400" alt="slide1" />
              </div>

              <div className="carousel-item">
                <img src="images/imageB.jpg" className="d-block w-100 rounded" height="400" alt="slide2" />
              </div>

              <div className="carousel-item">
                <img src="images/imageC.jpg" className="d-block w-100 rounded" height="400" alt="slide3" />
              </div>

              <div className="carousel-item">
                <img src="images/imageE.jpg" className="d-block w-100 rounded" height="400" alt="slide4" />
              </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="col-md-3 bg-light p-4 rounded">
          <h5 className="fw-bold border-bottom pb-2">Announcements</h5>
          <ul className="list-unstyled mt-3">
            {announcements.map((item, index) => (
              <li key={index} className="mb-2">📢 {item}</li>
            ))}
          </ul>
        </div>

      </section>

      {/* ABOUT */}
      <section className="py-5 px-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p>
              A leading institution dedicated to empowering young students through
              quality education, discipline, and leadership development.
            </p>
          </div>

          <div className="col-md-6">
            <div className="bg-light p-4 shadow-sm rounded">
              <h5 className="fw-bold">Principal's Message</h5>
              <p>
                We nurture academic excellence and strong moral values to
                prepare students for future success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <marquee behavior="" direction="">
      <section className="pb-5">
         
        <div className="row text-center">
            
          <div className="col-md-3 mb-3">
            <Link className="btn btn-success w-100 p-3" to="/Admissions">Admission</Link>
          </div>

          <div className="col-md-3 mb-3">
            <Link className="btn btn-success w-100 p-3" to="/academics">Academics</Link>
          </div>

          <div className="col-md-3 mb-3">
            <Link className="btn btn-success w-100 p-3" to="/StudentLife">Student Life</Link>
          </div>
           
          <div className="col-md-3 mb-3">
            <Link className="btn btn-success w-100 p-3" to="/Alumni">Alumni</Link>
          </div>
          

        </div>
      </section>
        </marquee>

      {/* NEWS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Latest News</h2>

          <div className="row">

            <div className="col-md-4 mb-3">
              <Link to="/Sports" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1770395995199.jpg" className="card-img-top" alt="news1" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Sports Day Highlights</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 mb-3">
              <Link to="/Academics" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1770395360975.jpg" className="card-img-top" alt="news2" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Academic Excellence</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 mb-3">
              <Link to="/NewFacilities" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1769613169909.jpg" className="card-img-top" alt="news3" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">New Facilities</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>


      
      <section className="bg-light py-5">
        <div className="container">
        

          <div className="row">

            <div className="col-md-4 mb-3">
              <Link to="/KcsePredictions" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1770395995199.jpg" className="card-img-top" alt="news1" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">KCSE Prediction Questions</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 mb-3">
              <Link to="/OpeningRequirements" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1770395360975.jpg" className="card-img-top" alt="news2" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Opening Date & Requirements</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 mb-3">
              <Link to="/GetFiles" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1769613169909.jpg" className="card-img-top" alt="news3" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title"> Holiday Assignment</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
      
      <section className="bg-light py-5">
        <div className="container">
        

          <div className="row">

            <div className="col-md-4 mb-3">
              <Link to="/Admissions" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1770395995199.jpg" className="card-img-top" alt="news1" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Admission open for 2026</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 mb-3">
              <Link to="/NewsLetter" style={{ textDecoration: "none", color: "inherit" }}>
 <div className="card shadow-sm h-100">
                  <img src="/images/1770395360975.jpg" className="card-img-top" alt="news2" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">End Term NewsLetter</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 mb-3">
              <Link to="/UpcomingEvents" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-sm h-100">
                  <img src="/images/1769613169909.jpg" className="card-img-top" alt="news3" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Upcoming school events</h5>
                    <p className="card-text text-bg-success p-2">Click to read more...</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;