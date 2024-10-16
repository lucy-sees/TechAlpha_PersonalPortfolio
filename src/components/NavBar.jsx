import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={`neubrutalist-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="/" className="neubrutalist-brand">
            <img src={logo} alt="Logo" className="neubrutalist-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="neubrutalist-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={`neubrutalist-link ${
                  activeLink === "home" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`neubrutalist-link ${
                  activeLink === "skills" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`neubrutalist-link ${
                  activeLink === "projects" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
             <div className="social-icon">
                <a href="https://www.linkedin.com/in/lucy-wanjiru-mwangi" className="neubrutalist-social-icon">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
                </a>
                <a href="https://github.com/lucy-sees" className="neubrutalist-social-icon">
                  <FontAwesomeIcon icon={faGithub} size="2x" color="#181717" />
                </a>
                <a href="https://medium.com/@lucywanjirumwangi/" className="neubrutalist-social-icon">
                  <FontAwesomeIcon icon={faMedium} size="2x" color="#E4405F" />
                </a>
                <a href="https://twitter.com/lucy_w_mwangi" className="neubrutalist-social-icon">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" color="#00000" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="neubrutalist-button">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
