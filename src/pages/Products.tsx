import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersIcon, SearchIcon, XIcon, ChevronDownIcon } from 'lucide-react';
const products = [{
  id: '1',
  name: 'Chronomaster Elite',
  price: 4999,
  image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Classic',
  collection: 'classic',
  isNew: false,
  isBestseller: true
}, {
  id: '2',
  name: 'Aqua Diver Pro',
  price: 3499,
  image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Sport',
  collection: 'sport',
  isNew: true,
  isBestseller: true
}, {
  id: '3',
  name: 'Royal Gold Limited',
  price: 12999,
  image: 'https://images.unsplash.com/photo-1623998021451-306e52e35562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Luxury',
  collection: 'limited',
  isNew: false,
  isBestseller: true
}, {
  id: '4',
  name: 'Heritage Automatic',
  price: 5999,
  image: 'https://images.unsplash.com/photo-1548171915-f9fce29f2422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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
  return <div className="pt-24 pb-12 min-h-screen bg-gray-950">
      <div className="relative bg-gray-900 py-12 mb-8">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Discover our curated selection of luxury timepieces, each crafted
            with precision and elegance.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            <SlidersIcon size={20} />
            <span>Filters</span>
          </button>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full md:w-64 px-4 py-2 pl-10 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" />
              <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="appearance-none px-4 py-2 pr-10 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDownIcon size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        {isFilterOpen && <div className="mb-8 p-6 bg-gray-900 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Object.entries(filters).map(([category, options]) => <div key={category}>
                  <h3 className="text-lg font-medium mb-3 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {options.map(option => <label key={option} className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
                        <input type="checkbox" className="form-checkbox text-gold-500 rounded border-gray-600 focus:ring-gold-500" checked={activeFilters.includes(option)} onChange={() => {
                  setActiveFilters(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
                }} />
                        <span>{option}</span>
                      </label>)}
                  </div>
                </div>)}
            </div>
          </div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => <div key={product.id} className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {product.isNew && <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2 group-hover:text-gold-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-3">{product.category}</p>
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