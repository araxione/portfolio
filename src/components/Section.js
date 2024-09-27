// src/components/Section.js
import React from "react";
import "./Section.css";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <h3>{title}</h3>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
