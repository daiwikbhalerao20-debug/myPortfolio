import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <br /> 
          Daiwik Bhalerao
        </h1>
        <h2>Java Full Stack Developer</h2>
        <p>
          I build scalable and maintainable web applications using
          React, Java, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" className="btn secondary" target="_blank" rel="noopener noreferrer">View Resume</a>

        </div>
      </div>

      <div className="hero-image">
        <img src="https://i.pinimg.com/736x/67/e8/01/67e8014905776957b3f672b638126c3a.jpg" alt="Developer illustration" />
      </div>
    </section>
  );
}

export default Hero;
