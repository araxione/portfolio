import React from "react";
import "./App.css";
// import ecoHome from "./images/ecopantry/eco.png";
// import byteBroom from "./images/bytebroom/bytebroom.png";
import me from "./images/profile.png";
import separator from "./images/separator.png";

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="intro-content">
        <div className="intro-text">
          <h1>hi, i’m judy.</h1>
          <p className="bigger-text">
            a ux/ui and product designer who creates <b>engaging</b> and{" "}
            <b>accessible</b> solutions from doodled ideas.
          </p>
          <p className="text">
            currently working at atlas power technologies. previously at ubc
            applied science.
          </p>
        </div>
        {/* <div className="intro-pic"> */}
        <img src={me} alt="me" className="intro-pic" />
        {/* </div> */}
      </div>
      <img src={separator} alt="separator" className="separator" />

      <section className="portfolio-work">
        <h2>check out my work.</h2>
        <br />
        <div className="work-grid">
          <div className="work-item">
            <a href="/ecopantry" className="work-link">
              <img
                // src={ecoHome}
                alt="EcoPantry Thumbnail"
                className="work-image"
              />
              <div className="work-details">
                <p className="project-header">UXathon 2023: Runner-up</p>
                <h3>EcoPantry</h3>
                <p>
                  Helping users reduce food waste by organizing and tracking
                  pantry items efficiently.
                </p>
                <div className="work-tags">
                  <span>UX Design</span>
                  <span>Design System</span>
                </div>
              </div>
            </a>
          </div>

          <div className="work-item">
            <a href="/bytebroom" className="work-link">
              {/* <img src={byteBroom} alt="ByteBroom" className="work-image" /> */}
              <div className="work-details">
                <p className="project-header">Project</p>
                <h3>ByteBroom</h3>
                <p>
                  Simplifying the process of digital organization for better
                  productivity and management.
                </p>

                <div className="work-tags">
                  <span>UX Research</span>
                  <span>UX Design</span>
                </div>
              </div>
            </a>
          </div>

          {/* Add more projects below */}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
