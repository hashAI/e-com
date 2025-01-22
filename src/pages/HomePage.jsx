import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { toast } from 'react-hot-toast';
import { products } from '../data';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [gamingEssentials, setGamingEssentials] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Get featured products (first 4 products)
    setFeaturedProducts(products.slice(0, 4));

    // Get new arrivals (last 4 products)
    setNewArrivals(products.slice(-4));

    // Get gaming products (products with "Gaming" in the name)
    setGamingEssentials(products.filter(p =>
      p.name.toLowerCase().includes('gaming') ||
      p.description.toLowerCase().includes('gaming')
    ).slice(0, 4));

    // Get best sellers (random 4 products with high ratings)
    setBestSellers(
      products
        .filter(p => p.rating >= 4.7)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
    );
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('cartItemsChanged'));
    window.dispatchEvent(new Event('openCart'));

    toast.success(`${product.name} added to cart!`);
  };

  const renderSection = (title, products, link) => {
    if (!products || products.length === 0) return null;

    return (
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <Link
            to={link}
            className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center gap-1"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {renderSection('Featured Products', featuredProducts, '/shop?category=featured')}
      {renderSection('New Arrivals', newArrivals, '/shop?category=new')}
      {renderSection('Gaming Essentials', gamingEssentials, '/shop?category=gaming')}
      {renderSection('Best Sellers', bestSellers, '/shop?category=best-sellers')}

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, exclusive offers, and exciting deals!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
