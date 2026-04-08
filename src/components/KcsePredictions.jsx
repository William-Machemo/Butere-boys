import React from "react";
import { Link } from "react-router-dom";

// ==== Products with Form 3 & Form 4 assessments ====
const products = [
  // FORM 3
  {
    name: "Mathematics Form 3 Assessment",
    subject: "Mathematics",
    price: 150,
    total: 100,
    test: [
      { question: "Solve 2x + 5 = 15", marks: 5, answer: "x = 5" },
      { question: "Factorize x^2 + 5x + 6", marks: 5, answer: "(x+2)(x+3)" },
      { question: "Graph y = 2x + 3", marks: 5, answer: "Straight line through (0,3) with slope 2" },
      { question: "Find the area of a triangle with base 5cm and height 4cm", marks: 5, answer: "Area = 10 cm²" },
      { question: "Solve 3x - 7 = 2x + 8", marks: 5, answer: "x = 15" },
      { question: "Simplify 2(x + 3) - 4", marks: 5, answer: "2x + 2" },
      { question: "Find the probability of getting heads when tossing a coin", marks: 5, answer: "1/2" },
      { question: "Convert 150% to a fraction", marks: 5, answer: "3/2" },
      { question: "Solve x/3 + 2 = 5", marks: 5, answer: "x = 9" },
      { question: "Calculate the mean of 5, 7, 8, 10, 15", marks: 5, answer: "9" },
    ]
  },
  {
    name: "Physics Form 3 Assessment",
    subject: "Physics",
    price: 150,
    total: 100,
    test: [
      { question: "State Newton's second law of motion", marks: 10, answer: "Force = mass × acceleration" },
      { question: "A car of mass 1000kg accelerates at 2 m/s². Find the force.", marks: 10, answer: "F = 1000 × 2 = 2000 N" },
      { question: "Explain the difference between speed and velocity", marks: 10, answer: "Speed is scalar; velocity is vector" },
      { question: "What is the formula for kinetic energy?", marks: 10, answer: "KE = 1/2 × m × v²" },
      { question: "A body falls from 20 m. Find its velocity just before hitting the ground. (g=10m/s²)", marks: 10, answer: "v = √(2gh) = √(2×10×20) = 20 m/s" },
      { question: "Define potential energy", marks: 10, answer: "PE = m × g × h" },
      { question: "Describe an experiment to verify Ohm's law", marks: 10, answer: "Vary the current through a resistor and measure voltage; V/I = R" },
      { question: "Explain why metals are good conductors", marks: 10, answer: "They have free electrons that carry charge" },
      { question: "Differentiate between series and parallel circuits", marks: 10, answer: "Series: current same, voltage shared; Parallel: voltage same, current divides" },
      { question: "State the law of conservation of energy", marks: 10, answer: "Energy cannot be created or destroyed, only transformed" },
    ]
  },

  // FORM 4
  {
    name: "Mathematics Form 4 Assessment",
    subject: "Mathematics",
    price: 200,
    total: 100,
    test: [
      { question: "Solve the simultaneous equations: 2x + y = 10, x - y = 2", marks: 10, answer: "x = 4, y = 2" },
      { question: "Find the derivative of y = 3x² + 2x - 5", marks: 10, answer: "dy/dx = 6x + 2" },
      { question: "A card is drawn from a pack of 52. Find probability it is a heart.", marks: 10, answer: "13/52 = 1/4" },
      { question: "The sum of angles in a triangle is 180°. Find the missing angle if two angles are 50° and 60°.", marks: 10, answer: "70°" },
      { question: "Solve x² - 5x + 6 = 0", marks: 10, answer: "x = 2, 3" },
      { question: "Find the area of a circle with radius 7cm", marks: 10, answer: "Area = π × 7² = 154 cm²" },
      { question: "Calculate probability of getting even number on a die", marks: 10, answer: "3/6 = 1/2" },
      { question: "Simplify (x² - 9)/(x - 3)", marks: 10, answer: "x + 3" },
      { question: "Solve log₂ 8 = ?", marks: 10, answer: "3" },
      { question: "Find the mean of 10, 15, 20, 25, 30", marks: 10, answer: "20" },
    ]
  },
  {
    name: "Physics Form 4 Assessment",
    subject: "Physics",
    price: 200,
    total: 100,
    test: [
      { question: "A force of 50N acts on a mass of 5kg. Find acceleration.", marks: 10, answer: "a = F/m = 50/5 = 10 m/s²" },
      { question: "Define work done", marks: 10, answer: "Work = Force × Distance × cosθ" },
      { question: "Calculate kinetic energy of 2kg mass moving at 3 m/s", marks: 10, answer: "KE = 1/2 × 2 × 3² = 9 J" },
      { question: "Describe an experiment to measure g using a pendulum", marks: 10, answer: "Measure period and length; g = 4π²L/T²" },
      { question: "Explain reflection and refraction of light", marks: 10, answer: "Reflection: light bounces off surface; Refraction: light bends entering new medium" },
      { question: "Find the final velocity of a body falling from 45 m (g = 9.8)", marks: 10, answer: "v ≈ 29.7 m/s" },
      { question: "Differentiate between transverse and longitudinal waves", marks: 10, answer: "Transverse: perpendicular motion; Longitudinal: parallel motion" },
      { question: "State Ohm’s Law", marks: 10, answer: "V = IR" },
      { question: "Explain why metals expand on heating", marks: 10, answer: "Particles gain kinetic energy and move apart" },
      { question: "State the principle of conservation of momentum", marks: 10, answer: "Total momentum before = total momentum after collision" },
    ]
  },
];

// Categories for sidebar
const categories = [
  "Parents",
  "Teachers",
  "Students",
  "Financials",
  "Academics",
  "Sports",
  "Default"
];

// Pages grid (like Vision, KCSE, etc.)
const pages = [
  { title: "Vision and Mission", desc: "Vision to become a leading and most preferred National School...", img: "/images/1769612383841.jpg" },
  { title: "KCSE Exam analysis", desc: "Butere Boys' High School results since 1989...", img: "/images/1769612383841.jpg" },
  { title: "Historical Perspective", desc: "Butere Boys' High School sits on 71 acres...", img: "/images/1769612383841.jpg" },
  { title: "Crest & School Song", desc: "The crest is composed of a yellow flaming torch...", img: "/images/1769612383841.jpg" },
  { title: "Contact Us", desc: "P.O BOX 109-00902 Kakamega...", img: "/images/1769612383841.jpg" },
  { title: "Fees", desc: "Butere Boys' High School account details...", img: "/images/1769612383841.jpg" }
];

function Page() {
  return (
    <div>
      {/* HEADER */}
      <div style={styles.topBar}>
        <span>education@elimu.co.ke</span>
        <span>+254 700 663 000</span>
        <span>Mpesa Till: 323253</span>
      </div>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <span>Home</span>
        <span>Senior School Exams</span>
        <span>Notes & Booklets</span>
        <span style={{ marginLeft: "auto" }}>🛒 Cart</span>
      </div>

      {/* Academics Section */}
      <div className="container mt-4">
        <h1 className="text-success mb-4">Academics</h1>
        <p>
          Butere Boys High School offers a strong academic curriculum designed
          to prepare students for KCSE and beyond.
        </p>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>Subjects Offered</h5>
              <ul>
                <li>Mathematics</li>
                <li>English & Kiswahili</li>
                <li>Sciences (Physics, Chemistry, Biology)</li>
                <li>Humanities</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>Performance</h5>
              <p>
                The school has consistently achieved excellent KCSE results
                with many students joining top universities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* School Analytics Sidebar + Pages */}
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h3>Categories</h3>
          {categories.map((cat, i) => (
            <Link key={i} to={`/category/${cat.toLowerCase()}`} style={styles.categoryLink}>
              {cat} →
            </Link>
          ))}
          <div style={styles.promo}>
            <p>Get lesson plans, exams notes & schemes of work</p>
            <button style={styles.learnBtn}>Learn online</button>
          </div>
        </div>

        <div style={styles.grid}>
          {pages.map((page, i) => (
            <div key={i} style={styles.card}>
              <img src={page.img} alt="" style={styles.image} />
              <p style={styles.school}>Butere Boys High School</p>
              <h4>{page.title}</h4>
              <p style={styles.desc}>{page.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid (Assessments) */}
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h3>Senior School Exams</h3>
          <p>Form 3 & Form 4 Assessment Tests</p>
        </div>

        <div style={styles.main}>
          <h2>Assessment Tests</h2>
          <div style={styles.grid}>
            {products.map((p, i) => (
              <div key={i} style={styles.card}>
                <h4 style={{ color: "#1a73e8" }}>{p.name}</h4>
                <p style={styles.meta}>
                  Subject: {p.subject} <span style={styles.price}>KES {p.price}</span>
                </p>
                <p>Total Marks: {p.total}</p>

                <div style={{ marginTop: "10px", background: "#f1f8e9", padding: "10px", borderRadius: "5px" }}>
                  <h5>Assessment Questions</h5>
                  <ol>
                    {p.test.map((q, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        <strong>Q:</strong> {q.question} <br />
                        <strong>Marks:</strong> {q.marks} <br />
                        <strong>Answer:</strong> {q.answer}
                      </li>
                    ))}
                  </ol>
                </div>

                <div style={styles.actions}>
                  <button style={styles.payBtn}>Pay Now</button>
                  <button style={styles.cartBtn}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div>
          <h3>Elimu Library</h3>
          <p>Educational materials for students and teachers.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>+254 700 663 000</p>
          <p>education@elimu.co.ke</p>
        </div>
        <div>
          <h4>Policies</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  topBar: {
    background: "#0b5e3c",
    color: "#fff",
    padding: "8px 20px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px"
  },
  navbar: {
    background: "#146c43",
    color: "#fff",
    padding: "12px 20px",
    display: "flex",
    gap: "20px"
  },
  container: {
    display: "flex",
    padding: "20px",
    background: "#f5f5f5",
    flexWrap: "wrap",
    gap: "20px"
  },
  sidebar: {
    width: "250px",
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    flexShrink: 0
  },
  categoryLink: {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#333",
    borderBottom: "1px solid #ddd"
  },
  promo: {
    marginTop: "20px",
    background: "#3f7d3a",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center"
  },
  learnBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  main: {
    flex: 1
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    flex: 1
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  },
  school: {
    fontSize: "12px",
    color: "#777"
  },
  desc: {
    fontSize: "13px",
    color: "#555"
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#555"
  },
  subject: {
    margin: "10px 0",
    fontWeight: "bold"
  },
  price: {
    color: "#1a73e8",
    fontWeight: "bold"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },
  payBtn: {
    background: "#e0e0e0",
    border: "none",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  cartBtn: {
    background: "#198754",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  footer: {
    background: "#111",
    color: "#fff",
    padding: "30px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
    flexWrap: "wrap"
  }
};

export default Page;