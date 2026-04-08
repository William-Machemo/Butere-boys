import React from "react";
import { Link } from "react-router-dom";

// Import all subject components

// Products
const products = [
  { name: "Wood Technology End Term Assessment", subject: "Wood Technology"},
  { name: "Theatre and Film Technology End Term Assessment", subject: "Theatre and Film"},
  { name: "Sports and Recreation End Term Assessment", subject: "Sports and Recreation"},
  { name: "Power Mechanics End Term Assessment", subject: "Power Mechanics"},
  { name: "Physics End Term Assessment", subject: "Physics"},
  { name: "Physical Education End Term Assessment", subject: "Physical Education"},
  { name: "Music and Dance End Term Assessment", subject: "Music and Dance" },

  { name: "Media Technology End Term Assessment", subject: "Media Technology" },
  { name: "Marine Technology End Term Assessment", subject: "Marine Technology" },
  { name: "Mandarin End Term Assessment", subject: "Mandarin Chinese"},
  { name: "Kiswahili End Term Assessment", subject: "Kiswahili"},
  { name: "ICT End Term Assessment", subject: "ICT"},
  { name: "Home Science End Term Assessment", subject: "Home Science" },
  { name: "History and Citizenship End Term Assessment", subject: "History and Citizenship" },
  { name: "Geography End Term Assessment", subject: "Geography"},
  { name: "General Science End Term Assessment", subject: "General Science" },
  { name: "French End Term Assessment", subject: "French"},
  { name: "Fine Arts End Term Assessment", subject: "Fine Arts"},
  { name: "Mathematics End Term Assessment", subject: "Mathematics"},
  { name: "English End Term Assessment", subject: "English"}
];

// Mapping subjects to routes
const subjectRoutes = {
  "Wood Technology": "/wood-technology",
  "Theatre and Film": "/theatre-film",
  "Sports and Recreation": "/sports-recreation",
  "Power Mechanics": "/power-mechanics",
  "Physics": "/physics",
  "Physical Education": "/physical-education",
  "Music and Dance": "/music-dance",
  "Metal Technology": "/metal-technology",
  "Media Technology": "/media-technology",
  "Marine Technology": "/marine-technology",
  "Mandarin Chinese": "/mandarin",
  "Kiswahili": "/kiswahili",
  "ICT": "/ict",
  "Home Science": "/home-science",
  "History and Citizenship": "/history-citizenship",
  "Geography": "/geography",
  "General Science": "/general-science",
  "French": "/french",
  "Fine Arts": "/fine-arts",
  "Mathematics": "/mathematics",
  "English": "/english"
};

// Categories for sidebar
const categories = ["Parents", "Teachers", "Students", "Financials", "Academics", "Sports", "Default"];

// Pages grid
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
 {/* Academics Section */}
 <div className="container mt-4">
 <h1 className="text-success mb-4">Academics</h1>
 <p> Butere Boys High School offers a strong academic curriculum designed
 to prepare students for KCSE and beyond.  </p>
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
  <p> The school has consistently achieved excellent KCSE results
   with many students joining top universities. </p>
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
   <Link key={i} to={`/category/${cat.toLowerCase()}`} style={styles.categoryLink} > {cat} → </Link>
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
                  <span style={styles.price}> {p.price}</span>
                </p>
                <p style={styles.subject}>{p.subject}</p>
                <div style={styles.actions}>
                  {/* Link to specific subject page */}
                  <Link
                    className="btn btn-success w-100 p-3"
                    to={subjectRoutes[p.subject]}
                  >
                    View
                  </Link>

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