import React, { useEffect, useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import {Outlet} from 'react-router-dom'


function App() {
 
  return (
    <>
    <Navbar/>
     <Outlet/>
     <Footer/>
    
    </>
  )
}

export default App