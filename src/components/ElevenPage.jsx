import React from "react";
import "./ThirdPage.css";
 import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the Pure Sciences Department</h1>

          <div className="line"></div>

              <p>The sciences department is responsible for teaching and promoting science subjects such as physics, chemistry and biology. The department aims to develop students' scientific knowledge, practical laboratory skills, critical thinking and problem solving abilities. Through classroom learning, experiments, science projects and academic competitions, the department prepares students for national examinations and careers in medicine, engineering, technology, research and other science related fields. 
</p>



          <p>
 It also encourages innovations, discipline, and team work among learners. Strategies that promote performance in science department: Regular practical lessons, Continuous Assessment tests, Use of modern Teaching methods, Team Teaching and Teacher Collaboration, Adequate Laboratory Equipment and Materials, Proper Time Management and Syllabus coverage, Performance Analysis and Feedback. 
          </p>
Discipline and student Commitment. The department has nineteen members.
          <p>
 
          </p>

  

          
          <p>
            <strong><em>Mr. Wangulu Kennedy</em></strong><br />
            <b>HOD Pure Sciences</b>
          </p>

          <br />

          <h1>Remarks from the Applied Sciences Department</h1>

          <div className="line"></div>

          <p>
This report provides an overview of the department of Applied Science at Butere Boys' High School. The department remains committed to providing high-quality, practical-oriented education that equips learners with relevant skills for the job market and self-reliance. The department of applied sciences is led by Mr. Andala Christopher  as head of department. The dedicated members of the department includes: Mr. Wanzetse Okumu, Mr.Opati Vitalis, Mr. Alushula Jackson, Mr. Wanyama Caesar, Mr. Osore Benard, Mr. Abuyeka Shaolin, Madam Anene Christabel, Madam Inziani Esther, Madam Mueni Mercy. 
</p> 
<p>This team of dedicated teachers works collaboratively towards achieving both departmental and school-wide goals. The department offers subjects as Agriculture, Computer Studies, Home Science, and ICT. Home Science was successfully introduced under the Competency-Based Curriculum (CBC) for grade 10 learners, therby expanding opportunities for students to acquire essential life and entrepreneurial skills.  

          </p>

          <p>

The core aim of the department is to equip learners with practical skills that prepare them for the modern job market and self-resilience. 
          </p>

<p>

</p>


          <p>
 
            <br />
            <i><b>Mr. Andala Christopher</b></i>
            <br />
            <b>Head of Department-Applied Sciences</b>
          </p>

        
{/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/TwelvePage"
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