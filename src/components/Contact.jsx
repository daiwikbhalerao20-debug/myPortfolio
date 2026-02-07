import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        
        {/* LEFT */}
        <div className="contact-text">
          <h3>Contact</h3>
          <p>Let’s connect and build something great.</p>
        </div>

        {/* RIGHT */}
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
