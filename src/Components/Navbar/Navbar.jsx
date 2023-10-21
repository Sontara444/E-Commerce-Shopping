import React from 'react'
import './Navbar.css'

// import search from '../Assets/search.png'
// import profile from '../Assets/profile.png'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li>SHOP</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            
            {/* <img src={search} alt="" />
            <img src={profile} alt="" /> */}
            <img src={cart_icon} alt="" />
            
        </div>
    </div>
  )
}

export default Navbar