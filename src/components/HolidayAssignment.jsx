import React from "react";
import { Link } from "react-router-dom";

// Grades and corresponding routes
const grades = [
  { name: "Grade10", path: "/Grade10" },
  { name: "Grade11", path: "/Grade11" },
  { name: "Grade12", path: "/Grade12" },
  { name: "Grade13", path: "/Grade13" },
  { name: "Form3", path: "/Form3" },
  { name: "Form4", path: "/Form4" }
];

function Page() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <div style={styles.container}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <h3>Homework Booklets</h3>

    

          {/* Dynamic grade/form links */}
          {grades.map((g) => (
            <Link key={g.name} to={g.path} style={styles.sideItem}>
              {g.name}
            </Link>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div style={styles.main}>
          <h2>Welcome! Select a Grade/Form to view booklets</h2>
          <p>Click on a grade or form on the left to open the assignments.</p>
          <h5 className="text-danger">Only Teachers are allowed to upload assignments.</h5>
         <Link className="text-center btn btn-success m-1" to="/UploadAssignment"><h2>Upload Assignments</h2></Link>

        </div>
         
        
      </div>
    </div>
  );
}

// STYLES
const styles = {
  container: {
    display: "flex",
    background: "#f5f5f5",
    padding: "20px"
  },
  sidebar: {
    width: "250px",
    background: "#fff",
    padding: "15px",
    borderRadius: "8px"
  },
  sideItem: {
    display: "block",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
    textDecoration: "none",
    color: "#198754",
    fontWeight: "bold",
    marginBottom: "5px"
  },
  main: {
    flex: 1,
    marginLeft: "20px"
  }
};

export default Page;