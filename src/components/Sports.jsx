import React from "react";
import { Link } from "react-router-dom";

const Sports = () => {

  const sportsData = [
    {
      img: "football.jpg",
      title: "Football",
      link: "/football",
      description: "Discover football training, fixtures, players, and match highlights at Butere Boys."
    },
    {
      img: "rugby.jpg",
      title: "Rugby",
      link: "/rugby",
      description: "Explore strength, strategy, and team spirit in our rugby program."
    },
    {
      img: "basketball.jpg",
      title: "Basketball",
      link: "/BasketBall",
      description: "Fast-paced basketball action, player stats, and exciting fixtures."
    },
    {
      img: "volleyball.jpg",
      title: "Volleyball",
      link: "/VolleyBall",
      description: "Power, precision, and teamwork define our volleyball team."
    },
    {
      img: "1769612096919.jpg",
      title: "Handball",
      link: "/handball",
      description: "Speed and coordination make our handball team competitive."
    },
    {
      img: "hockey.jpg",
      title: "Hockey",
      link: "/hockey",
      description: "Tactical gameplay and agility in school hockey competitions."
    },
    {
      img: "1769612096919.jpg",
      title: "Table Tennis",
      link: "/tabletennis",
      description: "Precision, reflex, and focus in indoor table tennis matches."
    },
    {
      img: "batminton.jpg",
      title: "Badminton",
      link: "/badminton",
      description: "Fast reflexes and sharp skills define badminton excellence."
    },
    {
      img: "athletics.jpg",
      title: "Athletics",
      link: "/athletics",
      description: "Track and field events including sprinting and long-distance races."
    },
    {
      img: "netball.jpg",
      title: "Netball",
      link: "/netball",
      description: "Teamwork, agility, and accuracy in netball competitions."
    }
  ];

  return (
    <div>

      {/* HEADER */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">School Sports Hub</h2>
          <p className="mb-4">
            Explore all sports activities at Butere Boys High School. Click view to learn more.
          </p>

          <div className="row">

            {sportsData.map((Sports, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card shadow-sm h-100">

                  <img
                    src={`/images/${Sports.img}`}
                    className="card-img-top"
                    alt={Sports.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title text-success">
                      {Sports.title}
                    </h5>

                    <p className="card-text">
                      {Sports.description}
                    </p>

                    <Link
                      to={Sports.link}
                      className="btn btn-success w-100"
                    >
                      View {Sports.title}
                    </Link>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Sports;