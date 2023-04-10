import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={menuOpen ? 'menu-open' : ''}>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/booking" activeClassName="active">Booking</NavLink>
        <NavLink to="/account" activeClassName="active">Account</NavLink>
        <NavLink to="/download" activeClassName="active">Download</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/why-makaton" activeClassName="active">Why Makaton</NavLink>
      </nav>
      <NavLink to="/login-signup" activeClassName="active" className="login-signup">
        Login/Signup
      </NavLink>
    </header>
  );
};

export default Menu;
