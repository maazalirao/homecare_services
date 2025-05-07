"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Initialize scroll state on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add effect for body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('body-locked');
    } else {
      document.body.classList.remove('body-locked');
    }
    
    return () => {
      document.body.classList.remove('body-locked');
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-blue-900/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <div className="absolute inset-0 bg-blue-400 rounded-lg rotate-6"></div>
              <div className="absolute inset-0 bg-blue-500 rounded-lg -rotate-3 flex items-center justify-center text-white font-bold text-xl">
                ST
              </div>
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Special Touch <span className={isScrolled ? 'text-blue-600' : 'text-blue-300'}>Care</span>
              </h1>
              <span className={`text-xs font-medium block transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                Home Care Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/#about" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white hover:text-blue-300'}`}
            >
              About
            </Link>
            <Link 
              href="/#services" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white hover:text-blue-300'}`}
            >
              Services
            </Link>
            <Link 
              href="/#testimonials" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white hover:text-blue-300'}`}
            >
              Testimonials
            </Link>
            <Link 
              href="/#careers" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white hover:text-blue-300'}`}
            >
              Careers
            </Link>
            <Link 
              href="/#contact" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white hover:text-blue-300'}`}
            >
              Contact
            </Link>
            
            {/* Phone number */}
            <a 
              href="tel:+12125551234" 
              className={`flex items-center font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
                isScrolled ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                (212) 555-1234
              </span>
            </a>
            
            {/* Contact Button */}
            <Link 
              href="/#contact" 
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/20' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md shadow-white/20 hover:shadow-lg'
              }`}
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center lg:hidden space-x-4">
            {/* Phone Icon - Mobile */}
            <a 
              href="tel:+12125551234" 
              className="relative z-10"
              aria-label="Call us"
            >
              <span className={`flex items-center justify-center w-10 h-10 rounded-full ${
                isScrolled ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="relative z-10 p-2 flex flex-col justify-center items-center" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isScrolled ? 'bg-blue-100' : 'bg-white/20'
              }`}>
                <div className="relative w-6 h-5">
                  <span className={`absolute inset-0 w-6 h-0.5 transition-all duration-300 ${
                    menuOpen 
                      ? 'top-1/2 -mt-0.5 rotate-45' 
                      : 'top-0'
                  } ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                  
                  <span className={`absolute inset-0 w-6 h-0.5 top-1/2 -mt-0.5 transition-all duration-300 ${
                    menuOpen 
                      ? 'opacity-0' 
                      : ''
                  } ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                  
                  <span className={`absolute inset-0 w-6 h-0.5 transition-all duration-300 ${
                    menuOpen 
                      ? 'bottom-1/2 mb-0 -rotate-45' 
                      : 'bottom-0'
                  } ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto overflow-x-hidden max-w-full ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '5rem', width: '100%' }}
      >
        <nav className="flex flex-col p-6 pt-8 overflow-x-hidden max-w-full">
          <div className="border-l-4 border-blue-600 pl-4 py-2 mb-10">
            <h3 className="text-xl font-bold text-gray-900">Menu</h3>
            <p className="text-sm text-gray-600">Navigate our services</p>
          </div>
          
          <Link 
            href="/#about" 
            className="flex items-center py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span className="font-medium">About</span>
          </Link>
          
          <Link 
            href="/#services" 
            className="flex items-center py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            <span className="font-medium">Services</span>
          </Link>
          
          <Link 
            href="/#testimonials" 
            className="flex items-center py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <span className="font-medium">Testimonials</span>
          </Link>
          
          <Link 
            href="/#careers" 
            className="flex items-center py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="font-medium">Careers</span>
          </Link>
          
          <Link 
            href="/#contact" 
            className="flex items-center py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="font-medium">Contact</span>
          </Link>
          
          <div className="mt-8 flex flex-col space-y-4">
            {/* Call Button */}
            <a 
              href="tel:+12125551234" 
              className="flex items-center bg-blue-50 p-4 rounded-lg text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Call us today</div>
                <div className="font-bold">(212) 555-1234</div>
              </div>
            </a>
            
            {/* Contact Button */}
            <Link 
              href="/#contact" 
              className="w-full py-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;