import React, { useState } from "react";
import "./MyWork.css";
import themePattern from "../../assets/theme_pattern.svg";
import myWorkData from "../../assets/mywork_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedWork(null);
  };

  const openGitHub = () => {
    window.open(
      "https://github.com/arielperstin10",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="mywork-container">
        {myWorkData.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              alt=""
              onClick={() => openModal(work)}
            />
          );
        })}
      </div>
      <div className="mywork-showmore" onClick={openGitHub}>
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedWork?.w_name}</h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="work-number">Project {selectedWork?.w_no}</div>
              <div className="work-image">
                <img src={selectedWork?.w_img} alt={selectedWork?.w_name} />
              </div>

              <h3>Project Overview</h3>
              <p className="work-description">{selectedWork?.w_desc}</p>

              <h3>Key Features</h3>
              <ul className="work-features">
                {selectedWork?.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              {selectedWork?.technologies &&
                selectedWork.technologies.length > 0 && (
                  <>
                    <h3>Technologies Used</h3>
                    <div className="work-technologies">
                      {selectedWork.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}

              <div className="work-links">
                <a
                  href={selectedWork?.githubUrl}
                  className="work-link github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Code</span>
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
