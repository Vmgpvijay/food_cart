import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Navbar() {
   const[menu,setMenu] = useState("home")
  return (
    <div className='container-fluid justify-content-between navbar nav d-flex pt-3'>
      <img src={assets.logo} alt="" className='logo '/>
      <ul className='d-md-flex d-none my-auto gap-2 list-unstyled nav-item'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><NavLink to="/">home</NavLink></li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><NavLink to="/menu">menu</NavLink></li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact-us</li>
        </ul> 
        <div className="navbar-right d-flex align-items-center gap-4">
          <div className='d-flex gap-4'>
            <img src={assets.search_icon} alt="" />
            <div className='position-relative'>
            <img src={assets.basket_icon} alt="" />
            <div className='position-absolute dot'></div>
            </div>
          </div>
          <button className='me-2 btn search-button'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar