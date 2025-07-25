import React from "react";
import "./Hero.css";
import profileImg from "../../assets/anime_profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ariel_Perstin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>I'm Ariel Perstin,</span> backend developer
      </h1>
      <p>
        I'm Software Engineering student with a strong interest in backend
        development and software engineering.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={downloadResume}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
