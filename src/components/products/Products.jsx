import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { productsData } from "./productsData.js";
function Products() {
  return (
    <div className="my-5">
      <p className="h2 text-white">
        We use all well-know and high quality products from CND brand.
      </p>
      <Container>
       {productsData.map((product, i) => 
        <Row className="my-5">
          <Col sm={12} md={6} className="m-0 p-0">
            <div>
              <img  className="  w-100 mr-auto" src={product.img} alt="" height="100%" />
            </div>
          </Col>
          <Col sm={12} md={6} className="theme-light-bg m-0 p-0">
          <div>
              <p className="h3 pt-5">{product.title}</p>
              <p className="fs-sm-3 fs-lg-5 w-75 m-auto">{product.description}</p>
          </div>
          </Col>
        </Row>
          )
        }
      </Container>
    </div>
  );
}

export default Products;
