import React from "react";
import "./SecondPage.css";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <section className="second-page">

      <div className="page-layout">

        {/* LEFT COLUMN */}

        <div className="left-column">

          <div className="small-card">
            <img src="/images/principal.jpg" alt="" />
            <h3>Principal</h3>
            <p>
              Welcome Message
            </p>
          </div>

          <div className="small-card">
            <img src="/images/deputy.jpg" alt="" />
            <h3>Deputy Principal</h3>
            <p>
              Academic Affairs
            </p>
          </div>

          <div className="small-card">
            <img src="/images/chairman.jpg" alt="" />
            <h3>Board Chairman</h3>
            <p>
              Board of Management
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="right-column">

          <div className="top-card">

            <img
              src="/images/school.jpg"
              alt="School"
            />

          </div>

          <div className="content-card">

            <h1>Principal's Message</h1>

            <p>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.

            </p>

            <p>

              Donec vitae justo sed libero dignissim luctus. Nulla facilisi.
              Aliquam erat volutpat. Suspendisse potenti. Vivamus sed purus
              vitae turpis viverra faucibus.

            </p>

            <p>

              Replace this text with the Principal's message or any article
              you wish to display in your magazine.

            </p>

          </div>

        </div>

      </div>
       {/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/ThirdPage"
          className="btn btn-warning btn-lg me-3"
      >
          📖 Next Page
      </Link>
      
              </div>

    </section>
  );
};

export default SecondPage;