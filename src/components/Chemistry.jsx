import React, { useState } from "react";

export default function ChemistryAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "1000px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>CBC CHEMISTRY ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p><strong>Name:</strong> __________________________</p>
        <p><strong>Date:</strong> __________________</p>
      </div>
      <p><strong>School:</strong> __________________________</p>
      <p><strong>Duration:</strong> 2 Hours</p>

      <hr />

      <h2>Instructions</h2>
      <ul>
        <li>Answer all questions.</li>
        <li>Show all chemical equations and calculations.</li>
        <li>Use proper chemical symbols and units.</li>
        <li>Label diagrams clearly.</li>
      </ul>

      <hr />

      {/* SECTION A */}
      <h2>SECTION A: ATOMIC STRUCTURE & PERIODIC TABLE (20 MARKS)</h2>
      <ol>
        <li>Define the following: (6 marks)
          <ul>
            <li>Atom</li>
            <li>Element</li>
            <li>Compound</li>
          </ul>
        </li>

        <li>Draw the Bohr model for an atom with 6 protons and 6 neutrons. (6 marks)</li>

        <li>Explain three trends in the periodic table. (8 marks)</li>
      </ol>

      <hr />

      {/* SECTION B */}
      <h2>SECTION B: CHEMICAL REACTIONS (25 MARKS)</h2>
      <ol>
        <li>Balance the following equations: (10 marks)
          <ul>
            <li>H₂ + O₂ → H₂O</li>
            <li>Fe + O₂ → Fe₂O₃</li>
          </ul>
        </li>

        <li>Classify the following reactions: (5 marks)
          <ul>
            <li>CaCO₃ → CaO + CO₂</li>
            <li>2Na + Cl₂ → 2NaCl</li>
          </ul>
        </li>

        <li>Explain the factors affecting the rate of a chemical reaction. (10 marks)</li>
      </ol>

      <hr />

      {/* SECTION C */}
      <h2>SECTION C: ACIDS, BASES & SALTS (20 MARKS)</h2>
      <ol>
        <li>Define an acid and a base with one example each. (4 marks)</li>
        <li>Write the chemical equation for the reaction of hydrochloric acid with sodium hydroxide. (4 marks)</li>
        <li>Describe three indicators used in identifying acids and bases. (6 marks)</li>
        <li>Explain the pH scale. (6 marks)</li>
      </ol>

      <hr />

      {/* SECTION D */}
      <h2>SECTION D: PRACTICAL APPLICATIONS (15 MARKS)</h2>
      <ol>
        <li>Describe the steps for preparing a salt from a given acid and base. (6 marks)</li>
        <li>Explain safety precautions to observe in the chemistry laboratory. (6 marks)</li>
        <li>Identify the observation when magnesium reacts with dilute hydrochloric acid. (3 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>TOTAL: 80 MARKS</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#0288d1",
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

          <h3>SECTION A: ATOMIC STRUCTURE & PERIODIC TABLE (20 MARKS)</h3>
          <ul>
            <li>Definitions: 2 marks each × 3 = 6</li>
            <li>Bohr model (6 protons, 6 neutrons) = 6</li>
            <li>Periodic trends: e.g., atomic radius, electronegativity, ionization energy = 8</li>
          </ul>

          <h3>SECTION B: CHEMICAL REACTIONS (25 MARKS)</h3>
          <ul>
            <li>Balanced equations:
              <ul>
                <li>2H₂ + O₂ → 2H₂O (5)</li>
                <li>4Fe + 3O₂ → 2Fe₂O₃ (5)</li>
              </ul>
            </li>
            <li>Reaction classification:
              <ul>
                <li>CaCO₃ → CaO + CO₂ = decomposition (2.5)</li>
                <li>2Na + Cl₂ → 2NaCl = synthesis (2.5)</li>
              </ul>
            </li>
            <li>Factors affecting rate: concentration, temperature, catalyst, surface area = 10</li>
          </ul>

          <h3>SECTION C: ACIDS, BASES & SALTS (20 MARKS)</h3>
          <ul>
            <li>Acid: HCl, Base: NaOH (2 marks each + 1 for example = 4)</li>
            <li>Reaction: HCl + NaOH → NaCl + H₂O = 4</li>
            <li>Indicators: Litmus, phenolphthalein, methyl orange = 2 marks each ×3 = 6</li>
            <li>pH scale explanation = 6</li>
          </ul>

          <h3>SECTION D: PRACTICAL APPLICATIONS (15 MARKS)</h3>
          <ul>
            <li>Steps for salt preparation = 6</li>
            <li>Lab safety precautions = 6</li>
            <li>Observation: effervescence, hydrogen gas release = 3</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>TOTAL: 80 MARKS</h3>
        </div>
      )}
    </div>
  );
}