import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import servicePricesData from "./servicePricesData.js";
import "./ServicesPrices.scss";

function ServicesPrices() {
  return (
    <div >
      <Container className="theme-bg">
        <Row className="min-height-90">
          <Col className="v-h-center">
            <div>
                  <h1 className="mb-5"><span className="border-bottom p-3">Natural-Nails Services</span></h1>
                  <p className="fs-5 w-75 m-auto mt-3">
                    At Natural Nails, we work hard to provide & satisfy our guests
                    with a high quality and service in relaxation place. We have skill
                    technicians with professional Nails treatment: Manicure, Pedicure,
                    shellac, Acrylic.
                  </p>
                  <p className="fs-5 w-75 m-auto mt-3">
                    Thank you to all our lovely loyal clients for your support over
                    year! <br/> As ever, we want to provide the best products and safe
                    service we can, so there will be a small price increase on
                    treatments due to increasing of materials and fix cost.
                  </p>
                  <p className="fs-5 w-75 m-auto mt-3">
                    we would like to inform you that our price of services will change
                    from 1st May 2022 onwards We greatly appreciate your support and
                    hope you understand the need to implement the increase.
                  </p>
                  <p className="fs-5 w-75 m-auto mt-3">
                    Lots of love
                    <br />
                    Hanna and Natural Nail team,
                  </p>
                  </div>
                </Col>
              </Row>
              {servicePricesData.map((item, i) => (<div className="mt-5">
              <div className=" ">
                <h2 className="p-3">{item.icon} {item.title}</h2>
            </div>
          <Row key={i} className="min-height-70 border-top-1 border-bottom">
            <Col sm={12} md={6} className="v-h-center ">
              <div className="" style={{heith:"100%", width:"100%", overflow:"hidden",}}>
                <img src={item.img || "https://via.placeholder.com/550x350/350"} alt="" className="h-100 w-100"/>
              </div>
            </Col>
            <Col sm={12} md={6} className="v-h-center theme-light-bg">
              <ListGroup variant="flush" className="w-100 " >
              {item.services.map((service, j) => (
                  <ListGroup.Item key={j} className="d-flex w-100 justify-content-between theme-transparent-background">
                    <span>{service.service}</span>
                    <span>{service.price} DKK</span>
                  </ListGroup.Item>
              ))}
              </ListGroup>
            </Col>
          </Row>
          </div> ))
        }
      </Container>
    </div>
  );
}

export default ServicesPrices;
