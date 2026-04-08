import React from "react";
import { Link } from "react-router-dom";

// Import all subject components

// Products
const products = [
  { name: "Wood Technology", subject: "Wood Technology"},
  { name: "Theatre & Film Technology", subject: "Theatre and Film"},
  { name: "Sports & Recreation", subject: "Sports and Recreation"},
  { name: "Power Mechanics Assignment", subject: "Power Mechanics"},
  { name: "Physics Holiday Assignment", subject: "Physics"},
  { name: "Physical Education", subject: "Physical Education"},
  { name: "Music and Dance Assignment", subject: "Music and Dance"},

  { name: "Media Technology", subject: "Media Technology"},
  { name: "Marine Technology", subject: "Marine Technology"},
  { name: "Mandarin Assignment", subject: "Mandarin Chinese"},
  { name: "Kiswahili Assignment", subject: "Kiswahili"},
  { name: "ICT Holiday Assignment", subject: "ICT"},
  { name: "Home Science Assignment", subject: "Home Science"},
  { name: "History & Citizenship", subject: "History and Citizenship"},
  { name: "Geography Assignment", subject: "Geography"},
  { name: "General Science Assignment", subject: "General Science"},
  { name: "French Assignment", subject: "French"},
  { name: "Fine Arts Assignment", subject: "Fine Arts"},
   { name: "Metal Technology Assignment", subject: "Metal Technology"},
  { name: "Mathematics Assignment", subject: "Mathematics"},
  { name: "English Assignment", subject: "English"}
  
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
    
      {/* Products Grid */}
      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h5 className="text-white bg-success">SUBJECTS</h5>
            <ol className="text-start">
              <i>
              <li>Metal Technology</li>
              <li>Wood Technology</li>
              <li>Theatre & Film</li>
              <li>Sports & Recreation</li>
              <li>Power Mechanics</li>
              <li>Physics Holiday</li>
              <li>Physical Education</li>
              <li>Music & Dance</li>
              <li>Media Technology</li>
              <li>Marine Technology</li>
              <li>Mandarin</li>
              <li>Kiswahili</li>
              <li>ICT Holiday</li>
              <li>Home Science</li>
              <li>History & Citizenship</li>
              <li>Geography</li>
              <li>General Science</li>
              <li>French</li>
              <li>Fine Arts</li>
              <li>Mathematics</li>
              <li>English </li>
              </i>
            </ol>
          
        </div>

        {/* Main Products */}
        <div style={styles.main}>
          <h2>Grade 13 Holiday Assignment</h2>
          <div style={styles.grid}>
            {products.map((p, i) => (
              <div key={i} style={styles.card}>
                <h4 style={{ color: "#1a73e8" }}>
                  {p.name.toUpperCase()}
                </h4>
                <p style={styles.meta}>
                  
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