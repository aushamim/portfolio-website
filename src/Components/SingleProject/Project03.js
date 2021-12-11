import React from "react";

import pro1p1 from "../../Media/project3-p1.jpg";
import pro1p2 from "../../Media/project3-p2.jpg";
import pro1p3 from "../../Media/project3-p3.jpg";

import { Carousel, Col, Container, Row } from "react-bootstrap";

const Project03 = () => {
  return (
    <Container className="font mt-5">
      <h1 className="text-center  ">
        Book <span className="heading"> Archive</span>
      </h1>
      <Container className=" mt-5 p-5 project-bg project-container project">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2 className="fw-bold text-center mb-2">Description</h2>
            <h5 className="text-secondary">
              A simple website to lookup information of any book.{" "}
            </h5>

            <li>User can search for any book.</li>
            <li>User will be able to view detailed information.</li>

            <h5 className="mt-2">
              Frontend:{" "}
              <span>
                {" "}
                <span className="badge bg-warning m-1">HTML 5</span>
                <span className="badge bg-warning">CSS3</span>
                <span className="badge bg-warning m-1 ">Bootstrap</span>
                <span className="badge bg-warning">React.js</span>
                <span className="badge bg-warning m-1">JavaScript(ES6)</span>
                <span className="badge bg-warning m-1">React Router</span>
              </span>{" "}
            </h5>
            <h5 className="mt-2">
              Backend:
              <span>
                {" "}
                <span className="badge bg-warning m-1">MongoDB</span>
                <span className="badge bg-warning">Express.js</span>
              </span>{" "}
            </h5>

            <h5>
              Link:{" "}
              <span>
                <a
                  className="link-btn badge bg-warning m-1"
                  href="https://book-archive-a6.netlify.app/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  className="link-btn badge bg-warning m-1"
                  href="https://github.com/aushamim/book-archive"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git Code
                </a>
              </span>{" "}
            </h5>
          </Col>
          <Col sm={12} md={6} lg={6} className="my-auto">
            <Carousel className=" carousel-img  border rounded  border-3 border-warning ">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 img-fluid "
                  src={pro1p1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 img-fluid"
                  src={pro1p2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 img-fluid"
                  src={pro1p3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Project03;
