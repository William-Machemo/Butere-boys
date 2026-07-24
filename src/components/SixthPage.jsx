import React from "react";
import "./ThirdPage.css";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <section className="third-page">

      <div className="third-container">

        {/* LEFT SIDE */}

        <div className="third-left">

          <h1><i>Remarks from the </i>Bishop</h1>

          <div className="line"></div>

          <p>
           
     I take this opportunity to convey my warm greetings and blessings to the board of management, administration, teachers, parents and students and the entire school community. It is a great honour to be part of this noble journey of nurturing young minds for the service of God and humanity. As a christian institution, we are reminded that true and lasting success is built upon the firm foundation of christ. The holy scriptures in 1 Corinthians 3:11 reminds us: in "for no one can lay any foundation other than the one already laid, which is Jesus Christ."
     This foundation calls us to uphold the value of integrity, discipline, humility, compassion and excellence in all that we do. While academic achievement is important, even more valuable is the formation of the godly character and responsible leadership among our leaders. I commend the administration and teachers for their dedication guiding student not only intellectually, But also spiritually and morally. your commitment continues to shape the generation that will stand firm in faith and positively transform society. To the students, I encourage you to remain steadfast, focused and faithful. Build your dreams, ambitions and future upon Christ, for a life grounded in Him will withstand every challenge and flourish with purpose. 

          </p>
<br />
<i><b>Bishop Rose Okeno</b></i>
         <br /><br />
         <p>
            <h1><i>Remarks from the </i>Chaplaincy</h1>
I take this golden opportunity to thank Almighty God for His sufficient grace upon the spiritual life of this institution. Our theme this year is drawn from Mathew 7:24-27: "Laying a foundation that yields lasting fruits." As a school, we believe that through God's guidance we shall continue to realize our vision of becoming a leading institution in transforming boys into responsible men ready to serve God and humanity. As the current school Chaplain, my greatest desire is to see young men grounded in the world of God and prepared to take up responsibilities in the society. As a learning institution, our main focus remains academic excellence.
         </p>
{/* Buttons */}
              <div className="mb-5">
      
               <Link
          to="/SeventhPage"
          className="btn btn-warning btn-lg me-3"
      >
          📖 Next Page
      </Link>
      
              </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="third-right">

          <div className="image-card">

            <img
              src="/images/board.jpg"
              alt="Board Members"
            />

          </div>

          <div className="info-card">

            <h3>Board Chairman</h3>

            <p>
              "Education is the foundation upon which the future of our nation
              is built."
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ThirdPage;