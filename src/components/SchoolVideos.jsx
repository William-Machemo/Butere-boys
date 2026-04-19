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
  const sectionsRef = useRef([]);

  // 👇 Detect visible video
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

  // 🔥 FULLSCREEN FUNCTION (FIXED)
  const goFullscreen = async (index) => {
    const el = sectionsRef.current[index];
    if (!el) return;

    // Enter fullscreen
    if (el.requestFullscreen) {
      await el.requestFullscreen();
    }

    // Try to rotate screen (FIXED ESLINT ERROR HERE)
    if (window.screen.orientation && window.screen.orientation.lock) {
      try {
        await window.screen.orientation.lock("landscape");
      } catch (err) {
        console.log("Orientation lock not supported");
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {videoIds.map((id, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          data-index={index}
          className="video-section"
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
            position: "relative",
            backgroundColor: "black",
          }}
        >
          {/* 🎥 VIDEO */}
          <iframe
            src={
              activeIndex === index
                ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=1`
                : `https://www.youtube.com/embed/${id}?mute=1&controls=1`
            }
            title={`Video ${index}`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>

          {/* 🔳 FULLSCREEN BUTTON */}
          <button
            onClick={() => goFullscreen(index)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(0,0,0,0.6)",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ⛶
          </button>

          {/* 📝 OVERLAY */}
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