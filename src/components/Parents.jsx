import React, { useState } from "react";

export default function SchoolParentsPage() {

  const [selected, setSelected] = useState(null);

  const parentsData = [
    {
      name: "PTA Chairperson",
      role: "Parent-Teacher Association Leader",
      description:
        "Leads parents in school development, discipline, and academic support programs.",
      image: "/images/parents/pta.jpg"
    },
    {
      name: "Deputy PTA Chair",
      role: "PTA Executive Member",
      description:
        "Assists in coordinating parent meetings and supporting school projects.",
      image: "/images/parents/deputypta.jpg"
    }
  ];

  const bomData = [
    {
      name: "Mr. Example BOM Chair",
      role: "Board of Management Chairperson",
      description:
        "Oversees school governance, infrastructure development, and policy implementation.",
      image: "/images/bom/chair.jpg"
    },
    {
      name: "Mrs. Example Member",
      role: "BOM Member",
      description:
        "Supports academic programs and school financial planning.",
      image: "/images/bom/member1.jpg"
    }
  ];

  const allData = [
    ...parentsData.map(p => ({ ...p, type: "Parent (PTA)" })),
    ...bomData.map(b => ({ ...b, type: "BOM Member" }))
  ];

  return (
    <div className="container py-5">

      {/* TITLE */}
      <h1 className="text-center text-primary fw-bold">
        Parents & BOM Members
      </h1>
      <p className="text-center text-muted mb-5">
        Click on any card to view full details
      </p>

      {/* CARDS */}
      {allData.map((person, index) => (
        <div
          key={index}
          onClick={() => setSelected(person)}
          className="row align-items-center mb-4 p-3 shadow-sm rounded bg-white"
          style={{ cursor: "pointer" }}
        >

          {/* IMAGE LEFT */}
          <div className="col-md-3 text-center">
            <img
              src={person.image}
              alt={person.name}
              className="img-fluid rounded"
              style={{ width: "140px", height: "140px", objectFit: "cover" }}
            />
          </div>

          {/* BASIC INFO RIGHT */}
          <div className="col-md-9">
            <h5 className="fw-bold">{person.name}</h5>
            <p className="text-success mb-1">{person.role}</p>
            <small className="text-muted">{person.type}</small>
          </div>

        </div>
      ))}

      {/* ================= MODAL ================= */}
      {selected && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setSelected(null)}
        >

          <div
            className="bg-white p-4 rounded shadow"
            style={{ width: "90%", maxWidth: "500px" }}
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selected.image}
              alt={selected.name}
              className="img-fluid rounded mb-3"
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
            />

            <h4 className="fw-bold">{selected.name}</h4>
            <p className="text-success">{selected.role}</p>
            <p className="text-muted">{selected.description}</p>

            <span className="badge bg-primary mb-3">
              {selected.type}
            </span>

            <button
              className="btn btn-danger w-100"
              onClick={() => setSelected(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}