import watch1 from '../assets/watch1.jpg';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersIcon, SearchIcon, XIcon, ChevronDownIcon } from 'lucide-react';
const products = [{
  id: '1',
  name: 'Chronomaster Elite',
  price: 4999,
  image: watch1,
  category: 'Classic',
  collection: 'classic',
  isNew: false,
  isBestseller: true
}, {
  id: '2',
  name: 'Aqua Diver Pro',
  price: 3499,
  image: watch2,
  category: 'Sport',
  collection: 'sport',
  isNew: true,
  isBestseller: true
}, {
  id: '3',
  name: 'Royal Gold Limited',
  price: 12999,
  image: watch3,
  category: 'Luxury',
  collection: 'limited',
  isNew: false,
  isBestseller: true
}, {
  id: '4',
  name: 'Heritage Automatic',
  price: 5999,
  image: watch1,
  category: 'Classic',
  collection: 'classic',
  isNew: false,
  isBestseller: true
}];
const filters = {
  collections: ['Classic', 'Sport', 'Luxury', 'Limited Edition'],
  priceRanges: ['$0 - $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
  features: ['Automatic', 'Chronograph', 'Water Resistant', 'Limited Edition'],
  materials: ['Stainless Steel', 'Gold', 'Titanium', 'Ceramic']
};
const Products = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const collectionFilter = searchParams.get('collection');
  const filteredProducts = products.filter(product => !collectionFilter || product.collection === collectionFilter).filter(product => searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="min-h-screen pt-24 pb-12 bg-gray-950">
      <div className="relative py-12 mb-8 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img src={watch1} alt="" className="object-cover w-full h-full opacity-10" />
        </div>
        <div className="container relative px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Collections
          </h1>
          <p className="max-w-2xl text-xl text-gray-400">
            Discover our curated selection of luxury timepieces, each crafted
            with precision and elegance.
          </p>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between mb-8 space-y-4 md:flex-row md:items-center md:space-y-0">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center px-4 py-2 space-x-2 transition-colors duration-300 bg-gray-900 rounded-lg hover:bg-gray-800">
            <SlidersIcon size={20} />
            <span>Filters</span>
          </button>
          <div className="flex items-center w-full space-x-4 md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 bg-gray-900 rounded-lg outline-none md:w-64 focus:ring-2 focus:ring-gold-500" />
              <SearchIcon size={20} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            </div>
            <div className="relative">
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 pr-10 bg-gray-900 rounded-lg outline-none appearance-none focus:ring-2 focus:ring-gold-500">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDownIcon size={20} className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
          </div>
        </div>
        {isFilterOpen && <div className="p-6 mb-8 bg-gray-900 rounded-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {Object.entries(filters).map(([category, options]) => <div key={category}>
                  <h3 className="mb-3 text-lg font-medium capitalize">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {options.map(option => <label key={option} className="flex items-center space-x-2 text-gray-300 cursor-pointer hover:text-white">
                        <input type="checkbox" className="border-gray-600 rounded form-checkbox text-gold-500 focus:ring-gold-500" checked={activeFilters.includes(option)} onChange={() => {
                  setActiveFilters(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
                }} />
                        <span>{option}</span>
                      </label>)}
                  </div>
                </div>)}
            </div>
          </div>}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map(product => <div key={product.id} className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden aspect-square">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                {product.isNew && <span className="absolute px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded top-4 left-4">
                    NEW
                  </span>}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-medium transition-colors duration-300 group-hover:text-gold-500">
                  {product.name}
                </h3>
                <p className="mb-3 text-gray-400">{product.category}</p>
                <p className="text-xl font-bold">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Products;