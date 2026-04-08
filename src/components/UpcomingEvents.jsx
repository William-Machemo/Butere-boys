import React, { useState } from "react";

export default function HighSchoolPortal() {
  const [activeTab, setActiveTab] = useState("subjects");

  const tabs = [
    { id: "subjects", label: "CBC Subjects" },
    { id: "facilities", label: "Facilities" },
    { id: "admissions", label: "Form 4 Admission" },
    { id: "parents", label: "School Parents" },
    { id: "events", label: "School Events" }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1100px", margin: "auto", padding: "25px" }}>
      <h1 style={{ textAlign: "center", color: "#1976d2" }}>High School Portal</h1>
      <h3 style={{ textAlign: "center", color: "#555" }}>CBC Exams, Facilities, Admissions, Parents & Events</h3>
      <hr />

      {/* Tabs Navigation */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px", flexWrap: "wrap" }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 20px",
              margin: "5px",
              cursor: "pointer",
              backgroundColor: activeTab === tab.id ? "#1976d2" : "#e0e0e0",
              color: activeTab === tab.id ? "white" : "#333",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div style={{ lineHeight: "1.7" }}>
        {activeTab === "subjects" && (
          <div>
            <h2>📚 CBC Subject Assessments & Marking Schemes (Grade 10)</h2>
            <p>Students are assessed based on continuous assessment (CA), practicals, projects, and end-of-term exams. Example subjects:</p>
            <ul>
              <li>English: Oral, Reading, Comprehension, Creative Writing, Grammar</li>
              <li>Mathematics: Algebra, Geometry, Statistics, Problem Solving</li>
              <li>Sciences: Physics, Chemistry, Biology practicals and theory</li>
              <li>ICT: Computer projects, coding, theoretical exams</li>
              <li>Fine Arts / Music / Dance: Creative projects and performance assessment</li>
              <li>Technical subjects: Wood Tech, Marine Tech, Home Science – practical + theory</li>
              <li>Languages: Kiswahili, French, Mandarin – speaking, writing, comprehension</li>
            </ul>
            <img src="https://via.placeholder.com/900x400?text=CBC+Exams" alt="CBC Exam" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
          </div>
        )}

        {activeTab === "facilities" && (
          <div>
            <h2>🏫 School Facilities</h2>
            <ul>
              <li>Library – textbooks, reference materials, quiet study areas</li>
              <li>Classrooms – spacious, ventilated, equipped with desks and boards</li>
              <li>Dining Hall – hygienic, accommodates students comfortably</li>
              <li>Laboratories – Chemistry, Physics, Biology with modern apparatus</li>
              <li>Dormitories – boarding facilities for students</li>
              <li>Transport – school buses for safe transport</li>
            </ul>
            <img src="https://via.placeholder.com/900x400?text=Library" alt="School Library" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            <img src="https://via.placeholder.com/900x400?text=Classroom" alt="Classroom" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            <img src="https://via.placeholder.com/900x400?text=Laboratory" alt="Laboratory" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
          </div>
        )}

        {activeTab === "admissions" && (
          <div>
            <h2>📝 Form 4 Admission Requirements (CBC)</h2>
            <ul>
              <li>Completion of Grade 10 (CBC)</li>
              <li>Grade 10 Report Card and recommendation letter</li>
              <li>Birth Certificate or proof of age</li>
              <li>Medical/Health certificate</li>
              <li>Payment of fees or proof of sponsorship</li>
              <li>Selection of core and elective subjects</li>
            </ul>
            <img src="https://via.placeholder.com/900x400?text=Form+4+Admission" alt="Form 4 Admission" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
          </div>
        )}

        {activeTab === "parents" && (
          <div>
            <h2>👨‍👩‍👧‍👦 School Parents & PTA</h2>
            <p>Parents play a key role in school development, student success, and community engagement.</p>
            <ul>
              <li>Policy support and decision-making</li>
              <li>Financial contributions and fundraising</li>
              <li>Monitoring student academic and behavioral progress</li>
              <li>Infrastructure development support</li>
              <li>Mentorship and emotional support for students</li>
            </ul>
            <img src="https://via.placeholder.com/900x400?text=Parents+Meeting" alt="Parents meeting" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            <img src="https://via.placeholder.com/900x400?text=School+Projects+by+Parents" alt="Parents supporting school projects" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
          </div>
        )}

        {activeTab === "events" && (
          <div>
            <h2>🎉 School Events & Activities</h2>
            <section>
              <h3>⚽ Football</h3>
              <img src="https://via.placeholder.com/900x400?text=Football" alt="Football match" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
            <section>
              <h3>💃 Dance</h3>
              <img src="https://via.placeholder.com/900x400?text=Dance+Performance" alt="Dance performance" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
            <section>
              <h3>🏉 Rugby</h3>
              <img src="https://via.placeholder.com/900x400?text=Rugby+Match" alt="Rugby match" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
            <section>
              <h3>🏐 Volleyball</h3>
              <img src="https://via.placeholder.com/900x400?text=Volleyball" alt="Volleyball game" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
            <section>
              <h3>🎭 Drama</h3>
              <img src="https://via.placeholder.com/900x400?text=Drama+Performance" alt="Drama performance" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
            <section>
              <h3>🏃 Athletics</h3>
              <img src="https://via.placeholder.com/900x400?text=Athletics+Event" alt="Athletics event" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
            <section>
              <h3>📅 Annual General Meeting (AGM)</h3>
              <img src="https://via.placeholder.com/900x400?text=AGM+Meeting" alt="AGM meeting" style={{ width: "100%", borderRadius: "6px", marginBottom: "20px" }} />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}