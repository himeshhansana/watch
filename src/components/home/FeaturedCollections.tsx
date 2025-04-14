import watch1 from '../../assets/watch1.jpg';
import watch2 from '../../assets/watch2.jpg';
import watch3 from '../../assets/watch3.jpg';

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const collections = [{
  id: 'classic',
  name: 'Classic Collection',
  description: 'Timeless designs that embody elegance and sophistication.',
  image: watch1
}, {
  id: 'sport',
  name: 'Sport Collection',
  description: 'Engineered for adventure, built to last through any challenge.',
  image: watch2
}, {
  id: 'luxury',
  name: 'Luxury Collection',
  description: 'Premium materials and exquisite craftsmanship for the discerning.',
  image: watch3
}, {
  id: 'limited',
  name: 'Limited Edition',
  description: 'Exclusive designs with unique features in limited quantities.',
  image: watch1
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
  return <section className="relative py-20 bg-gray-950">
    <div className="container px-4 mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Featured Collections
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
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
        <button onClick={() => scroll('right')} className="absolute right-0 z-10 p-2 text-white transition-colors duration-300 -translate-y-1/2 rounded-full top-1/2 bg-gray-900/80 backdrop-blur-sm hover:bg-gold-500 hover:text-gray-900" style={{
          backgroundColor: '',
          color: ''
        }} aria-label="Next collection">
          <ChevronRightIcon size={24} />
        </button>
        {/* Collections Slider */}
        <div ref={sliderRef} className="flex pb-4 space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory" onScroll={handleScroll}>
          {collections.map(collection => <div key={collection.id} className="min-w-[300px] md:min-w-[400px] snap-start bg-gray-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <Link to={`/products?collection=${collection.id}`} className="block">
              <div className="relative h-64 overflow-hidden">
                <img src={collection.image} alt={collection.name} className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  {collection.name}
                </h3>
                <p className="mb-4 text-gray-400">
                  {collection.description}
                </p>
                <span className="flex items-center font-medium text-gold-500" style={{
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