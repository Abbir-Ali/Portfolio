import React, { useContext } from "react";
import "./Contact.css";
import EmailForm from "./EmailForm";
import { DarkModeContext } from "../../DarkModeContext";

const Contact = () => {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="contact-container" id="contact-container">
        <div className="c-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "black" }}>
              Get in Touch
            </span>
            <span >
              Contact Me
            </span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <EmailForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
