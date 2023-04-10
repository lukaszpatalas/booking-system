// In Menu.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/booking">Booking</NavLink>
      <NavLink to="/account">Account</NavLink>
      <NavLink to="/download">Download</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login/Signup</NavLink>
      <NavLink to="/why-makaton">Why Makaton</NavLink>
    </nav>
  );
};

export default Menu;