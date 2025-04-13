import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const collections = [{
  id: 'classic',
  name: 'Classic Collection',
  description: 'Timeless designs that embody elegance and sophistication.',
  image: 'https://images.unsplash.com/photo-1548171915-f9fce29f2422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'sport',
  name: 'Sport Collection',
  description: 'Engineered for adventure, built to last through any challenge.',
  image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'luxury',
  name: 'Luxury Collection',
  description: 'Premium materials and exquisite craftsmanship for the discerning.',
  image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'limited',
  name: 'Limited Edition',
  description: 'Exclusive designs with unique features in limited quantities.',
  image: 'https://images.unsplash.com/photo-1642091824123-0c33c7109088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}];
const FeaturedCollections = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 400;
    const newPosition = direction === 'left' ? Math.max(0, scrollPosition - scrollAmount) : Math.min(sliderRef.current.scrollWidth - sliderRef.current.clientWidth, scrollPosition + scrollAmount);
    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
  };
  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };
  return <section className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections of luxury timepieces, each with its
            own unique character and story.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Arrows */}
          <button onClick={() => scroll('left')} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 backdrop-blur-sm text-white hover:bg-gold-500 hover:text-gray-900 transition-colors duration-300 ${scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} disabled={scrollPosition <= 0} style={{
          backgroundColor: scrollPosition > 0 ? '' : '',
          color: scrollPosition > 0 ? '' : ''
        }} aria-label="Previous collection">
            <ChevronLeftIcon size={24} />
          </button>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 backdrop-blur-sm text-white hover:bg-gold-500 hover:text-gray-900 transition-colors duration-300" style={{
          backgroundColor: '',
          color: ''
        }} aria-label="Next collection">
            <ChevronRightIcon size={24} />
          </button>
          {/* Collections Slider */}
          <div ref={sliderRef} className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory" onScroll={handleScroll}>
            {collections.map(collection => <div key={collection.id} className="min-w-[300px] md:min-w-[400px] snap-start bg-gray-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <Link to={`/products?collection=${collection.id}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {collection.description}
                    </p>
                    <span className="text-gold-500 font-medium flex items-center" style={{
                  color: '#D4AF37'
                }}>
                      Explore Collection
                      <ChevronRightIcon size={16} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedCollections;