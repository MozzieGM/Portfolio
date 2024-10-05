import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Python Developer",
          "3D Printing Creator",
          "Drone Filmmaker",
          "JavaScript Developer",
          "Freelancer",
        ],
        
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
