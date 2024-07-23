import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreCotext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, foodList, removeFromCart } = useContext(StoreContext);
  const deliveryCharge = Object.keys(cartItems).length > 0 ? 5.00 : 0;// Define your delivery charge here
 const navigate=useNavigate();
  const subtotal = Object.keys(cartItems).reduce((acc, item) => {
    const itemId = Number(item); // Ensure item is a number if foodList uses numbers for ids
    let itemInfo = foodList.find((food) => food.id === itemId);

    if (itemInfo) {
      return acc + (itemInfo.price * cartItems[itemId]);
    } else {
      console.warn(`Item info not found for id: ${itemId}`);
      return acc;
    }
  }, 0);

  const total = subtotal + deliveryCharge;

  return (
    <div className='cart' id='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItems[item.id]}</p>
                <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                <p className='cross' onClick={() => removeFromCart(item.id)}>&#10060;</p>
              </div>
            );
          }
        })}
        <div className="cart-items-down">
          <h3>Your Cart</h3>
          <h2>Subtotal</h2>
        </div>
        <div className="cart-items-total">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="cart-items-total">
          <p>Delivery Charge</p>
          <p>${deliveryCharge.toFixed(2)}</p>
        </div>
        <div className="cart-items-total">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="promo-code">
          <p>Enter a promo code,If you have</p>
          <input type="text" placeholder='Promo Code' />
          <button>Submit</button>
        </div>
        <div className="cart-items-checkout">
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-items-login">
          <p>Login to your account to checkout faster</p>
          <button>LOGIN</button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
