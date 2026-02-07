import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h3>Projects</h3>

        <div className="projects-grid">
          <div className="project-card">
            <h4>Movie Search App</h4>
            <p>React app using OMDb REST API.</p>
            <span>React • API • CSS</span>
          </div>

          <div className="project-card">
            <h4>Recipe Book App</h4>
            <p>Responsive Recipe Management Application.</p>
            <span>React • CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
