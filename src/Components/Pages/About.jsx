import React from "react";
import emailjs from "emailjs-com";
import "./about.css";

export default function About({ dark }) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqfw7od",
        "template_0l2wrlm",
        e.target,
        "user_6j62lDRiVFOxh0K7N37kK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={dark ? "container-main-dark" : "container-main"}>
      <div className={dark ? "form-container-dark" : "form-container"}>
        <form
          className={dark ? "contact-form-dark" : "contact-form"}
          onSubmit={sendEmail}
        >
          <h1 style={{ color: "white" }}>Contact US</h1>
          <input
            className="input"
            type="text"
            name="from_name"
            placeholder="name"
          />
          <br />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
          />
          <br />
          <textarea name="message" placeholder="message" />
          <br />
          <input
            type="submit"
            className="btns"
            value="Send"
            onClick={() => {
              alert("Request Send");
            }}
          />
        </form>
      </div>
    </div>
  );
}
