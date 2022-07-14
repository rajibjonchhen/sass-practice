import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Brand from "../../../assets/brand.png"
function Promotion() {
  return (
    <Container fluid className='theme-background p-5'>
        <Row>
            <Col sm={12} md={5} className="offset-md-1 d-flex align-items-center">
                <div>
                    
                <p className="h2">Promotion</p>
                <p className="h4">We have special offer..</p>
                <p className="fs-5">We also deliver loyalty card to the client who use our service with value more than 350 DKK/ time. Client will get discount of 100 DKK after every 4 times.
                P/S: Please note that you can not combine discount service together.</p>
                </div>
            </Col>
            <Col  sm={12} md={4} className="offset-md-1">
                <div>
                    <Image src={Brand} alt="brand" width="100%"/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Promotion