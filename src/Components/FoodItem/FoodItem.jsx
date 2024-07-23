import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreCotext';

const FoodItem = ({ id, name, price, description, image }) => {
    
    const {cartItems, setCartItems,addToCart, removeFromCart}=useContext(StoreContext);
   
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id]? (
                    <div className="add-button-container">
                        <button className='add-button' onClick={()=>addToCart(id)}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div className="add-container">
                        <button className='remove-button' onClick={()=>removeFromCart(id)}>
                            Remove
                        </button>
                        <div className="item-count">{cartItems[id]}</div>
                        <button className='add-button' onClick={()=>addToCart(id)}>
                            Add
                        </button>
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <h3>{name}</h3>
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default FoodItem;
