// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-white font-semibold transition-all 
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
        ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
