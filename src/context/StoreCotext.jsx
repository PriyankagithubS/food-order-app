import { useEffect, useState } from 'react';
import { createContext } from "react";

// Create the context
export const StoreContext = createContext(null);

// Define the provider component
const StoreContextProvider = (props) => {

    // Updated food list with more items
    const foodList = [
        {
            id: 1,
            name: 'Dosa',
            price: 10.99,
            description: 'The crunch of south India .',
            image: '/dosa.png',
            category: 'Dosa'
        },
        {
            id: 2,
            name: 'Chicken Biriyani',
            price: 12.99,
            description: 'Spicy and flavorful chicken biriyani.',
            image: '/chicken biriyani.png',
            category: 'Biriyani'
        },
        {
            id: 3,
            name: 'Haka Noodles',
            price: 8.99,
            description: 'Stir-fried noodles with vegetables and chicken.',
            image: '/noodles.png',
            category: 'Noodles'
        },
        {
            id: 4,
            name: 'White Sauce Pasta',
            price: 11.99,
            description: 'Pasta in a creamy white sauce with cheese.',
            image: '/pasta.png',
            category: 'Pasta'
        },
        {
            id: 5,
            name: 'Sticky Soy-Glazed Fish',
            price: 14.99,
            description: 'Fish glazed with soy sauce and honey.',
            image: '/fish.png',
            category: 'Fish'
        },
        {
            id: 6,
            name: 'Veg Pizza',
            price: 9.99,
            description: 'Vegetable pizza with a blend of cheese and spices.',
            image: '/pizza.png',
            category: 'Pizza'
        },
        {
            id: 7,
            name: 'Chicken Burger',
            price: 7.99,
            description: 'Juicy chicken burger with lettuce, tomato, and sauce.',
            image: '/burger.png',
            category: 'Burger'
        },
        {
            id: 8,
            name: 'Choco Truffle Jar Cake',
            price: 5.99,
            description: 'Chocolate truffle cake in a jar',
            image: '/jar cake.png',
            category: 'Cake'
        },
        {
            id: 9,
            name: 'Mutton Wooper',
            price: 6.99,
            description: 'Toasted bread with melted cheese and herbs and meat.',
            image: '/wooper.png',
            category: 'Burger'
        },
        {
            id: 10,
            name: 'Caesar Salad',
            price: 7.49,
            description: 'Crisp romaine lettuce with Caesar dressing and croutons.',
            image: '/caesar_salad.png',
            category: 'Slads'
        },
        {
            id: 11,
            name: 'Tandoori Chicken',
            price: 13.49,
            description: 'Chicken marinated in yogurt and spices.',
            image: '/thandoor.png',
            category: 'Chicken'
        },
        {
            id: 12,
            name: 'Mango Smoothie',
            price: 4.99,
            description: 'Smooth and creamy mango smoothie.',
            image: '/mango_smoothie.png',
            category: 'Juices'
        },
        {
            id: 13,
            name: 'spaghetti',
            price: 8.49,
            description: 'Spaghetti with authentic italian sesoning',
            image: '/speg.png',
            category: 'pasta'
        },
        {
            id: 14,
            name: 'Apple Pie',
            price: 5.49,
            description: 'Warm apple pie with a flaky crust and cinnamon.',
            image: '/applepie.png',
            category: 'Cakes'
        },
        {
            id: 15,
            name: 'Chicken Tikka Masala',
            price: 12.49,
            description: 'Chicken chunks cooked in a spicy tomato cream sauce.',
            image: '/tikka.png',
            category: 'Chicken'
        }, 
        {
            id: 16,
            name: 'Wood fire pizza',
            price: 6.99,
            description: 'flavourfull pizza with a blend of cheese and spices.',
            image: '/wood.png',
            category: 'pizza'
        },
        {
            id: 17,
            name: 'Chocolate Icecreame',
            price: 6.99,
            description: 'The real swiss flavour',
            image: '/ice.png',
            category: 'Ice Creams'
        }
    ];
    const [cartItems, setCartItems] = useState({});
const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))

    }
}
const removeFromCart=(itemId)=>{
    if(cartItems[itemId]>0){
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
}

useEffect(()=>{
    console.log(cartItems)
},[cartItems])
    // Context value
    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
