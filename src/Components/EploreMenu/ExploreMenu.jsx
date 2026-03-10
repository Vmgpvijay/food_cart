import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'
function ExploreMenu({category,setCategory}) {
  return (
    <div className='container-fluid d-flex flex-column gap-2 ' id='explore-menu'>
      <h1 className='text-dark fw-bold'>Explore our menu</h1>
      <p className='menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div
        className='d-flex overflow-auto text-center my-2 dishes no-scrollbar'
        style={{ whiteSpace: "nowrap" }}
      >
        {menu_list.map((item, index) => (
          <div onClick={()=>setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)} key={index} className="d-inline-block me-4">
            <img
              className={`${category === item.menu_name ? "active" : ""} img-fluid foodsimage`}
              style={{ maxWidth: "150px"}}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className='food-name pt-3'>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className='line' />
    </div>
  )
}

export default ExploreMenu
