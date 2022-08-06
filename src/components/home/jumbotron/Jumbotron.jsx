import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./Jumbotron.scss"
import Pedicure from "../../../assets/pedicure.png"

function Jumbotron() {
  return (<>
        <div className="bg-img-fixed">
            <img src={Pedicure} alt="pedicure background" width="100%" height="100%"/>
        </div>
    <Container fluid className='m-0 p-2 p-md-5 '>
      <Container className="jumbotron">

        <div >
          <div>
            <p className="jumbotron-h1">
                Welcome to Natural Nails
            </p>
            <p>
            We care about your health and follow strict rules on disinfection and sterilisation of our equipment in UV sterilise machine to ensure that bacteria is eliminated
            </p>
            <Button className="learn-more-btn">Learn more</Button>
          </div>
        </div>
      </Container>
        
    </Container>
    </>
  )
}

export default Jumbotron