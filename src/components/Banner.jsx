import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const toRotate = ["Software Developer", "AI Enthusiast", "DevOps Engineer"];
    const period = 2000;

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, loopNum, isDeleting]);

  return (
    <section className="banner" id="home" style={{ backgroundColor: '#fef08a', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline" style={{
                    display: 'inline-block',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    transform: 'rotate(-2deg)'
                  }}>
                    Welcome to my Portfolio
                  </span>
                  <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                    Hi! I'm Lucy a{' '}
                    <span className="txt-rotate">
                      <span className="wrap" style={{
                        display: 'inline-block',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '5px 10px',
                        transform: 'rotate(1deg)'
                      }}>
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '2rem',
                    backgroundColor: 'white',
                    padding: '1rem',
                    border: '4px solid black',
                    boxShadow: '8px 8px 0 0 #000'
                  }}>
                    I'm a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
                  </p>
                  <Link to="contact" smooth={true} duration={800}>
                    <Button
                      style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        border: '4px solid black',
                        borderRadius: '0',
                        boxShadow: '8px 8px 0 0 #000',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translate(4px, 4px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.boxShadow = '8px 8px 0 0 #000';
                        e.target.style.transform = 'none';
                      }}
                    >
                      Let's Connect <ArrowRightCircle size={25} />
                    </Button>
                  </Link>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" style={{
                    width: '100%',
                    transform: 'rotate(3deg)'
                  }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}