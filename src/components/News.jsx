import React from "react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Annual Sports Day Celebrates Excellence",
    date: "March 15, 2026",
    author: "School Administration",
    img: "/images/imageD.jpg",
    description:
      "Butere Boys Senior School hosted its annual sports day with students participating in various competitions including football, basketball, and athletics.",
  },
  {
    id: 2,
    title: "Library Renovation Completed",
    date: "February 10, 2026",
    author: "Principal",
    img: "/images/imageA.jpg",
    description:
      "The school library has been upgraded with modern books, digital resources, and improved study spaces for students.",
  },
  {
    id: 3,
    title: "Drama Club Triumphs at National Festival",
    date: "January 20, 2026",
    author: "Arts Department",
    img: "/images/1770395995199.jpg",
    description:
      "The Drama Club won first place at the National Theatre Festival showcasing creativity and teamwork.",
  },
  {
    id: 4,
    title: "Curriculum Updates for CBC and 8-4-4",
    date: "March 5, 2026",
    author: "Academic Office",
    img: "/images/imageC.jpg",
    description:
      "The school continues to implement CBC and 8-4-4 curriculum updates for better learning outcomes.",
  },
];

const InfoCard = ({ title, text, link }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card shadow h-100 border-0">

      <div className="card-body d-flex flex-column">
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted small">{text}</p>

        {/* 🔗 CORRECT LINK */}
        <Link to={link} className="btn btn-danger btn-sm mt-auto">
          View More
        </Link>
      </div>

    </div>
  </div>
);

const NewsPage = () => {
  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">School News & Updates</h1>
        <p className="text-muted">
          Latest news, events, and updates from Butere Boys Senior School
        </p>
      </div>

      {/* 📰 NEWS CARDS */}
      <h3 className="mb-4 fw-bold">Latest News</h3>

      <div className="row g-4 mb-5">
        {newsItems.map((news) => (
          <div key={news.id} className="col-lg-6 col-md-6">
            <div className="card shadow h-100 border-0">

              <img
                src={news.img}
                className="card-img-top"
                alt={news.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold">{news.title}</h5>

                <p className="text-muted small mb-2">
                  {news.date} | {news.author}
                </p>

                <p className="text-secondary small">
                  {news.description}
                </p>

                {/* 🔗 FIXED ROUTE */}
                <Link
                  to={`/news/${news.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Read More
                </Link>

              </div>

            </div>
          </div>
        ))}
      </div>

      {/* INFO SECTIONS WITH PROPER LINKS */}
      <h3 className="fw-bold mb-3">Boarding</h3>
      <div className="row">
        <InfoCard
          title="Modern Boarding Facilities"
          text="Spacious dormitories and safe environment."
          link="/Boarding"
        />
        <InfoCard
          title="Discipline & Study Culture"
          text="Evening prep and structured routines."
          link="/boarding-discipline"
        />
        <InfoCard
          title="Student Welfare"
          text="Housemasters ensure student wellbeing."
          link="/student-welfare"
        />
      </div>

      <h3 className="fw-bold mb-3 mt-4">Classes & Curriculum</h3>
      <div className="row">
        <InfoCard title="CBC & 8-4-4" text="Balanced academic systems." link="/Curriculum" />
        <InfoCard title="Modern Classrooms" text="ICT enabled learning." link="/Classes" />
        <InfoCard title="Teachers" text="Qualified teaching staff." link="/Teachers" />
      </div>

      <h3 className="fw-bold mb-3 mt-4">Services</h3>
      <div className="row">
        <InfoCard title="Counseling" text="Student guidance services." link="/counseling" />
        <InfoCard title="ICT Support" text="Digital learning tools." link="/ict" />
        <InfoCard title="Health Care" text="Medical support services." link="/health" />
      </div>

      <h3 className="fw-bold mb-3 mt-4">Activities</h3>
      <div className="row">
        <InfoCard title="Sports" text="Football, athletics, etc." link="/sports" />
        <InfoCard title="Clubs" text="Drama, debate, scouts." link="/Clubs" />
        <InfoCard title="Arts" text="Music and creativity." link="/arts" />
      </div>

      <h3 className="fw-bold mb-3 mt-4">Facilities</h3>
      <div className="row">
        <InfoCard title="Science Labs" text="Modern laboratories." link="/labs" />
        <InfoCard title="Library" text="Digital & physical books." link="/library" />
        <InfoCard title="Sports Fields" text="Standard play fields." link="/Sports" />
      </div>

      {/* FOOTER */}
      <footer className="text-center text-muted mt-5">
        © 2026 Butere Boys Senior School. All rights reserved.
      </footer>

    </div>
  );
};

export default NewsPage;