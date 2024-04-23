import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}

      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          I Deliver web development and designing services utilizing modern,
          <br />
          reliable languages, and frameworks such as JavaScript, React.js, and
          advanced UI/UX design principles.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right Side */}
      <div className="cards">
        <div style={{ left: "10rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Canva, Photoshop "}
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "10rem", left: "-3rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTMl, CSS, JavaScript, Reactjs"}
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "11rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Designing intuitive interfaces that elevate user experiences with precision"
            }
          />
        </div>
        <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
      </div>
    </div>
  );
};

export default Services;
