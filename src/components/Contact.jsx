import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://formspree.io/f/mgebqvqd" method="post" id="form">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" maxLength={30} id="fname" name="firstname"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" maxLength={30}  id="lname" name="lastname"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name="telephone"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Write your message here" maxLength={500} name="user-message" ></textarea>
                      <button type="submit" className="btn-contact"><span className="button-text">Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
