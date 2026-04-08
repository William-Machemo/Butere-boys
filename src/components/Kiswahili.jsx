import React, { useState } from "react";

export default function KiswahiliAssessment() {
  const [showMarking, setShowMarking] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      
      <h1 style={{ textAlign: "center" }}>TATHMINI YA KISWAHILI - CBC</h1>
      <h3 style={{ textAlign: "center" }}>Darasa la 10</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p><strong>Jina:</strong> __________________________</p>
        <p><strong>Tarehe:</strong> __________________</p>
      </div>
      <p><strong>Shule:</strong> __________________________</p>
      <p><strong>Muda:</strong> Saa 2</p>

      <hr />

      <h2>Maelekezo</h2>
      <ul>
        <li>Jibu maswali yote.</li>
        <li>Tumia mifano na michoro pale inapohitajika.</li>
        <li>Andika kwa usahihi wa kisarufi, msamiati, na ulinganifu.</li>
      </ul>

      <hr />

      {/* SECTION A: THEORY */}
      <h2>SEHEMU A: NAZARI (40 MARKS)</h2>
      <ol>
        <li>Tambulisha maana ya maneno yafuatayo: (6 marks)
          <ul>
            <li>Msamiati</li>
            <li>Sarufi</li>
            <li>Insha</li>
          </ul>
        </li>

        <li>Taja aina tatu za methali na sema maana yake. (6 marks)</li>

        <li>Eleza vipengele vitatu vya hadithi: wahusika, wingi wa matukio, na mwisho. (6 marks)</li>

        <li>Tafsiri kifupi cha maandiko yafuatayo (unatolewa na mwalimu). (12 marks)</li>

        <li>Andika maelezo ya jinsi lugha inavyotumika kuwasiliana kwa ufasaha. (10 marks)</li>
      </ol>

      <hr />

      {/* SECTION B: PRACTICAL */}
      <h2>SEHEMU B: KAZI ZA KITA PRAKTIKA (40 MARKS)</h2>
      <ol>
        <li>Andika insha yenye maneno angalau 200 kuhusu "Umuhimu wa Usafishaji wa Mazingira". (20 marks)</li>

        <li>Andika barua rasmi kwa mwalimu kuomba ruhusa ya kushiriki shindano la Kiswahili. (10 marks)</li>

        <li>Tafsiri sentensi 5 kutoka Kiingereza kwenda Kiswahili. (10 marks)</li>
      </ol>

      <hr />

      <h3 style={{ textAlign: "center" }}>JUMLA YA ALAMA: 80</h3>

      <button
        onClick={() => setShowMarking(!showMarking)}
        style={{
          padding: "12px 18px",
          backgroundColor: "#388e3c",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px"
        }}
      >
        {showMarking ? "Ficha Mchakato wa Alama" : "Onyesha Mchakato wa Alama"}
      </button>

      {showMarking && (
        <div style={{ marginTop: "25px", background: "#f1f8e9", padding: "20px", borderRadius: "8px" }}>
          <h2>MCHAKATO WA ALAMA (CBC RUBRIKI)</h2>

          <h3>SEHEMU A: NAZARI (40 MARKS)</h3>
          <ul>
            <li>Maana ya maneno: 2 marks × 3 = 6</li>
            <li>Methali: 2 marks × 3 = 6</li>
            <li>Vipengele vya hadithi: 2 marks × 3 = 6</li>
            <li>Tafsiri maandiko: 12 marks (usahihi, ufasaha, maana sahihi)</li>
            <li>Maelezo ya lugha: 2.5 marks × 4 = 10</li>
          </ul>

          <h3>SEHEMU B: KAZI ZA KITA PRAKTIKA (40 MARKS)</h3>
          <ul>
            <li>Insha: 20 marks (ufasaha, sarufi, msamiati, muundo)</li>
            <li>Barua rasmi: 10 marks (mfumo sahihi, lugha, heshima)</li>
            <li>Tafsiri: 10 marks (usahihi, muundo, maana)</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>JUMLA YA ALAMA: 80</h3>
        </div>
      )}
    </div>
  );
}