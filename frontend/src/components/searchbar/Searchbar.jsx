import React from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/search-bar/search-icon.png";
import locationIcon from "../../assets/search-bar/location-icon.png";
import insuranceIcon from "../../assets/search-bar/insurance-icon.png"; 

const SearchBar = () => {
  return (
    <div className="search-box">
      <div className="input-group">
        <img src={searchIcon} alt="icon" className="input-icon" />
        <input type="text" placeholder="Condition, procedure, speciality..." />
      </div>

      <div className="input-group">
        <img src={locationIcon} alt="icon" className="input-icon" />
        <input type="text" placeholder="Location" />
      </div>

      <div className="input-group">
        <img src={insuranceIcon} alt="icon" className="input-icon" />
        <input type="text" placeholder="Insurance carrier" />
      </div>

      <button className="find-button">Find</button>
    </div>
  );
};

export default SearchBar;
