"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Drawer } from 'vaul';
import { 
  X, 
  Phone, 
  Info, 
  PackageOpen, 
  MessageSquareQuote, 
  Briefcase, 
  Mail,
  Menu,
  PhoneCall
} from 'lucide-react';

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigationItems = [
    { href: "/#about", label: "About", icon: Info },
    { href: "/#services", label: "Services", icon: PackageOpen },
    { href: "/#testimonials", label: "Testimonials", icon: MessageSquareQuote },
    { href: "/#careers", label: "Careers", icon: Briefcase },
    { href: "/#contact", label: "Contact", icon: Mail }
  ];

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md backdrop-blur-sm' : 'bg-blue-900 backdrop-blur-sm'
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <div className="relative h-14 w-52">
              <Image
                src={isScrolled ? '/images/logo/logo-blue.svg' : '/images/logo/logo-white.svg'}
                alt="Special Touch Home Care"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className={clsx(
                  'relative px-4 py-2 font-medium text-sm rounded-full transition-all duration-200',
                  isScrolled 
                    ? 'text-gray-800 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Phone number */}
            <a 
              href="tel:+12125551234" 
              className={clsx(
                'flex items-center font-medium ml-4 transition-colors duration-300',
                isScrolled ? 'text-gray-800' : 'text-white'
              )}
            >
              <span className={clsx(
                'flex items-center justify-center w-8 h-8 rounded-full mr-2',
                isScrolled ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'
              )}>
                <PhoneCall className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span>
                (212) 555-1234
              </span>
            </a>
            
            {/* Contact Button */}
            <Link 
              href="/#contact" 
              className={clsx(
                'ml-5 px-5 py-2 rounded-full font-medium transition-all duration-300',
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/20' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md shadow-white/20 hover:shadow-lg hover:translate-y-[-2px]'
              )}
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
              <span className={clsx(
                'flex items-center justify-center w-10 h-10 rounded-full',
                isScrolled ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'
              )}>
                <PhoneCall className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="relative z-10 p-1" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={clsx(
                'w-10 h-10 rounded-full flex items-center justify-center',
                isScrolled ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'
              )}>
                {menuOpen ? (
                  <X className="h-5 w-5" strokeWidth={2.5} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={2.5} />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className={clsx(
        'w-full py-2 px-4 text-center text-sm transition-all duration-300',
        isScrolled ? 'bg-blue-50 text-blue-800' : 'bg-blue-800 text-white'
      )}>
        <div className="container mx-auto">
          <span className="font-medium">NY's Largest & Highest Rated Home Care Agency</span>
          <span className="ml-2 text-yellow-500">✨</span>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-[85%] flex-col rounded-t-[18px] border-t border-blue-100 bg-white">
            <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>
            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto flex h-1.5 w-12 flex-col rounded-full bg-gray-200 my-3"></div>
              
              <div className="relative pt-5 pb-4 px-6">
                {/* Logo */}
                <div className="flex items-center justify-between mb-8">
                  <div className="relative h-12 w-44">
                    <Image
                      src="/images/logo/logo-blue.svg"
                      alt="Special Touch Home Care"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={closeMenu}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Divider */}
                <div className="h-px w-full bg-gray-100 mb-6"></div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-3 mb-8">
                  {navigationItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={closeMenu}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                        <item.icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <span className="font-medium text-gray-800">{item.label}</span>
                    </Link>
                  ))}
                </nav>
                
                {/* Call Button */}
                <a 
                  href="tel:+12125551234" 
                  className="flex items-center bg-blue-50 p-4 rounded-lg text-gray-800 mb-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <PhoneCall className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call us today</div>
                    <div className="font-bold">(212) 555-1234</div>
                  </div>
                </a>
                
                {/* Apply Now Button */}
                <Link 
                  href="/#contact" 
                  className="block w-full py-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
};

export default Navbar;