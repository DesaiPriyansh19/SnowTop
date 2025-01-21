import React from 'react';
import logo from '../assets/Logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#c2cacb] text-white py-16 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
          
          {/* Logo Section */}
          <div className="flex flex-row md:flex-col justify-center items-center space-x-2">
         {/* Changed flex-col to flex-row */}
  <img src={logo} alt="Logo" className="w-40 md:w-48" />
  <span className="text-[#567579] text-lg md:text-3xl font-bold">SnowTop Travels</span>
</div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-700 text-lg hover:text-blue-500">About Us</a></li>
                <li><a href="/contact" className="text-gray-700 text-lg hover:text-blue-500">Contact</a></li>
                <li><a href="/privacy" className="text-gray-700 text-lg hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-700 text-lg hover:text-blue-500">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">Explore</h3>
              <ul className="space-y-2">
                <li><a href="/destinations" className="text-gray-700 text-lg hover:text-blue-500">Destinations</a></li>
                <li><a href="/blog" className="text-gray-700 text-lg hover:text-blue-500">Travel Blog</a></li>
                <li><a href="/faqs" className="text-gray-700 text-lg hover:text-blue-500">FAQs</a></li>
                <li><a href="/gallery" className="text-gray-700 text-lg hover:text-blue-500">Gallery</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-lg text-gray-600">
          <p>&copy; {new Date().getFullYear()} SnowTop Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
