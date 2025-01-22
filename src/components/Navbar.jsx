// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Cart from './Cart';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update cart count whenever cart items change
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const count = cartItems.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    };

    // Initial count
    updateCartCount();

    // Listen for cart changes
    window.addEventListener('cartItemsChanged', updateCartCount);
    // Listen for open cart requests
    const handleOpenCart = () => setIsCartOpen(true);
    window.addEventListener('openCart', handleOpenCart);

    return () => {
      window.removeEventListener('cartItemsChanged', updateCartCount);
      window.removeEventListener('openCart', handleOpenCart);
    };
  }, []);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                MyShop
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-xl smooth-transition hover:bg-indigo-50"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-xl smooth-transition hover:bg-indigo-50"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-xl smooth-transition hover:bg-indigo-50"
            >
              About
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleToggleCart}
              className="relative p-2 text-gray-700 hover:text-gray-900 smooth-transition rounded-xl hover:bg-indigo-50"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 smooth-transition rounded-xl hover:bg-indigo-50"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white elevation-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-xl smooth-transition hover:bg-indigo-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-xl smooth-transition hover:bg-indigo-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-xl smooth-transition hover:bg-indigo-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </nav>
  );
};

export default Navbar;
