import React, { useState } from "react";

export default function SchoolEventsPage() {
  const [showReferences, setShowReferences] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "auto", padding: "25px", lineHeight: "1.8" }}>
      
      <h1 style={{ textAlign: "center", color: "#d84315" }}>School Events & Activities</h1>
      <h3 style={{ textAlign: "center", color: "#555" }}>Sports, Arts, and Community Engagement</h3>

      <hr />

      <section>
        <h2>⚽ Football</h2>
        <p>
          Football is one of the most popular sports in school. Students compete in inter-school competitions and internal leagues. It promotes teamwork, discipline, and physical fitness.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=Football+Match" 
          alt="Students playing football" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>💃 Dance</h2>
        <p>
          Dance activities include cultural performances, modern dance, and competitions. They foster creativity, confidence, and cultural awareness among students.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=Dance+Performance" 
          alt="Students performing a dance" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>🏉 Rugby</h2>
        <p>
          Rugby develops stamina, teamwork, and strategic thinking. The school participates in county and national rugby tournaments.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=Rugby+Match" 
          alt="Students playing rugby" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>🏐 Volleyball</h2>
        <p>
          Volleyball promotes coordination, reflexes, and team spirit. Students participate in both indoor and outdoor volleyball competitions.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=Volleyball+Game" 
          alt="Students playing volleyball" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>🎭 Drama</h2>
        <p>
          Drama club activities include stage plays, skits, and competitions. These activities enhance creativity, communication skills, and self-expression.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=Drama+Performance" 
          alt="Students performing drama" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>🏃 Athletics</h2>
        <p>
          Athletics events include sprints, long-distance running, jumps, and throws. Annual athletics competitions encourage physical fitness and sportsmanship.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=Athletics+Event" 
          alt="Students in athletics competition" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>📅 Annual General Meeting (AGM)</h2>
        <p>
          The AGM brings together parents, teachers, and school management. It is a platform to discuss school development, financial reports, and upcoming projects.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=AGM+Meeting" 
          alt="Annual General Meeting of school parents and staff" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <button
        onClick={() => setShowReferences(!showReferences)}
        style={{
          padding: "12px 20px",
          backgroundColor: "#d84315",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "25px",
          fontSize: "16px",
          borderRadius: "5px"
        }}
      >
        {showReferences ? "Hide References" : "Show References"}
      </button>

      {showReferences && (
        <div style={{ marginTop: "20px", background: "#ffe0b2", padding: "20px", borderRadius: "8px" }}>
          <h3>References & Resources</h3>
          <ul>
            <li><a href="https://www.kenyaschoolsdirectory.co.ke/" target="_blank" rel="noreferrer">Kenya Schools Directory - Activities & Sports</a></li>
            <li><a href="https://www.education.go.ke/" target="_blank" rel="noreferrer">Ministry of Education - Kenya</a></li>
            <li><a href="https://www.unicef.org/kenya/education" target="_blank" rel="noreferrer">UNICEF Kenya - Sports and Extracurricular Activities</a></li>
          </ul>
        </div>
      )}

    </div>
  );
}