import React from 'react'
import Navbar from './componants/Navigation/Navber'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default App