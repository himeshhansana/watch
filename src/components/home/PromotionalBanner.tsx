import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const PromotionalBanner = () => {
  return <section className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Luxury Watch" className="object-cover w-full h-full" />
      </div>
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute rounded-full bg-gold-500 opacity-20" style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 10 + 10}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: '#D4AF37'
      }} />)}
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-gold-500 mb-3 text-sm uppercase tracking-widest" style={{
          color: '#D4AF37'
        }}>
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Exclusive Collection Launch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Be among the first to experience our new Royal Gold Series. Limited
            edition pieces crafted with precision and luxury in mind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products?collection=limited" className="px-8 py-4 bg-gold-500 text-gray-900 rounded hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center" style={{
            backgroundColor: '#D4AF37'
          }}>
              Shop the Collection
              <ArrowRightIcon size={18} className="ml-2" />
            </Link>
            <Link to="/about" className="px-8 py-4 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Learn Our Craft
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default PromotionalBanner;