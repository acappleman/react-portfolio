import React from 'react';

function Footer(props) {
    return <footer>
        <section className="contact-me" id="contact">
          <h3>Contact Me</h3>
          <div>
            <address>
              <a href="tel:+14074689187">407.468.9187</a>
              <a href="mailto:amanda.cappleman@gmail.com"
                >amanda.cappleman@gmail.com</a
              >
              <a href="https://github.com/acappleman">GitHub</a>
              <a href="https://www.linkedin.com/in/amanda-cappleman-ba8b60250/"
                >Linkedin</a
              >
            </address>
          </div>
        </section>
    </footer>;
}

export default Footer;