import { Link } from "react-router-dom";
import { useState } from "react";

export default function StudentsPage() {

  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");

  // 🔹 STUDENTS DATA
  const students = [
    {
      name: "Brian Otieno",
      class: "Form 4",
      image: "images/student1.jpg",
      desc: "A top-performing student with strong leadership skills."
    },
    {
      name: "Kevin Mwangi",
      class: "Form 3",
      image: "images/student2.jpg",
      desc: "Active in sports and academic excellence."
    },
    {
      name: "James Ochieng",
      class: "Form 2",
      image: "images/student3.jpg",
      desc: "Passionate about science and innovation."
    },
    {
      name: "Daniel Kiptoo",
      class: "Form 1",
      image: "images/student4.jpg",
      desc: "Quick learner and active participant in school activities."
    },
    {
      name: "Peter Wekesa",
      class: "Form 4",
      image: "images/student5.jpg",
      desc: "Excellent in mathematics and problem solving."
    },
    {
      name: "Samuel Odhiambo",
      class: "Form 3",
      image: "images/student6.jpg",
      desc: "A talented football player and team leader."
    }
  ];

  // 🔍 FILTER LOGIC
  const filteredStudents = students.filter((student) =>
    (student.name.toLowerCase().includes(search.toLowerCase()) ||
     student.class.toLowerCase().includes(search.toLowerCase())) &&
    (filterClass === "" || student.class === filterClass)
  );

  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-4">Our Students</h2>

      {/* 🔍 SEARCH + FILTER */}
      <div className="row mb-4">

        <div className="col-md-8 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search student by name or class..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          >
            <option value="">All Classes</option>
            <option value="Form 1">Form 1</option>
            <option value="Form 2">Form 2</option>
            <option value="Form 3">Form 3</option>
            <option value="Form 4">Form 4</option>
          </select>
        </div>

      </div>

      {/* 🔹 STUDENT CARDS */}
      <div className="row g-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card shadow h-100">
                <img
                  src={student.image}
                  alt={student.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6>{student.name}</h6>
                  <p className="text-muted small">{student.class}</p>
                  <p className="mt-auto small">{student.desc}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No student found</p>
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