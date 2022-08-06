import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { aboutUsData, ourMission, ourVision } from './aboutUsData'

function AboutUs() {
  return (
    <div>
        <div className='background-img ' >
            <img className="" src="https://res.cloudinary.com/dai5duzoj/image/upload/v1659742800/hanna/Screenshot_2022-08-06_at_00.37.47_knov4v.png" alt="" width="100%" height="100%"/>
        </div>
        <div className="theme-light-background min-height-80" style={{marginTop:"500px"}}>
                
            <Container>
                <Row>
                    <Col sm={12} md={8} className="offset-lg-2 justify-text">

            <h1 className="pt-5">
            About Us
            </h1>
            <p className="h5">
                {aboutUsData}
            </p>
            <p className="h3 mt-5"> Our Mission</p>
            <p  className="h5">{ourMission}</p>
            <p className="h3 mt-5">Our Vision</p>
            <p  className="h5">{ourVision}</p>
                    </Col>
                </Row>
            </Container>
            <Button className='theme2-btn'>Get in touch</Button>
        </div>
    </div>
  )
}

export default AboutUs