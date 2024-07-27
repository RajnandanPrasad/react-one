import React from 'react'
import './Footer.css'
import logo from '../Assets/logo2.png'
import instagram_icon from '../Assets/insta.png'
import whatsapp_icon from '../Assets/whatsapp.png'
import facebook_icon from '../Assets/facebook.png'
const footer = () => {
  return (
    <div className="footer">
     
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>PressIT</p>
      </div>
      <ul div className="footer-links">
        <li>Company</li>
        <li>PressIT</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>

          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>

          <div className="footer-icons-container">
            <img src={facebook_icon} alt="" />
          </div>
        </div>
       <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All rights are reserved</p>
       </div>

      </div>
   

  )
}

export default footer