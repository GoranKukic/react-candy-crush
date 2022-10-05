/* eslint-disable prettier/prettier */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Would you like to work with me? Awesome!</p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              attribute="netlify-honeypot='bot-field'"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <input
                className="form-input input"
                type="text"
                name="name"
                required
                placeholder="Name"
              />

              <input required type="email" name="email" className=" input" placeholder="Email" />

              <textarea required name="message" rows="6" className=" input" placeholder="Message" />

              <button className="cta-btn cta-btn--hero" type="submit">
                Send
              </button>
            </form>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href="mailto:goranikukic@gmail.com"
            >
              Let`s Talk
            </a> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
