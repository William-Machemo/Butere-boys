import React from "react";

const NewsLetter = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1>Butere Boys High School</h1>
        <h2>Closing Day Newsletter 2026</h2>
        <p style={styles.date}>Date: 27th March 2026</p>
      </div>

      {/* Principal’s Message */}
      <section style={styles.section}>
        <h3>Principal’s Message</h3>
        <p>
          As we bring the academic year to a close, I am proud to celebrate the
          remarkable achievements of our students and staff. This year, our
          school has maintained excellent academic performance, demonstrated
          outstanding discipline, and shown resilience through various
          challenges. Let us continue striving for excellence as we prepare for
          the next academic year.
        </p>
      </section>

      {/* Academic Highlights */}
      <section style={styles.section}>
        <h3>Academic Highlights</h3>
        <ul>
          <li>
            KCSE performance continues to excel with over 80% of students
            achieving grade C+ and above.
          </li>
          <li>
            Senior school exams and CBC assessments were conducted successfully
            across all subjects.
          </li>
          <li>
            Special recognition to top-performing students in Physics, Maths,
            and Languages.
          </li>
        </ul>
      </section>

      {/* Sports & Co-Curricular */}
      <section style={styles.section}>
        <h3>Sports & Co-Curricular Achievements</h3>
        <ul>
          <li>
            Our football and athletics teams represented the school at county
            level and brought home several trophies.
          </li>
          <li>
            Drama, music, and debate clubs held vibrant performances and
            competitions throughout the year.
          </li>
          <li>
            Special mention to the Environmental Club for planting 500 trees
            on campus.
          </li>
        </ul>
      </section>

      {/* Awards & Recognition */}
      <section style={styles.section}>
        <h3>Awards & Recognition</h3>
        <ul>
          <li>Best Student of the Year: John Mwangi (Grade 12)</li>
          <li>Best Teacher Award: Mr. Peter Odhiambo (Physics)</li>
          <li>Best Sportsman: Michael Otieno (Athletics)</li>
          <li>Best Co-Curricular Participation: Drama Club</li>
        </ul>
      </section>

      {/* Closing Remarks */}
      <section style={styles.section}>
        <h3>Closing Remarks</h3>
        <p>
          We thank our teachers, parents, and stakeholders for their
          unwavering support this year. As we break for the holidays, we
          encourage students to rest, reflect, and prepare for the new academic
          year with renewed energy and commitment. Have a safe and joyful
          holiday!
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Contact: education@elimu.co.ke | +254 700 663 000</p>
        <p>P.O BOX 109-00902, Kakamega, Kenya</p>
        <p>Visit: www.butereboyshighschool.ac.ke</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Times New Roman', Times, serif",
    padding: "30px",
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#fefefe",
    border: "1px solid #ccc",
    borderRadius: "10px"
  },
  header: {
    textAlign: "center",
    borderBottom: "2px solid #333",
    paddingBottom: "15px",
    marginBottom: "25px"
  },
  date: {
    fontStyle: "italic",
    color: "#555"
  },
  section: {
    marginBottom: "20px"
  },
  footer: {
    borderTop: "2px solid #333",
    paddingTop: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555"
  }
};

export default NewsLetter;