import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/Snapshoot-Portfolio-1.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Metus",
      specialization: "Front End Dev",
      year: 2023,
      description: "A startup agency website.",
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
      imgUrl: projImg1,
      liveUrl: 'https://example.com/metus-live',
      sourceUrl: 'https://github.com/username/metus-source'
    },
    {
      title: "Ninja Reader",
      specialization: "Front End Dev",
      year: 2024,
      description: "A dynamic online platform offering a vast selection of books across various genres.",
      technologies: ['html', 'css','javaScript', 'Bootstrap', 'Vercel'],
      imgUrl: projImg2,
      liveUrl: 'https://example.com/metus-live',
      sourceUrl: 'https://github.com/lucy-sees/NinjaReader'
    },
    {
      title: "HuruDevs",
      specialization: "Full Stack Dev",
      year: 2024,
      description: "A collection of awesome UI templates.",
      technologies: ['React.js', 'Node.js', 'Express.js', 'css', 'Vercel'],
      imgUrl: projImg3,
      liveUrl: 'https://example.com/metus-live',
      sourceUrl: 'https://github.com/lucy-sees/HuruDevsTech'
    },
    {
      title: "Wanjiru",
      year: 2024,
      specialization: "Front End Dev",
      description: "A photographer website that showcases the work of a professional photographer.",
      technologies: ['html', 'css', 'javaScript', 'Bootstrap', 'Vercel'],
      imgUrl: projImg1,
      liveUrl: 'https://example.com/metus-live',
      sourceUrl: 'https://github.com/lucy-sees/Wanjiru'
    },
    {
      title: "Webforlio",
      specialization2: 'Front End Dev',
      year: 2024,
      description: "A personal portfolio that showcases a web developer's skills and work.",
      technologies: ['html', 'css', 'javaScript', 'Bootstrap', 'Vercel'],
      imgUrl: projImg2,
      liveUrl: 'https://example.com/metus-live',
      sourceUrl: 'https://github.com/lucy-sees/Webforlio'
    },
    {
      title: "BlueBank",
      specialization2: 'Front End Dev',
      year: 2024,
      description: "A bank website that showcases the work and services offered by a professional bank.",
      technologies: ['ReactJS', 'NextJS', 'javaScript', 'Tailwind', 'Vercel'],
      imgUrl: projImg3,
      liveUrl: 'https://example.com/metus-live',
      sourceUrl: 'https://github.com/lucy-sees/BlueBank'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
