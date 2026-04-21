import React from "react";
import { Link } from "react-router-dom";

export default function CBCForm4Admission() {
  return (
    <div className="container py-5">

      <h1 className="text-center text-primary fw-bold">
        Students Return to School Requirements
      </h1>

      <p className="text-center text-muted mb-5">
        Requirements for students reporting back from home to continue For studies
      </p>

      {/* ================= CARDS GRID ================= */}
      <div className="row g-4">

        {/* ================= ACADEMIC REQUIREMENTS ================= */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-success fw-bold">Academic Requirements</h4>
              <p>
                Students must return with all academic documents and be ready for academic journey
              </p>
              <ul>
                <li>Previous term report forms</li>
                <li>Completed assignments from home</li>
                <li>Revision books for Form 4 syllabus</li>
                <li>Writing materials and calculators</li>
                <li>Updated timetable and subject notes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= BEDDINGS ================= */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-success fw-bold">Beddings & Personal Items</h4>
              <p>
                Boarding students must come fully prepared for hostel accommodation.
              </p>
              <ul>
                <li>Mattress (standard school size)</li>
                <li>Blankets (at least 2)</li>
                <li>Bedsheets and pillowcases</li>
                <li>Toiletries (soap, towel, toothbrush)</li>
                <li>Bucket and washing basin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= SCHOOL SUPPLIES ================= */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-success fw-bold">School Supplies</h4>
              <p>
                Students must come with essential learning materials.
              </p>
              <ul>
                <li>Story books and revision guides</li>
                <li>Exercise books (at least 10–15)</li>
                <li>Ream papers for printing notes</li>
                <li>Pens, pencils, rulers, and geometry set</li>
                <li>Scientific calculator</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= FEES ================= */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-success fw-bold">School Fees & Payments</h4>
              <p>
                All students must clear fees before reporting.
              </p>
              <ul>
                <li>School fees (term payment required)</li>
                <li>Remedial fee for revision classes</li>
                <li>Form 4 tea money contribution</li>
                <li>Mpesa Till Number: <strong>323253</strong></li>
                <li>Receipts must be presented on reporting day</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= ASSIGNMENTS ================= */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4 className="text-success fw-bold">Finished Assignments</h4>
              <p>
                Students must submit all holiday assignments upon return to school.
              </p>

              <ul className="text-start d-inline-block">
                <li>All holiday homework completed</li>
                <li>Signed parent acknowledgment forms</li>
                <li>Project work submissions (where applicable)</li>
              </ul>

              <Link to="/GetFiles" className="btn btn-primary mt-3">
                Go to Assignment Page
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}