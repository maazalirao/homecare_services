"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Caregiver with client"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-800/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 
            className={`text-white heading-1 mb-6 transition-opacity duration-1000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Your Health, Our Priority – Compassionate Home Care in New York.
          </h1>
          <p 
            className={`text-white/90 text-xl leading-relaxed mb-8 transition-opacity duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Special Touch Home Care Group provides personalized care services that prioritize your comfort, dignity, and independence.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 delay-500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link href="/#apply" className="btn-primary">
              Apply for Care
            </Link>
            <Link href="/#services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce">
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center">
          <span className="sr-only">Scroll down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 