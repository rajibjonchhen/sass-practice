import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {carouselData} from "./carouselData.js"
import "./carousel.scss"



function ServiceCarousel() {
  
    const [showMore, setShowMore] = useState(false)
    const [readText, setReadText] = useState("read more")
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleReadText = () => {
      setShowMore(!showMore)
      setReadText(readText === "read more"? "read less":"read more")
  }

    return (
       
            <Carousel activeIndex={index} onSelect={handleSelect}>
            {carouselData.map((item, i) =>  <Carousel.Item key={i}>
                <Container className="carousel-card">
                    <Row>
                    <Col sm={12} md={6}  className="">
                        <div className="carousel-img m-auto" style={{width:"100%", backgroundImage:`url(${item.img})`}}>
                            {/* <img src={item.img} alt="" width="100%" height="100%"/> */}
                        </div>
                    </Col>
                    <Col sm={12} md={6} >
                        <div className=' pt-5 p-relative text-start '>
                        <p className="h4 p-4 text-decoration-underline p-absolute top-0">{item.title} {i+1}</p>
                        <div className=' p-4 fs-5  '><p className={`carousel-text ${!showMore? "carousel-text-wrap":""}`}>{item.text}</p> <span className="read-more" onClick={() => handleReadText() }>{readText}</span></div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </Carousel.Item>)}
            </Carousel>
        
    
  )
}

export default ServiceCarousel