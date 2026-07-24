import React from "react";
import "./ThirdPage.css";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the ENGLISH, FRENCH & LIBRARY SERVICES DEPARTMENT</h1>

          <div className="line"></div>

              <p>The English, French and Library department is one of the most important departments in the school. The department enjoys the dedicated services of the following members:
                <ol>
                    <li>Mr. Charlly Chimakati</li>
                    <li>Ms. Oyuga Lisa</li>
                    <li>Mr. Wanyama Titus</li>
                    <li>Ms. Omondi Agnetta</li>
                    <li>Ms. Immaculate Mabuka</li>
                    <li>Ms. Abigael Sitati</li>
                    <li>Ms. Sela Ochami</li>
                    <li>Mr. Kasiera Fernandez</li>
                    <li>Mr. Albert Swaka</li>
                    <li>Ms. Winfred Weshisha</li>
                    
                </ol>
</p>



          <p>
 
          </p>

          <p>
 
          </p>

  

          
          <p>
            <strong><em>Ms. Oyugah Lisa</em></strong><br />
            <b>HOD English, French & Library Services</b>
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