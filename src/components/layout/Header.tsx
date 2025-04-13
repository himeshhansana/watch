import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, SearchIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
interface HeaderProps {
  onCartClick: () => void;
}
const Header: React.FC<HeaderProps> = ({
  onCartClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {
    theme
  } = useTheme();
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
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? theme === 'light' ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' : 'bg-gray-950/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`} role="banner">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-wider text-gold-500" style={{
        color: '#D4AF37'
      }}>
          CHRONOS
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300" style={{
          color: location.pathname === '/' ? '#D4AF37' : ''
        }}>
            Home
          </Link>
          <Link to="/products" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300" style={{
          color: location.pathname === '/products' ? '#D4AF37' : ''
        }}>
            Collections
          </Link>
          <Link to="/about" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300" style={{
          color: location.pathname === '/about' ? '#D4AF37' : ''
        }}>
            About
          </Link>
          <Link to="/contact" className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300" style={{
          color: location.pathname === '/contact' ? '#D4AF37' : ''
        }}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-gold-400 transition-colors duration-300">
            <SearchIcon size={20} />
          </button>
          <Link to="/account" className="p-2 hover:text-gold-400 transition-colors duration-300">
            <UserIcon size={20} />
          </Link>
          <Link to="/wishlist" className="p-2 hover:text-gold-400 transition-colors duration-300">
            <HeartIcon size={20} />
          </Link>
          <button onClick={onCartClick} className="p-2 hover:text-gold-400 transition-colors duration-300 relative">
            <ShoppingBagIcon size={20} />
            <span className="absolute -top-1 -right-1 bg-gold-500 text-gray-900 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="md:hidden p-2 hover:text-gold-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/products" className="py-2 text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300">
              Collections
            </Link>
            <Link to="/about" className="py-2 text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="py-2 text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>}
    </header>;
};
export default Header;