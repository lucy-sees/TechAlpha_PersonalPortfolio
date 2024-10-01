import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  useEffect(() => {
    // Create script element for the Ko-fi widget
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://storage.ko-fi.com/cdn/widget/Widget_2.js';
    script1.async = true;

    // Append the script to the body
    document.body.appendChild(script1);

    // Create inline script element for initializing the Ko-fi widget
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.innerHTML = "kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'X8X01453CY');kofiwidget2.draw();";

    // Append the inline script to the body
    document.body.appendChild(script2);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="neubrutalist-logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lucy-wanjiru-mwangi" className="neubrutalist-social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
              </a>
              <a href="https://github.com/lucy-sees" className="neubrutalist-social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" color="#181717" />
              </a>
              <a href="https://www.instagram.com/___the_lone_wolf__/" className="neubrutalist-social-icon">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
              </a>
              <a href="https://twitter.com/lucy_w_mwangi" className="neubrutalist-social-icon">
                <FontAwesomeIcon icon={faXTwitter} size="2x" color="#000000" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
            <p>Made with love by Lucy ♥</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div id="kofi-container" style={{ display: 'inline-block', marginTop: '20px' }}>
              {/* Ko-fi widget will be rendered here */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};