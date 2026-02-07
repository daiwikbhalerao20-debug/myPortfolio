import React from "react";

function Skills() {
  return (
    <section id="skills" className="section gray">
      <div className="container">
        <h3>Skills</h3>

        <div className="skills-grid">
          <div className="skill-card">
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h4>Backend</h4>
            <p>Java, REST APIs</p>
          </div>

          <div className="skill-card">
            <h4>Database & Tools</h4>
            <p>MySQL, GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
