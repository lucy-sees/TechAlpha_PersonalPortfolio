import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

// Import logos for each skill
import ReactLogo from '../assets/img/skills/ReactJS.svg';
import NextLogo from '../assets/img/skills/NextJS.svg';
import PythonLogo from '../assets/img/skills/Python.svg';
import DockerLogo from '../assets/img/skills/Docker.svg';
import NodeLogo from '../assets/img/skills/NodeJS.svg';
import TailwindLogo from '../assets/img/skills/Tailwind.svg';
import BootstrapLogo from '../assets/img/skills/Bootstrap.svg';
import PostgresLogo from '../assets/img/skills/Postgres.svg';
import MongoLogo from '../assets/img/skills/MongoDB.svg';
import AwsLogo from '../assets/img/skills/AWS.svg';
import AzureLogo from '../assets/img/skills/Azure.svg';
import GoogleCloudLogo from '../assets/img/skills/GoogleCloud.svg';
import GithubLogo from '../assets/img/skills/Github.svg';
import HtmlLogo from '../assets/img/skills/HTML.svg';
import CssLogo from '../assets/img/skills/CSS.svg';
import JsLogo from '../assets/img/skills/JavaScript.svg';
import PrismaLogo from '../assets/img/skills/Prisma.svg';
import GitLogo from '../assets/img/skills/Git.svg';
import FigmaLogo from '../assets/img/skills/Figma.svg';
import ExpressLogo from '../assets/img/skills/ExpressJS.svg';

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
                As a Developer, I have equipped myself with valuable skills.<br />
                Here they are and their varying strengths.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="neubrutalist-carousel"
                autoPlay={true} // Enable auto-scroll
                autoPlaySpeed={3000} // Scroll speed (3 seconds)
                transitionDuration={800} // Smooth transition
                removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on smaller devices
              >
                {/* React.js */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar react-dev">
                    <div className="neubrutalist-progress-text">90%</div>
                  </div>
                  <img src={ReactLogo} alt="React.js" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">React.js</h5>
                </div>

                {/* Next.js */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar next-dev">
                    <div className="neubrutalist-progress-text">85%</div>
                  </div>
                  <img src={NextLogo} alt="Next.js" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Next.js</h5>
                </div>

                {/* Python */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar python-dev">
                    <div className="neubrutalist-progress-text">70%</div>
                  </div>
                  <img src={PythonLogo} alt="Python" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Python</h5>
                </div>

                {/* Docker */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar docker-dev">
                    <div className="neubrutalist-progress-text">50%</div>
                  </div>
                  <img src={DockerLogo} alt="Docker" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Docker</h5>
                </div>

                {/* Node.js */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar node-dev">
                    <div className="neubrutalist-progress-text">80%</div>
                  </div>
                  <img src={NodeLogo} alt="Node.js" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Node.js</h5>
                </div>

                {/* Tailwind CSS */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar tailwind-dev">
                    <div className="neubrutalist-progress-text">75%</div>
                  </div>
                  <img src={TailwindLogo} alt="Tailwind CSS" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Tailwind CSS</h5>
                </div>

                {/* Bootstrap */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar bootstrap-dev">
                    <div className="neubrutalist-progress-text">90%</div>
                  </div>
                  <img src={BootstrapLogo} alt="Bootstrap" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Bootstrap</h5>
                </div>

                {/* Express */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar postgres-dev">
                    <div className="neubrutalist-progress-text">60%</div>
                  </div>
                  <img src={ExpressLogo} alt="Express" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Express</h5>
                </div>

                {/* PostgreSQL */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar postgres-dev">
                    <div className="neubrutalist-progress-text">85%</div>
                  </div>
                  <img src={PostgresLogo} alt="PostgreSQL" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">PostgreSQL</h5>
                </div>

                {/* MongoDB */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar mongo-dev">
                    <div className="neubrutalist-progress-text">80%</div>
                  </div>
                  <img src={MongoLogo} alt="MongoDB" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">MongoDB</h5>
                </div>

                {/* AWS */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar aws-dev">
                    <div className="neubrutalist-progress-text">60%</div>
                  </div>
                  <img src={AwsLogo} alt="AWS" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">AWS</h5>
                </div>

                {/* Azure */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar azure-dev">
                    <div className="neubrutalist-progress-text">65%</div>
                  </div>
                  <img src={AzureLogo} alt="Azure" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Azure</h5>
                </div>

                {/* Google Cloud */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar google-cloud-dev">
                    <div className="neubrutalist-progress-text">50%</div>
                  </div>
                  <img src={GoogleCloudLogo} alt="Google Cloud" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Google Cloud</h5>
                </div>

                {/* GitHub */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar github-dev">
                    <div className="neubrutalist-progress-text">100%</div>
                  </div>
                  <img src={GithubLogo} alt="GitHub" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">GitHub</h5>
                </div>

                {/* HTML */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar html-dev">
                    <div className="neubrutalist-progress-text">95%</div>
                  </div>
                  <img src={HtmlLogo} alt="HTML" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">HTML</h5>
                </div>

                {/* CSS */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar css-dev">
                    <div className="neubrutalist-progress-text">95%</div>
                  </div>
                  <img src={CssLogo} alt="CSS" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">CSS</h5>
                </div>

                {/* JavaScript */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar js-dev">
                    <div className="neubrutalist-progress-text">90%</div>
                  </div>
                  <img src={JsLogo} alt="JavaScript" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">JavaScript</h5>
                </div>

                {/* Prisma */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar prisma-dev">
                    <div className="neubrutalist-progress-text">85%</div>
                  </div>
                  <img src={PrismaLogo} alt="Prisma" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Prisma</h5>
                </div>

                {/* Git */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar git-dev">
                    <div className="neubrutalist-progress-text">95%</div>
                  </div>
                  <img src={GitLogo} alt="Git" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Git</h5>
                </div>

                {/* Figma */}
                <div className="neubrutalist-item">
                  <div className="neubrutalist-progress-bar figma-dev">
                    <div className="neubrutalist-progress-text">90%</div>
                  </div>
                  <img src={FigmaLogo} alt="Figma" className="neubrutalist-skill-logo" />
                  <h5 className="neubrutalist-skill-title">Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};