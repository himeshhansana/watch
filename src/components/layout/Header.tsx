import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, SearchIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Collections' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const goldColor = '#D4AF37';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100';
  const hoverColor = 'hover:text-gold-400';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'light' 
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' 
            : 'bg-gray-950/95 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link 
          to="/" 
          className={`text-2xl md:text-3xl font-serif tracking-wider ${textColor}`}
          style={{ color: goldColor }}
        >
          CHRONOS
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest ${hoverColor} transition-colors duration-300 ${textColor}`}
              style={{ color: location.pathname === link.path ? goldColor : '' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className={`p-2 ${hoverColor} transition-colors duration-300 ${textColor}`}>
            <SearchIcon size={20} />
          </button>
          <Link 
            to="/account" 
            className={`p-2 ${hoverColor} transition-colors duration-300 ${textColor}`}
          >
            <UserIcon size={20} />
          </Link>
          <Link 
            to="/wishlist" 
            className={`p-2 ${hoverColor} transition-colors duration-300 ${textColor}`}
          >
            <HeartIcon size={20} />
          </Link>
          <button 
            onClick={onCartClick} 
            className={`p-2 ${hoverColor} transition-colors duration-300 relative ${textColor}`}
          >
            <ShoppingBagIcon size={20} />
            {cartItemCount > 0 && (
              <span 
                className="absolute flex items-center justify-center w-5 h-5 text-xs text-gray-900 rounded-full -top-1 -right-1 bg-gold-500"
              >
                {cartItemCount}
              </span>
            )}
          </button>
          <button 
            className={`md:hidden p-2 ${hoverColor} transition-colors duration-300 ${textColor}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${
          theme === 'light' ? 'bg-white' : 'bg-gray-900'
        } border-t ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-800'
        } animate-fadeIn`}
        >
          <div className="container flex flex-col px-4 py-4 mx-auto space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 text-sm uppercase tracking-widest ${hoverColor} transition-colors duration-300 ${textColor}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;