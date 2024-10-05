import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hand_detection from "../../Assets/Projects/hand-detection.png";
import telegram_button from "../../Assets/Projects/telegram_butto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={telegram_button}
              isBlog={false}
              title="Telegram-Interactive-Button-Bot"
              description="A Telegram bot designed to offer interactive button functionalities, providing easy access to log queries, customizable commands, and more."
              ghLink="https://github.com/MozzieGM/Telegram_Interactive_Button"
              // demoLink="#"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={hand_detection}
              isBlog={false}
              title="OpenCV-Facial-Hand-Detection"
              description="A Python project using OpenCV for facial recognition and hand detection, enabling real-time interactive drawing and image overlay capabilities."
              ghLink="https://github.com/MozzieGM/OpenCV-Hand-Detection-main"
              // demoLink="#"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
