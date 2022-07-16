import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.scss";
import Store from "../../../assets/store.png";

function About() {
  return (
    <Container fluid className="theme-background p-2 p-md-5">
      <Container className="">
        <Row>
          <Col sm={12} md={6} className="about-us">
            <h1>About Us</h1>
            <p>
              Step off the hectic street, walk into the relaxing place of
              Natural Nails, located in the heart of Copenhagen. With many years
              nail care experience, we create a homely and serene environment in
              which we could deliver our guest the best care and beauty
              expertise. The high quality of products, hygiene, friendly
              service, satisfaction of our guests care is the top priority. we
              provide our service to client's individual needs and we aim to
              build up a base of loyal and loyal client.We offer a variety of
              treatments with moderate price, we paid attention to every aspect
              of your visit.
            </p>
              <p>
                We believe that the customer always comes first - and that means
                exceptional products and exceptional services. Get in touch
                today to learn more about what we have to offer.
              </p>
          </Col>
          <Col sm={12} md={6}>
            <img src={Store} alt="" width="100%" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
