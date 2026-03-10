import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header container-fluid'>
      <div className='content d-flex flex-column align-items-start gap-2'>
        <h2 className='text-black fw-bold'>Order your favourite food here</h2>
        <p className='text-white'>Choose from diverse menu featuring a delectable of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisy your cravings and elevate your dining experiance.one delicious meal at a time.</p>
        <button className='btn btn-light rounded-pill my-2'>View Menu</button>
      </div>
    </div>
  )
}

export default Header