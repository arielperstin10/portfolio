import React, { useState } from "react";
import "./Services.css";
import themePatten from "../../assets/theme_pattern.svg";
import arrowIcon from "./../../assets/arrow_icon.svg";
import servicesData from "../../assets/services_data";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={themePatten} alt="" />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div
                className="services-readmore"
                onClick={() => openModal(service)}
              >
                <p>Read More</p>
                <img src={arrowIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedService?.s_name}</h2>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="service-number">{selectedService?.s_no}</div>
              <h3>Service Overview</h3>
              <p className="service-description">{selectedService?.s_desc}</p>

              <h3>What's Included</h3>
              <ul className="service-features">
                {selectedService?.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              {selectedService?.technologies &&
                selectedService.technologies.length > 0 && (
                  <>
                    <h3>Technologies & Tools</h3>
                    <div className="service-technologies">
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Services;
