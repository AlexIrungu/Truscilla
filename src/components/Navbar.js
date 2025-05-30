import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaPinterest, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-misty-rose/30 backdrop-blur-sm border-b border-taupe-gray/20 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Now acts as home link */}
        <Link to="/" className="group">
          <div className="text-3xl font-bold text-dark-green tracking-wider relative">
            TRUELOVE
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link 
            to="/about" 
            className="text-dark-green/80 hover:text-dark-green transition-all duration-200 uppercase text-sm font-medium tracking-widest relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/research" 
            className="text-dark-green/80 hover:text-dark-green transition-all duration-200 uppercase text-sm font-medium tracking-widest relative group"
          >
            Research
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/cohort" 
            className="text-dark-green/80 hover:text-dark-green transition-all duration-200 uppercase text-sm font-medium tracking-widest relative group"
          >
            Cohort Sistas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/blog" 
            className="text-dark-green/80 hover:text-dark-green transition-all duration-200 uppercase text-sm font-medium tracking-widest relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/subscribe" 
            className="text-dark-green/80 hover:text-dark-green transition-all duration-200 uppercase text-sm font-medium tracking-widest relative group"
          >
            Subscribe
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-dark-green/80 hover:text-dark-green transition-all duration-200 uppercase text-sm font-medium tracking-widest relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fulvous group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-taupe-gray hover:text-dark-green transition-all duration-200 transform hover:scale-110"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-taupe-gray hover:text-dark-green transition-all duration-200 transform hover:scale-110"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-taupe-gray hover:text-dark-green transition-all duration-200 transform hover:scale-110"
          >
            <FaPinterest className="w-5 h-5" />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="bg-fulvous text-white p-3 rounded-full hover:bg-fulvous/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-dark-green hover:text-fulvous transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="pt-4 pb-3 space-y-3 bg-white/80 backdrop-blur-sm rounded-lg mt-4 px-4 shadow-lg border border-taupe-gray/20">
          <Link 
            to="/about" 
            className="block text-dark-green hover:text-fulvous transition-colors duration-200 uppercase text-sm font-medium tracking-widest py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/research" 
            className="block text-dark-green hover:text-fulvous transition-colors duration-200 uppercase text-sm font-medium tracking-widest py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Research
          </Link>
          <Link 
            to="/cohort" 
            className="block text-dark-green hover:text-fulvous transition-colors duration-200 uppercase text-sm font-medium tracking-widest py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Cohort Sistas
          </Link>
          <Link 
            to="/blog" 
            className="block text-dark-green hover:text-fulvous transition-colors duration-200 uppercase text-sm font-medium tracking-widest py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/subscribe" 
            className="block text-dark-green hover:text-fulvous transition-colors duration-200 uppercase text-sm font-medium tracking-widest py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Subscribe
          </Link>
          <Link 
            to="/contact" 
            className="block text-dark-green hover:text-fulvous transition-colors duration-200 uppercase text-sm font-medium tracking-widest py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-6 pt-4 border-t border-taupe-gray/20">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-taupe-gray hover:text-fulvous transition-colors duration-200"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-taupe-gray hover:text-fulvous transition-colors duration-200"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-taupe-gray hover:text-fulvous transition-colors duration-200"
            >
              <FaPinterest className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="bg-fulvous text-white p-2 rounded-full hover:bg-fulvous/90 transition-colors duration-200"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;