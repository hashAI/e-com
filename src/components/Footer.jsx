// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
