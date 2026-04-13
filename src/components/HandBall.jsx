import React from "react";

function HandBall() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">
          🤾‍♂️ Handball at Butere Boys
        </h1>
        <p className="lead">
          Speed • Skill • Team Coordination
        </p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/handball-main.jpg"
        alt="Handball Team"
        className="img-fluid rounded shadow mb-4"
      />

      {/* DESCRIPTION */}
      <div className="card p-3 mb-4">
        <p>
          The Butere Boys handball team is known for its fast-paced gameplay and excellent coordination.
        </p>
        <p>
          Players are trained to combine speed, accuracy, and tactical awareness in every match.
        </p>
        <p>
          The team competes in county and regional competitions with strong performances.
        </p>
        <p>
          Handball helps students build teamwork, endurance, and decision-making under pressure.
        </p>
      </div>

      {/* IMAGES */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <img src="/images/handball1.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/images/handball2.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="/images/handball3.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
      </div>

      {/* PLAYERS */}
      <h3 className="text-success">Players</h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          James Wekesa — Goalkeeper (120 saves)
        </li>
        <li className="list-group-item">
          Samuel Karanja — Left Wing (45 goals)
        </li>
        <li className="list-group-item">
          Brian Otieno — Center Back (60 assists)
        </li>
      </ul>

      {/* FIXTURES */}
      <h3 className="text-success">Fixtures</h3>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          14 May 2026 vs Kakamega High — Win 28-22
        </li>
        <li className="list-group-item">
          22 May 2026 vs Mumias Boys — Draw 25-25
        </li>
        <li className="list-group-item">
          30 May 2026 vs St. Peters — Upcoming
        </li>
      </ul>

      {/* TROPHIES */}
      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <img src="/images/handball-trophy1.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
        <div className="col-md-6 mb-3">
          <img src="/images/handball-trophy2.jpg" className="img-fluid rounded shadow" alt="" />
        </div>
      </div>

    </div>
  );
}

export default HandBall;