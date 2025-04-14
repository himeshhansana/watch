
import watch1 from '../assets/watch1.jpg';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, ShareIcon, ChevronRightIcon, MinusIcon, PlusIcon, CheckIcon } from 'lucide-react';
const product = {
  id: '1',
  name: 'Chronomaster Elite',
  price: 4999,
  description: 'The Chronomaster Elite represents the pinnacle of watchmaking excellence. This masterpiece combines traditional craftsmanship with modern innovation, featuring a self-winding movement, chronograph function, and water resistance up to 100 meters.',
  features: ['Swiss-made automatic movement', 'Sapphire crystal glass', '100m water resistance', 'Chronograph function', '42mm case diameter'],
  specifications: {
    movement: 'Automatic',
    caseSize: '42mm',
    caseMaterial: '316L Stainless Steel',
    waterResistance: '100m',
    crystal: 'Sapphire',
    dialColor: 'Black',
    strapMaterial: 'Genuine Leather'
  },
  images: [watch1, watch2, watch3],
  category: 'Classic',
  availability: true
};
const relatedProducts = [{
  id: '2',
  name: 'Aqua Diver Pro',
  price: 3499,
  image: watch2
}, {
  id: '3',
  name: 'Royal Gold Limited',
  price: 12999,
  image: watch3
}];
const ProductDetail = () => {
  const {
    id
  } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  return <div className="min-h-screen pt-24 pb-12 bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-8 space-x-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-gold-500">
            Home
          </Link>
          <ChevronRightIcon size={16} />
          <Link to="/products" className="hover:text-gold-500">
            Collections
          </Link>
          <ChevronRightIcon size={16} />
          <span className="text-gold-500">{product.name}</span>
        </div>
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden bg-gray-900 rounded-lg aspect-square">
              <img src={product.images[selectedImage]} alt={product.name} className="object-cover w-full h-full" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => <button key={index} onClick={() => setSelectedImage(index)} className={`aspect-square bg-gray-900 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-gold-500' : ''}`}>
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="object-cover w-full h-full" />
                </button>)}
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              {product.name}
            </h1>
            <p className="mb-6 text-3xl font-bold">
              ${product.price.toLocaleString()}
            </p>
            <p className="mb-8 text-gray-400">{product.description}</p>
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon size={16} className="mr-2 text-gold-500" />
                    {feature}
                  </li>)}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-700 rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 transition-colors duration-300 hover:text-gold-500">
                    <MinusIcon size={20} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 transition-colors duration-300 hover:text-gold-500">
                    <PlusIcon size={20} />
                  </button>
                </div>
                <button className="flex items-center justify-center flex-grow px-6 py-3 font-medium text-gray-900 transition-colors duration-300 rounded-lg bg-gold-500 hover:bg-gold-600">
                  <ShoppingBagIcon size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center flex-1 py-3 transition-colors duration-300 border border-gray-700 rounded-lg hover:border-gold-500">
                  <HeartIcon size={20} className="mr-2" />
                  Add to Wishlist
                </button>
                <button className="flex items-center justify-center flex-1 py-3 transition-colors duration-300 border border-gray-700 rounded-lg hover:border-gold-500">
                  <ShareIcon size={20} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div className="flex mb-8 border-b border-gray-800">
            <button onClick={() => setActiveTab('description')} className={`py-4 px-8 font-medium ${activeTab === 'description' ? 'border-b-2 border-gold-500 text-gold-500' : 'text-gray-400 hover:text-white'}`}>
              Description
            </button>
            <button onClick={() => setActiveTab('specifications')} className={`py-4 px-8 font-medium ${activeTab === 'specifications' ? 'border-b-2 border-gold-500 text-gold-500' : 'text-gray-400 hover:text-white'}`}>
              Specifications
            </button>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg">
            {activeTab === 'description' ? <div className="prose prose-invert max-w-none">
                <p className="leading-relaxed text-gray-300">
                  {product.description}
                </p>
              </div> : <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => <div key={key} className="flex justify-between pb-4 border-b border-gray-800">
                    <span className="text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span>{value}</span>
                  </div>)}
              </div>}
          </div>
        </div>
        <div>
          <h2 className="mb-8 text-2xl font-bold">Related Products</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map(product => <Link key={product.id} to={`/product/${product.id}`} className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <div className="overflow-hidden aspect-square">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium transition-colors duration-300 group-hover:text-gold-500">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </Link>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetail;