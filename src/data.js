const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: 'https://picsum.photos/400/300?random=1',
    images: [
      'https://picsum.photos/400/300?random=1',
      'https://picsum.photos/400/300?random=1a',
      'https://picsum.photos/400/300?random=1b'
    ],
    features: [
      'Noise Cancellation',
      'Bluetooth 5.0',
      '20-hour Battery Life'
    ],
    rating: 4.5,
    reviews: 120,
    inStock: true
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699.99,
    description: 'A sleek smartphone with an amazing camera and long battery life.',
    image: 'https://picsum.photos/400/300?random=2',
    images: [
      'https://picsum.photos/400/300?random=2',
      'https://picsum.photos/400/300?random=2a',
      'https://picsum.photos/400/300?random=2b'
    ],
    features: [
      'Amazing Camera',
      'Long Battery Life',
      'Fast Processor'
    ],
    rating: 4.7,
    reviews: 200,
    inStock: true
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    price: 1299.99,
    description: 'A powerful gaming laptop with a high refresh rate screen.',
    image: 'https://picsum.photos/400/300?random=3',
    images: [
      'https://picsum.photos/400/300?random=3',
      'https://picsum.photos/400/300?random=3a',
      'https://picsum.photos/400/300?random=3b'
    ],
    features: [
      'High Refresh Rate Screen',
      'Powerful GPU',
      'RGB Keyboard'
    ],
    rating: 4.8,
    reviews: 150,
    inStock: true
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 199.99,
    description: 'Feature-rich smartwatch with fitness tracking and notifications.',
    image: 'https://picsum.photos/400/300?random=4',
    images: [
      'https://picsum.photos/400/300?random=4',
      'https://picsum.photos/400/300?random=4a',
      'https://picsum.photos/400/300?random=4b'
    ],
    features: [
      'Fitness Tracking',
      'Notifications',
      'Water Resistant'
    ],
    rating: 4.6,
    reviews: 180,
    inStock: true
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    price: 149.99,
    description: 'Compact wireless earbuds with great sound quality.',
    image: 'https://picsum.photos/400/300?random=5',
    images: [
      'https://picsum.photos/400/300?random=5',
      'https://picsum.photos/400/300?random=5a',
      'https://picsum.photos/400/300?random=5b'
    ],
    features: [
      'Great Sound Quality',
      'Compact Design',
      'Long Battery Life'
    ],
    rating: 4.4,
    reviews: 140,
    inStock: true
  },
  {
    id: 6,
    name: 'Tablet',
    price: 449.99,
    description: 'Versatile tablet perfect for work and entertainment.',
    image: 'https://picsum.photos/400/300?random=6',
    images: [
      'https://picsum.photos/400/300?random=6',
      'https://picsum.photos/400/300?random=6a',
      'https://picsum.photos/400/300?random=6b'
    ],
    features: [
      'High Resolution Screen',
      'Long Battery Life',
      'Lightweight'
    ],
    rating: 4.5,
    reviews: 160,
    inStock: true
  },
  {
    id: 7,
    name: '4K Monitor',
    price: 349.99,
    description: 'Crystal clear 4K monitor for an immersive viewing experience.',
    image: 'https://picsum.photos/400/300?random=7',
    images: [
      'https://picsum.photos/400/300?random=7',
      'https://picsum.photos/400/300?random=7a',
      'https://picsum.photos/400/300?random=7b'
    ],
    features: [
      '4K Resolution',
      'HDR Support',
      'Wide Color Gamut'
    ],
    rating: 4.7,
    reviews: 130,
    inStock: true
  },
  {
    id: 8,
    name: 'Gaming Mouse',
    price: 59.99,
    description: 'Precise gaming mouse with customizable buttons.',
    image: 'https://picsum.photos/400/300?random=8',
    images: [
      'https://picsum.photos/400/300?random=8',
      'https://picsum.photos/400/300?random=8a',
      'https://picsum.photos/400/300?random=8b'
    ],
    features: [
      'Customizable Buttons',
      'High DPI Sensor',
      'Ergonomic Design'
    ],
    rating: 4.6,
    reviews: 110,
    inStock: true
  },
  {
    id: 9,
    name: 'Mechanical Keyboard',
    price: 129.99,
    description: 'Tactile mechanical keyboard for the best typing experience.',
    image: 'https://picsum.photos/400/300?random=9',
    images: [
      'https://picsum.photos/400/300?random=9',
      'https://picsum.photos/400/300?random=9a',
      'https://picsum.photos/400/300?random=9b'
    ],
    features: [
      'Tactile Switches',
      'RGB Lighting',
      'Durable Build'
    ],
    rating: 4.8,
    reviews: 140,
    inStock: true
  },
  {
    id: 10,
    name: 'Webcam HD',
    price: 79.99,
    description: 'High-definition webcam for crystal clear video calls.',
    image: 'https://picsum.photos/400/300?random=10',
    images: [
      'https://picsum.photos/400/300?random=10',
      'https://picsum.photos/400/300?random=10a',
      'https://picsum.photos/400/300?random=10b'
    ],
    features: [
      'HD Resolution',
      'Built-in Microphone',
      'Plug and Play'
    ],
    rating: 4.5,
    reviews: 100,
    inStock: true
  },
  {
    id: 11,
    name: 'External SSD 1TB',
    price: 159.99,
    description: 'Fast and portable 1TB external solid state drive.',
    image: 'https://picsum.photos/400/300?random=11',
    images: [
      'https://picsum.photos/400/300?random=11',
      'https://picsum.photos/400/300?random=11a',
      'https://picsum.photos/400/300?random=11b'
    ],
    features: [
      '1TB Capacity',
      'Fast Transfer Speeds',
      'Portable Design'
    ],
    rating: 4.7,
    reviews: 90,
    inStock: true
  },
  {
    id: 12,
    name: 'Graphics Card',
    price: 599.99,
    description: 'High-performance graphics card for gaming and rendering.',
    image: 'https://picsum.photos/400/300?random=12',
    images: [
      'https://picsum.photos/400/300?random=12',
      'https://picsum.photos/400/300?random=12a',
      'https://picsum.photos/400/300?random=12b'
    ],
    features: [
      'High Performance',
      'Ray Tracing',
      'VR Ready'
    ],
    rating: 4.9,
    reviews: 80,
    inStock: true
  },
  {
    id: 13,
    name: 'Router',
    price: 89.99,
    description: 'Dual-band router for fast and reliable internet connection.',
    image: 'https://picsum.photos/400/300?random=13',
    images: [
      'https://picsum.photos/400/300?random=13',
      'https://picsum.photos/400/300?random=13a',
      'https://picsum.photos/400/300?random=13b'
    ],
    features: [
      'Dual-Band',
      'High Speed',
      'Wide Coverage'
    ],
    rating: 4.6,
    reviews: 70,
    inStock: true
  },
  {
    id: 14,
    name: 'Smart Speaker',
    price: 79.99,
    description: 'Voice-controlled smart speaker with rich sound.',
    image: 'https://picsum.photos/400/300?random=14',
    images: [
      'https://picsum.photos/400/300?random=14',
      'https://picsum.photos/400/300?random=14a',
      'https://picsum.photos/400/300?random=14b'
    ],
    features: [
      'Voice Control',
      'Rich Sound',
      'Smart Home Integration'
    ],
    rating: 4.5,
    reviews: 60,
    inStock: true
  },
  {
    id: 15,
    name: 'Wireless Charger',
    price: 29.99,
    description: 'Fast wireless charging pad for compatible devices.',
    image: 'https://picsum.photos/400/300?random=15',
    images: [
      'https://picsum.photos/400/300?random=15',
      'https://picsum.photos/400/300?random=15a',
      'https://picsum.photos/400/300?random=15b'
    ],
    features: [
      'Fast Charging',
      'Compact Design',
      'LED Indicator'
    ],
    rating: 4.4,
    reviews: 50,
    inStock: true
  },
  {
    id: 16,
    name: 'USB-C Hub',
    price: 49.99,
    description: 'Multi-port USB-C hub for expanded connectivity.',
    image: 'https://picsum.photos/400/300?random=16',
    images: [
      'https://picsum.photos/400/300?random=16',
      'https://picsum.photos/400/300?random=16a',
      'https://picsum.photos/400/300?random=16b'
    ],
    features: [
      'Multiple Ports',
      'Compact Design',
      'High Speed'
    ],
    rating: 4.6,
    reviews: 40,
    inStock: true
  },
  {
    id: 17,
    name: 'Bluetooth Speaker',
    price: 129.99,
    description: 'Portable Bluetooth speaker with deep bass.',
    image: 'https://picsum.photos/400/300?random=17',
    images: [
      'https://picsum.photos/400/300?random=17',
      'https://picsum.photos/400/300?random=17a',
      'https://picsum.photos/400/300?random=17b'
    ],
    features: [
      'Deep Bass',
      'Portable Design',
      'Long Battery Life'
    ],
    rating: 4.7,
    reviews: 30,
    inStock: true
  },
  {
    id: 18,
    name: 'Curved Monitor',
    price: 399.99,
    description: 'Immersive curved monitor for enhanced viewing.',
    image: 'https://picsum.photos/400/300?random=18',
    images: [
      'https://picsum.photos/400/300?random=18',
      'https://picsum.photos/400/300?random=18a',
      'https://picsum.photos/400/300?random=18b'
    ],
    features: [
      'Curved Screen',
      'High Resolution',
      'Wide Viewing Angle'
    ],
    rating: 4.8,
    reviews: 20,
    inStock: true
  },
  {
    id: 19,
    name: 'Gaming Chair',
    price: 249.99,
    description: 'Ergonomic gaming chair for comfortable long sessions.',
    image: 'https://picsum.photos/400/300?random=19',
    images: [
      'https://picsum.photos/400/300?random=19',
      'https://picsum.photos/400/300?random=19a',
      'https://picsum.photos/400/300?random=19b'
    ],
    features: [
      'Ergonomic Design',
      'Adjustable Height',
      'Lumbar Support'
    ],
    rating: 4.6,
    reviews: 10,
    inStock: true
  },
  {
    id: 20,
    name: 'Desk Lamp',
    price: 39.99,
    description: 'LED desk lamp with adjustable brightness levels.',
    image: 'https://picsum.photos/400/300?random=20',
    images: [
      'https://picsum.photos/400/300?random=20',
      'https://picsum.photos/400/300?random=20a',
      'https://picsum.photos/400/300?random=20b'
    ],
    features: [
      'Adjustable Brightness',
      'LED Light',
      'Flexible Neck'
    ],
    rating: 4.5,
    reviews: 5,
    inStock: true
  }
];

export { products };

