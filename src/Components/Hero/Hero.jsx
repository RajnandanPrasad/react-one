import React from 'react'
import './Hero.css';
import bg2 from '../Assets/bg2.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
     <h2>Delivery within 48hr.</h2>
     <div className="book-btn"><button>Book Now</button></div>
        </div>
        <div className="hero-right">
<img src={bg2} alt="" />;
        </div>
    </div>
  )
}

export default Hero