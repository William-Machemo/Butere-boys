import React from "react";
import "./FourthPage.css";
import { Link } from "react-router-dom";

const FourthPage = () => {
  return (
    <section className="fourth-page">

      <div className="page-container">

        {/* LEFT SIDE */}

        <div className="text-section">

          <span className="page-tag">FEATURE ARTICLE</span>

          <h1>Remarks from the BOM Chairperson</h1>

          <div className="gold-line"></div>

          <p>
    It gives me great pleasure to welcome students, parents, teachers, staff, alumni and friends to the edition of our school newsletter. As the chairman of the Board of Management, I am proud of the steady progress our school continues to make in academics, discipline, talent development and character formation. These achievement have been made possible through the dedication and support of all stakeholders.
    Over the past two years, the school has recorded a remarkable success in academics, infrastructure development and co-curricular activities. Our students have continued to excel in national examinations and academic competitions, reflecting their hard work and the commitment of our teachers. The school has also improved in learning environment through the construction and renovation of classrooms, dormitories and other essential facilities. 
    We are equally proud of our achievements in sports, music, drama, debate and other co-curricular activities where our learners have represented the school with distinction. These accomplishments demonstrate our commitment to holistic education and nurturing well-rounded students. 
    The Board of Management remains committed to providing sound leadership, prudent management of resources and support for programs that improves the quality of education and student welfare. We continue to work closely with the school administration, parents and education stakeholders to uphold discipline, integrity, accountability and academic excellence.
<br />
<i><b>Prof. George Lukoye Makokha</b></i>
<br />
<b>Chairman, Board of Management</b>


 </p>      
     
          {/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/SixthPage"
          className="btn btn-warning btn-lg me-3"
      >
          📖 Next Page
      </Link>
      
              </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="image-section">

          <div className="image-card">

            <img
              src="/images/deputy.jpg"
              alt="Deputy Principal"
            />

            <div className="image-caption">
              <h3>Deputy Principal</h3>
              <p>Academic Excellence • Leadership • Discipline</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FourthPage;