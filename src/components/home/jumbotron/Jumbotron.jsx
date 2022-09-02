import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./Jumbotron.scss"
import service2 from "../../../assets/service2.png"

function Jumbotron() {
 const BackgroundImg ="https://res.cloudinary.com/dai5duzoj/image/upload/v1659961610/hanna/Screenshot_2022-08-01_at_13.43.30_b8hp2e.png"
  return (<>
        <div className="bg-img-fixed" >
            <img src={BackgroundImg} alt="pedicure background"  style={{minHeight:"500px", width:"100%", margin:"auto"}}/>
        </div>
    <Container fluid className='m-0 p-1 p-md-5 ' >
      <Container className="jumbotron">

        <div >
          <div>
            <p className="jumbotron-h1">
                Welcome to Natural Nails
            </p>
            <p>
              We care about your health and follow strict rules on disinfection and sterilisation of our equipment in UV sterilise machine to ensure that bacteria is eliminated
            </p>
            <Button className="theme2-btn">Learn more</Button>
          </div>
        </div>
      </Container>
        
    </Container>
    </>
  )
}

export default Jumbotron