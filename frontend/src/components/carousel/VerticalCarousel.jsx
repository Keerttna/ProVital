import React, { useEffect, useRef } from "react";
import "./VerticalCarousel.css";

import left1 from "../../assets/vertical-carousel/left-1.png";
import left2 from "../../assets/vertical-carousel/left-2.png";
import left3 from "../../assets/vertical-carousel/left-3.png";
import left4 from "../../assets/vertical-carousel/left-4.png";

import right1 from "../../assets/vertical-carousel/right-1.png";
import right2 from "../../assets/vertical-carousel/right-2.png";
import right3 from "../../assets/vertical-carousel/right-3.png";
import right4 from "../../assets/vertical-carousel/right-4.png";

const leftImages = [left1, left2, left3, left4];
const rightImages = [right1, right2, right3, right4];

const VerticalCarousel = ({ direction = "vertical" }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (direction !== "horizontal") return;

    const container = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 260; // ~image width + gap
    const interval = setInterval(() => {
      if (!container) return;

      // Smooth scroll to next image
      scrollAmount += scrollStep;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500); // scroll every 2.5s

    return () => clearInterval(interval);
  }, [direction]);

  if (direction === "horizontal") {
    const allImages = [...leftImages, ...rightImages];
    return (
      <div
        className="carousel-wrapper horizontal-carousel-wrapper"
        ref={scrollRef}
      >
        {allImages.map((img, index) => (
          <div
            key={`horiz-${index}`}
            className="carousel-image horizontal-image"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    );
  }

  // Default vertical carousel
  return (
    <div className="carousel-wrapper">
      <div className="carousel-mask left-mask">
        <div className="carousel-track scroll-down">
          {[...leftImages, ...leftImages].map((img, index) => (
            <div
              key={`left-${index}`}
              className="carousel-image"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
      <div className="carousel-mask right-mask">
        <div className="carousel-track scroll-up">
          {[...rightImages, ...rightImages].map((img, index) => (
            <div
              key={`right-${index}`}
              className="carousel-image"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
