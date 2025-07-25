import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import profileImg from "../../assets/profile_img.jpeg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Experienced in Java, Python, C++, with a solid understanding of
              data structures, algorithms, and databases.
            </p>
            <p>
              Looking to grow in a professional environment and contribute to
              backend systems and software projects.
            </p>
            <p>
              Seeking a junior role in software engineering or backend
              development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>FastAPI</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>C++</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>96</h1>
            <p>GPA</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5</h1>
            <p>TECHNOLOGIES LEARNED</p>
        </div>
      </div>
    </div>
  );
};
