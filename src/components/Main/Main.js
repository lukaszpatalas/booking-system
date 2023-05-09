import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Booking from '../Booking/Booking';
import Account from '../Account/Account';
import Download from '../Download/Download';
import Contact from '../Contact/Contact';
import LoginSignup from '../LoginSignup/LoginSignup';
import WhyMakaton from '../WhyMakaton/WhyMakaton';
import Admin from '../Admin/Admin';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/booking" element={<Booking />} />
        <Route path="/account" element={<Account />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/why-makaton" element={<WhyMakaton />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
  );
};

export default Main;
