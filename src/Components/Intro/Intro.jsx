import React, { useContext } from "react";
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
import { DarkModeContext } from "../../DarkModeContext";
import { motion } from "framer-motion";

const transition = { duration: 2, type: "spring" };

const Intro = () => {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "black" }}>
            Hey! I Am{" "}
          </span>
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
        <motion.img
          initial={{ left: "-36%" }}
          animate={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          animate={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "67%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Software" txt2="Engineer" />
        </motion.div>

        <motion.div
          initial={{ top: "14rem", left: "3rem" }}
          animate={{ left: "5rem" }}
          transition={transition}
          style={{ top: "14rem", left: "200px" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Web" txt2="Developer" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
