import React from "react";
import "./ThirdPage.css";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Remarks from the Careers Department</h1>

          <div className="line"></div>

              <p>As Students transition into senior and high school, they enter into one of the most defining stages of their academic journey. It is at this level that the choices they make begin to shape their future careers, personal growth, and lifelong aspirations. The school therefore provides a structured pathways aimed at nurturing earners' talents, interests, and ambitions. The careers department is committed to ensure that every learner realizes their potential and fulfills their dreams both in academics and competitive job market. Beyond academics, the department also emphasizes:
</p>



          <p>
 <ol>
    <li>Leadership development through clubs, societies, and project roles.</li>
    <li>Career counseling to help learners align their strengthens, abilities and interests with future opportunities.</li>
    <li>Life skills training to foster independence, resilience, and responsible decision-making. </li>
 </ol>
          </p>
With the introduction of Competency-Based Education (CBE), the school proudly offers subjects under all the three pathways, namely:
Social Sciences, Arts and Sports.
This has enabled learners to discover and explore their passions while preparing them for world beyond school. Other responsibilities undertaken by the department include:
<ul>
    <li>Inviting industry experts to share insights and inspire learners.</li>
    <li>Organizing career fairs where students interact with professionals and institutions of higher learning. </li>
    <li>Assisting learners in making informed career choices.</li>
    <li>Helping learners understand emerging career opportunities and available courses.</li>
    </ul> 
          <p>
 
          </p>

  

          
          <p>
            <strong><em>Ms. Jepkemboi Joslyne</em></strong><br />
            <b>HOD-Careers</b>
          </p>

          <br />

          <h1>Remarks from the Senior Master Stem Pathway</h1>

          <div className="line"></div>

          <p>
Butere Boys high school is continued to strengthen its Science, Technology, Engineering and mathematics (STEM) pathway by admitting 279 learners into the programme and expanding academic support systems aimed at improving performance and innovation. The institution currently has five STEM streams offering a wide range of science and technology-related subjects designed to prepare learners in modern careers in engineering, medicine, ICT, and applied sciences. The mathematics department, headed by Mr. Peter Keverenge with Mr. John Natembea serving as head of subjects, is among the key pillars driving the STEM programme. 

          </p>

          <p>

The department is supported by a team of experienced teachers including Emma Sinino, Kennedy Lanogwa, Victory Ayumba, Vivian Wesonga, Nashon Opilo, Vitalis Opati, Dotmark Wawire, Lewis Mumia, Ester Inziani and Francis Omurunga. Under the science department, learners undertake chemistry, physics and biology taught by qualified teachers led by heads of departments and subject specialists. 
          </p>

<p>
    The school also offers technical subjects such as Woodwork, Media Technology, Building and Construction, and Science and Computer Studies. 
</p>


          <p>
 
            <br />
            <i><b>Mr. Keverenge Peter</b></i>
            <br />
            <b>Senior Master STEM</b>
          </p>

        {/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/ElevenPage"
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