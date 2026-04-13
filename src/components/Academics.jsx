import React from "react";

function Academics() {
  return (
    <div className="container mt-4">

      {/* Academics Header */}
      <h1 className="text-success mb-3">Academics</h1>
      <p>
        Butere Boys High School provides a strong academic foundation aimed at
        excellence in KCSE and beyond.
      </p>

      {/* KCSE Results Release Section */}
      <section className="mt-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">KCSE Results Release</h3>
          <p>
            The school consistently posts excellent KCSE results. Recent results
            show improved mean scores and increased university admissions.
          </p>
        </div>
      </section>

      {/* Exam Announcements */}
      <section className="mt-4">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">Exam Announcements</h3>
          <ul>
            <li>Mid-Term Exams begin on 15th May 2026</li>
            <li>End-Term Exams scheduled for July 2026</li>
            <li>Mock Exams for Form 4 starting August 2026</li>
          </ul>
        </div>
      </section>

      {/* Exam Improvement Section */}
      <section className="mt-4">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">Exam Improvement Programs</h3>
          <p>
            The school has introduced revision clinics, group discussions, and
            mentorship programs to help students improve performance.
          </p>
          <ul>
            <li>Weekend revision classes</li>
            <li>Peer group discussions</li>
            <li>Teacher-student mentorship sessions</li>
          </ul>
        </div>
      </section>

      {/* School Contests Section */}
      <section className="mt-4 mb-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-success">School Academic Contests</h3>
          <p>
            Students actively participate in various academic competitions to
            sharpen their skills and gain exposure.
          </p>
          <ul>
            <li>Science Congress Competitions</li>
            <li>Mathematics Contests</li>
            <li>Essay Writing Competitions</li>
            <li>Debate and Public Speaking</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default Academics;