import React from "react";

function Resume() {
  return (
    <section id="resume" className="section dark">
      <div className="container center">
        <h3>Interested in my profile?</h3>
        <a href="/resume.pdf" className="btn primary" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
