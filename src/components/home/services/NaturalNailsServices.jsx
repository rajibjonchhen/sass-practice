import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCarousel from "./ServiceCarousel";

function NaturalNailsServices() {
  return (
    <Container fluid className="bg-light p-2 p-md-5 ">
       <Container className='theme-transparent-background p-2 p-md-5 '>
    <Row>
      <Col sm={12} md={10} lg={8} className="offset-md-1 offset-lg-2">
      <h1>Natural-Nails Services</h1>
      <p className="fs-5 lh-base">
        The small details make that big difference, thank you for trusting us to
        take care of you. Welcome you to right place as 
        </p>
        <p className="lh-base fw-bold">WE LOVE WHAT WE DO and
        WE DO IT WITH LOVE.
      </p>
      </Col>
    </Row>
    <hr/>
      <ServiceCarousel/>
       </Container>
    </Container>
  );
}

export default NaturalNailsServices;
