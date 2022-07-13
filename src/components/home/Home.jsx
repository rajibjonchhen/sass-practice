import React from 'react'
import About from './about/About'
import Jumbotron from './jumbotron/Jumbotron'
import NaturalNailsServices from './services/NaturalNailsServices'

function Home() {
  return (
    <div>
        <Jumbotron/>
        <About/>
        <NaturalNailsServices/>
    </div>
  )
}

export default Home