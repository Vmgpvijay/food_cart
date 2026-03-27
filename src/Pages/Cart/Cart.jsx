import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Cart.css";

const Cart = () => {

  const { cartItems, food_list, addToCart, removeFromCart } =
    useContext(StoreContext);

  let totalAmount = 0;

  food_list.forEach((item) => {
    if (cartItems[item._id]) {
      totalAmount += item.price * cartItems[item._id];
    }
  });

  return (
    <div className="cart">

      <h2 className="cart-title">Your Cart 🛒</h2>

      <div className="cart-container">

        {/* Cart Items */}
        <div className="cart-items">
          {food_list.map((item) => {
            if (cartItems[item._id]) {
              return (
                <div key={item._id} className="cart-item">

                  {/* Image */}
                  <img src={item.image} alt={item.name} />

                  {/* Details */}
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>₹ {item.price}</p>

                    {/* Quantity */}
                    <div className="cart-quantity">
                      <button onClick={() => removeFromCart(item._id)}>-</button>
                      <span>{cartItems[item._id]}</span>
                      <button onClick={() => addToCart(item._id)}>+</button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="cart-subtotal">
                    ₹ {item.price * cartItems[item._id]}
                  </div>

                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h3>Bill Details</h3>

          <div className="summary-row">
            <span>Item Total</span>
            <span>₹ {totalAmount}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₹ 40</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹ {totalAmount + 40}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;