import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../photos/WhatsApp.jpg'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 text-purple-700">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 rounded-full" />
        <ul className="flex ml-10 space-x-8">
          <li>
            <Link to="/" className="hover:text-purple-900">બેસના જોવો</Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-purple-900">બેસણા મુકો</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
