
export default function AGMPage() {

  // ---------------- SPEAKERS DATA ----------------
  const speakers = [
    {
      name: "Principal",
      image: "images/AGM2.jpg",
      speech: "We are proud of the academic progress this year and aim for even better results."
    },
    {
      name: "Deputy Principal",
      image: "images/AGM4.jpg",
      speech: "Discipline and attendance remain key priorities for all students."
    },
    {
      name: "Board Chairperson",
      image: "images/AGM3.jpg",
      speech: "The school infrastructure will be improved in the coming year."
    },
    {
      name: "Academic Head",
      image: "images/AGM1.jpg",
      speech: "KCSE performance has improved significantly."
    },
    {
      name: "Sports Director",
      image: "images/AGM5.jpg",
      speech: "Our teams have performed well at regional competitions."
    },
    {
      name: "Finance Officer",
      image: "images/AGM6.jpg",
      speech: "Financial stability has been maintained throughout the year."
    },
    {
      name: "Guidance Counselor",
      image: "images/AGM7.jpg",
      speech: "Student wellbeing and mental health support is ongoing."
    },
    {
      name: "ICT Teacher",
      image: "images/AGM8.jpg",
      speech: "Technology integration in learning is expanding."
    },
    {
      name: "Science Teacher",
      image: "images/AGM9.jpg",
      speech: "New labs will improve practical learning."
    },
    {
      name: "Student Leader",
      image: "images/AGM11.jpg",
      speech: "Students are committed to discipline and excellence."
    },
    {
      name: "Parent Representative",
      image: "images/AGM12.jpg",
      speech: "Parents will continue supporting school programs."
    },
    {
      name: "Alumni Representative",
      image: "images/AGM12.jpg",
      speech: "Alumni are ready to contribute to school development."
    }
  ];

  return (
    <div className="agm-container">

      {/* TITLE */}
      <h1 className="title">📢 School (AGM) Meeting</h1>

      {/* SIMPLE IMAGE SECTION */}
      <div className="image-section">
        <img src="images/AGM12.jpg" alt="agm1" />
        <img src="images/AGM12.jpg" alt="agm2" />
        <img src="images/AGM12.jpg" alt="agm3" />
      </div>

      {/* EVENT DETAILS */}
      <div className="card">
        <h2>📅 Event Details</h2>
        <p>Date: 20th June 2026</p>
        <p>Time: 10:00 AM</p>
        <p>Venue: School Hall</p>
      </div>

      {/* SPEAKERS SECTION */}
      <div className="card">
        <h2>🎤 AGM Speakers</h2>

        <div className="speakers-grid">
          {speakers.map((sp, i) => (
            <div key={i} className="speaker-card">

              <img src={sp.image} alt={sp.name} />

              <h4>{sp.name}</h4>

              {/* SPOKEN WORDS */}
              <p>{sp.speech}</p>

            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .agm-container {
          min-height: 100vh;
          background: #f4f6f9;
          padding: 20px;
        }

        .title {
          text-align: center;
          color: #b30000;
        }

        /* SIMPLE IMAGE SECTION */
        .image-section {
          display: flex;
          gap: 10px;
          margin: 20px 0;
        }

        .image-section img {
          width: 33%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }

        .card {
          background: white;
          padding: 15px;
          margin: 20px 0;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        /* SPEAKERS */
        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .speaker-card {
          background: #fafafa;
          padding: 10px;
          border-radius: 8px;
          text-align: center;
        }

        .speaker-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }

        .speaker-card h4 {
          margin: 10px 0 5px;
          color: #b30000;
        }

        .speaker-card p {
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </div>
  );
}