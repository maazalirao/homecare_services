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
        isScrolled 
          ? 'bg-white shadow-custom py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-30">
          <div className="relative w-52 h-14">
            <Image 
              src={isScrolled || isMenuOpen ? "/logo.svg" : "/logo-white.svg"}
              alt="Special Touch Home Care Group" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/#about" className={`font-medium hover:text-secondary-500 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            About Us
          </Link>
          <Link href="/#services" className={`font-medium hover:text-secondary-500 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Services
          </Link>
          <Link href="/#testimonials" className={`font-medium hover:text-secondary-500 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Testimonials
          </Link>
          <Link href="/#careers" className={`font-medium hover:text-secondary-500 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Careers
          </Link>
          <Link href="/#contact" className={`font-medium hover:text-secondary-500 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            Contact
          </Link>
        </nav>

        {/* Call & Apply Buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <Link 
            href="tel:+12125551234" 
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              isScrolled 
                ? 'bg-secondary-50 text-secondary-500 hover:bg-secondary-100' 
                : 'bg-white/20 text-white hover:bg-white/30'
            } transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </Link>
          <Link 
            href="/#apply" 
            className={`inline-flex items-center ${
              isScrolled 
                ? 'btn-primary' 
                : 'bg-white text-primary-500 hover:bg-neutral-50 py-2.5 px-5 rounded-lg font-semibold transition-colors shadow-md'
            }`}
          >
            Apply for Care
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center relative z-30" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className={`h-6 w-6 ${isScrolled ? 'text-primary-500' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-20 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="container-custom h-full flex flex-col pt-24 pb-12">
          <nav className="flex flex-col space-y-8 text-center">
            <Link href="/#about" className="text-xl font-semibold text-primary-500 hover:text-secondary-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/#services" className="text-xl font-semibold text-primary-500 hover:text-secondary-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/#testimonials" className="text-xl font-semibold text-primary-500 hover:text-secondary-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="/#careers" className="text-xl font-semibold text-primary-500 hover:text-secondary-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link href="/#contact" className="text-xl font-semibold text-primary-500 hover:text-secondary-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className="mt-auto flex flex-col space-y-4">
            <Link href="tel:+12125551234" className="btn-secondary flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </Link>
            <Link href="/#apply" className="btn-primary flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
              Apply for Care
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 