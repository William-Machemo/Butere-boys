import React from "react";

function Badminton() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">
          🏸 Badminton at Butere Boys
        </h1>
        <p className="lead">
          Speed • Precision • Focus
        </p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/badminton-main.jpg"
        alt="Badminton Team"
        className="img-fluid rounded shadow mb-4"
      />

      {/* DESCRIPTION */}
      <div className="card p-3 mb-4">
        <p>
          The Butere Boys badminton team focuses on speed, precision, and quick reflexes.
        </p>
        <p>
          Players are trained in serving techniques, smash control, and defensive recovery.
        </p>
        <p>
          Badminton helps students improve concentration, coordination, and agility.
        </p>
        <p>
          The team competes in county and regional tournaments with strong performances.
        </p>
      </div>

      {/* IMAGES */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <img src="/images/badminton1.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/images/badminton2.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/images/badminton3.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
      </div>

      {/* PLAYERS */}
      <h3 className="text-success">Players</h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Kevin Mutua — Singles Player (County Champion 2025)
        </li>
        <li className="list-group-item">
          Brian Ouma — Singles Player (18 wins, 4 losses)
        </li>
        <li className="list-group-item">
          Samuel Njoroge — Doubles Player (Regional Finalist)
        </li>
      </ul>

      {/* FIXTURES */}
      <h3 className="text-success">Fixtures</h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          13 May 2026 vs Kakamega High — Win 2-1
        </li>
        <li className="list-group-item">
          20 May 2026 vs Mumias Boys — Loss 1-2
        </li>
        <li className="list-group-item">
          28 May 2026 vs St. Peters — Upcoming
        </li>
      </ul>

      {/* TROPHIES */}
      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <img src="/images/badminton-trophy1.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
        <div className="col-md-6 mb-3">
          <img src="/images/badminton-trophy2.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
      </div>

    </div>
  );
}

export default Badminton;