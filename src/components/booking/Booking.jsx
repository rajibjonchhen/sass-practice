import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import storeInside from "../../assets/storeInside.png";
function Booking() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <img
              src={storeInside}
              alt=""
              width="100%"
            />
          </Col>
          <Col>
          <div className="theme-light-bg h-100 d-flex align-items-center">

            <div className="">
              <p className="h3 my-5">Opening Hours</p>
              <p className="">
                Mon - Fri: 10:00 - 18:30 <br />
                Sat: 11:00 - 16:30 <br />
                Sun: Closed
              </p>
              <p className="h5 my-4">
              We highly recommend online booking
              </p>
              <p className="w-75 m-auto">
              If you already know what you are looking for, your appointment is happen with few clicks with easy online booking system.
If you are not sure about our service, please simply give us a call on: 52 39 31 37. We look forward to well come you at Natural Nails


              </p>
          </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Booking;
