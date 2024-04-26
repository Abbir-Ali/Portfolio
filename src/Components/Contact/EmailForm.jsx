import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u0ooscw",
        "template_eaifxft",
        form.current,
        "QFmCGaTA66CJqqd_a"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success(
            "Thanks for your Message. I will contact you back shortly."
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" className="user" placeholder="Name" />
      <input
        type="email"
        name="user_email"
        className="user"
        placeholder="Email"
      />
      <textarea
        name="message"
        className="user"
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <input type="submit" value="Send" className="button" />
      <div
        className="blur c-blur1"
        style={{ background: "var(--purple)" }}
      ></div>
    </form>
  );
};

export default EmailForm;
