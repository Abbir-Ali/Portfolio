import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Moboroid from "../../img/moboroid.png";
import Facebook from "../../img/Facebook.png";
import Renegade from "../../img/renegade.jpeg";

const Works = () => {
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span>Works For All These !</span>
        <span>Brand & Clients</span>
        <span>
          I've collaborated with diverse international clients, specializing in
          WordPress development. With a knack for custom coding, I've crafted
          bespoke websites and provided meticulous bug fixes. Prior to this, I
          honed my professional demeanor at Moboride, a software house in Mirpur
          AJK. Currently, I'm embarking on a new chapter as an intern at
          Renegade Furniture Group, a US-based firm in Islamabad, Pakistan, where I'm
          gaining invaluable experience in team dynamics and real-world project
          execution.
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img className="Renegade" src={Renegade} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Moboroid} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* BACKGROUND CIRCLE */}
        

        <div className="w-bgCircle blueCircle"></div>
        <div className="w-bgCircle yellowCircle"></div>
       
      </div>
    </div>
  );
};

export default Works;
