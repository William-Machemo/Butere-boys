import React from "react";

const Classes = () => {

  const cardStyle = {
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    width: "100%"
  };

  const ClassCard = ({ img, title }) => (
    <div className="col-md-4 col-sm-6">
      <div className="card shadow h-100 border-0">
        <img src={img} alt={title} style={cardStyle} />
        <div className="card-body text-center">
          <h6 className="fw-bold">{title}</h6>
        </div>
      </div>
    </div>
  );

  const LevelSection = ({ title, data }) => (
    <div className="mb-5">

      <h3 className="text-center fw-bold mb-4">{title}</h3>

      <div className="row g-4">
        {data.map((item, index) => (
          <ClassCard key={index} img={item.img} title={item.title} />
        ))}
      </div>

    </div>
  );

  return (
    <div className="container my-4">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Academic Structure</h1>
        <p className="text-muted">
          Grade 10–12 and Form 3–4 class organization
        </p>
      </div>

      {/* GRADE 10 */}
      <LevelSection
        title="Grade 10"
        data={[
          { img: "/images/1770396068156.jpg", title: "Grade 10 - East" },
          { img: "/images/1769612330468.jpg", title: "Grade 10 - West" },
          { img: "/images/1750716271830.jpg", title: "Grade 10 - North" },
        ]}
      />

      {/* GRADE 11 */}
      <LevelSection
        title="Grade 11"
        data={[
          { img: "/images/1769612330468.jpg", title: "Grade 11 - East" },
          { img: "/images/1750716271830.jpg", title: "Grade 11 - West" },
          { img: "/images/IMG-20250731-WA0014.jpg", title: "Grade 11 - North" },
        ]}
      />

      {/* GRADE 12 */}
      <LevelSection
        title="Grade 12"
        data={[
          { img: "/images/IMG-20250731-WA0014.jpg", title: "Grade 12 - East" },
          { img: "/images/1769612200496.jpg", title: "Grade 12 - West" },
          { img: "/images/1770396068156.jpg", title: "Grade 12 - North" },
        ]}
      />

      {/* FORM 3 */}
      <LevelSection
        title="Form 3"
        data={[
          { img: "/images/1750716271830.jpg", title: "Form 3 - East" },
          { img: "/images/1769612330468.jpg", title: "Form 3 - West" },
          { img: "/images/1770396068156.jpg", title: "Form 3 - North" },
            { img: "/images/1750716271830.jpg", title: "Form 3 - South" },
          { img: "/images/1769612330468.jpg", title: "Form 3 - Red" },
          { img: "/images/1770396068156.jpg", title: "Form 3 - Central" },
           { img: "/images/1770396068156.jpg", title: "Form 3 - Green" },
        ]}
      />

      {/* FORM 4 */}
      <LevelSection
        title="Form 4"
        data={[
          { img: "/images/1769612200496.jpg", title: "Form 4 - East" },
          { img: "/images/IMG-20250731-WA0014.jpg", title: "Form 4 - West" },
          { img: "/images/1750716271830.jpg", title: "Form 4 - North" },
           { img: "/images/1769612200496.jpg", title: "Form 4 - Central" },
          { img: "/images/IMG-20250731-WA0014.jpg", title: "Form 4 - Green" },
          { img: "/images/1750716271830.jpg", title: "Form 4 - South" },
           { img: "/images/1750716271830.jpg", title: "Form 4 - Red" },
        ]}
      />

    </div>
  );
};

export default Classes;