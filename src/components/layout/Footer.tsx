import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-serif tracking-wider text-gold-500 mb-4 block" style={{
            color: '#D4AF37'
          }}>
              CHRONOS
            </Link>
            <p className="text-gray-400 mt-4">
              Crafting timepieces of exceptional quality and design since 1895.
              Each watch tells a story of precision, elegance, and timeless
              luxury.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?collection=classic" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  Classic Collection
                </Link>
              </li>
              <li>
                <Link to="/products?collection=sport" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  Sport Collection
                </Link>
              </li>
              <li>
                <Link to="/products?collection=limited" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  Limited Editions
                </Link>
              </li>
              <li>
                <Link to="/products?collection=new" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex mb-6">
              <input type="email" placeholder="Enter your email" className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-l outline-none focus:ring-2 focus:ring-gold-500 flex-grow" />
              <button className="bg-gold-500 hover:bg-gold-600 text-gray-900 px-4 py-2 rounded-r transition-colors duration-300 flex items-center justify-center" style={{
              backgroundColor: '#D4AF37'
            }}>
                <MailIcon size={18} />
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 CHRONOS Luxury Timepieces. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-gold-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-gold-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;