import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:abbirali113@gmail.com" className="email-link">
          <span>abbirali113@gmail.com</span>
        </a>
        <div className="social-links">
          <a
            href="https://www.instagram.com/abbir.ale/"
            target="blank"
            className="social-link"
          >
            <Insta color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="blank"
            className="social-link"
          >
            <LinkedIn color="white" size="3rem" />
          </a>
          <a
            href="https://github.com/Abbir-Ali"
            target="blank"
            className="social-link"
          >
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
