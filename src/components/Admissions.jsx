import React from "react";

const Admissions = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <div className="container py-4">

      <h1 className="text-success mb-3">Admissions - High School</h1>

      <p className="mb-4">
        Admissions are open to qualified students who meet the required academic standards and demonstrate discipline and excellence in co-curricular activities.
      </p>

      {/* ================= 8-4-4 SECTION ================= */}
      <div className="mb-5">
        <h3 className="text-primary mb-3">8-4-4 Curriculum Students</h3>

        <div className="row">

          {/* Requirements */}
          <div className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5>Admission Requirements</h5>
              <ul>
                <li>KCPE results</li>
                <li>Application form</li>
                <li>Birth certificate</li>
                <li>Passport photos</li>
                <li>Interview (if required)</li>
              </ul>
            </div>
          </div>

          {/* How to Apply */}
          <div className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5>How to Apply</h5>
              <p>
                Visit school or download form → Fill form → Attach documents → Submit before deadline → Attend interview if selected.
              </p>
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="card p-3 shadow-sm mb-3">
          <h5>8-4-4 Application Form</h5>

          <form onSubmit={handleSubmit}>

            <input className="form-control mb-2" placeholder="Full Name" required />
            <input type="date" className="form-control mb-2" required />
            <input className="form-control mb-2" placeholder="KCPE Index Number" required />
            <input className="form-control mb-2" placeholder="Parent/Guardian Name" required />
            <input className="form-control mb-2" placeholder="Phone Number" required />
            <input type="email" className="form-control mb-2" placeholder="Email" />

            <select className="form-select mb-2">
              <option>Day Scholar</option>
              <option>Boarding</option>
            </select>

            <textarea className="form-control mb-3" placeholder="Additional Notes"></textarea>

            <button className="btn btn-success w-100">
              Submit Application
            </button>

          </form>
        </div>

        <div className="alert alert-warning">
          Application Fee: <strong>KES 1,000</strong> (Mpesa Till: 323253)
        </div>

      </div>

      {/* ================= CBC SECTION ================= */}
      <div className="mb-5">

        <h3 className="text-success mb-3">CBC Students</h3>

        <div className="row">

          <div className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5>Requirements</h5>
              <ul>
                <li>CBC/KCPE results</li>
                <li>Birth certificate</li>
                <li>Passport photos</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h5>How to Apply</h5>
              <p>
                Fill CBC form → Attach documents → Submit → Interview if needed.
              </p>
            </div>
          </div>

        </div>

        {/* CBC FORM */}
        <div className="card p-3 shadow-sm mb-3">
          <h5>CBC Application Form</h5>

          <form onSubmit={handleSubmit}>

            <input className="form-control mb-2" placeholder="Full Name" required />
            <input type="date" className="form-control mb-2" required />
            <input className="form-control mb-2" placeholder="Index Number" required />
            <input className="form-control mb-2" placeholder="Parent Name" required />
            <input className="form-control mb-2" placeholder="Phone Number" required />
            <input type="email" className="form-control mb-2" placeholder="Email" />

            <select className="form-select mb-2">
              <option>Day Scholar</option>
              <option>Boarding</option>
            </select>

            <textarea className="form-control mb-3" placeholder="Notes"></textarea>

            <button className="btn btn-success w-100">
              Submit CBC Application
            </button>

          </form>
        </div>

        <div className="alert alert-warning">
          Application Fee: <strong>KES 1,000</strong> (Mpesa Till: 323253)
        </div>

      </div>

    </div>
  );
};

export default Admissions;