import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Linkedin, Twitter } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <Container fluid className="theme-background p-3">
      <Row>
        <Col>
          <span className="m-3 p-3 fs-3">
            <Twitter />
          </span>
          <span className="m-3 p-3 fs-3">
            <Facebook />
          </span>
          <span className="m-3 p-3 fs-3">
            <Linkedin />
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
