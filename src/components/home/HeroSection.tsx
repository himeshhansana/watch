import watch1 from '../../assets/watch1.jpg';
import watch2 from '../../assets/watch2.jpg';
import watch3 from '../../assets/watch3.jpg';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = [{
    title: 'Precision Engineering',
    subtitle: 'The Chronomaster Collection',
    description: 'Timeless elegance meets cutting-edge precision in our signature collection.',
    image: watch1,
    cta: 'Explore Collection'
  }, {
    title: 'Limited Edition',
    subtitle: 'The Royal Gold Series',
    description: 'Handcrafted with 18K gold and premium materials for the discerning collector.',
    image: watch2,
    cta: 'Shop Limited Edition'
  }, {
    title: 'Dive Collection',
    subtitle: 'Adventure Awaits',
    description: 'Engineered for the depths, designed for distinction. Water resistant to 300m.',
    image: watch3,
    cta: 'Discover Dive Watches'
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }
  };
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(false);
      }, 500);
    }
  };
  return <section className="relative w-full h-screen overflow-hidden bg-gray-950">
      {/* Background Image */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
          <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
        </div>)}
      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-center h-full px-4 mx-auto">
        <div className={`max-w-2xl transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block mb-3 text-sm tracking-widest uppercase text-gold-500" style={{
          color: '#D4AF37'
        }}>
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {slides[currentSlide].title}
          </h1>
          <p className="max-w-lg mb-8 text-lg text-gray-300 md:text-xl">
            {slides[currentSlide].description}
          </p>
          <div className="flex space-x-4">
            <Link to="/products" className="flex items-center px-8 py-4 text-gray-900 transition-colors duration-300 rounded bg-gold-500 hover:bg-gold-600" style={{
            backgroundColor: '#D4AF37'
          }}>
              {slides[currentSlide].cta}
              <ArrowRightIcon size={18} className="ml-2" />
            </Link>
            <Link to="/about" className="px-8 py-4 text-white transition-colors duration-300 border border-white rounded hover:bg-white hover:text-gray-900">
              Our Story
            </Link>
          </div>
        </div>
        {/* Slide Controls */}
        <div className="absolute flex space-x-3 transform -translate-x-1/2 bottom-10 left-1/2">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold-500 w-8' : 'bg-gray-500 hover:bg-gray-400'}`} style={{
          backgroundColor: currentSlide === index ? '#D4AF37' : ''
        }} aria-label={`Go to slide ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default HeroSection;