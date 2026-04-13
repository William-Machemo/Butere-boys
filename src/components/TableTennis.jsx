import React from "react";

function TableTennis() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">🏓 Table Tennis at Butere Boys</h1>
        <p className="lead">Focus • Precision • Reflex</p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/tabletennis-main.jpg"
        alt="Table Tennis"
        className="img-fluid rounded shadow mb-4"
        style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
      />

      {/* DESCRIPTION */}
      <div className="card p-4 shadow-sm mb-4">
        <p>
          The Butere Boys table tennis team focuses on precision, quick reflexes,
          and mental sharpness. Players are trained in serving techniques, spin control,
          and fast-paced rally strategies. The sport helps students improve concentration,
          coordination, and reaction speed. The team competes in county and regional
          tournaments with strong individual performances.
        </p>
      </div>

      {/* GALLERY */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Team Gallery</h3>
        <div className="row">
          {["tabletennis1.jpg", "tabletennis2.jpg", "tabletennis3.jpg"].map((img, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <img
                src={`/images/${img}`}
                alt=""
                className="img-fluid rounded shadow-sm"
                style={{ height: "220px", width: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* PLAYERS */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Top Players</h3>
        <ul className="list-group">
          <li className="list-group-item">Kevin Mutua – Singles Player (County Champion 2025)</li>
          <li className="list-group-item">Brian Ouma – Doubles Player (15 wins, 3 losses)</li>
          <li className="list-group-item">Samuel Njoroge – Singles Player (Regional Semi-Finalist)</li>
        </ul>
      </section>

      {/* FIXTURES */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Fixtures</h3>
        <table className="table table-bordered">
          <thead className="table-success">
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 May 2026</td>
              <td>Kakamega High</td>
              <td>Win 3-1</td>
            </tr>
            <tr>
              <td>18 May 2026</td>
              <td>Mumias Boys</td>
              <td>Loss 2-3</td>
            </tr>
            <tr>
              <td>28 May 2026</td>
              <td>St. Peters</td>
              <td>Upcoming</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* TROPHIES */}
      <section className="mb-5">
        <h3 className="text-success mb-3">🏆 Trophy Cabinet</h3>
        <div className="row">
          {["tabletennis-trophy1.jpg", "tabletennis-trophy2.jpg"].map((img, i) => (
            <div className="col-md-6 text-center" key={i}>
              <img
                src={`/images/${img}`}
                alt=""
                className="img-fluid mb-2"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default TableTennis;