import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Gallery.css"; // optional for styling buttons and images

const Gallery = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel in React
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const carouselEl = document.querySelector("#mycarousel");
    if (carouselEl) {
      new bootstrap.Carousel(carouselEl, {
        interval: 3000, // auto-slide every 3 seconds
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger mb-4">SCHOOL GALLERY</h2>

      {/* Carousel Section */}
      <section className="row">
        <div className="col-md-12">
          <div className="carousel slide" id="mycarousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/1743963068160~2.jpg"
                  alt="slide1"
                  className="w-100 d-block"
                  height="300"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imageB.jpg"
                  alt="slide2"
                  className="w-100 d-block"
                  height="300"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imageC.jpg"
                  alt="slide3"
                  className="w-100 d-block"
                  height="300"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imageE.jpg"
                  alt="slide4"
                  className="w-100 d-block"
                  height="300"
                />
              </div>
            </div>

            {/* PREV BUTTON */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            {/* NEXT BUTTON */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
          <br />
        </div>
      </section>

      {/* ROWS OF IMAGES (keep your original layout) */}
      {/* ROW 1 */}
      <section className="row g-3">
        <div className="col-md-4 dorm-card">
          <img src="/images/1751617705223.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1750715383980.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250731-WA0025.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 2 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250731-WA0024.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250731-WA0022.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250731-WA0021.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 3 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250731-WA0014.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250730-WA0004.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250731-WA0005.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 4 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250730-WA0006.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250623-WA0004.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250623-WA0005.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 5 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250623-WA0006.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250623_060141_503.webp" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250623-WA0002.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 6 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG-20250623-WA0001.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250622_101551.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250622_101604.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 7 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250622_102117.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250531_151039.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250531_150940.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 8 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/IMG_20250513_132529.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/imageF.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/imageD.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 9 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/imageC.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/imageA.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1770397785564.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;