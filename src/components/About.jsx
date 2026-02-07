import React from "react";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <h3>About Me</h3>
          <p>
            I am a Java Full Stack Developer with a strong foundation in
            frontend and backend development. I enjoy building clean,
            efficient, and user-focused applications.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">🎓 Computer Science</div>
          <div className="card">⚙️ Full Stack Development</div>
          <div className="card">📍 India</div>
        </div>
      </div>
    </section>
  );
}

export default About;
