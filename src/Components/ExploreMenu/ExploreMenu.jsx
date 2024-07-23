import React from 'react';
import './ExploreMenu.css';

const menuItems = [
  {
    imgSrc: '/dosa.png',
    name: 'Dosa'
  },
  {
    imgSrc: '/chicken biriyani.png',
    name: 'Biriyani'
  },
  {
    imgSrc: '/noodles.png',
    name: 'Noodles'
  },
  {
    imgSrc: '/pasta.png',
    name: 'Pasta'
  },
  {
    imgSrc: '/fish.png',
    name: 'Fish'
  },
  {
    imgSrc: '/pizza.png',
    name: 'Pizza'
  },
  {
    imgSrc: '/burger.png',
    name: 'Burger'
  },
  {
    imgSrc: '/jar cake.png',
    name: 'Cakes'
  },
  {
    imgSrc: '/ckicken.png',
    name: 'Chicken'
  },
  {
    imgSrc: '/salad.png',
    name: 'Slads'
  },
  {
    imgSrc: '/juice.png',
    name: 'Juices'
  },
  {
    imgSrc: '/icecream.png',
    name: 'Ice Creams'
  },
];

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <h1>Our Signature Dishes</h1>
      <div className='explore-menu-list'>
        {menuItems.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.name ? 'All' : item.name)}
            className='explore-menu-item'
            key={index}
          >
            <img className={category === item.name ? "active" : ""} src={item.imgSrc} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
