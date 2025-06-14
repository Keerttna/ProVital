import React from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/search-bar/search-icon.svg";
import locationIcon from "../../assets/search-bar/location-icon.svg";
import insuranceIcon from "../../assets/search-bar/health-card.svg";
import findIcon from "../../assets/search-bar/find-icon.svg";

const SearchBar = () => {
  return (
    <div className="search-box">
      <div className="input-group">
        <img src={searchIcon} alt="icon" className="input-icon" />
        <input type="text" placeholder="Condition, procedure, speciality..." />
      </div>

      <div className="input-group">
        <img src={locationIcon} alt="icon" className="input-icon" />
        <input type="text" placeholder="City, state, or zipcode" />
      </div>

      <div className="input-group">
        <img src={insuranceIcon} alt="icon" className="input-icon" />
        <input type="text" placeholder="Insurance carrier" />
      </div>

      <button className="find-button">
        <img src={findIcon} alt="search" className="button-icon" />
        Find now
      </button>
    </div>
  );
};

export default SearchBar;
