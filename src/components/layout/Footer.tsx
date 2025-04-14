import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="block mb-4 font-serif text-2xl tracking-wider text-gold-500" style={{
            color: '#D4AF37'
          }}>
              CHRONOS
            </Link>
            <p className="mt-4 text-gray-400">
              Crafting timepieces of exceptional quality and design since 1895.
              Each watch tells a story of precision, elegance, and timeless
              luxury.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?collection=classic" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  Classic Collection
                </Link>
              </li>
              <li>
                <Link to="/products?collection=sport" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  Sport Collection
                </Link>
              </li>
              <li>
                <Link to="/products?collection=limited" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  Limited Editions
                </Link>
              </li>
              <li>
                <Link to="/products?collection=new" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Stay Connected</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex mb-6">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-l outline-none focus:ring-2 focus:ring-gold-500" />
              <button className="flex items-center justify-center px-4 py-2 text-gray-900 transition-colors duration-300 rounded-r bg-gold-500 hover:bg-gold-600" style={{
              backgroundColor: '#D4AF37'
            }}>
                <MailIcon size={18} />
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-gold-400">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2025 CHRONOS Luxury Timepieces. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed by <a href="https://himesh-hansana.vercel.app/" className="text-gray-500 transition-colors duration-300 hover:text-gold-400">Himesh Hansana</a>
            <br />
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 transition-colors duration-300 hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 transition-colors duration-300 hover:text-gold-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;