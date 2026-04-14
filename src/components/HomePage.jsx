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
      <h3><b>Welcome to Butere Boys High School</b></h3>
      

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

            <h3 className="text-center text-bg-danger w-100 ">View Our Sports Activities</h3>
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

            <h3 className="text-center text-bg-danger">View Our Top Pages</h3>
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

    </div>
  );
};

export default HomePage;