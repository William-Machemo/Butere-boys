import React from 'react';
import '../App.css';

const Boarding = () => {
  return (
    <div className="container mt-3">

      <h1 className="text-danger text-center">OVERVIEW</h1>

<p><b>Butere Boys High School</b>, located in Kakamega County, is addressing dormitory congestion by improving infrastructure to support its student  population. The school, known for its <i>"Exodus"</i> spirit, continues 
 to modernize its boarding facilities. </p>

 <p> The school is undergoing construction, including a multi-purpose hall, to support its growth.</p>

 <h2 className="text-center text-danger mt-4"> SCHOOL DORMITORIES </h2>

   {/* ✅ FIRST ROW */}
 <section className="row p-3">

 <div className="col-md-4 dorm-card">
   <h5>KATIBA</h5>
 <img src="images/Katiba.jpg" alt="Katiba" className="dorm-img" />
 <p className="text-success"> Students here are known for discipline and excellence in music and drama. </p>
   </div>

 <div className="col-md-4 dorm-card">
<h5>PARLIAMENT</h5>
 <img src="images/Paliament.jpg" alt="Parliament" className="dorm-img" />
 <p className="text-success"> A top academic dormitory known for discipline and leadership. </p>
  </div>

  <div className="col-md-4 dorm-card">
  <h5>JAMHURI</h5>
  <img src="images/Jamhuri.jpg" alt="Jamhuri" className="dorm-img" />
  <p className="text-success">  Famous for athletics and football excellence. </p>
   </div>

   </section>

      {/* ✅ SECOND ROW */}
      <section className="row p-3">

        <div className="col-md-4 dorm-card">
          <h5>GATUNDU</h5>
          <img src="images/Gatundu.jpg" alt="Gatundu" className="dorm-img" />
          <p className="text-success">
            One of the oldest dormitories known for discipline and cleanliness.
          </p>
        </div>

        <div className="col-md-4 dorm-card">
          <h5>LANCASTER</h5>
          <img src="images/Lancaster.jpg" alt="Lancaster" className="dorm-img" />
          <p className="text-success">
            Home to footballers and the school canteen.
          </p>
        </div>

        <div className="col-md-4 dorm-card">
          <h5>HARAMBEE</h5>
          <img src="images/Harambee.jpg" alt="Harambee" className="dorm-img" />
          <p className="text-success">
            Known for rugby, leadership, and co-curricular success.
          </p>
        </div>

      </section>

      {/* ✅ THIRD ROW */}
      <section className="row p-3">

        <div className="col-md-4 dorm-card">
          <h5>OPARANYA ELITE (I)</h5>
          <img src="images/Oparanya Elite(I).jpg" alt="Elite 1" className="dorm-img" />
          <p className="text-success">
            Reserved for top-performing students in academics.
          </p>
        </div>

        <div className="col-md-4 dorm-card">
          <h5>ELITE II</h5>
          <img src="images/Elite II (1).jpg" alt="Elite 2" className="dorm-img" />
        </div>

        <div className="col-md-4 dorm-card">
          <h5>UGATUZI</h5>
          <img src="images/Elite II.jpg" alt="UgatuzI" className="dorm-img" />
        </div>

      </section>


    </div>
  );
};

export default Boarding;