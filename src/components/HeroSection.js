"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StatCounter = ({ end, label, suffix = "+", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const startTime = Date.now();
      
      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, end, delay]);

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-1">
        {count}{suffix}
      </div>
      <div className="text-lg text-primary-500">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const [visible, setVisible] = useState({
    topRated: false,
    specialized: false,
    bestQuality: false
  });

  useEffect(() => {
    // Staggered animations for text elements
    const timeouts = [
      setTimeout(() => setVisible(prev => ({ ...prev, topRated: true })), 300),
      setTimeout(() => setVisible(prev => ({ ...prev, specialized: true })), 1300),
      setTimeout(() => setVisible(prev => ({ ...prev, bestQuality: true })), 2300)
    ];

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <section className="min-h-[600px] py-16 md:py-20 overflow-hidden bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/3 pr-8">
            <div className="space-y-4">
              <div className={`transition-all duration-700 transform ${visible.topRated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-secondary-500 font-medium">Top Rated</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-500">
                <span className={`block transition-all duration-700 transform ${visible.specialized ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Specialized
                </span>
                <span className="block"> Home Care,</span>
                <span className="block"> Multilingual</span>
                <span className="block"> Expertise</span>
              </h1>
              
              <div className={`transition-all duration-700 transform ${visible.bestQuality ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-accent-500 font-medium">Best Quality</span>
              </div>
              
              <p className="text-neutral-900 mt-4">
                New York's trusted home care agency, providing personalized and top-rated home care to families for over 30 years.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/#apply" className="btn-primary flex items-center justify-center">
                  <span>Apply for care</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link href="/careers" className="btn-secondary flex items-center justify-center">
                  <span>Join our team</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Center - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-full aspect-[3/4] max-w-md">
              <Image
                src="/images/hero-bg.jpg"
                alt="Caregiver with elderly client"
                fill
                priority
                className="object-cover rounded-lg shadow-custom"
              />
            </div>
          </div>
          
          {/* Right side - Stats */}
          <div className="w-full md:w-1/3 pl-8">
            <div className="grid grid-cols-1 gap-y-10">
              <StatCounter end={25000} label="Happy clients" delay={300} />
              <StatCounter end={7} label="Languages" delay={800} />
              <StatCounter end={30} label="Years of experience" delay={1300} />
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-1">24/7</div>
                <div className="text-lg text-primary-500">Client support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image first on mobile */}
          <div className="relative w-full aspect-square max-w-xs mb-8">
            <Image
              src="/images/hero-bg.jpg"
              alt="Caregiver with elderly client"
              fill
              priority
              className="object-cover rounded-lg shadow-custom"
            />
          </div>
          
          {/* Text content */}
          <div className="text-center mb-8">
            <div className={`transition-all duration-700 transform ${visible.topRated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-secondary-500 font-medium">Top Rated</span>
            </div>
            
            <h1 className="text-3xl font-bold text-primary-500 my-3">
              <span className={`block transition-all duration-700 transform ${visible.specialized ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Specialized
              </span>
              <span className="block">Home Care, Multilingual Expertise</span>
            </h1>
            
            <div className={`transition-all duration-700 transform ${visible.bestQuality ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-accent-500 font-medium">Best Quality</span>
            </div>
            
            <p className="text-neutral-900 mt-4">
              New York's trusted home care agency, providing personalized and top-rated home care to families for over 30 years.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col w-full gap-4 mb-10">
            <Link href="/#apply" className="btn-primary flex items-center justify-center">
              <span>Apply for care</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link href="/careers" className="btn-secondary flex items-center justify-center">
              <span>Join our team</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
          
          {/* Stats on mobile */}
          <div className="grid grid-cols-2 gap-8 w-full">
            <StatCounter end={25000} label="Happy clients" delay={300} />
            <StatCounter end={7} label="Languages" delay={800} />
            <StatCounter end={30} label="Years of experience" delay={1300} />
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-secondary-500 mb-1">24/7</div>
              <div className="text-lg text-primary-500">Client support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 