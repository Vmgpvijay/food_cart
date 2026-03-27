import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Navbar() {
   const[menus,setMenus] = useState(" ")
  return (
    <div className='container-fluid justify-content-between navbar nav d-flex pt-3'>
      <img src={assets.logo} alt="" className='logo '/>
      <ul className='d-md-flex d-none my-auto gap-2 list-unstyled nav-item'>
        <li onClick={()=>setMenus("home")} ><NavLink to="/" className={menus==="home"?"active":" "}>home</NavLink></li>
        <li onClick={()=>setMenus("menu")} ><NavLink to="/menu" className={menus==="menu"?"active":" "}>menu</NavLink></li>
        <li onClick={()=>setMenus("mobile-app")} className={menus==="mobile-app"?"active":" "}>mobile-app</li>
        <li onClick={()=>setMenus("contact-us")}className={menus==="contact-us"?"active":" "}>contact-us</li>
        </ul> 
        <div className="navbar-right d-flex align-items-center gap-4">
          <div className='d-flex gap-4'>
            <img src={assets.search_icon} alt="" />
            <div className='position-relative'>
           <NavLink to="/cart" style={{textDecoration:"none"}} onClick={()=>setMenus("cart")} className={menus==="cart"?"active":" "}> <img src={assets.basket_icon} alt="" /></NavLink>
          
            </div>
          </div>
          <button className='me-2 btn search-button'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar