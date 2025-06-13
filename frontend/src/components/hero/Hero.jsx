import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="hero-content">
          <p className="main-txt">
            Book an appointment with <br />
            <span className="highlight-lifestyle">lifestyle medicine </span>
            <span className="highlight-experts">experts</span>
          </p>

          <div className="sub-txt">
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
