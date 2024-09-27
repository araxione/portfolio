import React from "react";
import { NavLink } from "react-router-dom"; 
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">jl.</div>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link" exact activeClassName="active">
            work
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="nav-link" activeClassName="active">
            resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playground"
            className="nav-link"
            activeClassName="active"
          >
            playground
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
