import React from 'react'
import './LoginPage.css'
const LoginPage = () => {
  return (
    <div>
<div className="loginsignup">
    <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
           <input type="text" placeholder='Your Name' />
           <input type="email" placeholder='Your Address' />
           <input type="password" placeholder='Your Password' />
        </div>

       <div className="login-btn"><button>Continue</button></div>
        <p className='loginsignuplogin'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing,i agree to the terms of use and privacy policy.</p>
        </div>
    </div>
</div>


    </div>



  )
}

export default LoginPage