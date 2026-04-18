import { Link } from "react-router-dom";

export default function ScoutsPage() {
  return (
    <div className="container-fluid p-0">

      {/* 🏕️ HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('images/scouts1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>

        <h1 className="text-white fw-bold position-relative">
          🏕️ School Scouts Movement
        </h1>
      </section>

      <div className="container my-5">

        {/* 📖 ABOUT */}
        <section className="text-center mb-5">
          <h2 className="mb-3">About Scouts</h2>
          <p>
            The Scouts Movement in our school focuses on discipline, leadership,
            survival skills, and teamwork. Students are trained in outdoor
            activities such as camping, hiking, first aid, and community service.
          </p>
          <p>
            Through scouting, learners develop responsibility, confidence,
            and the ability to work together in challenging environments.
          </p>
        </section>

        {/* 🪖 ACHIEVEMENTS */}
        <section className="mb-5">
          <h3 className="text-center mb-4">Achievements</h3>

          <div className="row g-3 text-center">

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🏆</h4>
                <p>Best Scout Troop 2024</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🏕️</h4>
                <p>Best Camping Team</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🚑</h4>
                <p>First Aid Champions</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 h-100">
                <h4>🌍</h4>
                <p>Community Service Award</p>
              </div>
            </div>

          </div>
        </section>

        {/* 🖼️ GALLERY */}
        <section className="mb-5">
          <h3 className="text-center mb-4">Scouts Gallery</h3>

          <div className="row g-3">

            {[
              "scouts1.jpg",
              "scouts2.jpg",
              "scouts3.jpg",
              "scouts4.jpg",
              "scouts5.jpg",
              "scouts6.jpg"
            ].map((img, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <img
                  src={`images/${img}`}
                  alt="Scouts"
                  className="img-fluid rounded shadow"
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                />
              </div>
            ))}

          </div>
        </section>

        {/* 🧭 EXTRA CONTENT */}
        <section className="text-center mb-5">
          <h3 className="mb-3">Why Scouts Matter</h3>
          <p>
            Scouts build strong character, leadership, and responsibility.
            Students learn survival skills, teamwork, and how to serve the community
            while preparing for real-life challenges.
          </p>
        </section>

        {/* 🔙 BACK BUTTON */}
        <div className="text-center">
          <Link to="/homepage" className="btn btn-success px-4">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}