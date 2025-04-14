import watch1 from '../../assets/watch1.jpg';
import watch2 from '../../assets/watch2.jpg';
import watch3 from '../../assets/watch3.jpg';

import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon, EyeIcon } from 'lucide-react';
const products = [{
  id: '1',
  name: 'Chronomaster Elite',
  price: 4999,
  image: watch1,
  category: 'Classic',
  isNew: false,
  isBestseller: true
}, {
  id: '2',
  name: 'Aqua Diver Pro',
  price: 3499,
  image: watch2,
  category: 'Sport',
  isNew: true,
  isBestseller: true
}, {
  id: '3',
  name: 'Royal Gold Limited',
  price: 12999,
  image: watch3,
  category: 'Luxury',
  isNew: false,
  isBestseller: true
}, {
  id: '4',
  name: 'Heritage Automatic',
  price: 5999,
  image: watch1,
  category: 'Classic',
  isNew: false,
  isBestseller: true
}];
const BestsellersGrid = () => {
  return <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Bestsellers</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Our most coveted timepieces, cherished by watch enthusiasts and
            collectors worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map(product => <div key={product.id} className="relative overflow-hidden rounded-lg group bg-gray-850">
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </Link>
                {/* Product Badges */}
                <div className="absolute flex flex-col gap-2 top-4 left-4">
                  {product.isNew && <span className="px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded">
                      NEW
                    </span>}
                  {product.isBestseller && <span className="px-2 py-1 text-xs font-bold text-gray-900 rounded bg-gold-500" style={{
                backgroundColor: '#D4AF37'
              }}>
                      BESTSELLER
                    </span>}
                </div>
                {/* Quick Action Buttons */}
                <div className="absolute flex flex-col gap-2 transition-all duration-300 -right-16 top-4 group-hover:right-4">
                  <button className="p-2 text-gray-900 transition-colors duration-300 bg-white rounded-full shadow-lg hover:bg-gold-500" aria-label="Add to wishlist">
                    <HeartIcon size={18} />
                  </button>
                  <button className="p-2 text-gray-900 transition-colors duration-300 bg-white rounded-full shadow-lg hover:bg-gold-500" aria-label="Quick view">
                    <EyeIcon size={18} />
                  </button>
                  <button className="p-2 text-gray-900 transition-colors duration-300 bg-white rounded-full shadow-lg hover:bg-gold-500" aria-label="Add to cart">
                    <ShoppingBagIcon size={18} />
                  </button>
                </div>
              </div>
              {/* Product Info */}
              <div className="p-4">
                <span className="text-sm text-gray-400">
                  {product.category}
                </span>
                <Link to={`/product/${product.id}`}>
                  <h3 className="mt-1 text-lg font-medium transition-colors duration-300 group-hover:text-gold-500">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-2 text-xl font-bold">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/products" className="inline-block px-8 py-3 font-medium transition-colors duration-300 border-2 rounded border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-gray-900" style={{
          borderColor: '#D4AF37',
          color: '#D4AF37'
        }}>
            View All Products
          </Link>
        </div>
      </div>
    </section>;
};
export default BestsellersGrid;