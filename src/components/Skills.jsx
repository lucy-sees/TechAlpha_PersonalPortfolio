import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="neubrutalist-skills" id="skills">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="neubrutalist-skills-box">
              <h2 className="neubrutalist-heading">Skills</h2>
              <p className="neubrutalist-description">
                As a Developer I have equipped myself with some valuable skills.<br />
                Here they are and their varying strengths.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="neubrutalist-carousel"
              >
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar web-dev">
                    <div className="neubrutalist-progress-text">95%</div>
                  </div>
                  <h5 className="neubrutalist-skill-title">Web Development</h5>
                </div>
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar brand-d">
                    <div className="neubrutalist-progress-text">80%</div>
                  </div>
                  <h5 className="neubrutalist-skill-title">Brand Design</h5>
                </div>
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar logo-des">
                    <div className="neubrutalist-progress-text">90%</div>
                  </div>
                  <h5 className="neubrutalist-skill-title">Logo Design</h5>
                </div>
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar ui-ux">
                    <div className="neubrutalist-progress-text">95%</div>
                  </div>
                  <h5 className="neubrutalist-skill-title">UI/UX</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};