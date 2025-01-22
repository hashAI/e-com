import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon, TruckIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number

  // Add useEffect to clear cart on successful order
  useEffect(() => {
    // Clear the cart
    localStorage.removeItem('cartItems');
    // Dispatch event to update cart count in navbar
    window.dispatchEvent(new Event('cartItemsChanged'));
  }, []);

  const steps = [
    {
      title: 'Order Confirmation Email',
      description: 'We have sent a confirmation email with your order details.',
      icon: EnvelopeIcon,
    },
    {
      title: 'Order Processing',
      description: 'Our team is preparing your items for shipment.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Shipping',
      description: 'Your order will be shipped within 1-2 business days.',
      icon: TruckIcon,
    },
    {
      title: 'Delivery',
      description: 'Estimated delivery time is 3-5 business days.',
      icon: HomeIcon,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Success Message */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
          Order Confirmed!
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Thank you for your purchase. Your order has been received.
        </p>
        <p className="text-lg font-medium text-gray-900">
          Order Number: #{orderNumber}
        </p>
      </div>

      {/* Order Timeline */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white rounded-2xl p-6 elevation-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">What's Next?</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-500 to-purple-500 mx-auto my-2" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="text-center space-y-4">
        <button
          onClick={() => navigate('/shop')}
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 smooth-transition elevation-1 hover:elevation-2"
        >
          Continue Shopping
        </button>
        <p className="text-gray-600">
          Have questions about your order?{' '}
          <button
            onClick={() => navigate('/contact')}
            className="text-indigo-500 hover:text-indigo-600 font-medium"
          >
            Contact Support
          </button>
        </p>
      </div>

      {/* Additional Information */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="bg-indigo-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Information</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• You will receive order updates via email</li>
            <li>• Track your order using the order number provided above</li>
            <li>• For any changes to your order, please contact us within 24 hours</li>
            <li>• Keep your order confirmation email for future reference</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 