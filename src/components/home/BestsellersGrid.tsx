import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon, EyeIcon } from 'lucide-react';
const products = [{
  id: '1',
  name: 'Chronomaster Elite',
  price: 4999,
  image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Classic',
  isNew: false,
  isBestseller: true
}, {
  id: '2',
  name: 'Aqua Diver Pro',
  price: 3499,
  image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Sport',
  isNew: true,
  isBestseller: true
}, {
  id: '3',
  name: 'Royal Gold Limited',
  price: 12999,
  image: 'https://images.unsplash.com/photo-1623998021451-306e52e35562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Luxury',
  isNew: false,
  isBestseller: true
}, {
  id: '4',
  name: 'Heritage Automatic',
  price: 5999,
  image: 'https://images.unsplash.com/photo-1548171915-f9fce29f2422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Classic',
  isNew: false,
  isBestseller: true
}];
const BestsellersGrid = () => {
  return <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bestsellers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our most coveted timepieces, cherished by watch enthusiasts and
            collectors worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <div key={product.id} className="group relative bg-gray-850 rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </Link>
                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>}
                  {product.isBestseller && <span className="bg-gold-500 text-gray-900 text-xs font-bold px-2 py-1 rounded" style={{
                backgroundColor: '#D4AF37'
              }}>
                      BESTSELLER
                    </span>}
                </div>
                {/* Quick Action Buttons */}
                <div className="absolute -right-16 top-4 flex flex-col gap-2 transition-all duration-300 group-hover:right-4">
                  <button className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gold-500 transition-colors duration-300" aria-label="Add to wishlist">
                    <HeartIcon size={18} />
                  </button>
                  <button className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gold-500 transition-colors duration-300" aria-label="Quick view">
                    <EyeIcon size={18} />
                  </button>
                  <button className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gold-500 transition-colors duration-300" aria-label="Add to cart">
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
                  <h3 className="text-lg font-medium mt-1 group-hover:text-gold-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xl font-bold mt-2">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/products" className="inline-block px-8 py-3 border-2 border-gold-500 text-gold-500 font-medium rounded hover:bg-gold-500 hover:text-gray-900 transition-colors duration-300" style={{
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