import React, { useState } from "react";

export default function MathematicsAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "1000px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC MATHEMATICS ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p><strong>Name:</strong> __________________________</p>
        <p><strong>Date:</strong> __________________</p>
      </div>
      <p><strong>School:</strong> __________________________</p>
      <p><strong>Duration:</strong> 2 Hours</p>

      <hr />

      <h2>General Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Show all workings clearly.</li>
        <li>Use diagrams where necessary.</li>
        <li>Round answers to 2 decimal places where appropriate.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: ALGEBRA (20 MARKS)</h2>
      <ol>
        <li>Simplify: \( 3x + 5x - 7 \) (3 marks)</li>
        <li>Solve for x: \( 2x + 7 = 15 \) (4 marks)</li>
        <li>Solve simultaneously: 
          <br />\( x + y = 10 \), \( x - y = 4 \) (6 marks)</li>
        <li>Factorize: \( x^2 + 5x + 6 \) (7 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: GEOMETRY & TRIGONOMETRY (20 MARKS)</h2>
      <ol>
        <li>Calculate the area of a triangle with base 8 cm and height 5 cm. (4 marks)</li>
        <li>Find the perimeter of a rectangle with length 12 m and width 7 m. (4 marks)</li>
        <li>A right triangle has sides 6 cm and 8 cm. Find the hypotenuse. (6 marks)</li>
        <li>Calculate \(\sin 30^\circ\), \(\cos 60^\circ\), \(\tan 45^\circ\). (6 marks)</li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: STATISTICS & PROBABILITY (15 MARKS)</h2>
      <ol>
        <li>The marks of 5 students are: 12, 15, 18, 20, 25. Find:
          <ul>
            <li>Mean (3 marks)</li>
            <li>Median (3 marks)</li>
            <li>Mode (3 marks)</li>
          </ul>
        </li>
        <li>A bag has 3 red, 2 blue, and 5 green balls. Find the probability of picking:
          <ul>
            <li>A red ball (3 marks)</li>
            <li>A green ball (3 marks)</li>
          </ul>
        </li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: WORD PROBLEMS & APPLICATIONS (25 MARKS)</h2>
      <ol>
        <li>A shop sold 120 pencils in a day. If 40% were blue, how many were blue? (5 marks)</li>
        <li>The perimeter of a square is 48 m. Find its area. (5 marks)</li>
        <li>A car travels at 60 km/h. How far will it travel in 2.5 hours? (5 marks)</li>
        <li>The sum of three consecutive numbers is 72. Find the numbers. (5 marks)</li>
        <li>A tank can hold 500 liters of water. If 3/5 is filled, how much water is in the tank? (5 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px"
        }}
      >
        {showMarking ? "Hide Marking Scheme" : "Show Marking Scheme"}
      </button>

      {/* MARKING SCHEME */}
      {showMarking && (
        <div style={{ marginTop: "25px", background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
          
          <h2>DETAILED MARKING SCHEME (CBC RUBRIC)</h2>

          <h3>SECTION A: ALGEBRA (20 MARKS)</h3>
          <ul>
            <li>Simplify: 8x - 7 (3)</li>
            <li>Solve 2x + 7 = 15 → x = 4 (4)</li>
            <li>Simultaneous: x=7, y=3 (6)</li>
            <li>Factorize: (x + 2)(x + 3) (7)</li>
          </ul>

          <h3>SECTION B: GEOMETRY & TRIGONOMETRY (20 MARKS)</h3>
          <ul>
            <li>Area triangle: 0.5 × 8 × 5 = 20 cm² (4)</li>
            <li>Perimeter rectangle: 2(12+7)=38 m (4)</li>
            <li>Hypotenuse: √(6²+8²)=10 cm (6)</li>
            <li>Trig: sin30°=0.5, cos60°=0.5, tan45°=1 (6)</li>
          </ul>

          <h3>SECTION C: STATISTICS & PROBABILITY (15 MARKS)</h3>
          <ul>
            <li>Mean: (12+15+18+20+25)/5 = 18 (3)</li>
            <li>Median: 18 (3)</li>
            <li>Mode: none (0 or state none) (3)</li>
            <li>Probability red: 3/10 (3)</li>
            <li>Probability green: 5/10 = 1/2 (3)</li>
          </ul>

          <h3>SECTION D: WORD PROBLEMS (25 MARKS)</h3>
          <ul>
            <li>Blue pencils: 40% of 120 = 48 (5)</li>
            <li>Area square: side=48/4=12, area=12²=144 m² (5)</li>
            <li>Distance: 60×2.5=150 km (5)</li>
            <li>Consecutive numbers: x + (x+1) + (x+2) =72 → x=23 → numbers: 23,24,25 (5)</li>
            <li>Water: 3/5 × 500 = 300 liters (5)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>

        </div>
      )}
    </div>
  );
}