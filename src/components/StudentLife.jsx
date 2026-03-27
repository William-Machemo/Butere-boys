import React from "react";

const StudentLife = () => {
  return (
    <div className="container py-4">
      <h1 className="text-success mb-4">Student Life</h1>

      <p>
        Student life at Butere Boys High School is vibrant and engaging. 
        Students participate in co-curricular activities that promote growth,
        teamwork, and leadership skills.
      </p>

      <div className="row mt-4">

        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Sports</h5>
            <p>Football, rugby, athletics, and indoor games.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Clubs & Societies</h5>
            <p>Debate club, science club, drama, music and more.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Leadership</h5>
            <p>Student council and leadership training programs.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentLife;