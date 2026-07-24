import React from "react";
import { Link } from "react-router-dom";
import "./magazine.css";

const Magazine = () => {
  return (
    <div
      className="magazine-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/school-bg.jpg')",
      }}
    >
      <div className="container text-center text-white">

        {/* School Details */}
        <div className="pt-5">

          <h2 className="school-name">
            BUTERE BOYS HIGH SCHOOL
          </h2>
          <h3 className="text-warning fw-bold">
            THE RENAISSANCE
          </h3>

          <h5 className="text-light">
            P.O. Box 25 - Butere
          </h5>

          <p className="school-motto">
            <em>"Knowing is not enough. You must apply it"</em>
          </p>

          <hr className="gold-line" />

          <h2 className="magazine-title">
            SCHOOL MAGAZINE
          </h2>

          <h4 className="edition">
            2026 EDITION
          </h4>

        </div>

        {/* Cover Image */}
        <div className="my-5">

          <img
            src="/images/magazine-cover.jpg"
            alt="Magazine Cover"
            className="cover-image"
          />

        </div>

        {/* Buttons */}
        <div className="mb-5">

         <Link
    to="/TableOfContents"
    className="btn btn-warning btn-lg me-3"
>
    📖 Read Magazine
</Link>
         <br /><br />
          <button className="btn btn-outline-light btn-lg px-4">
            ⬇ Download PDF
          </button>

        </div>

        {/* Logo */}
        <div className="pb-4">

          <img
            src="/images/1769612330468.jpg"
            alt="School Logo"
            className="school-logo"
           width={"1100"} height={"400"}/>

          <h6 className="mt-3">
            Discipline for excellence
          </h6>

        </div>

      </div>
    </div>
  );
};

export default Magazine;