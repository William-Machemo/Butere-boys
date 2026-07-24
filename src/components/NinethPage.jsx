import React from "react";
import "./ThirdPage.css";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the Quality Assurance & Standards Office</h1>

          <div className="line"></div>

              <p>THE department comprises following numbers: mr. charlly Chimakati - deputy principal, administration, MS. immaculate Mabuka-HOD, Qas, mr.  kennedy   Lanogwa- assistant HOD,  QAso, Ms. Pamela   Achieng- assistant dean of stadies, mr. Shalo Moses-senior master, STEM, peter Keverenge -senior master, sporty. The quality assurance and standards
</p>



          <p>
 Department plays an important role in ensuring that the school maintain  high academic standards, discipline, and effective teaching and learning practice. throughout the year, THE department has worked closely with teachers,  learning and school  administrator to promote excellence in all areas of school life. THE department conducts regular classroom observation , 
          </p>
Lesson evaluations, and analysis of learners' performance. these activities  have helped teacher improve lesson  delivery and encouraged learners' to work harder toward success.reguler monitoring has ensure that teachers prepare professional documents on time, including lesson plans, schemes of work and records of work covered.  The department has also ensured that syllabus coverage remains on track in all subjects. 
          <p>
 
          </p>

  

          
          <p>
            <strong><em>Ms. Mabuka Immaculate</em></strong><br />
            <b>QASO</b>
          </p>

          <br />

          <h1>Remarks from the HOD Examinations</h1>

          <div className="line"></div>

          <p>
There are no secrets to success. It is the result of preparation, hard work and learning from failure. 
General Colin Powell. Hello everyone, it is a great privilege to contribute to the Renaissance. We are living in an era where everyone is yearning for success, whether in academics, politics, business or other fields. Students at all level of learning are constantly searching for the magic formula to success in examinations-the easy way or many imagine that every successful person achieved greatness through some form of magic, however, the foundation of success is uilt upon three critical elements:

          </p>

          <p>
<ol>
<li> <b> Preparation</b></li>
Success begins long before the action. take time to plan, research and equip yourself with the right skills and knowledge. Students should prepare adequately for examinations by setting clear targets for each subject area, writing down these targets clearly to serve as a constant reminders, following a consistent study schedule and revision plan.

<li> <b> Hard Work</b></li>
There is no substitute for dedication and consistent effort. Success requires discipline, determinations and commitment. Along the journey, you may experience fatigue, frustration, discouragement, negative talk, failure and many other challenges. However, do not be tempted to give up or look back. Remain focused on your goal. 








</ol>
          </p>

          <p>
 
            <br />
            <i><b>Mr. John Natembeya</b></i>
            <br />
            <b>HOD Examinations</b>
          </p>

        
{/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/TenthPage"
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