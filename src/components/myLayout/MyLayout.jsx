import React from 'react'
import MyNavbar from '../myNavbar/MyNavbar'

function MyLayout({children}) {
  return (
    <div>
        <MyNavbar/>
        {children}
    </div>
  )
}

export default MyLayout