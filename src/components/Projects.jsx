import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { LogoCard } from "./LogoCard";
import logoImg1 from "../assets/img/logo-img1.png";
import logoImg2 from "../assets/img/logo-img2.png";
import logoImg3 from "../assets/img/logo-img3.png";
import logoImg4 from "../assets/img/logo-img4.png";
import logoImg5 from "../assets/img/logo-img5.png";
import logoImg6 from "../assets/img/logo-img6.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    // Data for projects
    const projects = [
        {
            title: "Metus",
            specialization: "Front End Dev",
            year: 2023,
            description: "A startup agency website.",
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
            imgUrl: projImg1,
            liveUrl: 'https://metus.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/Metus'
        },
        {
            title: "Ninja Reader",
            specialization: "Front End Dev",
            year: 2024,
            description: "A dynamic online platform offering a vast selection of books across various genres.",
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
            imgUrl: projImg2,
            liveUrl: 'https://ninja-reader.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/NinjaReader'
        },
        {
            title: "HuruDevs",
            specialization: "Full Stack Dev",
            year: 2024,
            description: "A collection of awesome UI templates.",
            technologies: ['React.js', 'Node.js', 'Express.js', 'CSS', 'Vercel'],
            imgUrl: projImg3,
            liveUrl: 'https://hurudevs.tech',
            sourceUrl: 'https://github.com/lucy-sees/HuruDevsTech'
        },
        {
            title: "Wanjiru",
            specialization: "Front End Dev",
            year: 2024,
            description: "A photographer website that showcases the work of a professional photographer.",
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
            imgUrl: projImg4,
            liveUrl: 'https://wanjiru.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/Wanjiru'
        },
        {
            title: "Webforlio",
            specialization: 'Front End Dev',
            year: 2024,
            description: "A personal portfolio that showcases a web developer's skills and work.",
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
            imgUrl: projImg5,
            liveUrl: 'https://webforlio-lucysees-projects.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/Webforlio'
        },
        {
            title: "BlueBank",
            specialization: 'Front End Dev',
            year: 2024,
            description: "A bank website that showcases the work and services offered by a professional bank.",
            technologies: ['ReactJS', 'NextJS', 'JavaScript', 'Tailwind', 'Vercel'],
            imgUrl: projImg6,
            liveUrl: 'https://blue-bank-pied.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/BlueBank'
        }
    ];

    // Data for logos
    const logos = [
        {
            title: "Metus",
            specialization: "Logo Design",
            year: 2023,
            description: "A startup agency website.",
            imgUrl: logoImg1,
            liveUrl: 'https://metus.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/Metus'
        },
        {
            title: "Ninja Reader",
            specialization: "Logo Design",
            year: 2024,
            description: "A dynamic online platform offering a vast selection of books across various genres.",
            imgUrl: logoImg2,
            liveUrl: 'https://ninja-reader.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/NinjaReader'
        },
        {
            title: "HuruDevs",
            specialization: "Logo Design",
            year: 2024,
            description: "A collection of awesome UI templates.",
            imgUrl: logoImg3,
            liveUrl: 'https://hurudevs.tech',
            sourceUrl: 'https://github.com/lucy-sees/HuruDevsTech'
        },
        {
            title: "Wanjiru",
            specialization: "Logo Design",
            year: 2024,
            description: "A photographer website that showcases the work of a professional photographer.",
            imgUrl: logoImg4,
            liveUrl: 'https://wanjiru.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/Wanjiru'
        },
        {
            title: "Webforlio",
            specialization: 'Logo Design',
            year: 2024,
            description: "A personal portfolio that showcases a web developer's skills and work.",
            imgUrl: logoImg5,
            liveUrl: 'https://webforlio.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/Webforlio'
        },
        {
            title: "BlueBank",
            specialization: 'Logo Design',
            year: 2024,
            description: "A bank website that showcases the work and services offered by a professional bank.",
            imgUrl: logoImg6,
            liveUrl: 'https://blue-bank-pied.vercel.app/',
            sourceUrl: 'https://github.com/lucy-sees/BlueBank'
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Coding Projects</h2>
                                    <p>
                                        Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Coding Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Logo Designs</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Figma Designs</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {logos.map((logo, index) => (
                                                        <LogoCard key={index} {...logo} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {/* Implement the Figma designs */}
                                                    <p>Content for Figma designs goes here...</p>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
