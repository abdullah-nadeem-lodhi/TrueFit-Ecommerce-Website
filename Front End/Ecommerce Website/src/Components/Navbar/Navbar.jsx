import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assests/logo.png" 
import cart_icon  from "../Assests/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,SetMenu] = useState("shop")

  return (
    <div className='Navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="TrueFit logo" />
            <p>TrueFit</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => SetMenu("shop")}> <Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu==='shop'?<hr />:<></>}</li>
            <li onClick={() => SetMenu("men")}><Link style={{textDecoration: 'none'}} to="/mens">Men</Link>{menu==='men'?<hr />:<></>}</li>
            <li onClick={() => SetMenu("women")}><Link style={{textDecoration: 'none'}} to="/womens">Women</Link>{menu==='women'?<hr />:<></>}</li>
            <li onClick={() => SetMenu("kids")}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>{menu==='kids'?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button className="login-button">Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>
            <div className="nav-cart-count">
              0
            </div>
        </div>

    </div>
  )
}
export default Navbar