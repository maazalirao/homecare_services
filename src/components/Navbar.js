"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-12">
            <Image 
              src="/logo.svg" 
              alt="Special Touch Home Care Group" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#about" className="font-medium text-neutral-700 hover:text-primary-500 transition-colors">
            About Us
          </Link>
          <Link href="/#services" className="font-medium text-neutral-700 hover:text-primary-500 transition-colors">
            Services
          </Link>
          <Link href="/#testimonials" className="font-medium text-neutral-700 hover:text-primary-500 transition-colors">
            Testimonials
          </Link>
          <Link href="/#careers" className="font-medium text-neutral-700 hover:text-primary-500 transition-colors">
            Careers
          </Link>
          <Link href="/#contact" className="font-medium text-neutral-700 hover:text-primary-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Call & Apply Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="tel:+12125551234" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </Link>
          <Link href="/#apply" className="btn-primary inline-flex items-center">
            Apply for Care
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-neutral-500" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/#about" 
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/#services" 
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#testimonials" 
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/#careers" 
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/#contact" 
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/#apply" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply for Care
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 