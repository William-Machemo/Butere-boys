import React from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <section className="first-page">

      <div className="content-card">

        {/* Left Side */}
        <div className="text-section bg-danger text-white">

          <span className="title-tag">
            2026
          </span>

          <h1>Welcome to Butere Boys High School Magazine</h1>

          <div className="line"></div>

          <p>
            <b>MOTTO</b>
            <br />
            <p className="text-white">
          Discipline for Excellence.
          </p>
          </p>

          <p>
            <b>VISION</b>
            <br />
            <p className="text-white">
            To be exemplary school all-round the vision
          </p>
          </p>

          <p>
            <b>MISSION</b>
            <br />
            <p className="text-white">
            Raising competent responsible citizens, through quality education.
          </p>
          </p>

          <p>
            <b>CORE VALUES</b>
            <br />
            <p className="text-white">
            Discipline
            <br />
            Integrity
            <br />
            Godliness
            <br />
            </p>

            <b>SCHOOL ANTHEM</b>
            <br />
            <p className="text-white">
            In the tower of a strong ambition, we take a flight with our precious education, success breeds success in succession, high the sky our reputations shield.
            </p>

          </p>
          <p className="text-white">
            Raising competent and responsible citizens, through quality education our mission, to be exemplary school all round he vision, Oh! Lord lead us to our destination.
          </p>
          <p className="text-white">
            Glory Butere Boys' we are conquerors, purposeful, and diligent leaders, Ever shining confident leaders, Strive to our future ever bright.

          </p>
          <p className="text-white">
            By discipline for excellence we are driven, zoom Exodus speed we fasten, Instal with courage our golden anchor, we stand never to be beaten. 
          </p>
           {/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/SecondPage"
          className="btn btn-warning btn-lg me-3"
      >
          📖 Next Page
      </Link>
      
              </div>

        </div>
        

        {/* Right Side */}
        <div className="image-section">

          <div className="image-card">

            <img
              src="/images/principal.jpg"
              alt="Principal"
            />

            <div className="caption">
              
             
            </div>

          </div>

        </div>

      </div>
       

    </section>
  );
};

export default FirstPage;