import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{margin:"20px"}}>
      <NavLink to="/Routing/User" style={{margin:"50px"}}>User</NavLink>
      <NavLink to="/Routing/AboutMe">AboutMe</NavLink>
    </div>
  )
}

export default Navbar
