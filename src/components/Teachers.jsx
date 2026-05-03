import { Link } from "react-router-dom";
import { useState } from "react";

export default function TeachersPage() {

  // 🔍 SEARCH STATE
  const [search, setSearch] = useState("");

  // 🔹 TEACHERS DATA
  const teachers = [
    {
      name: "Mr. John Mwangi",
      subject: "Mathematics",
      image: "images/teacher1.jpg",
      desc: "Experienced in guiding students to excel in mathematics."
    },
    {
      name: "Mr. Titus Wanyama",
      subject: "English",
      image: "images/RugbyCotch.jpg",
      desc: "Passionate about communication skills and literature."
    },
    {
      name: "Mr. Peter Otieno",
      subject: "Physics",
      image: "images/teacher3.jpg",
      desc: "Encourages practical science learning."
    },
    {
      name: "Mr. Caesar Wanyama",
      subject: "Biology",
      image: "images/Caesar.jpg",
      desc: "Promotes curiosity in life sciences."
    },
    {
      name: "Mr. Achara",
      subject: "Chemistry",
      image: "images/Achara.jpg",
      desc: "Makes chemistry relatable and practical."
    },
    {
      name: "Ms. Faith Njeri",
      subject: "History",
      image: "images/teacher6.jpg",
      desc: "Brings history to life through storytelling."
    },
    {
      name: "Mr. Kevin Ochieng",
      subject: "Geography",
      image: "images/teacher7.jpg",
      desc: "Explains environmental and global systems."
    },
    {
      name: "Ms. Ruth Atieno",
      subject: "CRE",
      image: "images/teacher8.jpg",
      desc: "Guides students in values and spiritual growth."
    }
  ];

  // 🔍 FILTER LOGIC
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">

      {/* 🔹 LEADERSHIP */}
      <h2 className="text-center fw-bold mb-4">School Leadership</h2>

      <div className="row g-4 mb-5">

        {/* PRINCIPAL */}
        <div className="col-lg-4 col-md-6">
          <div className="card shadow h-100">
            <img
              src="images/principal.pg.jpg"
              className="card-img-top"
              alt="Principal"
              style={{ height: "280px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5>Principal</h5>
              <p className="text-muted">Head of Institution</p>
              <p className="mt-auto">
                Provides overall leadership and ensures academic excellence and discipline.
              </p>
            </div>
          </div>
        </div>

        {/* DEPUTY ACADEMICS */}
        <div className="col-lg-4 col-md-6">
          <div className="card shadow h-100">
            <img
              src="images/Wanzetse.jpg"
              className="card-img-top"
              alt="Deputy Academics"
              style={{ height: "280px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5>Deputy Principal (Academics)</h5>
              <p className="text-muted">Academic Affairs</p>
              <p className="mt-auto">
                Oversees curriculum and academic performance.
              </p>
            </div>
          </div>
        </div>

        {/* DEPUTY ADMIN */}
        <div className="col-lg-4 col-md-6">
          <div className="card shadow h-100">
            <img
              src="images/muhati.jpg"
              className="card-img-top"
              alt="Deputy Administration"
              style={{ height: "280px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5>Deputy Principal (Administration)</h5>
              <p className="text-muted">Administration</p>
              <p className="mt-auto">
                Handles discipline and school operations.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search teacher by name or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔹 TEACHERS */}
      <h2 className="text-center fw-bold mb-4">Our Teachers</h2>

      <div className="row g-4">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card shadow h-100">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6>{teacher.name}</h6>
                  <p className="text-muted small">{teacher.subject}</p>
                  <p className="mt-auto small">{teacher.desc}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No teacher found</p>
        )}
      </div>

      {/* 🔹 BACK BUTTON */}
      <div className="text-center mt-5">
        <Link to="/homepage" className="btn btn-danger">
          Back to Home
        </Link>
      </div>

    </div>
  );
}