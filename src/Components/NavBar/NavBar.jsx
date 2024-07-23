import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src="/logo.png" alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src="search.png" alt="Search Icon" />
        <div className="navbar-search-icon">
         <Link to="/cart"> <img src="cart.png" alt="Cart Icon" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
