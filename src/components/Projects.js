import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png"; 
import projImg8 from "../assets/img/project-img8.png";  
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "GTA VI Website",
      description: "An imaginary fanbased website of GTA VI using reactjs",
      imgUrl: projImg6,
      projectUrl: "https://gta-iv-ashy.vercel.app/",
    },
    {
      title: "Spylt clone",
      description: "Clone of awwwards winning website",
      imgUrl: projImg8,
      projectUrl: "https://spylt-clone-chi.vercel.app/",
    },
    {
      title: "Ochi clone",
      description: "Clone of ochi website  made using react js include locomotive and gsap usage",
      imgUrl: projImg3,
      projectUrl: "https://ochi-website-ebon.vercel.app/",
    },
    {
      title: "3D Animation Website",
      description: "BUILD USING HTML CSS AND JS invlove canvas",
      imgUrl: projImg1,
      projectUrl: "https://3dwebsiteee.netlify.app/",
    },
    {
      title: "Golf sidcup website Clone",
      description: "BUILD USING HTML CSS AND JS",
      imgUrl: projImg2,
      projectUrl: "https://dapper-kringle-f7214a.netlify.app/",
    },
    {
      title: "Gethyped clone",
      description: "Clone of a awwward website nominee gethyped",
      imgUrl: projImg7,
      projectUrl: "https://gethyped-clone.vercel.app/",
    },
  ];


  const projects2 = [
    {
      title: "AI Powered Crop Yeild Prediction",
      description: "Solve an SIH PS 25044 of 2025 made using react js  'only frontend is my work backend done by ai to reach dashboard (enter random email and any 6 digit in otp) '",
      imgUrl: projImg4,
      projectUrl: "https://aagrisathi.vercel.app/",
    },
     {
      title: "SkipperUI Clone",
      description: "Clone of old skipper ui website made using react js use skipper ui components",
      imgUrl: projImg5,
      projectUrl: "https://skiper-tetst.vercel.app/",
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
