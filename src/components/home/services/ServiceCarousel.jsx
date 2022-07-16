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
                <Container >
                    <Row>
                    <Col sm={12} md={6} className="w-100">
                        <div className="m-auto" style={{width:"100%"}}>
                            <img src={item.img} alt="" width="100%"/>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <h3>{item.title} {i+1}</h3>
                        <p className='fs-5 text-justify lh-base'>{item.text} <span className="read-more">read more</span></p>
                    </Col>
                    </Row>
                </Container>
            </Carousel.Item>)}
            </Carousel>
        
    
  )
}

export default ServiceCarousel