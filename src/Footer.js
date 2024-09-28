import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2024 Judy Lee</p>
        <p>made with love and a sprinkle of magic 💌</p>
      </div>
      <div className="footer-right">
        <a href="mailto:lml.judyy@gmail.com" className="icon">
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/judylml"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
   
    </footer>
  );
};

export default Footer;
