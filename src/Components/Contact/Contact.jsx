import React from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import gitIcon from "../../assets/github_icon.png";
import linkedinIcon from "../../assets/linkedin_icon.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Open to exciting new projects and collaborations...</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" /> <p>arielperstin10@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" /> <p>+972-54-8019-105</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" /> <p>Beer Sheva, Israel</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://github.com/arielperstin10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/ariel-perstin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
