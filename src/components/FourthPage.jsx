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

          <h1>Remarks from the Chief Principal</h1>

          <div className="gold-line"></div>

          <p>
         It gives me great pleasure to share with you the remarkable academic journey that Butere Boys' High School has undertaken over the past few years. Since I assumed office as the Chief Principal in June 2023, our collective mission has been to restore academic excellence, strengthen discipline, and rebuild confidence in our institution. At the time, the school had experienced four consecutive years of declining academic performance, posting a mean score of 5.7 in 2022. We therefore embarked on a deliberate and focused journey to reverse the trend. Through teamwork, commitment, resilience and strategic interventions, we have witnessed steady and encouraging progress. In 2023, the mean score improved to 5.9, rising further to 6.4 in 2024. I am proud to note that in 2025, the school achieved a significant breakthrough by posting an impressive mean score of 8.2. This achievement is not accidental, it is the result of discipline, hard work, effective academic monitoring, intensified revision programmes, and strengthened guidance and counselling services. I sincerely commend our dedicated teachers who have continued to sacrifice their time and energy to mentor and guide our learners  toward success. 
i also extent my heartfelt appreciation to our parents and guardian for their unwavering support and partnership in nurturing our student. to our boys, i urge you to remain focused excellence both in academics and character. as a school remain committed to strengthening our academic programmes, embracing. our vision is to make butere boys high school a centre of excellence not only in academics but also in leadership, talent development, and moral integrity. together, we shall continue scaling greater heights.
<br />
<i><b>Mr. Habil Malika</b></i>
<br />
<b>Chief Principal</b>
<br />
<b>Butere Boys' High School</b>

 </p>      
     <br />

     {/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/FifthPage"
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