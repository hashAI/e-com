
import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 dark:bg-green-600';
      case 'error':
        return 'bg-red-500 dark:bg-red-600';
      case 'warning':
        return 'bg-yellow-500 dark:bg-yellow-600';
      default:
        return 'bg-blue-500 dark:bg-blue-600';
    }
  };

  return (
    <div className={`
      fixed z-50
      sm:top-4 sm:right-4 
      bottom-4 right-4 sm:bottom-auto
      max-w-[calc(100%-2rem)] sm:max-w-sm
      px-4 py-3 rounded-lg
      text-white shadow-lg 
      transform transition-all duration-300 ease-in-out
      ${getTypeStyles()}
      animate-slide-in
    `}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm sm:text-base font-medium break-words">{message}</p>
        <button
          onClick={onClose}
          className="shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Add this to your global CSS or Tailwind config
const styles = {
  '.animate-slide-in': {
    '@keyframes slideIn': {
      '0%': {
        transform: 'translateX(100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: '1'
      }
    },
    animation: 'slideIn 0.3s ease-out forwards'
  }
};

export default Toast;

