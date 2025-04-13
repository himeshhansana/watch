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
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    cta: 'Explore Collection'
  }, {
    title: 'Limited Edition',
    subtitle: 'The Royal Gold Series',
    description: 'Handcrafted with 18K gold and premium materials for the discerning collector.',
    image: 'https://images.unsplash.com/photo-1623998021451-306e52e35562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    cta: 'Shop Limited Edition'
  }, {
    title: 'Dive Collection',
    subtitle: 'Adventure Awaits',
    description: 'Engineered for the depths, designed for distinction. Water resistant to 300m.',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
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
  return <section className="relative h-screen w-full overflow-hidden bg-gray-950">
      {/* Background Image */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
        </div>)}
      {/* Content */}
      <div className="relative h-full z-10 container mx-auto px-4 flex flex-col justify-center">
        <div className={`max-w-2xl transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block text-gold-500 mb-3 text-sm uppercase tracking-widest" style={{
          color: '#D4AF37'
        }}>
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            {slides[currentSlide].description}
          </p>
          <div className="flex space-x-4">
            <Link to="/products" className="px-8 py-4 bg-gold-500 text-gray-900 rounded hover:bg-gold-600 transition-colors duration-300 flex items-center" style={{
            backgroundColor: '#D4AF37'
          }}>
              {slides[currentSlide].cta}
              <ArrowRightIcon size={18} className="ml-2" />
            </Link>
            <Link to="/about" className="px-8 py-4 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Our Story
            </Link>
          </div>
        </div>
        {/* Slide Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold-500 w-8' : 'bg-gray-500 hover:bg-gray-400'}`} style={{
          backgroundColor: currentSlide === index ? '#D4AF37' : ''
        }} aria-label={`Go to slide ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default HeroSection;