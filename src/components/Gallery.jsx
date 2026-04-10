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

      {/* ROW 10*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/public/images/1743703944924.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1743963057758.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1743963068160~2.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 11*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1744266196084.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1745153542362.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1745205642480.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 12*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1745205696820.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1750645890067.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1750645897729.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 13 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1750678233330.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1750678296510.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1750678318320.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>


      {/* ROW 14*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1750678468113.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1750678473405.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1750678504179.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 15 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1750678519476.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1750715383980.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1750715586621.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 16 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1750716271830.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1769611710125.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1769611726552.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 17*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1769611747629.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1769611755349.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1769611775390.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 18*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1769611795309.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1769611820939.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1769611832848.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 19 */}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1769611888159.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1769612018716.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1769612096919.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 20*/}
      <section className="row g-3 mt-2">
        <div className="col-md-4 dorm-card">
          <img src="/images/1769612112136.jpg" alt="gallery" className="dorm-img" />
        </div>
        <div className="col-md-4 dorm-card">
          <img src="/images/1769612117604.jpg" alt="gallery" className="dorm-img" />
        </div>

         <div className="col-md-4 dorm-card">
          <img src="/images/1769612177331.jpg" alt="gallery" className="dorm-img" />
        </div>
      </section>

      {/* ROW 21*/}
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

      {/* ROW 22*/}
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

      {/* ROW 23*/}
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

      {/* ROW 24 */}
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

      {/* ROW 25 */}
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

      {/* ROW 26*/}
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

      {/* ROW 27 */}
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

      {/* ROW 28*/}
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

      {/* ROW 29 */}
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

      {/* ROW 30 */}
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