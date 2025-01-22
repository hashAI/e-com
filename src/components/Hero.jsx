// src/components/Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative text-center max-w-4xl px-4">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Your One-Stop Shop for
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
            Amazing Products
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Discover the best deals and exclusive offers on our wide range of products.
        </p>

        {/* Call-to-Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Now
          </button>
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
