import React from "react";
import { Link } from "react-router-dom"; // ✅ FIXED

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
  {
    title: "Vision and Mission",
    desc: "Vision to become a leading and most preferred National School...",
    img: "/images/1769612383841.jpg"
  },
  {
    title: "KCSE Exam analysis",
    desc: "Butere Boys' High School results since 1989...",
    img: "/images/1769612383841.jpg"
  },
  {
    title: "Historical Perspective",
    desc: "Butere Boys' High School sits on 71 acres...",
    img: "/images/1769612383841.jpg"
  },
  {
    title: "Crest & School Song",
    desc: "The crest is composed of a yellow flaming torch...",
    img: "/images/1769612383841.jpg"
  },
  {
    title: "Contact Us",
    desc: "P.O BOX 109-00902 Kakamega...",
    img: "/images/1769612383841.jpg"
  },
  {
    title: "Fees",
    desc: "Butere Boys' High School account details...",
    img: "/images/1769612383841.jpg"
  }
];

function SchoolPage() {
  return (
    <div>
     
      {/* TITLE BAR */}
      <div style={styles.titleBar}>
        <h1>School Analytics</h1>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <h3>Categories</h3>
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/category/${cat.toLowerCase()}`} // ✅ Better routing
              style={styles.categoryLink}
            >
              {cat} →
            </Link>
          ))}

          {/* PROMO */}
          <div style={styles.promo}>
            <p>Get lesson plans, exams notes & schemes of work</p>
            <button style={styles.learnBtn}>Learn online</button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div style={styles.grid}>
          {pages.map((page, i) => (
            <div key={i} style={styles.card}>
              <img src={page.img} alt="" style={styles.image} />
              <p style={styles.school}>Butere Boys High School</p> {/* ✅ FIXED */}
              <h4>{page.title}</h4>
              <p style={styles.desc}>{page.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#eee"
  },
  logoBox: {
    display: "flex",
    alignItems: "center"
  },
  navbar: {
    display: "flex",
    flexWrap: "wrap", // ✅ FIX: prevents overflow
    gap: "10px",
    justifyContent: "center",
    padding: "15px",
    background: "#fff"
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    background: "#198754",
    padding: "8px 12px",
    borderRadius: "5px",
    fontSize: "14px"
  },
  titleBar: {
    background: "#3f7d3a",
    color: "#fff",
    padding: "20px"
  },
  container: {
    display: "flex",
    padding: "20px",
    background: "#f5f5f5"
  },
  sidebar: {
    width: "250px",
    background: "#fff",
    padding: "15px",
    borderRadius: "8px"
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
  grid: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginLeft: "20px"
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    padding: "10px"
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
  footer: {
    background: "#1b5e20",
    color: "#fff",
    padding: "30px",
    display: "flex",
    justifyContent: "space-between"
  },
  copy: {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
  }
};

export default SchoolPage;