import React from "react";
import { Link } from "react-router-dom";


const products = [
  { name: "Wood Technology End Term Assessment", subject: "Wood Technology", price: 100 },
  { name: "Theatre and Film Technology End Term Assessment", subject: "Theatre and Film", price: 100 },
  { name: "Sports and Recreation End Term Assessment", subject: "Sports and Recreation", price: 100 },
  { name: "Power Mechanics End Term Assessment", subject: "Power Mechanics", price: 100 },
  { name: "Physics End Term Assessment", subject: "Physics", price: 100 },
  { name: "Physical Education End Term Assessment", subject: "Physical Education", price: 100 },
  { name: "Music and Dance End Term Assessment", subject: "Music and Dance", price: 100 },
  { name: "Metal Technology End Term Assessment", subject: "Metal Technology", price: 100 },
  { name: "Media Technology End Term Assessment", subject: "Media Technology", price: 100 },
  { name: "Marine Technology End Term Assessment", subject: "Marine and Fisheries", price: 100 },
  { name: "Mandarin End Term Assessment", subject: "Mandarin Chinese", price: 100 },
  { name: "Kiswahili End Term Assessment", subject: "Kiswahili", price: 100 },
  { name: "ICT End Term Assessment", subject: "ICT", price: 100 },
  { name: "Home Science End Term Assessment", subject: "Home Science", price: 100 },
  { name: "History and Citizenship End Term Assessment", subject: "History and Citizenship", price: 100 },
  { name: "Geography End Term Assessment", subject: "Geography", price: 100 },
  { name: "General Science End Term Assessment", subject: "General Science", price: 100 },
  { name: "French End Term Assessment", subject: "French", price: 100 },
  { name: "Fine Arts End Term Assessment", subject: "Fine Arts", price: 100 },
  { name: "Mathematics End Term Assessment", subject: "Mathematics", price: 100 },
  { name: "English End Term Assessment", subject: "English", price: 100 }
];

const categories = [
  "Parents",
  "Teachers",
  "Students",
  "Financials",
  "Academics",
  "Sports",
  "Default"
];

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
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3>Categories</h3>
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/category/${cat.toLowerCase()}`}
              style={styles.categoryLink}
            >
              {cat} →
            </Link>
          ))}
          <div style={styles.promo}>
            <p>Get lesson plans, exams notes & schemes of work</p>
            <button style={styles.learnBtn}>Learn online</button>
          </div>
        </div>

        {/* Pages Grid */}
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

      {/* Products Grid */}
      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3>Grade 10</h3>
          <p>Senior School Exams</p>
        </div>

        {/* Main Products */}
        <div style={styles.main}>
          <h2>Senior School Exams - Grade 10</h2>
          <div style={styles.grid}>
            {products.map((p, i) => (
              <div key={i} style={styles.card}>
                <h4 style={{ color: "#1a73e8" }}>
                  2026 GRADE 10 {p.name.toUpperCase()}
                </h4>
                <p style={styles.meta}>
                  Senior School Exams - Grade 10
                  <span style={styles.price}>KES {p.price}</span>
                </p>
                <p style={styles.subject}>{p.subject}</p>
                <div style={styles.actions}>
                  <button style={styles.payBtn}>View</button>
                  <button style={styles.cartBtn}>Add to favourite</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={styles.pagination}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
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
    gridTemplateColumns: "repeat(3, 1fr)",
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
    justifyContent: "space-between"
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
  pagination: {
    marginTop: "20px",
    display: "flex",
    gap: "10px"
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