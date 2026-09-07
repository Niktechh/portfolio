import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.png";
import ecom from "../assets/img/ecom.png";
import dogoos from "../assets/img/doggos.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png"; 
import projImg8 from "../assets/img/project-img8.png";  
import chatkro from "../assets/img/Chatkro.png";  
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
  {
    title: "ChatKro",
    description:
      "A real-time chat application built with the MERN stack, featuring JWT authentication, Socket.IO messaging, image sharing, online user status, and cloud-based image storage.",
    imgUrl: chatkro,
    projectUrl: "https://client-six-tawny-77.vercel.app/",
  },
  {
    title: "Doggos of IPU",
    description:
      "A team-based web project where I contributed to the home page, gallery, team management section, footer, loading animations, and other interactive UI components.",
    imgUrl: dogoos,
    projectUrl: "https://doggos-of-ipu.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce application focused on building a functional shopping experience with a responsive interface and modern web development practices.",
    imgUrl: ecom,
    projectUrl: "https://ecommerce-six-gold-57.vercel.app/",
  },
  {
    title: "Spylt Clone",
    description:
      "A frontend recreation of the Spylt website focused on modern UI/UX, smooth animations, interactive sections, and visually engaging web experiences.",
    imgUrl: projImg8,
    projectUrl: "https://spylt-clone-chi.vercel.app/",
  },
  {
    title: "GTA VI Website",
    description:
      "A fan-made GTA VI themed website built with React, showcasing creative UI design, immersive animations, interactive sections, and modern frontend techniques.",
    imgUrl: projImg6,
    projectUrl: "https://gta-iv-ashy.vercel.app/",
  },
  {
    title: "Ochi Clone",
    description:
      "A recreation of the Ochi website built with React, featuring GSAP animations, Locomotive Scroll, smooth transitions, and a highly interactive frontend experience.",
    imgUrl: projImg3,
    projectUrl: "https://ochi-website-ebon.vercel.app/",
  },
];

const projects2 = [
  {
    title: "Golf Sidcup Website Clone",
    description:
      "A recreation of the Golf Sidcup website built with HTML, CSS, and JavaScript, focusing on smooth animations, interactive elements, and modern frontend design.",
    imgUrl: projImg2,
    projectUrl: "https://dapper-kringle-f7214a.netlify.app/",
  },
  {
    title: "3D Animation Website",
    description:
      "An interactive frontend project built with HTML, CSS, and JavaScript, featuring canvas-based visuals, 3D effects, animations, and immersive user interactions.",
    imgUrl: projImg1,
    projectUrl: "https://3dwebsiteee.netlify.app/",
  },
  {
    title: "Gethyped Clone",
    description:
      "A frontend recreation of the award-nominated Gethyped website, focusing on creative layouts, smooth animations, interactive elements, and modern UI/UX.",
    imgUrl: projImg7,
    projectUrl: "https://gethyped-clone.vercel.app/",
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
                <p></p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
