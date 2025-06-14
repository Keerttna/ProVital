import React from "react";
import "./Hero.css";
import Navbar from "../navbar/Navbar";
import Searchbar from "../searchbar/Searchbar";
import VerticalCarousel from "../carousel/VerticalCarousel";

const Hero = () => {
  return (
    <header>
      <div className="gradient-box-1"></div>
      <div className="wrapper">
        <Navbar />

        <div className="hero-flex-wrapper">
          <div className="hero-flex">
            <VerticalCarousel />
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
        </div>

        <div className="gradient-box-2"></div>
      </div>

      <Searchbar />
      <div className="gradient-separator" />
    </header>
    
  );
};

export default Hero;
