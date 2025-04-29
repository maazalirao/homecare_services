"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#0d2c4b]'} py-3`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo Text */}
          <Link href="/" className="relative z-10">
            <h1 className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-[#0d2c4b]' : 'text-white'}`}>
              <span className="text-[#58b4db]">Special</span> 
              <span>Touch</span>
              <span className="block text-sm font-medium ml-1">Home Care Services</span>
            </h1>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/#about" 
              className={`font-medium transition-colors ${isScrolled ? 'text-[#0d2c4b] hover:text-[#58b4db]' : 'text-white hover:text-white/80'}`}
            >
              About Us
            </Link>
            <Link 
              href="/#services" 
              className={`font-medium transition-colors ${isScrolled ? 'text-[#0d2c4b] hover:text-[#58b4db]' : 'text-white hover:text-white/80'}`}
            >
              Services
            </Link>
            <Link 
              href="/#testimonials" 
              className={`font-medium transition-colors ${isScrolled ? 'text-[#0d2c4b] hover:text-[#58b4db]' : 'text-white hover:text-white/80'}`}
            >
              Testimonials
            </Link>
            <Link 
              href="/#careers" 
              className={`font-medium transition-colors ${isScrolled ? 'text-[#0d2c4b] hover:text-[#58b4db]' : 'text-white hover:text-white/80'}`}
            >
              Careers
            </Link>
            <Link 
              href="/#contact" 
              className={`font-medium transition-colors ${isScrolled ? 'text-[#0d2c4b] hover:text-[#58b4db]' : 'text-white hover:text-white/80'}`}
            >
              Contact
            </Link>
            
            {/* Call Button */}
            <a 
              href="tel:+12125551234" 
              className="flex items-center font-medium transition-colors"
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${isScrolled ? 'bg-[#0d2c4b] text-white' : 'bg-white text-[#0d2c4b]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className={isScrolled ? 'text-[#0d2c4b]' : 'text-white'}>
                (212) 555-1234
              </span>
            </a>
            
            {/* Apply Button */}
            <Link 
              href="/apply" 
              className={`px-5 py-2 rounded-md font-medium transition-all ${
                isScrolled 
                  ? 'bg-[#0d2c4b] text-white hover:bg-[#194168]' 
                  : 'bg-white text-[#0d2c4b] hover:bg-white/90'
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
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${isScrolled ? 'bg-[#0d2c4b] text-white' : 'bg-white text-[#0d2c4b]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="relative z-10 p-2" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2 bg-[#0d2c4b]' : isScrolled ? 'bg-[#0d2c4b]' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 mb-1.5 transition-all ${menuOpen ? 'opacity-0 bg-[#0d2c4b]' : isScrolled ? 'bg-[#0d2c4b]' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-2 bg-[#0d2c4b]' : isScrolled ? 'bg-[#0d2c4b]' : 'bg-white'}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 p-6 pt-24 lg:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6">
          <Link 
            href="/#about" 
            className="text-lg font-medium text-[#0d2c4b] hover:text-[#58b4db] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/#services" 
            className="text-lg font-medium text-[#0d2c4b] hover:text-[#58b4db] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/#testimonials" 
            className="text-lg font-medium text-[#0d2c4b] hover:text-[#58b4db] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link 
            href="/#careers" 
            className="text-lg font-medium text-[#0d2c4b] hover:text-[#58b4db] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
          <Link 
            href="/#contact" 
            className="text-lg font-medium text-[#0d2c4b] hover:text-[#58b4db] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
            {/* Call Button */}
            <a 
              href="tel:+12125551234" 
              className="flex items-center text-lg font-medium text-[#0d2c4b]"
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d2c4b] text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              (212) 555-1234
            </a>
            
            {/* Apply Button */}
            <Link 
              href="/apply" 
              className="w-full py-3 bg-[#0d2c4b] text-white text-center rounded-md font-medium hover:bg-[#194168] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 