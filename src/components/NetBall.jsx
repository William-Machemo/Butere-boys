import React from "react";

function Netball() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">🏐 Netball at Butere Boys</h1>
        <p className="lead">Agility • Accuracy • Teamwork</p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/netball-main.jpg"
        alt="Netball Team"
        className="img-fluid rounded shadow mb-4"
        style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
      />

      {/* DESCRIPTION */}
      <div className="card p-4 shadow-sm mb-4">
        <p>
          The Butere Boys netball team is built on teamwork, precision passing, and
          quick decision-making. Players are trained in shooting accuracy, defensive
          marking, and fast transitions. The sport helps students develop coordination,
          communication, and discipline on the court. The team actively participates
          in county and regional competitions with strong performances.
        </p>
      </div>

      {/* GALLERY */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Team Gallery</h3>
        <div className="row">
          {["netball1.jpg", "netball2.jpg", "netball3.jpg"].map((img, i) => (
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
          <li className="list-group-item">Mary Wanjiku – Goal Shooter (85 goals)</li>
          <li className="list-group-item">Grace Akinyi – Center (120 assists)</li>
          <li className="list-group-item">Sharon Njeri – Goal Keeper (60 interceptions)</li>
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
              <td>13 May 2026</td>
              <td>Kakamega High</td>
              <td>Win 32-28</td>
            </tr>
            <tr>
              <td>21 May 2026</td>
              <td>Mumias Girls</td>
              <td>Loss 25-30</td>
            </tr>
            <tr>
              <td>29 May 2026</td>
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
          {["netball-trophy1.jpg", "netball-trophy2.jpg"].map((img, i) => (
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

export default Netball;