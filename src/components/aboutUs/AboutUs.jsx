import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { aboutUsData, ourMission, ourVision } from './aboutUsData'

function AboutUs() {
  return (
    <div>
        <div className='bg-img-sticky' >
            <img className="" src="https://res.cloudinary.com/dai5duzoj/image/upload/v1659742800/hanna/Screenshot_2022-08-06_at_00.37.47_knov4v.png" alt="" width="100%" height="100%"/>
        </div>
        <div className="theme-light-bg min-height-80 p-5" >
                
            <Container>
                <Row>
                    <Col sm={12} md={8} className="offset-lg-2 ">

            <h1 className="">
            About Us
            </h1>
            <p className="fs-6 w-100 m-auto mt-3 text-justify">
                {aboutUsData}
            </p>
            <p className="h3 mt-5"> Our Mission</p>
            <p  className="fs-6 w-100 m-auto mt-3 text-justify">{ourMission}</p>
            <p className="h3 mt-5">Our Vision</p>
            <p  className="fs-6 w-100 m-auto mt-3 text-justify">{ourVision}</p>
                    </Col>
                </Row>
            </Container>
            <Button className='theme2-btn mt-5'>Get in touch</Button>
        </div>
    </div>
  )
}

export default AboutUs