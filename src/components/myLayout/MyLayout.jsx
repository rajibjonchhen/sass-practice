import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MyFooter from '../myFooter/MyFooter'
import MyNavbar from '../myNavbar/MyNavbar'

function MyLayout({children}) {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location])

  return (
    <div>
        <MyNavbar/>
        {children}
        <MyFooter/>
    </div>
  )
}

export default MyLayout