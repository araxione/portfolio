import React from "react";
import "./App.css";
import ecoHome from "./images/ecopantry/eco.png"
import byteBroom from "./images/bytebroom/bytebroom.png";
import me from "./images/homepage/profile.png";
import separator from "./images/homepage/separator.png";
import atlas from "./images/atlas/atlas.png";
import scarp from "./images/scarp/scarp.png";
import Footer from "./Footer";


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
        <img src={me} alt="me" className="intro-pic" />
      </div>
      <img src={separator} alt="separator" className="separator-design" />

      <section className="portfolio-work">
        <h2>check out my work.</h2>
        <div className="work-grid">
          <div className="work-item">
            <a href="/atlas" className="work-link">
              <img
                src={atlas}
                alt="Atlas Thumbnail"
                className="work-image"
              />
              <div className="work-details">
                <p className="project-header">Atlas Power technologies: Internship</p>
                <h3>Energy System Storage</h3>
                <p>
                🔒 This product is under an NDA.
                </p>
                <div className="work-tags">
                  <span>UX/UI Design</span>
                  <span>User Research</span>
                </div>
              </div>
            </a>
          </div>
          <div className="work-item">
            <a href="/scarp" className="work-link">
              <img
                src={scarp}
                alt="SCARP Thumbnail"
                className="work-image"
              />
              <div className="work-details">
                <p className="project-header">UBC Faculty of Applied Science: Internship</p>
                <h3>SCARP Intranet</h3>
                <p>
                Elevating communication for seamless collaboration.
                </p>
                <div className="work-tags">
                  <span>UX/UI Design</span>
                  <span>User Research</span>
                </div>
              </div>
            </a>
          </div>
          <div className="work-item">
            <a href="/ecopantry" className="work-link">
              <img
                src={ecoHome}
                alt="EcoPantry Thumbnail"
                className="work-image"
              />
              <div className="work-details">
                <p className="project-header">UXathon 2023: Hackathon Runner-up</p>
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
              <img src={byteBroom} alt="ByteBroom" className="work-image" />
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
      <br/>
      <Footer/>
    </div>
  );
};

export default Portfolio;
