import React from "react";

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Annual Sports Day Celebrates Excellence",
    date: "March 15, 2026",
    author: "School Administration",
    img: "/images/imageD.jpg",
    description: `
      Butere Boys Senior School hosted its annual sports day with students
      from all classes participating in track and field events, football,
      basketball, and other competitions. The event highlighted teamwork,
      discipline, and sportsmanship. Teachers, parents, and local community
      leaders attended, applauding the students for their exceptional performances.
    `,
  },
  {
    id: 2,
    title: "Library Renovation Completed",
    date: "February 10, 2026",
    author: "Principal",
    img: "/images/imageA.jpg",
    description: `
      The school library was upgraded with modern books, digital resources,
      and new study areas. Students now have access to an enhanced learning
      environment that promotes research, reading habits, and academic
      excellence. The library also includes quiet zones for focused study.
    `,
  },
  {
    id: 3,
    title: "Drama Club Triumphs at National Festival",
    date: "January 20, 2026",
    author: "Arts Department",
    img: "/images/1770395995199.jpg",
    description: `
      The Drama Club represented Butere Boys Senior School at the National
      Theatre Festival and won first place. Their performance demonstrated
      creativity, teamwork, and artistic talent. Students received certificates
      and trophies, and the event was covered by local media.
    `,
  },
  {
    id: 4,
    title: "Curriculum Updates for CBC and 8-4-4",
    date: "March 5, 2026",
    author: "Academic Office",
    img: "/images/imageC.jpg",
    description: `
      Butere Boys Senior School continues to implement the latest updates
      to the CBC and 8-4-4 curricula. The school focuses on holistic
      education that balances academics, sports, arts, and leadership
      skills. Workshops for teachers and students are ongoing to ensure
      smooth integration of new learning methods.
    `,
  },
];

const NewsPage = () => {
  return (
    <div className="container my-5">

      {/* PAGE HEADER */}
      <header className="mb-5 text-center">
        <h1 className="fw-bold mb-3">Butere Boys Senior School News & Info</h1>
        <p className="lead">
          Stay updated with the latest news, events, and achievements at Butere Boys Senior School. Explore our services, boarding facilities, classes, extracurricular activities, and more.
        </p>
      </header>

      {/* NEWS ARTICLES */}
      <section className="row mb-5">
        {newsItems.map((news) => (
          <div key={news.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={news.img}
                className="card-img-top"
                alt={news.title}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{news.title}</h5>
                <p className="text-muted mb-1">
                  {news.date} | By {news.author}
                </p>
                <p className="card-text" style={{ whiteSpace: "pre-line" }}>
                  {news.description}
                </p>

                {/* FIXED BUTTON */}
                <button className="btn btn-primary mt-auto">
                  Read More
                </button>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* BOARDING SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Boarding</h2>
        <p>
          Butere Boys Senior School offers modern boarding facilities that ensure students live comfortably while focusing on their academics. Dormitories are secure, spacious, and supervised by dedicated housemasters. Students are encouraged to maintain discipline and participate in evening study sessions.
        </p>
      </section>

      {/* CLASSES SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Classes & Curriculum</h2>
        <p>
          The school provides both CBC and 8-4-4 curriculum pathways. Classrooms are equipped with modern teaching aids, science labs, and IT labs to support effective learning. Students benefit from small class sizes and personalized attention from experienced teachers.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Services</h2>
        <p>
          Our school provides a range of services including counseling, career guidance, library access, ICT support, and health care. These services ensure students' holistic growth and address academic, emotional, and physical needs.
        </p>
      </section>

      {/* EXTRACURRICULAR SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Extracurricular Activities</h2>
        <p>
          Students are encouraged to participate in clubs, sports, drama, music, debate, and community service. These activities build leadership, teamwork, and creativity, complementing the academic program and developing well-rounded students.
        </p>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Achievements</h2>
        <p>
          Butere Boys Senior School has a proud history of academic and sporting excellence. Our students consistently perform well in KCSE exams, national competitions, and extracurricular events. Awards and recognitions reflect the dedication of both staff and students.
        </p>
      </section>

      {/* FACILITIES SECTION */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Facilities</h2>
        <p>
          The school offers modern facilities including science and computer laboratories, a library, sports fields, dining halls, and boarding houses. These facilities are maintained to provide a safe and conducive environment for learning and personal development.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-5 text-center text-muted">
        <p>© 2026 Butere Boys Senior School. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default NewsPage;