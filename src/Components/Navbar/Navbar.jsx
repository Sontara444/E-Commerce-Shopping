import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

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
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/'>SHOP</Link>  {menu==='shop'? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>MEN</Link>   {menu==='mens'? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='/womens'>WOMEN</Link>  {menu==='womens'? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='/kids'>KIDS</Link>  {menu==='kids'? <hr/> : <></> }</li>
            
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            {/* <img src={search} alt="" />
            <img src={profile} alt="" /> */}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">
              0
            </div>
            
        </div>
    </div>
  )
}

export default Navbar