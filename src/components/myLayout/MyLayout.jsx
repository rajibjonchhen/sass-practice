import React from 'react'
import MyFooter from '../myFooter/MyFooter'
import MyNavbar from '../myNavbar/MyNavbar'

function MyLayout({children}) {
  return (
    <div>
        <MyNavbar/>
        {children}
        <MyFooter/>
    </div>
  )
}

export default MyLayout