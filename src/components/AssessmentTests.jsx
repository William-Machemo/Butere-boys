import React, { useState } from "react";

export default function CBCAssessments() {
  // We'll create an array of 100 "sections" as an example
  const sections = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Assessment Section ${i + 1}`,
    description: `This section contains assessment tests and marking schemes for Form ${2 + (i % 3)} subjects.`,
    subjects: [
      {
        name: "English",
        test: "Comprehension, Grammar, Creative Writing",
        marks: "Total: 100 | Comprehension: 30 | Grammar: 30 | Writing: 40",
      },
      {
        name: "Mathematics",
        test: "Algebra, Geometry, Statistics, Problem Solving",
        marks: "Total: 100 | Algebra: 30 | Geometry: 25 | Stats: 20 | Problem Solving: 25",
      },
      {
        name: "Physics",
        test: "Theory and Practical Experiments",
        marks: "Total: 100 | Theory: 60 | Practical: 40",
      },
      {
        name: "Chemistry",
        test: "Theory and Lab Experiments",
        marks: "Total: 100 | Theory: 50 | Practical: 50",
      },
      {
        name: "Biology",
        test: "Theory, Practical, Projects",
        marks: "Total: 100 | Theory: 50 | Practical: 30 | Project: 20",
      },
      {
        name: "Kiswahili",
        test: "Comprehension, Essay, Grammar",
        marks: "Total: 100 | Comprehension: 30 | Essay: 40 | Grammar: 30",
      },
      {
        name: "French",
        test: "Oral, Writing, Comprehension",
        marks: "Total: 100 | Oral: 30 | Writing: 35 | Comprehension: 35",
      },
      {
        name: "ICT",
        test: "Practical Projects, Theory",
        marks: "Total: 100 | Practical: 60 | Theory: 40",
      },
      {
        name: "History & Citizenship",
        test: "Essays, Projects, MCQs",
        marks: "Total: 100 | Essays: 50 | Projects: 30 | MCQs: 20",
      },
      {
        name: "Geography",
        test: "Map Work, Theory, Projects",
        marks: "Total: 100 | Map Work: 30 | Theory: 40 | Projects: 30",
      },
    ],
  }));

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1100px", margin: "auto", padding: "25px" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>Form 2–4 CBC Assessment Tests & Marking Schemes</h1>
      <h3 style={{ textAlign: "center", color: "#555" }}>All subjects broken into 100 sections for easy navigation</h3>
      <hr />

      {sections.map(section => (
        <div key={section.id} style={{ marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <button
            onClick={() => toggleSection(section.id)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "15px",
              backgroundColor: "#a5d6a7",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0"
            }}
          >
            {section.title} - Form {2 + ((section.id - 1) % 3)}
          </button>
          {openSections[section.id] && (
            <div style={{ padding: "15px", backgroundColor: "#e8f5e9", borderRadius: "0 0 8px 8px" }}>
              <p>{section.description}</p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#81c784" }}>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Subject</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Assessment Test</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Marking Scheme</th>
                  </tr>
                </thead>
                <tbody>
                  {section.subjects.map((sub, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#c8e6c9" : "#f1f8e9" }}>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>{sub.name}</td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>{sub.test}</td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>{sub.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}