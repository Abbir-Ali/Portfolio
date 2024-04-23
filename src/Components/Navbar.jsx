import React from "react";
import "./Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Abbir Ali</div>
        <span>Toogle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <button className="button n-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
