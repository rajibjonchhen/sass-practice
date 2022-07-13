import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {carouselData} from "./carouselData.js"
import Service1 from "../../../assets/service1.png"


function ServiceCarousel() {
  
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     {carouselData.map((item, i) =>  <Carousel.Item key={i}>
        <Container>
            <Row>
            <Col>
              {item.img}
            </Col>
            <Col>
                <h3>{item.title} {i+1}</h3>
                <p></p>
            </Col>
            </Row>
        </Container>
      </Carousel.Item>)}
    </Carousel>
    
  )
}

export default ServiceCarousel