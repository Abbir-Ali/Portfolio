import React from "react";
import "./Contact.css";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="c-left">
          <div className="awesome">
            <span>Get in Touch</span>
            <span>Contact Me</span>
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
