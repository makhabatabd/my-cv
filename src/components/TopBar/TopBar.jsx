import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TopBar.css";
import Typical from "react-typical";

const TopBar = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="
            #"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="
            #"
              >
                <i className="bi bi-google"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Makhabat</span>
            </span>
          </div>
          <div className="profile-details-role">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Software Developer",
                  1000,
                  "Front-End Developer",
                  1000,
                  "Tester",
                  1000,
                  "React Developer",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              The master of your program!!!
            </span>
          </div>
          <div className="profile-options">
            <a href="makhabat.pdf" download="Makhabat's CV makhabat.pdf">
              <button className="btn highlighted-btn download">
                Download the CV
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
