import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const grades = ["Grade10", "Grade11", "Grade12", "Grade13", "Form3", "Form4"];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Homework Booklets Menu</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
        {grades.map((grade) => (
          <Link
            key={grade}
            to={`/${grade}`}
            style={{
              padding: "15px 25px",
              background: "#198754",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            {grade}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;