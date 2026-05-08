import React from "react";
import "../App.css";

const Boarding = () => {
  const imgStyle = {
    height: "200px",
    width: "100%",
    objectFit: "cover",
  };

  const DormCard = ({ title, img, desc }) => (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100 border-0">

        <img src={img} alt={title} className="card-img-top" style={imgStyle} />

        <div className="card-body">
          <h5 className="fw-bold text-danger">{title}</h5>
          <p className="text-muted small">{desc}</p>
        </div>

      </div>
    </div>
  );

  const MasterCard = ({ name, img, role }) => (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100 border-0 text-center">

        <img
          src={img}
          alt={name}
          className="card-img-top"
          style={{ height: "260px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="fw-bold">{name}</h5>
          <p className="text-danger small">{role}</p>
        </div>

      </div>
    </div>
  );

  return (
    <div className="container my-4">

      {/*  HEADER */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-danger">Boarding Life</h1>
        <p className="text-muted">
          Structured boarding environment focused on discipline and excellence.
        </p>
      </div>

      {/*  BOARDING MASTERS SECTION */}
      <h3 className="text-center fw-bold text-danger mb-4">
        Boarding Masters
      </h3>

      <div className="row mb-5">

        <MasterCard
          name="Mr. Achara"
          img="images/Achara.jpg"
          role="Senior Boarding Master"
        />

        <MasterCard
          name="Mr. Mbayo"
          img="images/Achara.jpg"
          role="Deputy Boarding Master (Discipline)"
        />

        <MasterCard
          name="Mr. Caesar Wanyama"
          img="images/Caesar.jpg"
          role="Deputy Boarding Master (Welfare)"
        />

      </div>

      {/* OVERVIEW */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">
          <h4 className="text-danger">Overview</h4>
          <p>
            Butere Boys High School continues to expand its boarding facilities
            to support a growing student population under the guidance of the boarding team.
          </p>
        </div>
      </div>

      {/*  DORMITORIES TITLE */}
      <h3 className="text-center fw-bold text-danger mb-4">
        School Dormitories
      </h3>

      {/* ROW 1 */}
      <div className="row">
        <DormCard
          title="Katiba"
          img="images/Katiba.jpg"
          desc="Known for discipline and excellence in music and drama."
        />
        <DormCard
          title="Parliament"
          img="images/Paliament.jpg"
          desc="Strong academic culture and leadership development."
        />
        <DormCard
          title="Jamhuri"
          img="images/Jamhuri.jpg"
          desc="Famous for athletics and football excellence."
        />
      </div>

      {/* ROW 2 */}
      <div className="row">
        <DormCard
          title="Gatundu"
          img="images/Gatundu.jpg"
          desc="Oldest dorm known for discipline and cleanliness."
        />
        <DormCard
          title="Lancaster"
          img="images/Lancaster.jpg"
          desc="Home to sports excellence and school canteen."
        />
        <DormCard
          title="Harambee"
          img="images/Harambee.jpg"
          desc="Known for rugby and leadership success."
        />
      </div>

      {/* ROW 3 */}
      <div className="row">
        <DormCard
          title="Oparanya Elite (I)"
          img="images/Oparanya Elite(I).jpg"
          desc="Reserved for top academic performers."
        />
        <DormCard
          title="Elite II"
          img="images/Elite II (1).jpg"
          desc="Focuses on academic excellence and discipline."
        />
        <DormCard
          title="UgatuzI"
          img="images/Elite II.jpg"
          desc="Balanced dorm promoting unity and discipline."
        />
      </div>

    </div>
  );
};

export default Boarding;