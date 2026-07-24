import React from "react";
import "./ThirdPage.css";
 import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the Deputy Principal-Academics</h1>

          <div className="line"></div>

          <p>
   It gives me great pleasure to be part of the history this year's school magazine, a reflection of the dedication, talent and achievements of our students and staff. This publication captures memorable moments, academics milestones, and the vibrant spirit that defines our school community. Education is not only about academic excellence, but also about shaping character, discipline, responsibility, and leadership. I am proud to see our students continually rise to challenges, demonstrate resilience and uphold the values of integrity, respect and hard work. The achievement recorded in 2025 both in academics and co-curricular activities clearly demonstrate that we are steadily moving closer to our school vision of becoming an <b> "Exemplary School All Round" </b>
          </p>

          <p>
  Our students accomplishments in academics, sports, arts and a community service are a true testament to their determination, the guidance of our committed teachers and non-teaching staff, and the unwavering support of parents. I sincerely appreciate the efforts of the editorial team, teachers and students who worked tirelessly to make this magazine a success. Your creativity, dedication and commitment have produced a publication that will remain a treasured record of our school journey and achievements.
          </p>

          <p>
   As we celebrate our accomplishments, let us continue striving for excellence in all that we do. May this magazine inspire every learner to dream bigger, work harder and contribute positively to the society. Always remember that three pillars of our core values : Diligence, Integrity and Godliness. I wish all our students and staff continued success in their academic pursuits and personal growth. 
          </p>

  

          
          <p>
            <strong><em>Mr. Wanzetse Okumu</em></strong><br />
            <b>Deputy Principal-Academics</b>
          </p>

          <br />

          <h1>Remarks from the Dean Of Studies' Desk</h1>

          <div className="line"></div>

          <p>
<b>"Getting it right is our academic slogan"</b>
<br />
At Butere Boys' Senior school, "Discipline for excellence" remains our guiding vision. The office of the Dean of Studies continues to play a vibrant and active role in ensuring that our academic target mean score of 8.5 is achieved this year. Our students, teachers and all stakeholders remain united and committed to the pursuit of academic excellence. To support this goal, the school has implemented various academic programmes and strategies including early syllabus coverage, content retention techniques, peer teaching, speed tests, KESHAs and Mini-KESHAs, as well as educational field trips. These programmes are designed to strengthen learners' understanding, improve performance and promote holistic academic growth. 
          </p>

          <p>
The KCSE 2025 results with a mean score of 8.2 (B) up from 6.4454(C), and an impressive 89.51% university transition rate, clearly demonstrate that we are on the right path. These achievements are a testament to the hard work, discipline and dedication of our students, teachers and the entire school community. Subject analysis further reveals outstanding performance in technical subjects, languages and humanities. Drawing and design and woodwork emerged among the best performed subjects, while biology, mathematics, kiswahili, and history continued to register strong mean scores. 
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
          to="/NinethPage"
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