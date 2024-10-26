import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'

function Layout() {

  
  return (
    <>
    
    <SideNavbar/>
    <Outlet/>
    
    
    </>
  )
}

export default Layout
