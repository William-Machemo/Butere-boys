import React from "react";
import "./ThirdPage.css";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1>Chief Editor's Remarks</h1>

          <div className="line"></div>

          <p>
            It is with great pleasure and excitement that I present this edition
            of <strong>RENAISSANCE</strong>. As a team, we have poured our
            hearts and minds into creating a publication that reflects the
            vibrant spirit, creativity and talent within the Butere Boys High
            School community.
          </p>

          <p>
            This magazine serves as a platform through which our students
            showcase their brilliance, intellect and unique perspectives.
            Within these pages lies a rich collection of captivating articles,
            thought-provoking essays, inspiring poetry and breathtaking artwork,
            all produced by our very own students.
          </p>

          <p>
            The journey of creating this publication has truly been a labour of
            love. Countless hours of dedication, collaboration and revision have
            gone into ensuring that every page stands as a testament to our
            students' excellence and creativity.
          </p>

          <p>
            I am immensely proud of our team's unwavering commitment and the
            exceptional quality of work they have produced. They embraced the
            responsibility of representing the school's voice with
            professionalism, passion and originality.
          </p>

          <p>
            I encourage every reader to explore these pages with an open mind
            and appreciate the power of words, art and creativity.
          </p>

          <p>
            Finally, I express my heartfelt gratitude to the Chief Principal
            <strong> Mr. Habil Malika</strong>, the editorial team,
            <strong> ACTT Digital Media</strong>, and everyone who supported us
            in bringing this publication to life.
          </p>

          <p>
            <strong><em>Wanyama Masika</em></strong><br />
            Chief Editor
          </p>

          <br />

          <h1>The Students' Editorial Team</h1>

          <div className="line"></div>

          <p>
            We welcome you to this edition of the Butere Boys High School
            Magazine. It is a product of the combined effort of teachers,
            non-teaching staff and the editorial team.
          </p>

          <p>
            Our dream is to paint a true picture of what Butere Boys High School
            stands for. We chose the name <strong>RENAISSANCE</strong> because
            this publication marks the revival of the magazine after its last
            publication in 2022.
          </p>

          <p>
            This publication is the result of teamwork and dedication from
            students and staff who believed in preserving the school's history,
            achievements and memorable experiences.
          </p>

          <p>
            Members of the editorial team include David Pach, Brian Kila,
            Kelvin Andalo and many other committed students who contributed to
            the success of this publication.
          </p>
{/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/FourthPage"
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