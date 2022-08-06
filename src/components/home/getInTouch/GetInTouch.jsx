import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Mailbox, Phone, Shop, Telephone } from "react-bootstrap-icons";

function GetInTouch() {
  return (
    <Container fluid className="bg-light p-2 p-md-5">
        <Container className='theme-transparent-bg p-2 p-md-5 '>

      <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="m-auto h-100">
            <div className="w-100 h-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49384.937472177226!2d12.534397461311558!3d55.678260911654796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae71529f49706eae!2sNatural%20Nails!5e0!3m2!1sen!2spt!4v1658075111141!5m2!1sen!2spt" width="100%"  style={{border:0, minHeight:"400px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <img
            src="https://www.ekro.com/fileadmin/bedrijven/ekro/images/contact.jpg"
            alt=""
            width="100%"
        /> */}
        </div>
        </Col>
        <Col sm={8}  md={6} lg={6} className="m-auto">
            <p className="h4 text-decoration-underline">Get in touch</p>
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
            <p><Shop/> Løngangstræde 21, st Butik 5, 1468 Copenhagen, Denmark</p>
            <p><Mailbox/> naturalnailsdk@gmail.com</p>
            <p><Telephone/>+45 52 39 31 37</p>
          </div>
        </Col>
      </Row>
            </Container>
    </Container>
  );
}

export default GetInTouch;
