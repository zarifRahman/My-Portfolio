import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img5.png";
import shikhoImg from "../assets/img/shikho.png";
import bohubrihiImg from "../assets/img/bohubrihi.png";
import shikhoShopImg from "../assets/img/shikho-shop.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import dxBall from "../assets/img/dx-ball.png";

const Projects = () => {
  const projectsTab1 = [
    {
      title: "Shikho",
      description: "Educational Platform",
      imgUrl: shikhoImg,
      link: "https://shikho.com/",
    },
    {
      title: "Bohubrihi",
      description: "Online Learning Platform",
      imgUrl: bohubrihiImg,
      link: "https://bohubrihi.com/",
    },
    {
      title: "Shikho CMS",
      description: "Content Management System",
      imgUrl: projImg2,
      link: "https://cms.shikho.com/",
    },
  ];

  const projectsTab2 = [
    {
      title: "DX Ball",
      description: "Let play a Game",
      imgUrl: dxBall,
      link: "https://dx-ball-six.vercel.app/",
    },
    {
      title: "Shikho Shop",
      description: "E-commerce Platform",
      imgUrl: shikhoShopImg,
      link: "https://shop.shikho.com/",
    },
    {
      title: "Grameen Digital Health",
      description: "Grameen Digital Health Website",
      imgUrl: projImg1,
      link: "https://grameendh.com/",
    },
  ];

  const projectsTab3 = [
    {
      title: "Shikho CMS",
      description: "Content Management System",
      imgUrl: projImg2,
      link: "https://cms.shikho.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I’ve worked on, ranging from
                    educational platforms to e-commerce solutions. These
                    projects highlight my experience in building scalable web
                    applications, creating user-friendly interfaces, and
                    delivering real-world digital products.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};

export default Projects;
