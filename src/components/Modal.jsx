// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
