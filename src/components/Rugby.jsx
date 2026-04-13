import React from "react";

function Rugby() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">🏉 Rugby at Butere Boys</h1>
        <p className="lead">Strength • Strategy • Team Spirit</p>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/images/rugby-main.jpg"
        alt="Rugby Team"
        className="img-fluid rounded shadow mb-4"
        style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
      />

      {/* DESCRIPTION */}
      <div className="card p-4 shadow-sm mb-4">
        <p>
          The Butere Boys rugby team is known for its physical strength, discipline,
          and teamwork on the field. Rugby plays a major role in shaping student character,
          building resilience and leadership skills. The team competes in county and regional
          tournaments with strong performances every season. Through structured training,
          players develop endurance, tactical awareness, and coordination.
        </p>
      </div>

      {/* GALLERY */}
      <section className="mb-4">
        <h3 className="text-success mb-3">Team Gallery</h3>
        <div className="row">
          {["rugby1.jpg", "rugby2.jpg", "rugby3.jpg"].map((img, i) => (
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
          <li className="list-group-item">Peter Ochieng – Forward (8 tries, 20 tackles)</li>
          <li className="list-group-item">David Onyango – Back (5 tries, 15 tackles)</li>
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
              <td>Win 15-10</td>
            </tr>
            <tr>
              <td>20 May 2026</td>
              <td>Mumias Boys</td>
              <td>Loss 8-12</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* TROPHIES */}
      <section className="mb-5">
        <h3 className="text-success mb-3">🏆 Trophy Cabinet</h3>
        <div className="row">
          {["rugby-trophy1.jpg", "rugby-trophy2.jpg"].map((img, i) => (
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

export default Rugby;