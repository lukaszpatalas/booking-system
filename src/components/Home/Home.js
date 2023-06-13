import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const links = [
    { name: 'Account', to: '/account' },
    { name: 'Admin', to: '/admin' },
    { name: 'Booking', to: '/booking' },
    { name: 'Contact', to: '/contact' },
    { name: 'Download', to: '/download' },
    { name: 'LoginSignup', to: '/login-signup' },
    { name: 'WhyMakaton', to: '/why-makaton' },
  ];

  return (
    <div>
      <Header />
      <div className="home-grid">
        {links.map(link => (
          <Link to={link.to} className="home-grid-item" key={link.name}>
            <img src="#" alt={`${link.name} icon`} /> {/* Placeholder image */}
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
