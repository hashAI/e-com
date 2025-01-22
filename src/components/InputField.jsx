// src/components/InputField.jsx
import React from 'react';

const InputField = ({ type = 'text', placeholder, value, onChange, className = '', label }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${className}`}
      />
    </div>
  );
};

export default InputField;
