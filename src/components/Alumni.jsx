import React, { useState } from "react";

const Alumni = () => {

  const alumniData = [
    {
      id: 1,
      name: "Founding Student",
      profession: "Pioneer Alumni",
      year: 1960,
      image: "/images/alumni/pioneer.jpg",
      description:
        "First student to join Butere Boys High School. Helped build school culture and discipline."
    },
    {
      id: 2,
      name: "Dr. John Example",
      profession: "Medical Doctor",
      year: 2005,
      image: "/images/alumni/doctor1.jpg",
      description:
        "Cardiologist at Kenyatta National Hospital specializing in heart surgery."
    },
    {
      id: 3,
      name: "Eng. Mary Example",
      profession: "Civil Engineer",
      year: 2008,
      image: "/images/alumni/engineer1.jpg",
      description:
        "Works on major infrastructure projects across Kenya."
    },
    {
      id: 4,
      name: "Hon. Example Leader",
      profession: "Government Official",
      year: 2010,
      image: "/images/alumni/leader1.jpg",
      description:
        "Leads youth empowerment and education reform programs."
    }
  ];

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = alumniData.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.profession.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [
    ...filtered.filter(a => a.id === 1),
    ...filtered.filter(a => a.id !== 1)
  ];

  return (
    <div>

      {/* HERO */}
      <div className="bg-success text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Butere Boys Alumni</h1>
          <p>Excellence, leadership, and service through generations.</p>
        </div>
      </div>

      <div className="container py-4">

        {/* SEARCH */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search alumni by name or profession..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* LIST */}
        {sorted.map((alumni) => (
          <div
            key={alumni.id}
            className="row align-items-center mb-4 p-3 shadow-sm rounded bg-white"
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(alumni)}
          >

            {/* IMAGE */}
            <div className="col-md-3 text-center">
              <img
                src={alumni.image}
                alt={alumni.name}
                className="img-fluid rounded"
                style={{
                  width: "140px",
                  height: "140px",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* INFO */}
            <div className="col-md-9">
              <h5 className="fw-bold">{alumni.name}</h5>
              <p className="text-success mb-1">{alumni.profession}</p>
              <p className="text-muted">{alumni.description}</p>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL (SAFE VERSION) */}
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

            {selected?.image && (
              <img
                src={selected.image}
                alt={selected.name}
                className="img-fluid rounded mb-3"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />
            )}

            <h4>{selected?.name}</h4>
            <p className="text-success">{selected?.profession}</p>
            <p className="text-muted">{selected?.description}</p>

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
};

export default Alumni;