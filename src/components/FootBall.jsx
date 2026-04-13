import React, { useState } from "react";

/* ================= VIDEO COMPONENT ================= */
function VideoCard({ id, title }) {
  return (
    <div className="col-md-6 mb-3">
      <iframe
        width="100%"
        height="250"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allowFullScreen
      />
    </div>
  );
}

function Football() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "1770397785564.jpg",
    "1770396998258.jpg",
    "1750645897729.jpg",
    "1769612018716.jpg",
    "1750645890067.jpg",
    "1770396112803.jpg"
  ];

  /* ================= VIDEO DATA ================= */
  const matchVideos = [
    { id: "tYPxPbAvGc8", title: "Match 1" },
    { id: "aC3Sr1KMSvE", title: "Match 2" }
  ];

  const trainingVideos = [
    { id: "XwkJoBEvqDc", title: "Training 1" },
    { id: "XpsBAZA_scE", title: "Training 2" }
  ];

  const tournamentVideos = [
    { id: "4hPaXPcgSvk", title: "Tournament 1" },
    { id: "a05FB_Ik8E4", title: "Tournament 2" }
  ];

  const skillVideos = [
    { id: "3tRGWoB5fLU", title: "Skills 1" },
    { id: "27dVCoK5mgQ", title: "Skills 2" }
  ];

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="text-success fw-bold">⚽ Football at Butere Boys</h1>
        <p className="lead">Passion • Discipline • Excellence</p>
      </div>

      {/* HERO */}
      <img
        src="images/football.jpg"
        alt="Team"
        className="img-fluid rounded shadow mb-5"
        style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
      />

      {/* ABOUT */}
      <div className="card p-4 shadow-sm mb-5">
        <h3 className="text-success">About the Team</h3>
        <p>
          The Butere Boys football team is one of the most competitive school teams
          in the region. Built on discipline, teamwork, and tactical excellence,
          the team consistently performs at top levels in inter-school competitions.
        </p>
      </div>

      {/* IMAGE GALLERY */}
      <section className="mb-5">
        <h3 className="text-success mb-3">Team Gallery</h3>
        <div className="row">
          {images.map((img, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <img
                src={`/images/${img}`}
                alt=""
                className="img-fluid rounded shadow-sm"
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
                onClick={() => setSelectedImage(`/images/${img}`)}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img
            src={selectedImage}
            alt=""
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}

      {/* ================= VIDEO SECTIONS ================= */}

      {/* MATCHES */}
      <section className="mb-5">
        <h3 className="text-success mb-4">🎥 Match Highlights</h3>
        <div className="row">
          {matchVideos.map((video, i) => (
            <VideoCard key={i} id={video.id} title={video.title} />
          ))}
        </div>
      </section>

      {/* TRAINING */}
      <section className="mb-5">
        <h5>Training Sessions</h5>
        <div className="row">
          {trainingVideos.map((video, i) => (
            <VideoCard key={i} id={video.id} title={video.title} />
          ))}
        </div>
      </section>

      {/* TOURNAMENT */}
      <section className="mb-5">
        <h5>Tournament Highlights</h5>
        <div className="row">
          {tournamentVideos.map((video, i) => (
            <VideoCard key={i} id={video.id} title={video.title} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-5">
        <h5>Top Goals & Skills</h5>
        <div className="row">
          {skillVideos.map((video, i) => (
            <VideoCard key={i} id={video.id} title={video.title} />
          ))}
        </div>
      </section>

      {/* PLAYER STATS */}
      <section className="mb-5">
        <h3 className="text-success mb-3">Top Players</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-success">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Goals</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Mwangi</td>
              <td>Forward</td>
              <td>12</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Brian Otieno</td>
              <td>Midfielder</td>
              <td>6</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Kevin Ouma</td>
              <td>Defender</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FIXTURES */}
      <section className="mb-5">
        <h3 className="text-success mb-3">Fixtures</h3>
        <table className="table table-bordered">
          <thead className="table-success">
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 May 2026</td>
              <td>Kakamega High School</td>
              <td>Win 2 - 1</td>
            </tr>
            <tr>
              <td>18 May 2026</td>
              <td>Mumias Boys</td>
              <td>Draw 1 - 1</td>
            </tr>
            <tr>
              <td>25 May 2026</td>
              <td>St. Peters School</td>
              <td>Loss 0 - 1</td>
            </tr>
            <tr>
              <td>2 June 2026</td>
              <td>Shinyalu High School</td>
              <td>Upcoming</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* TROPHIES */}
      <section className="mb-5">
        <h3 className="text-success mb-3">🏆 Trophy Cabinet</h3>
        <div className="row">
          {["trophy1.jpg", "trophy2.jpg", "trophy3.jpg"].map((img, i) => (
            <div className="col-md-4 text-center" key={i}>
              <img
                src={`/images/${img}`}
                alt=""
                className="img-fluid mb-2"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <p>Championship Trophy</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mb-5">
        <button className="btn btn-success px-4 py-2">
          Join the Football Team
        </button>
      </div>

    </div>
  );
}

export default Football;