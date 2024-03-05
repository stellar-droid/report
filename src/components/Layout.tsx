import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    
    <div className='panelMain'>
        {/* <h1>Haeder For testing</h1> */}
        <Outlet/>
        {/* <h1>Footer For testing</h1> */}
    </div>
   
  )
}

export default Layout