import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
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
              <a
                href="https://www.linkedin.com/in/lucy-wanjiru-mwangi"
                className="neubrutalist-social-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
              </a>
              <a
                href="https://github.com/lucy-sees"
                className="neubrutalist-social-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" color="#181717" />
              </a>
              <a
                href="https://www.instagram.com/___the_lone_wolf__/"
                className="neubrutalist-social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
              </a>
              <a
                href="https://twitter.com/lucy_w_mwangi"
                className="neubrutalist-social-icon"
              >
                <FontAwesomeIcon icon={faXTwitter} size="2x" color="#00000" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
            <p>Made with love by Lucy ♥</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
