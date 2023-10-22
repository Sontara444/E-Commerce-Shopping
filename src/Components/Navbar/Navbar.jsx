import React, { useState } from 'react'
import './Navbar.css'

// import search from '../Assets/search.png'
// import profile from '../Assets/profile.png'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar() {
  const [menu, setMenu] = useState('shop')
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>SHOP {menu==='shop'? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu("mens")}}> MEN {menu==='mens'? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu("womens")}}>WOMEN {menu==='womens'? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu("kids")}}>KIDS {menu==='kids'? <hr/> : <></> }</li>
            
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            
            {/* <img src={search} alt="" />
            <img src={profile} alt="" /> */}
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">
              0
            </div>
            
        </div>
    </div>
  )
}

export default Navbar