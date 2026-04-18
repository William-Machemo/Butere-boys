import { Link } from "react-router-dom";

export default function BandFestivalPage() {
  return (
    <div className="container-fluid p-0">

      {/* 🔥 HERO SECTION WITH OVERLAY */}
      <section
        style={{
          backgroundImage: "url('images/band1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}></div>

        <h1 className="fw-bold text-white position-relative">
          🎺 School Band Festival
        </h1>
      </section>

      <div className="container my-5">

        {/* 📅 ABOUT */}
        <section className="mb-5 text-center">
          <h2 className="mb-3">About the Festival</h2>
          <p>
            The Band Festival is one of the most exciting events in our school calendar.
            It brings together discipline, creativity, and musical excellence.
            Our students showcase synchronized marching, instrumental mastery,
            and outstanding teamwork in front of large audiences.
          </p>
          <p>
            The festival also promotes talent development, confidence,
            and unity among students as they represent the school at regional
            and national levels.
          </p>
        </section>

        {/* 🏆 ACHIEVEMENTS */}
        <section className="mb-5">
          <h3 className="text-center mb-4">Achievements</h3>

          <div className="row g-3 text-center">
            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🥇</h4>
                <p>Best Marching Band 2024</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🏆</h4>
                <p>Regional Champions</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🎺</h4>
                <p>Best Instrumental Team</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>⭐</h4>
                <p>Outstanding Performance Award</p>
              </div>
            </div>
          </div>
        </section>

        {/* 🖼️ BIG IMAGE GALLERY */}
        <section className="mb-5">
          <h3 className="text-center mb-4">Gallery</h3>

          <div className="row g-3">
            {[
              "band1.jpg",
              "band2.jpg",
              "band3.jpg",
              "band4.jpg",
              "band5.jpg",
              "band6.jpg"
            ].map((img, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <img
                  src={`images/${img}`}
                  className="img-fluid rounded shadow"
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                  alt="Band"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 🎥 MULTIPLE VIDEOS */}
        <section className="mb-5">
          <h3 className="text-center mb-4">Band Performances</h3>

          <div className="row g-4">

            {[1,2,3,4,5].map((vid, index) => (
              <div className="col-lg-6" key={index}>
                <div className="ratio ratio-16x9 shadow">
                  <iframe
                    src={`https://www.youtube.com/embed/YOUR_VIDEO_ID_${vid}`}
                    title={`Band Video ${vid}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* 🎺 EXTRA CONTENT */}
        <section className="mb-5 text-center">
          <h3 className="mb-3">Why Band Matters</h3>
          <p>
            Participation in band builds discipline, teamwork, and leadership.
            Students gain confidence, improve coordination, and develop musical talent
            while representing the school in competitions and public events.
          </p>
        </section>

        {/* 🔙 BACK BUTTON */}
        <div className="text-center">
          <Link to="/homepage" className="btn btn-danger px-4">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}