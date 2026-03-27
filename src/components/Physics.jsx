import React from "react";

const Physics = () => {
  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>CBC Physics Assessments</h2>
        <p>Grade 10 | Time: 2 Hours</p>
      </div>

      {/* MAIN EXAM */}
      <Section title="CBC Physics End Term Assessment">
        <h4>Instructions</h4>
        <ul>
          <li>Answer all questions</li>
          <li>Show all working clearly</li>
        </ul>

        <h3>SECTION A (20 Marks)</h3>
        <ol>
          <li>Define the term force. (2 marks)</li>
          <li>State two effects of a force. (2 marks)</li>
          <li>SI unit of: (a) Force (b) Work (2 marks)</li>
          <li>Mass = 5 kg → Find weight (g = 10 m/s²)</li>
          <li>Distinguish between mass and weight</li>
          <li>State Newton’s First Law</li>
          <li>What is pressure?</li>
          <li>Name two types of energy</li>
          <li>Define power</li>
          <li>Example of renewable energy</li>
        </ol>

        <h3>SECTION B (30 Marks)</h3>
        <p>(a) Define work</p>
        <p>(b) 10 N moves object 5 m → Calculate work</p>

        <p>(a) State Ohm’s Law</p>
        <p>(b) I = 2A, R = 5Ω → Find V</p>

        <p>(a) Define density</p>
        <p>(b) Mass = 20 kg, Volume = 4 m³ → Find density</p>

        <p>(a) Define heat energy</p>
        <p>(b) Explain heat transfer</p>

        <p>(a) Define velocity</p>
        <p>(b) 100 m in 5 s → Find velocity</p>

        <h3>SECTION C (50 Marks)</h3>
        <p>Newton’s Second Law explanation</p>
        <p>Force = 20 N, mass = 4 kg → Find acceleration</p>

        <p>Kinetic energy definition + calculation</p>

        <p>Electricity + circuit explanation</p>

        <p>Waves + types</p>
      </Section>

      {/* MARKING SCHEME */}
      <Section title="Marking Scheme">
        <ul>
          <li>Weight = 50 N</li>
          <li>Work = 50 J</li>
          <li>Voltage = 10 V</li>
          <li>Density = 5 kg/m³</li>
          <li>Velocity = 20 m/s</li>
          <li>Acceleration = 5 m/s²</li>
          <li>KE = 9 J</li>
        </ul>
      </Section>

      {/* TERM 1 */}
      <Section title="TERM 1 EXAM (Mechanics)">
        <h4>Section A</h4>
        <ul>
          <li>Distance & Displacement</li>
          <li>Speed vs Velocity</li>
          <li>60m in 3s → speed</li>
          <li>Acceleration</li>
          <li>Inertia</li>
        </ul>

        <h4>Section B</h4>
        <p>Velocity calculation</p>
        <p>Force = ma</p>
        <p>Pressure</p>
        <p>Work</p>
        <p>Power</p>

        <h4>Section C</h4>
        <p>Newton’s Laws</p>
        <p>Kinetic Energy</p>
        <p>Potential Energy</p>
        <p>Friction</p>

        <h4>Marking Scheme</h4>
        <ul>
          <li>Speed = 20 m/s</li>
          <li>Force = 20 N</li>
          <li>Pressure = 10 Pa</li>
          <li>Work = 200 J</li>
          <li>Power = 20 W</li>
        </ul>
      </Section>

      {/* TERM 2 */}
      <Section title="TERM 2 EXAM (Electricity)">
        <h4>Section A</h4>
        <ul>
          <li>Current</li>
          <li>Voltage</li>
          <li>Resistance</li>
          <li>Ohm’s Law</li>
        </ul>

        <h4>Section B</h4>
        <p>V = IR → Find V</p>
        <p>Energy calculation</p>

        <h4>Section C</h4>
        <p>Circuits</p>
        <p>Series vs Parallel</p>
        <p>Safety rules</p>

        <h4>Marking Scheme</h4>
        <ul>
          <li>Voltage = 8 V</li>
          <li>Energy = 1000 J</li>
        </ul>
      </Section>

      {/* TERM 3 */}
      <Section title="TERM 3 EXAM (Waves, Heat & Light)">
        <h4>Section A</h4>
        <ul>
          <li>Wave</li>
          <li>Frequency</li>
          <li>Wavelength</li>
        </ul>

        <h4>Section B</h4>
        <p>v = fλ → Find velocity</p>

        <h4>Section C</h4>
        <p>Reflection of light</p>
        <p>Heat transfer</p>

        <h4>Marking Scheme</h4>
        <ul>
          <li>Velocity = 100 m/s</li>
        </ul>
      </Section>

    </div>
  );
};

/* REUSABLE SECTION COMPONENT */
const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {children}
  </div>
);

/* STYLES */
const styles = {
  page: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
    background: "#fff"
  },
  header: {
    textAlign: "center",
    borderBottom: "2px solid black",
    marginBottom: "20px"
  },
  section: {
    marginBottom: "30px",
    padding: "15px",
    background: "#f9f9f9",
    borderRadius: "8px"
  },
  sectionTitle: {
    borderBottom: "2px solid #198754",
    paddingBottom: "5px"
  }
};

export default Physics;