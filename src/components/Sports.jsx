import React from 'react';

const Sports = () => {
  return (
    <div className="container mt-3">

      <h3 className="text-danger text-center">
        THE EXODUS BUTERE BOYS SPORTS
      </h3>

    

      <h5>SOCCER</h5>

      <p>
        Butere Boys High School is a powerhouse in Western Kenya sports, 
        particularly in soccer, having secured the 2025 Kakamega County 
        Championship and qualified for the <i><b>FEASSA Games</b></i>. 
        Known for their strong defense and penalty proficiency, they reached 
        the 2025 regional level and continue to compete in local and national 
        school championships.
        
        The boys are known as the <b>Tikitaka Boys</b>. They have participated 
        in East Africa school games since independence, hosted at Bukhungu Stadium, Kakamega.
      </p>

      

      {/* ✅ Images Section */}
      <section className="row p-3">

        <div className="col-md-6 text-center">
          <h6>2025 Soccer Captain Dennis Kikwae</h6>
          <img 
            src="images/Dennis Kikwae.jpg" 
            alt="Dennis Kikwae" 
            className="img-fluid"
            style={{ height: "300px" }}
          />
        </div>

        <div className="col-md-6 text-center">
          <h6>King Palma</h6>
          <img 
            src="images/Dennis.jpg" 
            alt="King Palma" 
            className="img-fluid"
            style={{ height: "300px" }}
          />
        </div>

      </section>

    </div>
  );
};

export default Sports;