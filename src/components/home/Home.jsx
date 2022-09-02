import React from 'react'
import About from './about/About'
import GetInTouch from './getInTouch/GetInTouch'
import Jumbotron from './jumbotron/Jumbotron'
import Promotion from './promotion/Promotion'
import NaturalNailsServices from './services/NaturalNailsServices'

function Home() {
 const BackgroundImg ="https://res.cloudinary.com/dai5duzoj/image/upload/v1659961610/hanna/Screenshot_2022-08-01_at_13.43.30_b8hp2e.png"

  return (
    <div className=''  >

        <Jumbotron/>
        <About/>
        <NaturalNailsServices/>
        <Promotion/>
        <GetInTouch/>
    </div>
  )
}

export default Home