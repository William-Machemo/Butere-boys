import { useEffect, useRef, useState } from "react";

export default function SchoolVideosPage() {

  const videoIds = [
    "FThNp1C-Wwo",
    "iIlVbOFVMPc",
    "_VPu9rNZXLE",
    "T6RY7qAJqOo",
    "mWN1fJNMJ1k",
    "O5jVmmupi6U",
    "bFt7QAN_EHI",
    "1woAAkQKqqw",
    "iWHuX_8WwIU",
    "IbpM7KaVDFg"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // 👇 Detect which video is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll(".video-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {videoIds.map((id, index) => (
        <section
          key={index}
          data-index={index}
          className="video-section"
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <iframe
            src={
              activeIndex === index
                ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`
                : `https://www.youtube.com/embed/${id}?mute=1`
            }
            title={`Video ${index}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              left: "20px",
              color: "white",
            }}
          >
            <h3>🎬 School Video {index + 1}</h3>
            <p>Butere Boys High School</p>
          </div>
        </section>
      ))}
    </div>
  );
}