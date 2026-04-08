import React, { useState } from "react";

export default function CBCForm4Admission() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto", padding: "25px", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center", color: "#1e88e5" }}>Form 4 Admission Requirements</h1>
      <h3 style={{ textAlign: "center", color: "#555" }}>From CBC Junior Secondary to High School</h3>

      <hr />

      <h2>✅ Eligibility Criteria</h2>
      <ul>
        <li>Successful completion of **Grade 10 (CBC)** curriculum.</li>
        <li>Demonstrated competency in **core subjects**: English, Kiswahili, Mathematics, Sciences, Social Studies, ICT, Physical Education, and electives.</li>
        <li>Typical age range: **15–17 years**.</li>
      </ul>

      <h2>📄 Required Documents</h2>
      <ul>
        <li>Grade 10 **End-of-Year Report Card**.</li>
        <li>Recommendation letter from previous school.</li>
        <li>Birth Certificate or proof of age.</li>
        <li>Medical Form / Health Check certificate.</li>
        <li>Proof of school fees payment or sponsorship.</li>
      </ul>

      <h2>📝 Subject Selection</h2>
      <ul>
        <li>All students take **core subjects**: English, Kiswahili, Mathematics, Sciences.</li>
        <li>Electives depend on the school: ICT, Home Science, Music & Dance, Technical Subjects, Fine Arts, etc.</li>
        <li>Students must select subjects that align with their career pathway or interests.</li>
      </ul>

      <h2>⚠️ Other Considerations</h2>
      <ul>
        <li>Compliance with school rules and regulations.</li>
        <li>Boarding students must provide **boarding requirements** such as bedding and personal items.</li>
        <li>Day students must have **transport arrangements** and follow school attendance guidelines.</li>
      </ul>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          padding: "12px 20px",
          backgroundColor: "#1e88e5",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px",
          borderRadius: "5px"
        }}
      >
        {showDetails ? "Hide Notes" : "Show Notes & Recommendations"}
      </button>

      {showDetails && (
        <div style={{ marginTop: "20px", background: "#e3f2fd", padding: "20px", borderRadius: "8px" }}>
          <h3>Additional Notes</h3>
          <ul>
            <li>Schools may have specific cut-off marks or performance requirements.</li>
            <li>Electives chosen in Form 4 may affect career pathways in tertiary education.</li>
            <li>Parents/guardians should consult the school for orientation schedules and induction programs.</li>
            <li>Some schools may require interviews or aptitude tests for specialized programs (e.g., ICT, Music, Marine Technology).</li>
          </ul>
        </div>
      )}

    </div>
  );
}