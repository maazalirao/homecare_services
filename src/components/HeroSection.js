"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Simplified stat counter component with clean animation
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
    <div ref={counterRef} className="flex flex-col items-center justify-center text-center w-full">
      <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-1">
        {count}{suffix}
      </div>
      <div className="text-lg font-medium text-gray-600">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Values for typing animation
  const phrases = ["Compassionate", "Professional", "Dedicated", "Specialized"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Initialize animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(phrase.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        
        // Finished typing current phrase
        if (displayText === phrase) {
          setTypingSpeed(1800); // Pause at end of phrase
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(phrase.substring(0, displayText.length - 1));
        setTypingSpeed(60);
        
        // Finished deleting
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 pt-16 pb-12 md:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-300 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Desktop layout - flex row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
          {/* Left content - text and CTA */}
          <div className={`w-full lg:w-1/2 space-y-6 md:space-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Trusted Home Care Services
              </span>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                <span className="block mb-1">
                  <span className="text-blue-600">{displayText}</span>
                  <span className="inline-block w-0.5 h-8 md:h-10 bg-blue-600 ml-1 align-middle animate-pulse"></span>
                </span>
                <span className="block">Care for Your</span>
                <span className="block">Loved Ones</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700">
              Special Touch provides compassionate home care with personalized service plans, 
              multilingual caregivers, and over 30 years of dedicated experience throughout New York.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/apply" className="flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors duration-300 shadow-lg shadow-blue-700/30 transform hover:-translate-y-1 hover:shadow-blue-700/40">
                <span>Request Care</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link href="/#about" className="flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-blue-700 font-medium border border-blue-700 hover:bg-blue-50 transition-colors duration-300 transform hover:-translate-y-1">
                <span>Learn More</span>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 md:pt-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                </div>
                <span className="ml-4 text-sm text-gray-600">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-yellow-400">★★★★★</span>
                <span>Highly Rated</span>
              </div>
            </div>
          </div>
          
          {/* Right content - image with overlay */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '200ms'}}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Main image */}
              <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] relative">
                <Image
                  src="/images/long-shot-nurse-helping-old-woman-with-her-coat.jpg"
                  alt="Caregiver helping elderly client"
                  fill
                  priority
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-blue-500/20 mix-blend-multiply"></div>
                
                {/* Quick stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 md:p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-700">30+</div>
                      <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-2xl md:text-3xl font-bold text-blue-700">7+</div>
                      <div className="text-xs md:text-sm text-gray-600">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-700">24/7</div>
                      <div className="text-xs md:text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-auto md:top-8 md:-right-6 bg-white rounded-full shadow-lg p-3 md:p-4 transform rotate-12 hidden md:block">
              <div className="bg-yellow-400 text-blue-900 rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center text-center transform -rotate-12">
                <span className="text-xs font-semibold">NY'S</span>
                <span className="text-xs md:text-sm font-bold">TOP RATED</span>
                <span className="text-xs">AGENCY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 