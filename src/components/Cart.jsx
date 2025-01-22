import React, { useState, useEffect, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Cart = forwardRef(({ onClose, isOpen }, ref) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items whenever cart is opened or when localStorage changes
  useEffect(() => {
    if (isOpen) {
      const loadCartItems = () => {
        const savedCart = localStorage.getItem('cartItems');
        setCartItems(savedCart ? JSON.parse(savedCart) : []);
      };
      loadCartItems();
    }
  }, [isOpen]);

  // Also listen for cart changes from other components
  useEffect(() => {
    const handleCartChange = () => {
      const savedCart = localStorage.getItem('cartItems');
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    };

    window.addEventListener('cartItemsChanged', handleCartChange);
    return () => window.removeEventListener('cartItemsChanged', handleCartChange);
  }, []);

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('cartItemsChanged'));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('cartItemsChanged'));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const getFallbackImage = (name) => {
    return `https://source.unsplash.com/400x400/?${encodeURIComponent(name.split(' ')[0])}`;
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${!isOpen ? 'pointer-events-none' : ''}`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-0'
        }`} />

      {/* Cart panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white elevation-3 transform transition-transform duration-300 ease-in-out ${!isOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <h1 className="text-xl font-semibold">Shopping Cart {cartItems.length === 0 && '(Empty)'}</h1>
          <button
            onClick={handleClose}
            className="p-2 text-white hover:bg-white/10 smooth-transition rounded-xl"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="w-16 h-16 mb-4 text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Cart is Empty</h2>
              <p className="text-gray-600">Add some products to start shopping!</p>
              <button
                onClick={() => {
                  navigate('/shop');
                  handleClose();
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 smooth-transition"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 smooth-transition hover:bg-gray-50 elevation-1 hover:elevation-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null; // Prevent infinite loop
                          e.target.src = getFallbackImage(item.name);
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* Quantity Controls and Remove Button */}
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        <div className="flex items-center rounded-xl border overflow-hidden bg-white elevation-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1.5 text-gray-700 hover:bg-indigo-50 smooth-transition font-medium"
                          >
                            -
                          </button>
                          <span className="px-4 py-1.5 text-gray-900 bg-white font-medium border-x">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1.5 text-gray-700 hover:bg-indigo-50 smooth-transition font-medium"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-pink-500 hover:bg-pink-50 smooth-transition text-sm font-medium px-4 py-1.5 rounded-xl flex items-center gap-1 border border-transparent hover:border-pink-100"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 bg-white border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">
                Total: <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  ${calculateTotal().toFixed(2)}
                </span>
              </span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 smooth-transition elevation-1 hover:elevation-2"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

Cart.displayName = 'Cart';

export default Cart;
