import React from 'react'
import { Container } from 'react-bootstrap'
import "./Jumbotron.scss"

function Jumbotron() {
  return (
    <Container fluid className="jumbotron-img">
        <div className="jumbotron">
            <h1>
            Welcome to Natural Nails
            </h1>
        </div>
    </Container>
  )
}

export default Jumbotron