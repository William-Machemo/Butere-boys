import React from "react";
import "./ThirdPage.css";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the Technical Studies Department</h1>

          <div className="line"></div>

              <p>Shaping the future through Technical and Applied Learning. The Technical department is proud to be part of the transformative journey ushered in by the Competency-Based Education (CBE) system. As education steadily shifts towards practical skills, innovation, creativity, and real world problem-solving, our school has fully embraced this new direction with commitment, preparedness, and optimism. The rollout of the CBE pathway within the department is now firmly underway, with learners actively engaging in hands-on, learner-centered experiences across the four technical tracks offered in the school:
</p>



          <p>
 <ul>
    <li>Wood Technology</li>
    <li>Electrical Technology</li>
    <li>Media Technology</li>
    <li>Building and Construction</li>
 </ul>
          </p>
          <p>
These areas are designed not only to nurture academic growth, but also to equip learners with practical competencies, creativity, confidence, and employable skills relevant to the modern world. Competent and professional Facilitation to ensure successful implementation of the programme, the department is supported by qualified, experienced, and professionally trained facilitators who continue to guide learners through both theory and practical application. 
</p>
          <p>
 
          </p>

  

          
          <p>
            <strong><em>Mr. Marebwa Anthony</em></strong><br />
            <b>HOD Technical Studies</b>
          </p>

          <br />

          <h1>Remarks from the Desk of Social Sciences Pathway</h1>

          <div className="line"></div>

          <p>
The social sciences department plays a vital role in helping learners understand human behavior, society, governance, economics, religion and the government. The department seeks to equip students with analytical, critical thinking and problem solving skills necessary for understanding and addressing real world issues. The pathway has the following tracks;

<ol>
    <li>Humanities and business studies- Ms. Achieng Pamela.</li>
    <li>English, Literature and Library services- Ms. Oyuga Lisa.</li>
    <li>Kiswahili na Fasihi- Ms. Wamubeyi Joylet</li>
</ol>
</p> 
<p>The head of department coordinates departmental activities, schemesof work, budget meetings and ensures proper syllabus coverage. 
    <br />
    <b>Subject Heads</b>
    <br />
    History and government/Citizenship- Ms. Wamubeyi Joylet, Religious Studies- Ms. Jepkemboi Joselyne, Business Studies- Ms. Wesonga Vivian, Geography- Mr. Mukenya Anthony.
    <br />
    <b>Subject Teachers</b>
    <br />
    The department comprises of dedicated subject specialists who implement the curriculum effectively. 
    These includes:
    <ol>
        <li>Mr. Philip Omukiti</li>
        <li>Ms. Mary Okeno</li>
        <li>Mr. John Natembeya</li>
        <li>Mr. James Mbayo</li>
        <li>Mr. Lanogwa Kennedy</li>
        <li>Ms. Sarah Khaemba</li>
        <li>Ms. Matilda Nyongesa</li>
        <li>Ms. Cleopatra Ochima</li>
        <li>Mr. Annan Vincent</li>
        <li>Mr. Okwach Fred</li>
        <li>Mr. Augustine Wafula</li>
        <li>Ms. Winfred Weshisha</li>
        <li>Mr. Bramuel Ndeche</li>
        <li>Mr. Andika Daniel</li>
    </ol>

          </p>

          <p>

<b>Core Purpose</b>
<br />
The department focuses on teaching learners how humans behave, how societies function, and how to analyze real-world issues using evidence and practical approaches.
The department transform current affairs and human behavior into practical classroom learning experiences where students learn why people behave the way they do and how the societies evolve.

<br />
<b>What We Do</b>
<br />
The department utilizes textbooks, case studies, debates, educational field trips, courts, museums, and ICT integration to help learners better understand human behavior and societal dynamics. Through these learning experience, students are prepared for future careers such as:

<ul>
    <li>Environmental Officers</li>
    <li>Urban Planners</li>
    <li>Market Researchers</li>
    <li>Diplomats</li>
    <li>Economists</li>
    <li>Lawyers</li>
    <li>Teachers</li>
    <li>Political Analysts</li>
    <li>GIS Specialists</li>
</ul>
          </p>

<p>
<b>Main Focus</b>
<br />
The department aims to nurture learners who  understand how society functions and how behavior changes over time in order to build a positive, responsible and consistent culture.
</p>


          <p>
 
            <br />
            <i><b>Ms. Pamela Achieng</b></i>
            <br />
            <b>Senior Mistress Social Sciences </b>
          </p>

        
{/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/TerteenPage"
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