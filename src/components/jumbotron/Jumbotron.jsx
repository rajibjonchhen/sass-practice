import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./Jumbotron.scss"
import Pedicure from "../../assets/pedicure.png"

function Jumbotron() {
  return (
    <div>
        <div className="jumbotron-img">
            <img src={Pedicure} alt="pedicure background"/>
        </div>
        <div className="jumbotron">
            <p className="h1 jumbo-h1">
                Welcome to Natural Nails
            </p>
            <p>
            We care about your health and follow strict rules on disinfection and sterilisation of our equipment in UV sterilise machine to ensure that bacteria is eliminated
            </p>
            <Button className="learn-more-btn">Learn more</Button>
        </div>
        
    </div>
  )
}

export default Jumbotron