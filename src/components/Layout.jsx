import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';


const Layout = () => {
  return <>
    <Navbar/>
        <Outlet></Outlet>
    <Footer/>
  </>
}

export default Layout