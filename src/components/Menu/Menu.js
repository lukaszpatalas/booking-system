// In Menu.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`menu${isOpen ? ' open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-items">
        <NavLink exact={true} to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/booking" onClick={toggleMenu}>Booking</NavLink>
        <NavLink to="/account" onClick={toggleMenu}>Account</NavLink>
        <NavLink to="/download" onClick={toggleMenu}>Download</NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
        <NavLink to="/why-makaton" onClick={toggleMenu}>Why Makaton</NavLink>
        <NavLink to="/admin" onClick={toggleMenu}>Admin</NavLink>
      </div>
      <div className="login-signup">
      <NavLink to="/login-signup">Login/Signup</NavLink>
      </div>
    </nav>
  );
};

export default Menu;