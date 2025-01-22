import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'With over 15 years of experience in retail and e-commerce.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Leading our design team with innovative and user-centered approaches.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Ensuring exceptional customer service and satisfaction.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
          About MyShop
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to provide high-quality products with exceptional customer service,
          making online shopping a delightful experience for everyone.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 rounded-2xl bg-white elevation-1 hover:elevation-2 smooth-transition">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
          <p className="text-gray-600">
            We carefully curate our products to ensure they meet the highest standards of quality and performance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white elevation-1 hover:elevation-2 smooth-transition">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h3>
          <p className="text-gray-600">
            We believe in fair pricing and work hard to offer competitive prices without compromising quality.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white elevation-1 hover:elevation-2 smooth-transition">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
          <p className="text-gray-600">
            Your satisfaction is our top priority. We're here to help you every step of the way.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover elevation-1"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-indigo-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-white rounded-2xl p-8 elevation-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 smooth-transition elevation-1 hover:elevation-2"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About; 