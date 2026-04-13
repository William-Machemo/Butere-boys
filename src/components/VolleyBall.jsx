import React from "react";

function VolleyBall() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">🏐 Volleyball at Butere Boys</h1>
        <p className="lead">Power • Precision • Team Unity</p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/volleyball-main.jpg"
        alt="Volleyball Team"
        className="img-fluid rounded shadow mb-4"
        style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
      />

      {/* DESCRIPTION */}
      <div className="card p-4 shadow-sm mb-4">
        <p>
          The Butere Boys volleyball team is built on strong teamwork, quick reflexes,
          and strategic play. Players are trained in serving accuracy, blocking techniques,
          and coordinated attacks. The team competes in county and regional tournaments
          with outstanding discipline and performance. Volleyball helps students develop
          communication, agility, and mental focus on the court.
        </p>
      </div>

      {/* IMAGE GALLERY */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Team Gallery</h3>
        <div className="row">
          {["volleyball1.jpg", "volleyball2.jpg", "volleyball3.jpg"].map((img, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <img
                src={`/images/${img}`}
                alt=""
                className="img-fluid rounded shadow-sm"
                style={{ height: "220px", objectFit: "cover", width: "100%" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* PLAYERS */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Top Players</h3>
        <ul className="list-group">
          <li className="list-group-item">Kevin Mutua – Setter (120 assists)</li>
          <li className="list-group-item">Brian Ouma – Outside Hitter (85 spikes)</li>
          <li className="list-group-item">Samuel Njoroge – Libero (150 digs)</li>
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
              <td>10 May 2026</td>
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
          {["volleyball-trophy1.jpg", "volleyball-trophy2.jpg"].map((img, i) => (
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

export default VolleyBall;