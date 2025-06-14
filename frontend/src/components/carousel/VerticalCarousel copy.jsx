import React from "react";
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
  if (direction === "horizontal") {
    // Mobile version: horizontal scroll
    const allImages = [...leftImages, ...rightImages];
    return (
      <div className="carousel-wrapper horizontal-carousel-wrapper">
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

  // Desktop version: two-column vertical scroll
  return (
    <div className="carousel-wrapper">
      {/* Left Column */}
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

      {/* Right Column */}
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
