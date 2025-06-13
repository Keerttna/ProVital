import React, { useState } from "react";
import "./Navbar.css";
import logoIcon from "../../assets/logo-cp.svg";
import hamburgerIcon from "../../assets/hamburger-icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="logo">
          <img src={logoIcon} alt="logo-icon" />
          ProVital
        </a>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src={hamburgerIcon} alt="hamburger icon" />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#">List your practice</a></li>
            <li><a href="#">For Employers</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Login / Signup</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
