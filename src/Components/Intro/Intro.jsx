import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import BlueColor from "../../img/bluecolor.png";
import A2 from "../../img/A2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am </span>
          <span>Abbir Ali</span>
          <span>
            Frontend Developer with high level of experience in web development
            and designing, producing the Quality work.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>

        <div className="intro-icons">
          <a href="https://github.com/Abbir-Ali" target="blank">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/abbir.ale/?next=%2F"
            target="blank"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/abbir-ali/" target="blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={A2} alt="" />
        <img src={BlueColor} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{ top: "-4%", left: "67%" }}>
          <FloatingDiv image={Crown} txt1="Software" txt2="Engineer" />
        </div>
        
        <div style={{top:"14rem",left:"140px"}}>
          <FloatingDiv image={thumbup} txt1="Web" txt2="Developer" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
        <div className="blur" style={{background:'#C1F5FF', top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  );
};

export default Intro;
