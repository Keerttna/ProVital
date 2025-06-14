import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoIcon from "../../assets/logo-cp.svg";
import hamburgerIcon from "../../assets/hamburger-icon.png";
import closeIcon from "../../assets/close-icon.svg";
import dropArrow from "../../assets/dropdown-icon.svg";
import rightArrow from "../../assets/rightArrow.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthTable, setShowAuthTable] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLoginClick = () => {
    setShowAuthTable((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <img
            src={menuOpen ? closeIcon : hamburgerIcon}
            alt="menu toggle icon"
          />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Mobile Auth Table */}
          {!isDesktop && menuOpen && (
            <div className="auth-card mobile">
              <div className="auth-row">
                <span className="role">Doctor</span>
                <a href="#" className="auth-link">Login</a>
                <a href="#" className="auth-link">Sign up</a>
              </div>
              {/* <hr className="divider" /> */}
              <div className="auth-row">
                <span className="role">Patients</span>
                <a href="#" className="auth-link">Login</a>
                <a href="#" className="auth-link">Sign up</a>
              </div>
            </div>
          )}

          <ul>
            <li>
              <a href="#">
                List your practice <img className="arrow" src={rightArrow} alt="→" />
              </a>
            </li>
            <li>
              <a href="#">
                For Employers <img className="arrow" src={rightArrow} alt="→" />
              </a>
            </li>
            <li>
              <a href="#">
                Courses <img className="arrow" src={rightArrow} alt="→" />
              </a>
            </li>
            <li>
              <a href="#">
                Books <img className="arrow" src={rightArrow} alt="→" />
              </a>
            </li>
            <li>
              <a href="#">
                Speakers <img className="arrow" src={rightArrow} alt="→" />
              </a>
            </li>
            <li>
              <a href="#">
                Doctors <img className="arrow" src={rightArrow} alt="→" />
              </a>
            </li>

            {/* Desktop Auth Table */}
            {isDesktop && (
              <li className="login-link" onClick={handleLoginClick}>
                <a href="#">
                  Login / Signup <img className="arrow" src={rightArrow} alt="→" />
                  <img className="arrow-down" src={dropArrow} alt="▼" />
                </a>

                {showAuthTable && (
                  <div className="auth-card desktop">
                    <div className="auth-row">
                      <span className="role">Doctor</span>
                      <a href="#" className="auth-link">Login</a>
                      <a href="#" className="auth-link">Sign up</a>
                    </div>
                    {/* <hr className="divider" /> */}
                    <div className="auth-row">
                      <span className="role">Patients</span>
                      <a href="#" className="auth-link">Login</a>
                      <a href="#" className="auth-link">Sign up</a>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
