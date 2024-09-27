// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/resume">Resume</a>
        <a href="/playground">Playground</a>
      </nav>
    </header>
  );
};

export default Header;
