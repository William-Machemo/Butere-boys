import React from "react";
import { Link } from "react-router-dom";

const clubs = [
  {
    title: "Drama Club",
    img: "/images/drama.jpg",
    desc: "Students develop acting, storytelling, and stage performance skills.",
    link: "/clubs/drama",
  },
  {
    title: "Debate Club",
    img: "/images/debate.jpg",
    desc: "Improves public speaking, critical thinking, and confidence.",
    link: "/clubs/debate",
  },
  {
    title: "Scouts",
    img: "/images/scouts1.jpg",
    desc: "Focuses on leadership, camping, survival skills, and teamwork.",
    link: "/clubs/scouts",
  },
  {
    title: "Music Club",
    img: "/images/music.jpg",
    desc: "Choir, instruments, and band performances.",
    link: "/clubs/music",
  },
  {
    title: "Science Club",
    img: "/images/science.jpg",
    desc: "STEM innovation, experiments, and science fairs.",
    link: "/clubs/science",
  },
  {
    title: "Environment Club",
    img: "/images/environment.jpg",
    desc: "Tree planting, cleanliness, and environmental conservation.",
    link: "/clubs/environment",
  },

  // 🔥 NEW CLUBS ADDED

  {
    title: "Mathematics Club",
    img: "/images/math.jpg",
    desc: "Enhances problem solving, logical reasoning, and math competitions.",
    link: "/clubs/mathematics",
  },
  {
    title: "Tourism Club",
    img: "/images/tourism.jpg",
    desc: "Explores geography, travel culture, and tourism industry awareness.",
    link: "/clubs/tourism",
  },
  {
    title: "Sports Club",
    img: "/images/sports.jpg",
    desc: "Football, athletics, basketball, and physical fitness activities.",
    link: "/clubs/sports",
  },
];

const ClubsPage = () => {
  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Clubs & Activities</h1>
        <p className="text-muted">
          Explore academic and co-curricular clubs that develop talent and leadership.
        </p>
      </div>

      {/* CLUB CARDS */}
      <div className="row g-4">

        {clubs.map((club, index) => (
          <div key={index} className="col-lg-4 col-md-6">

            <div className="card shadow h-100 border-0">

              <img
                src={club.img}
                alt={club.title}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="fw-bold">{club.title}</h5>

                <p className="text-muted small">
                  {club.desc}
                </p>

                <Link to={club.link} className="btn btn-outline-primary btn-sm mt-auto">
                  Explore Club
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* INFO SECTION */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold">Why Join Clubs?</h3>
        <p className="text-muted">
          Clubs help students develop leadership, creativity, teamwork, and real-world skills beyond the classroom.
        </p>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-4">
        <Link to="/homepage" className="btn btn-danger">
          Back to Home
        </Link>
      </div>

    </div>
  );
};

export default ClubsPage;