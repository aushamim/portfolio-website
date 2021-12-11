import React from "react";
import { Container } from "react-bootstrap";
import "./AboutMe.css";
import aboutme from "../../Media/avatar.jpg";

const AboutMe = () => {
  return (
    <Container className="text-center">
      <img
        src={aboutme}
        id="avatar"
        className="w-25 about-me-img mt-5 mb-4"
        alt=""
      />
      <h1 className="mt-4 font ">
        I am <span className="about-name">Amzud Uddin Shamim</span>
      </h1>

      <p className="text-secondary fs-5 font ">
        I am a passionate JavaScript developer. I've worked on a few projects
        that included modern HTML, CSS, ES6, and React.js. I always try to seek
        out new technologies and stay up-to-date on industry trends and
        advancements. I always focus on learning new technology. I am currently
        studying in the Department of Computer Science and Engineering, Daffodil
        International University.
      </p>
    </Container>
  );
};

export default AboutMe;
