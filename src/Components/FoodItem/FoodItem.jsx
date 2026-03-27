import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='w-100 m-auto food-div'>
      <div className='image-container'>
        <img className='w-100 image'  src={image} alt="" />
        {
          !cartItems[id]
           ?<img className='add ' src={assets.add_icon_white} onClick={()=> addToCart(id)} role='button' alt='' />
           :<div className='d-flex  align-items-center gap-3 food-item-counter'> 
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} role='button' alt="" />
                <p className='m-auto'>{cartItems[id]}</p>      
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" role='button' />
           </div>
        }
      </div>
      <div className='p-3'>
        <div className='d-flex justify-content-between align-items-center mb-1 gap-2'>
          <p className='fs-5 fw-bold mb-0'>{name}</p>
          <img  src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-description '>{description}</p>
        <p className='price fw-bold my-1'>${price}</p>
      
      </div>
    </div>
  )
}

export default FoodItem