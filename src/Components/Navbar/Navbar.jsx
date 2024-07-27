import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/cart.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />

      </div> 
      <ul className="nav-menu">
  
        <li><Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/facility'>PressIT</Link></li>
        <li><Link style={{textDecoration:'none', color:'black'}} to='/contact us'>Contact Us</Link></li>

      </ul>
      <div className="btn">

       <Link to ='/login'><button>Login</button></Link>  </div>
      <div className="cart">
        <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
      </div>
    </div>
  )
}

export default Navbar