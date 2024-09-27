// src/components/TableOfContents.js
import React from "react";
import "./TableOfContents.css";

const TableOfContents = () => {
  return (
    <nav className="toc">
      <h2>TABLE OF CONTENTS</h2>
      <ul>
        <li>
          <a href="#problem">1. The problem</a>
        </li>
        <li>
          <a href="#background">2. The background</a>
        </li>
        <li>
          <a href="#sustainability">
            3. How might we reduce food waste to ensure a more sustainable
            environment?
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TableOfContents;
