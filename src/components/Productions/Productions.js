import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProductionsCards";
import Particle from "../Particle";
import Purple_Retro from "../../Assets/Productions/Purple_Retro.gif";
import Violet_Super_Bad from "../../Assets/Productions/Violet_Super_Bad.gif";
import Violet_Primeira_Edicao from "../../Assets/Productions/Violet_Primeira_Edicao.gif";
import Violet_Mosquito from "../../Assets/Productions/Violet_Mosquito.gif";

function Productions() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Productions </strong>
        </h1>
{/* 
        <p style={{ color: "white" }}>
          Here are a few Productions I've worked on recently.
        </p>
*/}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={Purple_Retro}
              isBlog={false}
              ghLink="https://www.youtube.com/@MozzieGM/videos"
              // demoLink="https://www.youtube.com/@MozzieGM/videos"      
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Violet_Super_Bad}
              isBlog={false}
              title="I Am McLovin Super Bad edit"
              ghLink="https://www.youtube.com/watch?v=v_CN7_I2VoY"
              // demoLink="#"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Violet_Mosquito}
              isBlog={false}
              title="Mosquito: Exploring the Skies"
              ghLink="www.youtube.com/watch?v=WMzA4tcy5Gw&t"
              // demoLink="#"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Violet_Primeira_Edicao}
              isBlog={false}
              title="First Edition"
              ghLink="https://www.youtube.com/watch?v=AOby7d6kr1g"
              // demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Productions;
