import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {

const { cartItems, food_list, addToCart, removeFromCart } =
useContext(StoreContext);


// Total price calculation
let totalAmount = 0;

food_list.forEach((item)=>{

if(cartItems[item._id]){

totalAmount +=
item.price * cartItems[item._id];

}

})


return (

<div className="cart">

<h2>Your Cart</h2>

<hr/>

{/* Cart Items */}

{
food_list.map((item)=>{

if(cartItems[item._id]){

return(

<div
key={item._id}
style={{
display:"flex",
alignItems:"center",
gap:"20px",
marginBottom:"15px"
}}

>

{/* Image */}

<img
src={item.image}
alt={item.name}
width="80"
/>

{/* Name */}

<h3>{item.name}</h3>

{/* Price */}

<p>₹ {item.price}</p>

{/* Quantity */}

<div>

<button
onClick={()=>removeFromCart(item._id)}
>
-
</button>

<span style={{margin:"10px"}}>
{cartItems[item._id]}
</span>

<button
onClick={()=>addToCart(item._id)}
>
+
</button>

</div>

{/* Subtotal */}

<p>

₹ {
item.price *
cartItems[item._id]
}

</p>

</div>

)

}

return null;

})

}

<hr/>

{/* Total */}

<h2>

Total Amount : ₹ {totalAmount}

</h2>

</div>

)

}

export default Cart;
