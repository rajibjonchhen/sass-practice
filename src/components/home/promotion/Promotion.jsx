import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Brand from "../../../assets/brand.png"
function Promotion() {
  return (
    <Container fluid className='theme-bg p-2 p-md-5'>
        <Container className='p-2 p-md-5'>

        <Row>
        <Col  sm={12} md={4} className="offset-md-">
                <div>
                    <Image src={Brand} alt="brand" width="100%"/>
                </div>
            </Col>
            <Col sm={12} md={8} className=" d-flex align-items-center">
                <div>
                    
                <p className="h2">Promotion</p>
                <p className="h4">We have special offer..</p>
                <p className="fs-5">We also deliver loyalty card to the client who use our service with value more than 350 DKK/ time. Client will get discount of 100 DKK after every 4 times.
                P/S: Please note that you can not combine discount service together.</p>
                </div>
            </Col>
          
        </Row>
        </Container>
    </Container>
  )
}

export default Promotion