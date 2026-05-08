import React from "react";

function Hockey() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">
          🏑 Hockey at Butere Boys
        </h1>
        <p className="lead">
          Speed • Control • Team Strategy
        </p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/hockey-main.jpg"
        alt="Hockey Team"
        className="img-fluid rounded shadow mb-4"
      />

      {/* DESCRIPTION */}
      <div className="card p-3 mb-4">
        <p>
          The Butere Boys hockey team is known for fast gameplay, strong coordination, and tactical discipline.
        </p>
<p>Players are trained in dribbling techniques, passing accuracy, and defensive formations.
</p>
<p>Hockey develops stamina, teamwork, and quick decision-making under pressure.</p>
<p>The team competes in county and regional tournaments with consistent strong performances.
</p>
</div>

      {/* IMAGES */}
<div className="row mb-4">
<div className="col-md-4 mb-3">
<img src="/images/hockey1.jpg" className="img-fluid rounded shadow" alt="" />
</div>
<div className="col-md-4 mb-3">
<img src="/images/hockey2.jpg" className="img-fluid rounded shadow" alt="" />
</div>
<div className="col-md-4 mb-3">
<img src="/images/hockey3.jpg" className="img-fluid rounded shadow" alt="" />
</div>
</div>

      {/* PLAYERS */}
<h3 className="text-success">Players</h3>
<ul className="list-group mb-4">
<li className="list-group-item">Brian Otieno — Striker (18 goals)</li>
<li className="list-group-item">Kevin Ouma — Midfielder (22 assists)</li>
<li className="list-group-item">Samuel Njoroge — Defender (35 tackles)</li>
</ul>

      {/* FIXTURES */}
<h3 className="text-success">Fixtures</h3>
<ul className="list-group mb-4">
<li className="list-group-item">14 May 2026 vs Kakamega High — Win 3-1</li>
<li className="list-group-item">22 May 2026 vs Mumias Boys — Draw 2-2</li>
<li className="list-group-item">30 May 2026 vs St. Peters — Upcoming</li>
</ul>

      {/* TROPHIES */}
<div className="row mb-5">
<div className="col-md-6 mb-3">
<img src="/images/hockey-trophy1.jpg" className="img-fluid rounded shadow" alt="" />
 </div>

<div className="col-md-6 mb-3">
<img src="/images/hockey-trophy2.jpg" className="img-fluid rounded shadow" alt="" />
</div>
</div>

</div>
);
}

export default Hockey;