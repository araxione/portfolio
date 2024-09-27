import React, { useState, useEffect } from "react";
import "./MobileNavigation.css";

const MobileNavigation = () => {
  const [currentSection, setCurrentSection] = useState("");

  const sections = [
    "Introduction",
    "Solution",
    "Research",
    "Design",
    "Prototype",
    "Conclusion",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const current = sections.find((section) => {
        const element = document.getElementById(section.toLowerCase());
        return (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        );
      });
      setCurrentSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="mobile-navigation-container">
      <div className="mobile-nav-sections">
        {sections.map((section) => (
          <a
            href={`#${section.toLowerCase()}`}
            key={section}
            className={`nav-item ${currentSection === section ? "active" : ""}`}
          >
            {section}
          </a>
        ))}
      </div>
      <div className="current-section-container">
        {currentSection && (
          <div className="current-section">
            {currentSection}
            <a href="#top" className="back-to-top">
              Back to top
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavigation;
