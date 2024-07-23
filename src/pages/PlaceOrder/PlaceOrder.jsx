import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreCotext';

const PlaceOrder = () => {
  const { cartItems, foodList } = useContext(StoreContext);
  const deliveryCharge = Object.keys(cartItems).length > 0 ? 5.00 : 0; // Define your delivery charge here

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
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className='multi-field'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
          <input type="text" placeholder='Zip Code' />
        </div>
        <input type="text" placeholder='Country' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Shipping</p>
              <p>${deliveryCharge.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <h3>Total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
