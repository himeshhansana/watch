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
  images: ['https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1623998021451-306e52e35562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
  category: 'Classic',
  availability: true
};
const relatedProducts = [{
  id: '2',
  name: 'Aqua Diver Pro',
  price: 3499,
  image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  id: '3',
  name: 'Royal Gold Limited',
  price: 12999,
  image: 'https://images.unsplash.com/photo-1623998021451-306e52e35562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}];
const ProductDetail = () => {
  const {
    id
  } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  return <div className="pt-24 pb-12 min-h-screen bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => <button key={index} onClick={() => setSelectedImage(index)} className={`aspect-square bg-gray-900 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-gold-500' : ''}`}>
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold mb-6">
              ${product.price.toLocaleString()}
            </p>
            <p className="text-gray-400 mb-8">{product.description}</p>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon size={16} className="text-gold-500 mr-2" />
                    {feature}
                  </li>)}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-700 rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-gold-500 transition-colors duration-300">
                    <MinusIcon size={20} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-gold-500 transition-colors duration-300">
                    <PlusIcon size={20} />
                  </button>
                </div>
                <button className="flex-grow py-3 px-6 bg-gold-500 text-gray-900 rounded-lg hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center font-medium">
                  <ShoppingBagIcon size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 py-3 border border-gray-700 rounded-lg hover:border-gold-500 transition-colors duration-300 flex items-center justify-center">
                  <HeartIcon size={20} className="mr-2" />
                  Add to Wishlist
                </button>
                <button className="flex-1 py-3 border border-gray-700 rounded-lg hover:border-gold-500 transition-colors duration-300 flex items-center justify-center">
                  <ShareIcon size={20} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div className="flex border-b border-gray-800 mb-8">
            <button onClick={() => setActiveTab('description')} className={`py-4 px-8 font-medium ${activeTab === 'description' ? 'border-b-2 border-gold-500 text-gold-500' : 'text-gray-400 hover:text-white'}`}>
              Description
            </button>
            <button onClick={() => setActiveTab('specifications')} className={`py-4 px-8 font-medium ${activeTab === 'specifications' ? 'border-b-2 border-gold-500 text-gold-500' : 'text-gray-400 hover:text-white'}`}>
              Specifications
            </button>
          </div>
          <div className="bg-gray-900 rounded-lg p-8">
            {activeTab === 'description' ? <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(product.specifications).map(([key, value]) => <div key={key} className="flex justify-between border-b border-gray-800 pb-4">
                    <span className="text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span>{value}</span>
                  </div>)}
              </div>}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(product => <Link key={product.id} to={`/product/${product.id}`} className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-gold-500 transition-colors duration-300">
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