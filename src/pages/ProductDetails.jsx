// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon, TruckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { products } from '../data';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productDetails = products.find((product) => product.id === parseInt(id));
    setProduct(productDetails);
  }, [id]);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity,
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Dispatch two events:
    // 1. Update cart items
    window.dispatchEvent(new CustomEvent('cartItemsChanged', { detail: cartItems }));
    // 2. Open cart drawer
    window.dispatchEvent(new CustomEvent('openCart'));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Image gallery */}
        <div className="mb-8 lg:mb-0">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg ${selectedImage === index ? 'ring-2 ring-indigo-500' : ''
                  }`}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="lg:pl-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Price and Rating */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-5 w-5 ${index < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-200'
                      }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="h-5 w-5 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 rounded-xl border text-gray-600 hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-gray-900 font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 rounded-xl border text-gray-600 hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 smooth-transition elevation-1 hover:elevation-2"
          >
            Add to Cart
          </button>

          {/* Additional info */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <ShieldCheckIcon className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Secure Payment</p>
            </div>
            <div className="text-center">
              <TruckIcon className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Fast Delivery</p>
            </div>
            <div className="text-center">
              <ArrowPathIcon className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
