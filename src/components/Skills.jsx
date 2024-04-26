import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                      <p>As a Developer I have equipped myself with some valuable skills.<br></br> Here they are and their varying strengths.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div class="progress-bar web-dev">
                                  <div class="progress-text">95%</div>
                                </div>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <div class="progress-bar brand-d">
                                  <div class="progress-text">80%</div>
                                </div>
                                <h5>Brand Design</h5>
                            </div>
                            <div className="item">
                                <div class="progress-bar logo-des">
                                  <div class="progress-text">90%</div>
                                </div>
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <div class="progress-bar ui-ux">
                                  <div class="progress-text">95%</div>
                                </div>
                                <h5>UI/UX</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
