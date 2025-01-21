import React, { useState } from "react";
import logo from '../assets/Logo.png'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 mb-44">
    <div className="w-full mx-auto flex justify-start  md:justify-around gap-5 md:gap-[10%] items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Logo and Name */}
      <div className="flex flex-row justify-center items-center space-x-2">
         {/* Changed flex-col to flex-row */}
  <img src={logo} alt="Logo" className="w-40" />
  <span className="text-[#567579] text-lg md:text-4xl font-bold">SnowTop Travels</span>
</div>

  
      {/* Navbar Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-12">
        <a
          href="/"
          className="relative text-gray-800 text-lg font-medium hover:text-[#567579] transition duration-300 ease-in-out group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#567579] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/destinations"
          className="relative text-gray-800 text-lg font-medium hover:text-[#567579] transition duration-300 ease-in-out group"
        >
          Destinations
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#567579] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/about"
          className="relative text-gray-800 text-lg font-medium hover:text-[#567579] transition duration-300 ease-in-out group"
        >
          About
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#567579] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/contact"
          className="relative text-gray-800 text-lg font-medium hover:text-[#567579] transition duration-300 ease-in-out group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#567579] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
  
        {/* Language Selector */}
        <select className="text-gray-800 bg-white border border-gray-300 text-lg p-3 rounded-md hover:border-[#567579] transition duration-200">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
  
    
    </div>
  
    {/* Mobile Menu (Responsive) */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-white shadow-md text-gray-800">
        <a
          href="/"
          className="block py-3 px-6 border-t border-gray-200 text-lg font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Home
        </a>
        <a
          href="/destinations"
          className="block py-3 px-6 border-t border-gray-200 text-lg font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Destinations
        </a>
        <a
          href="/about"
          className="block py-3 px-6 border-t border-gray-200 text-lg font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="/contact"
          className="block py-3 px-6 border-t border-gray-200 text-lg font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Contact
        </a>
  
        {/* Mobile Language Selector */}
        <select className="block w-full p-3 bg-white border border-gray-300 text-lg text-gray-800 hover:border-[#567579]">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    )}
  </nav>
  
  );
};

export default Navbar;
