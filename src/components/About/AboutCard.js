import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gabriel</span>, but I'm known as <span className="purple">Mozzie</span>.
            <br />
            I am a passionate full-stack developer with a love for building innovative solutions and exploring new technologies.
            <br />
            Besides development, I also have a passion for 3D printing and drone filming.
            <br />
            <br />
            Here are a few things I enjoy doing in my spare time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating with 3D printers
            </li>
            <li className="about-activity">
              <ImPointRight /> Flying and filming with drones
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new programming challenges
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's fun to do the impossible."{" "}
          </p>
          <footer className="blockquote-footer">Mozzie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
