import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate programmer who thrives on building solutions that bridge technology and creativity. 🚀
              <br />
              <br />
              My journey in development has led me to master languages like
              <i>
                <b className="purple"> Python, Javascript, and C#. </b>
              </i>
              <br />
              <br />
              I have a deep interest in creating innovative <i><b className="purple">Web Technologies and Products</b></i>,
              with a special focus on <b className="purple">Blockchain</b> and emerging digital solutions.
              <br />
              <br />
              When I'm not coding, you’ll probably find me exploring my other tech-driven passions, like
              capturing aerial footage with <b className="purple">drones</b> or working on my <b className="purple">3D printers</b>.
              <br />
              <br />
              I also love crafting modern web experiences using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}cutting-edge Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              And of course, I have a deep love for <b className="purple">Python</b>, which I use whenever I can to build powerful and elegant solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MozzieGM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gabrielmartinezdesouza/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/martinez1209"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
