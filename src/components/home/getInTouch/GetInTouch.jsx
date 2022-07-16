import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function GetInTouch() {
  return (
    <Container fluid className="bg-light p-2 p-md-5">
        <Container className='theme-transparent-background p-2 p-md-5 '>

      <Row>
        <Col xs={6} sm={6} md={6} lg={4} className="m-auto">
          <img
            src="https://www.ekro.com/fileadmin/bedrijven/ekro/images/contact.jpg"
            alt=""
            width="100%"
            />
        </Col>
        <Col sm={8}  md={6} lg={8} className="m-auto">
          <ul className="list-unstyled">
            <li>Monday 10:00 - 18:30</li>
            <li>Tuesday 10:00 - 18:30</li>
            <li>Wednesday 10:00 - 18:30</li>
            <li>Thursday 10:00 - 18:30</li>
            <li>Friday 10:00 - 18:30</li>
            <li>Saturday 11:00 - 16:30</li>
            <li>Sunday . CLOSE</li>
          </ul>
          <div>
            <p>Løngangstræde 21, st Butik 5, 1468 Copenhagen, Denmark</p>
            <p>naturalnailsdk@gmail.com</p>
            <p>+45 52 39 31 37</p>
          </div>
        </Col>
      </Row>
            </Container>
    </Container>
  );
}

export default GetInTouch;
