import React from "react";
import "./ThirdPage.css";
import { Link } from "react-router-dom";
const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the Parents' Association Chairperson</h1>

          <div className="line"></div>

          <p>
           It is with great pride and enthusiasm that I share a few insights about our great school and the important role played by the parent Association. The Parents Association comprises class representatives, the elected chairperson, and the principal who serves as the secretary of the Association. Formerly, known as the Parents Teachers Association (PTA), the Association continues to work closely with teachers who remain integral part of its operation and success. 
          </p>

          <p>
           The parents association plays a pivotal role in supporting the school development and progress in areas such as infrastructure, academics, social welfare and spiritual growth. It is really committed to promoting the welfare of the teaching staff, non-teaching staff, students and the school sponsor. At Butere Boys, the parents association works harmoniously with other stakeholders including the board of management to ensure the continued growth and success of the institution. 
          </p>

          <p>
           One notable contribution of the association is its support toward academic improvement and co-curricular activities through mobilization of the resources for student motivation and development programs. The current association is proud to be associated with the improved KCSE performance recorded between 2022 and 2025. In collaboration with the dedicated teaching staff under the stewardship of the Chief Principal, Mr. Habil Malika.  
          </p>

          <p>
     The association remains committed to achieving this year's target mean score of 8.5 for the Paragon class. 
          </p>

          
          <p>
            <strong><em>Stephen Abwoza Okumu</em></strong><br />
            Parents Association Chairperson
          </p>

          <br />

          <h1>Remarks from the Deputy Principal-Administration</h1>

          <div className="line"></div>

          <p>
            Butere Boys' High School is steadily emerging as a centre of excellence in both academics and co-curricular activities. This achievement has been made possible through our commitment to maintaining condusive environment for teaching, learning and nurturing the talents and capabilities of our students. Our school motto, mission and vission continue to guide all programmes and activities carried out within the school.
          </p>

          <p>
           In our pursuit of excellence, as envisioned in our school motto, "Discipline for excellence," all our operations are guided by a strong sense of discipline, responsibility, and commitment to duty. We remain dedicated to instilling in our learners habits of obedience, focus, and self-discipline which translate into academic success and personal growth.
          </p>

          <p>
            This commitment is reflected in the consistent improvement in academic performance since 2023, as well as our continued participation and success in co-curricular activities at the highest levels. To ensure that discipline is upheld at all times, the school has established a disciplinary committee that works closely with parents to guide and correct learners who may display deviant behaviour. We also have vibrant Guidance and counseling Department staffed with trained teachers who provide psychological support, mentorship, and counseling services to students in need. In addition, each class has peer counsellors who help bridge the generational gap and offer first-line support to fellow students on guidance and counseling matters. 
            <br />
            <i><b>Mr. Chimakati Charlly</b></i>
            <br />
            <b>Deputy Principal-Administration</b>
          </p>

        {/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/EighthPage"
          className="btn btn-warning btn-lg me-3"
      >
          📖 Next Page
      </Link>
      
              </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="third-right">

          {/* Chief Editor Card */}

          <div className="image-card">

            <img
              src="/images/chief-editor.jpg"
              alt="Chief Editor"
            />

            <div className="card-caption">
              <h3>Chief Editor</h3>
              <p>Wanyama Masika</p>
            </div>

          </div>
          <br />
          <br />
          <br />

          {/* Editorial Team Card */}

          <div className="image-card">

            <img
              src="/images/editorial-team.jpg"
              alt="Editorial Team"
            />

            <div className="card-caption">
              <h3>Students' Editorial Team</h3>
              <p>Renaissance Editorial Board 2026</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ThirdPage;