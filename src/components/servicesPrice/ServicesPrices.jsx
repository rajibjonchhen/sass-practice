import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import servicePricesData from "./servicePricesData.js";
import "./ServicesPrices.scss";

function ServicesPrices() {
  return (
    <div >
      <Container className="theme-background">
        <Row className="min-height-90">
          <Col className="v-h-center">
            <div>
                  <h1>Natural-Nails Services</h1>
                  <p className="fs-">
                    At Natural Nails, we work hard to provide & satisfy our guests
                    with a high quality and service in relaxation place. We have skill
                    technicians with professional Nails treatment: Manicure, Pedicure,
                    shellac, Acrylic.
                  </p>
                  <p className="fs-">
                    Thank you to all our lovely loyal clients for your support over
                    year! As ever, we want to provide the best products and safe
                    service we can, so there will be a small price increase on
                    treatments due to increasing of materials and fix cost.
                  </p>
                  <p className="fs-">
                    we would like to inform you that our price of services will change
                    from 1st May 2022 onwards We greatly appreciate your support and
                    hope you understand the need to implement the increase.
                  </p>
                  <p className="fs-">
                    Lots of love
                    <br />
                    Hanna and Natural Nail team,
                  </p>
                  </div>
                </Col>
              </Row>
              {servicePricesData.map((item, i) => (<>
              <div>
                <hr/>
                <h2>{item.icon} {item.title}</h2>
                <hr/>
            </div>
          <Row key={i} className="min-height-70">
            <Col sm={12} md={6} className="v-h-center">
              <div className="" style={{heith:"100%", width:"100%", overflow:"hidden"}}>
                <img src={item.img || "https://via.placeholder.com/550x350/350"} alt="" className="h-100 w-100"/>
              </div>
            </Col>
            <Col sm={12} md={6} className="v-h-center theme-light-background">
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
          </> ))
        }
      </Container>
    </div>
  );
}

export default ServicesPrices;
