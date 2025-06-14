import React, { useState, useRef, useEffect } from "react";
import "./Lifestyle.css";

import nutritionImg from "../../assets/lifestyle-section/nutrition.png";
import physicalImg from "../../assets/lifestyle-section/physical-activity.png";
import sleepImg from "../../assets/lifestyle-section/sleep.png";
import stressImg from "../../assets/lifestyle-section/stress.png";
import socialImg from "../../assets/lifestyle-section/social.png";
import substanceImg from "../../assets/lifestyle-section/substance.png";

import leftArr from "../../assets/lifestyle-section/left-arrow.svg";
import rightArr from "../../assets/lifestyle-section/right-arrow.svg";

import nutritionIcon from "../../assets/lifestyle-section/card-icons/nutrition.svg";
import physicalIcon from "../../assets/lifestyle-section/card-icons/physical.svg";
import sleepIcon from "../../assets/lifestyle-section/card-icons/sleep.svg";
import stressIcon from "../../assets/lifestyle-section/card-icons/stress.svg";
import socialIcon from "../../assets/lifestyle-section/card-icons/social.svg";
import substanceIcon from "../../assets/lifestyle-section/card-icons/substance.svg";

const labels = [
  "Nutrition",
  "Physical activity",
  "Restorative sleep",
  "Stress management",
  "Social connection",
  "Substances abuse",
];

const labelIcon = [
  nutritionIcon,
  physicalIcon,
  sleepIcon,
  stressIcon,
  socialIcon,
  substanceIcon,
];

const labelText = [
  "121/80 mmHg",
  "32 minutes",
  "8 hours",
  "60 bpm",
  "Feeling better",
  "62 days",
];

const content = [
  {
    image: nutritionImg,
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
  },
  {
    image: physicalImg,
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    image: sleepImg,
    description:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
  },
  {
    image: stressImg,
    description:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
  },
  {
    image: socialImg,
    description:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
  },
  {
    image: substanceImg,
    description:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
  },
];

const Lifestyle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.children[0]?.offsetWidth || 0;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % content.length;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 3500); // scroll every 3.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lifestyle-section">
      <div className="gradient-box"></div>

      <h3 className="section-label">HOW IT WORKS</h3>
      <div className="section-header">
        <h2>
          <span>Lifestyle as medicine:</span> The six pillars
        </h2>
        <div className="nav-buttons">
          <button onClick={handlePrev}>
            <img src={leftArr} alt="←" />
          </button>
          <button onClick={handleNext}>
            <img src={rightArr} alt="→" />
          </button>
        </div>
      </div>

      <div className="labels-container">
        {labels.map((label, index) => (
          <div
            key={label}
            className={`label ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="carousel-container" ref={carouselRef}>
        {content.map((item, index) => (
          <div className="carousel-card" key={index}>
            <div className="card-image-wrapper">
              <img
                src={item.image}
                alt={labels[index]}
                className="card-image"
              />
              <div className="card-label">
                {(() => {
                  const words = labelText[index].split(" ");
                  return (
                    <>
                      <img src={labelIcon[index]} alt={labels[index]} />
                      {words[0]}{" "}
                      <span className="label-highlight">
                        {words.slice(1).join(" ")}
                      </span>
                    </>
                  );
                })()}
              </div>
            </div>
            <div className="card-text">
              <h4>{labels[index]}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lifestyle;
