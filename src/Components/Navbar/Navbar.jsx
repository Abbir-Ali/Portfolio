import React from "react";
import "./Navbar.css";
import logo from "../../img/AB_logo.png";
import { Toogle } from "../Toogle/Toogle";
import { Link } from "react-scroll";
import Portfolio from "../Portfolio/Portfolio";


const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to='Intro'
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to='Experience'
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to='Testimonials'
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link 
          spy={true}
          to='contact-container'
          smooth={true}
          activeClass="activeClass"
        >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
