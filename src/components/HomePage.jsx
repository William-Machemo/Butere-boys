
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const announcements = [
  "Admissions Open for 2026",
  "KCSE Results Released",
  "Upcoming School Events",
  "Term Reopening Dates Announced",
  "End Term Newsletter"
];

const HomePage = () => {
  
   useEffect(() => {
  const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
  const carouselEl = document.querySelector("#mycarousel");

  if (carouselEl) {
    new bootstrap.Carousel(carouselEl, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true,
    });
  }
}, []);

return (
  
  <div className="container-fluid">
   
<p className="text-start text-muted px-3">
Butere Boys High School is a national school located in Butere, Kakamega County, Kenya. 
It is one of the leading boys’ schools in the Western region, well known for its strong academic tradition, discipline, and holistic education approach.
</p>


    {/* Carousel + Card Section */}
    <section className="row">

      {/* CAROUSEL (LEFT) */}
      <div className="col-lg-8 col-md-12 mb-3">
        <div className="carousel slide carousel-fade" id="mycarousel">
          
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="images/1743963068160~2.jpg"
                alt="slide1"
                className="d-block w-100 img-fluid"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="images/imageB.jpg"
                alt="slide2"
                className="d-block w-100 img-fluid"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="images/imageC.jpg"
                alt="slide3"
                className="d-block w-100 img-fluid"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="images/imageE.jpg"
                alt="slide4"
                className="d-block w-100 img-fluid"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>

          </div>

          {/* PREV BUTTON */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* NEXT BUTTON */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>

      {/* CARD (RIGHT) */}
      <div className="col-lg-4 col-md-12">
        <div className="card shadow h-100">
          <div className="card-body">

            <h5 className="text-center mb-3">Top Pages</h5>

            <div className="d-grid gap-2">
       <Link to="/Band" className="btn btn-danger">Band Festival</Link>
            <Link to="/Teachers" className="btn btn-danger">Teachers</Link>
           <Link to="/StudentLife" className="btn btn-danger">Students</Link>
             <Link to="/Alumni" className="btn btn-danger">Alumni</Link>
 <Link to="/Boarding" className="btn btn-danger">Boarding</Link>
              <Link to="/Clubs" className="btn btn-danger">Clubs & Activities</Link>
             
            </div>

          </div>
        </div>
      </div>

    </section>
    <br />
  <p className="text-start text-muted px-3">
The school has consistently produced strong results in the Kenya Certificate of Secondary Education (KCSE) examinations and continues to strive for academic excellence through a dedicated team of teachers and a structured learning environment. 
Students are guided to achieve their full potential through quality teaching, mentorship, and continuous assessment.
</p>

<section className="bg-light py-5 text-center">
  <div className="container" style={{ overflowX: "auto" }}>

    <h1 className="fw-bold mt-3">
      View Our Sports Activities
    </h1>

    <p className="text-muted mt-3">
      Discover talent, teamwork, and excellence through our vibrant sports and Academic programs.
    </p>

    {/* FIXED BUTTON ROW */}
    <div className="mt-4 d-flex justify-content-center align-items-center">

      <Link 
        to="/Sports" 
        className="btn btn-danger me-2"
        style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "5px 9px" }}
      >
        Explore Sports
      </Link>
      <br />
      <Link 
        to="/Curriculum" 
        className="btn btn-danger"
        style={{ whiteSpace: "nowrap", fontSize: "14px", padding: "5px 9px" }}
      >
        Explore Academics
      </Link>

    </div>

  </div>
</section>
      

<p className="text-start text-muted px-3">
Beyond academics, Butere Boys High School is highly active in co-curricular activities including sports, music, drama, scouting, science congress, and debate competitions. 
These programs help learners develop leadership skills, creativity, teamwork, and confidence.
</p>
      {/* ABOUT */}
      <section className="py-5 px-3">
        <div className="row">
      
        <div className="col-md-6">
  <div className="bg-light p-3 p-md-4 shadow-sm rounded">

    <div className="d-flex flex-column flex-md-row align-items-center">

      {/* Principal Image */}
      <img
        src="images/principal.pg.jpg"  
        alt="Principal"
        className="principal-img me-md-3 mb-3 mb-md-0"
      />

      {/* Text Content */}
      <div>
        <h5 className="text-center text-danger">HABIL MALIKA</h5>
        <h5 className="fw-bold text-center text-md-start">Chief
          Principal's Message
        </h5>
        <p className="text-center text-md-start mb-0">
          We nurture academic excellence and strong moral values to
          prepare students for future success.
        </p>
      </div>

    </div>

  </div>
</div>
   <div className="col-md-6">
  <div className="bg-light p-3 p-md-4 shadow-sm rounded">

    <div className="d-flex flex-column flex-md-row align-items-center">

      {/* Deputy Principal Image */}
      <img
        src="images/muhati.jpg"  
        alt="Deputy Principal"
        className="principal-img me-md-3 mb-3 mb-md-0"
      />

      {/* Text Content */}
      <div>
        <h5 className="text-danger">Mr. Wanzetse</h5>
        <h5 className="fw-bold text-center text-md-start">
          Deputy Principal (Academics)
        </h5>

        <p className="text-center text-md-start mb-0">Butere Boys is
          a leading institution dedicated to empowering young students through
          quality education, discipline, and leadership development.
        </p>
      </div>

    </div>

  </div>
</div>

        </div>
      </section>

     <section className="container my-5">
<h3 className="text-center">
  <span className="bg-danger text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    Cultural Day 
  </span>
</h3>

  <div className="row g-4">

    {/* VIDEO 1 */}
    <div className="col-md-4">
      <div className="video-card">
        <div className="video-wrapper">

          <div
            className="video-overlay"
            onClick={(e) => {
              const iframe = e.currentTarget.nextSibling;
              iframe.src += "?autoplay=1&mute=1";
              e.currentTarget.style.display = "none";
            }}
          >
            <div className="play-btn">▶</div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/1woAAkQKqqw"
            title="Candidates Dedication Service"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        
      </div>
    </div>

    {/* VIDEO 2 */}
    <div className="col-md-4">
      <div className="video-card">
        <div className="video-wrapper">

          <div
            className="video-overlay"
            onClick={(e) => {
              const iframe = e.currentTarget.nextSibling;
              iframe.src += "?autoplay=1&mute=1";
              e.currentTarget.style.display = "none";
            }}
          >
            <div className="play-btn">▶</div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/iWHuX_8WwIU"
            title="Talent Day"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        
      </div>
    </div>

    {/* VIDEO 3 */}
    <div className="col-md-4">
      <div className="video-card">
        <div className="video-wrapper">

          <div
            className="video-overlay"
            onClick={(e) => {
              const iframe = e.currentTarget.nextSibling;
              iframe.src += "?autoplay=1&mute=1";
              e.currentTarget.style.display = "none";
            }}
          >
            <div className="play-btn">▶</div>
          </div>

          {/* ⚠️ Google share links won't work in iframe */}
          <iframe
            src="https://www.youtube.com/embed/leQLTGOUaEc"
            title="Academic Excellence"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        
      </div>
    </div>

  </div>
</section>

      {/* HERO SECTION */}
      <div
        className="text-white d-flex align-items-center justify-content-center text-center mb-4 flex-wrap overflow-hidden"
        style={{
          backgroundImage: "url('/images/imageE.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          borderRadius: "5px",
          gap: "20px",
          padding: "20px",
          position: "relative"
        }}
      >

        <div
          className="bg-dark bg-opacity-50 p-3 rounded text-white"
          style={{
            maxWidth: "500px",
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto"
          }}
        >
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

        <div
          className="bg-dark bg-opacity-50 p-3 rounded text-white"
          style={{
            maxWidth: "500px",
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto"
          }}
        >
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

        <div className="col-md-9">
          <div
  id="mycarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="2000"
  data-bs-pause="false"
>
            <div className="carousel-inner">

              {["1743963068160~2.jpg", "imageB.jpg", "imageC.jpg", "imageE.jpg"].map((img, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <img
                    src={`images/${img}`}
                    className="d-block w-100 rounded img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={`slide${index + 1}`}
                  />
                </div>
              ))}

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <div className="col-md-3 bg-light p-4 rounded">
          <h5 className="fw-bold border-bottom pb-2">Announcements</h5>
          <ul className="list-unstyled mt-3">
            {announcements.map((item, index) => (
              <li key={index} className="mb-2">📢 {item}</li>
            ))}
          </ul>
        </div>

      </section>

          <h3 className="text-center">
  <span className="bg-danger text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    View Sports Activities
  </span>
</h3>
<br />
    <div className="marquee-container">
  <div className="marquee-content d-inline-flex gap-3 px-3">

    
    <Link className="btn btn-success px-3" to="/FootBall">Football</Link>
    <Link className="btn btn-success px-3" to="/NetBall">Netball</Link>
    <Link className="btn btn-success px-3" to="/VolleyBll">Volleyball</Link>
    <Link className="btn btn-success px-3" to="/Hockey">Hockey</Link>
    <Link className="btn btn-success px-3" to="/Rugby">Rugby</Link>

    
    <Link className="btn btn-success px-3" to="/HandBall">Handball</Link>
    <Link className="btn btn-success px-3" to="/Badminton">Badminton</Link>
    <Link className="btn btn-success px-3" to="/Athletics">Athletics</Link>
    <Link className="btn btn-success px-3" to="/BaketBall">Basketball</Link>
    <Link className="btn btn-success px-3" to="/TableTennis">Table Tennis</Link>

  </div>
</div>




      {/* ABOUT */}
      <section className="py-5 px-3">
        <div className="row">
         <div className="col-md-6">
  <div className="bg-light p-3 p-md-4 shadow-sm rounded">

    <div className="d-flex flex-column flex-md-row align-items-center">

      {/* Deputy Principal Image */}
      <img
        src="images/muhati.jpg"  
        alt="Deputy Principal"
        className="principal-img me-md-3 mb-3 mb-md-0"
      />

      {/* Text Content */}
      <div>
        <h5 className="text-danger">Mr. Wanzetse</h5>
        <h5 className="fw-bold text-center text-md-start">
          Deputy Principal (Academics)
        </h5>

        <p className="text-center text-md-start mb-0">Butere Boys is
          a leading institution dedicated to empowering young students through
          quality education, discipline, and leadership development.
        </p>
      </div>

    </div>

  </div>
</div>

        <div className="col-md-6">
  <div className="bg-light p-3 p-md-4 shadow-sm rounded">

    <div className="d-flex flex-column flex-md-row align-items-center">

      {/* Principal Image */}
      <img
        src="images/principal.pg.jpg"  
        alt="Principal"
        className="principal-img me-md-3 mb-3 mb-md-0"
      />

      {/* Text Content */}
      <div>
        <h5 className="text-center text-danger">HABIL MALIKA</h5>
        <h5 className="fw-bold text-center text-md-start">Chief
          Principal's Message
        </h5>
        <p className="text-center text-md-start mb-0">
          We nurture academic excellence and strong moral values to
          prepare students for future success.
        </p>
      </div>

    </div>

  </div>
</div>
        </div>
      </section>
      
<p className="text-start text-muted px-3">
The school is also known for its “Exodus Spirit,” symbolizing discipline, resilience, and unity among students and staff. 
With ongoing infrastructure development, modern facilities, and a supportive environment, Butere Boys continues to grow as a center of excellence in education.
</p>

<h3 className="text-center">
  <span className="bg-danger text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    View top Pages
  </span>
</h3>
<br />
    <div className="marquee-container">
  <div className="marquee-content d-inline-flex gap-3 px-3">

    {/* ORIGINAL */}
    <Link className="btn btn-success px-3" to="/Admissions">Admission</Link>
    <Link className="btn btn-success px-3" to="/academics">Academics</Link>
    <Link className="btn btn-success px-3" to="/StudentLife">Student Life</Link>
    <Link className="btn btn-success px-3" to="/Alumni">Alumni</Link>
    <Link className="btn btn-success px-3" to="/Sports">Sports</Link>

    
    <Link className="btn btn-success px-3" to="/Admissions">Admission</Link>
    <Link className="btn btn-success px-3" to="/academics">Academics</Link>
    <Link className="btn btn-success px-3" to="/StudentLife">Student Life</Link>
    <Link className="btn btn-success px-3" to="/Alumni">Alumni</Link>
    <Link className="btn btn-success px-3" to="/Sports">Sports</Link>

  </div>
</div>

      {/* NEWS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Latest News</h2>

          <div className="row">

            {[
              { img: "sports news.jpg", title: "Sports Day Highlights", link: "/Sports" },
              { img: "1770395360975.jpg", title: "Academic Excellence", link: "/Curriculum" },
              { img: "1769613169909.jpg", title: "New Facilities", link: "/NewFacilities" }
            ].map((news, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <Link to={news.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card shadow-sm h-100">
                    <img
                      src={`/images/${news.img}`}
                      className="card-img-top"
                      alt={`news${idx + 1}`}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{news.title}</h5>
                      <p className="card-text text-bg-success p-2">Click to read more...</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

  {/* VIDEO SECTION */}
<section className="container my-5">
 <h3 className="text-center">
  <span className="bg-danger text-white px-4 py-2 rounded-pill shadow-sm fw-semibold">
    School Videos
  </span>
</h3>

  <div className="row g-4">

    {/* VIDEO 1 */}
    <div className="col-md-4">
      <div className="video-card">
        <div className="video-wrapper">

          <div
            className="video-overlay"
            onClick={(e) => {
              const iframe = e.currentTarget.nextSibling;
              iframe.src += "&autoplay=1&mute=1";
              e.currentTarget.style.display = "none";
            }}
          >
            <div className="play-btn">▶</div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/suE0g_SpaoM"
            title="Candidates Dedication Service"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        <h6 className="mt-2 text-center">Sports Day</h6>
      </div>
    </div>

    {/* VIDEO 2 */}
    <div className="col-md-4">
      <div className="video-card">
        <div className="video-wrapper">

          <div
            className="video-overlay"
            onClick={(e) => {
              const iframe = e.currentTarget.nextSibling;
              iframe.src += "&autoplay=1&mute=1";
              e.currentTarget.style.display = "none";
            }}
          >
            <div className="play-btn">▶</div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/IbpM7KaVDFg"
            title="Chief Principal's Speech"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        <h6 className="mt-2 text-center">Chief Principal's Speech</h6>
      </div>
    </div>

    {/* VIDEO 3 */}
    <div className="col-md-4">
      <div className="video-card">
        <div className="video-wrapper">

          <div
            className="video-overlay"
            onClick={(e) => {
              const iframe = e.currentTarget.nextSibling;
              iframe.src += "&autoplay=1&mute=1";
              e.currentTarget.style.display = "none";
            }}
          >
            <div className="play-btn">▶</div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/leQLTGOUaEc"
            title="Academic Excellence"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        <h6 className="mt-2 text-center">Talent Day</h6>
      </div>
    </div>

  </div>
</section>
    </div>
    
  );
  
};


export default HomePage;