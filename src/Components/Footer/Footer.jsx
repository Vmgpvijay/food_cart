import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer d-flex flex-column align-items-center gap-2' >
        <div className='fooder-content'>
            <div className='fooder-content-left'>
                <img src={assets.logo} alt="" />
                <p>vijay vijay vijay</p>
            <div >
                <img className='soical-icon' src={assets.facebook_icon} alt="" />
                <img className='soical-icon' src={assets.twitter_icon} alt="" />
                <img className='soical-icon' src={assets.linkedin_icon} alt="" />
            </div>
           </div>
            <div className='fooder-content-center'>
              <h2 className='color-white'>COMPANY</h2>
              <ul className='list-unstyled'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivey</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className='fooder-content-right'>
              <ul className='list-unstyled'>
              <li>+1-222-313-4250</li>
              <li>contact@foodcart.Com</li>
              </ul>
            </div>
        </div>
        <hr className='w-100'/>
        <p>copyright at 2025 Foodcart.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer