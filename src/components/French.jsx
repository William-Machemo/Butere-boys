import React, { useState } from "react";

export default function FrenchAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center" }}>CBC FRENCH ASSESSMENT</h1>
      <h3 style={{ textAlign: "center" }}>Grade 10</h3>

      <p><strong>Nom:</strong> __________________________</p>
      <p><strong>École:</strong> _________________________</p>
      <p><strong>Date:</strong> ___________________________</p>
      <p><strong>Durée:</strong> 2 Heures</p>

      <hr />

      <h2>Instructions</h2>
      <ul>
        <li>Répondez à toutes les questions.</li>
        <li>Écrivez en phrases complètes.</li>
        <li>Lisez attentivement chaque question.</li>
      </ul>

      <hr />

      <h2>SECTION A: COMPRÉHENSION (20 POINTS)</h2>
      <p>
        <em>
          Marie est une élève en classe de dixième. Elle aime lire et jouer au football.
          Chaque matin, elle va à l’école avec ses amis. Après l’école, elle fait ses devoirs.
        </em>
      </p>

      <ol>
        <li>Qui est Marie ? (2 points)</li>
        <li>Quelles sont ses activités préférées ? (4 points)</li>
        <li>Avec qui va-t-elle à l’école ? (2 points)</li>
        <li>Que fait-elle après l’école ? (2 points)</li>
        <li>Décrivez votre routine quotidienne. (10 points)</li>
      </ol>

      <hr />

      <h2>SECTION B: GRAMMAIRE (15 POINTS)</h2>
      <ol>
        <li>Conjuguez le verbe “aller” au présent: (3 points)<br />
          Je ______ à l’école.
        </li>
        <li>Complétez: (4 points)<br />
          a) Nous ______ (être) en classe.<br />
          b) Il ______ (avoir) un livre.
        </li>
        <li>Donnez le féminin de: (2 points)<br />
          Petit → ______
        </li>
        <li>Donnez le pluriel de: (2 points)<br />
          Ami → ______
        </li>
        <li>Écrivez une phrase avec “parce que”. (4 points)</li>
      </ol>

      <hr />

      <h2>SECTION C: EXPRESSION ÉCRITE (15 POINTS)</h2>
      <p>
        Écrivez une composition de 120–150 mots sur le sujet:
      </p>
      <p><strong>“Ma vie à l’école”</strong></p>

      <hr />

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#6f42c1",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        {showMarking ? "Masquer le barème" : "Afficher le barème"}
      </button>

      {showMarking && (
        <div style={{ marginTop: "20px", background: "#f4f4f4", padding: "15px" }}>
          <h2>BARÈME (MARKING SCHEME)</h2>

          <h3>SECTION A (20 POINTS)</h3>
          <ol>
            <li>Une élève (2)</li>
            <li>Lire et jouer au football (4)</li>
            <li>Avec ses amis (2)</li>
            <li>Elle fait ses devoirs (2)</li>
            <li>
              Réponse personnelle (10):
              <ul>
                <li>Contenu: 4 points</li>
                <li>Grammaire: 3 points</li>
                <li>Clarté: 3 points</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION B (15 POINTS)</h3>
          <ol>
            <li>vais (3)</li>
            <li>
              a) sommes (2)<br />
              b) a (2)
            </li>
            <li>Petite (2)</li>
            <li>Amis (2)</li>
            <li>
              Phrase correcte:
              <ul>
                <li>Grammaire: 2 points</li>
                <li>Sens: 2 points</li>
              </ul>
            </li>
          </ol>

          <h3>SECTION C (15 POINTS)</h3>
          <ul>
            <li>Contenu: 6 points</li>
            <li>Organisation: 4 points</li>
            <li>Grammaire et orthographe: 5 points</li>
          </ul>

          <h3>Total: 50 Points</h3>
        </div>
      )}
    </div>
  );
}