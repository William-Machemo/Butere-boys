import React, { useState } from "react";

export default function SchoolParentsPage() {
  const [showReferences, setShowReferences] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "auto", padding: "25px", lineHeight: "1.8" }}>
      
      <h1 style={{ textAlign: "center", color: "#6a1b9a" }}>School Parents and Their Role in Education</h1>
      <h3 style={{ textAlign: "center", color: "#555" }}>How Parents Contribute to School Development and Student Success</h3>

      <hr />

      <section>
        <h2>👨‍👩‍👧‍👦 Who Are School Parents?</h2>
        <p>
          School parents usually refer to members of the <strong>Parent-Teacher Association (PTA)</strong> or parent representatives in school committees. 
          They are guardians and caregivers of students enrolled in the school and play a key role in the holistic development of the school environment.
        </p>
        <img 
          src="https://via.placeholder.com/800x400?text=PTA+Meeting" 
          alt="Parents at a PTA meeting" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>🎯 Roles of School Parents</h2>
        <ul>
          <li><strong>Policy Support:</strong> Participating in school policy discussions, ensuring school rules and guidelines are implemented effectively.</li>
          <li><strong>Financial Support:</strong> Assisting in fundraising, paying fees promptly, and supporting school projects such as construction or ICT upgrades.</li>
          <li><strong>Academic Oversight:</strong> Monitoring students’ academic performance, attending parent-teacher meetings, and providing feedback to teachers.</li>
          <li><strong>Discipline & Mentorship:</strong> Collaborating with school staff to guide students in behavior, attendance, and moral development.</li>
          <li><strong>Infrastructure Development:</strong> Contributing ideas, materials, or funds for school facilities like libraries, laboratories, classrooms, and dormitories.</li>
          <li><strong>Community Advocacy:</strong> Advocating for the school’s needs with local authorities, county government, or NGOs.</li>
        </ul>
        <img 
          src="https://via.placeholder.com/800x400?text=Parents+Supporting+School+Projects" 
          alt="Parents supporting school projects" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>💡 Benefits of Active Parent Involvement</h2>
        <ul>
          <li><strong>Improved Academic Performance:</strong> Studies show students perform better when parents are actively engaged in school activities.</li>
          <li><strong>Enhanced Student Discipline:</strong> Parental oversight reinforces positive behavior and accountability among students.</li>
          <li><strong>Better School Facilities:</strong> Contributions from parents improve classrooms, labs, libraries, and other infrastructure.</li>
          <li><strong>Community-School Relationship:</strong> Strong parent engagement strengthens trust and communication between school and the local community.</li>
          <li><strong>Emotional Support for Students:</strong> Active parents encourage student morale, resilience, and motivation.</li>
          <li><strong>Resource Mobilization:</strong> Parents can help secure funds, technology, and learning materials for school development.</li>
        </ul>
        <img 
          src="https://via.placeholder.com/800x400?text=Parents+Funding+School+Infrastructure" 
          alt="Parents contributing to school infrastructure" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>📝 Examples of Parent-Supported Initiatives</h2>
        <ul>
          <li>Building or renovating classrooms and dormitories.</li>
          <li>Equipping laboratories with modern apparatus.</li>
          <li>Expanding the school library and purchasing books.</li>
          <li>Supporting sports, music, and cultural activities.</li>
          <li>Providing scholarships or bursaries for needy students.</li>
          <li>Organizing health and wellness programs for students.</li>
        </ul>
        <img 
          src="https://via.placeholder.com/800x400?text=School+Renovation+by+Parents" 
          alt="School renovations funded by parents" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <section>
        <h2>⚡ Tips for Parents to Be Effective</h2>
        <ul>
          <li>Attend all PTA meetings and actively contribute ideas.</li>
          <li>Support school policies and encourage your child to follow them.</li>
          <li>Volunteer in school programs, mentorship, and community projects.</li>
          <li>Collaborate with teachers to monitor academic and behavioral progress.</li>
          <li>Encourage holistic development: academics, sports, arts, and moral education.</li>
        </ul>
        <img 
          src="https://via.placeholder.com/800x400?text=Parents+Mentoring+Students" 
          alt="Parents mentoring students" 
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} 
        />
      </section>

      <button
        onClick={() => setShowReferences(!showReferences)}
        style={{
          padding: "12px 20px",
          backgroundColor: "#6a1b9a",
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
        <div style={{ marginTop: "20px", background: "#f3e5f5", padding: "20px", borderRadius: "8px" }}>
          <h3>References & Resources</h3>
          <ul>
            <li><a href="https://www.pta.org/" target="_blank" rel="noreferrer">Parent-Teacher Association (PTA) Official</a></li>
            <li><a href="https://www.education.gov/" target="_blank" rel="noreferrer">Ministry of Education - Kenya</a></li>
            <li><a href="https://www.unicef.org/education" target="_blank" rel="noreferrer">UNICEF - Parent Involvement in Education</a></li>
          </ul>
        </div>
      )}

    </div>
  );
}