import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
const Navbar = () => {
  return (
   <div className="navbar">
<div className="nav-logo">
    <img src={logo} alt="" />
    
</div>
<ul className="nav-menu">
    <li>Home</li>
    <li>Our Services</li>
    <li>Call us +91________</li>
   
</ul>
<div className="btn"><button>Login</button></div>
   </div>
  )
}

export default Navbar