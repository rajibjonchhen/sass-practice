import React from 'react'
import About from './about/About'
import GetInTouch from './getInTouch/GetInTouch'
import Jumbotron from './jumbotron/Jumbotron'
import Promotion from './promotion/Promotion'
import NaturalNailsServices from './services/NaturalNailsServices'

function Home() {
  return (
    <div className=''>
        <Jumbotron/>
        <About/>
        <NaturalNailsServices/>
        <Promotion/>
        <GetInTouch/>
    </div>
  )
}

export default Home