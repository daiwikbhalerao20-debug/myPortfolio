import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">MyPortfolio</h2>

        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
