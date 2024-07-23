import React, { useContext } from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreCotext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({ category }) => {
    const { foodList}=useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Dishes near you!!!</h2>
        <div className="food-display-list">
            {
                foodList.map((item)=>{
                    if(category==="All"||category===item.category)
                    return <FoodItem key={item.id} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} />
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay