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
    <div ref={counterRef} className="flex flex-col items-center justify-center text-center w-full">
      <div className="text-4xl md:text-5xl font-bold text-neutral-800 mb-1">
        {count}{suffix}
      </div>
      <div className="text-lg font-medium text-neutral-600">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const [visible, setVisible] = useState({
    bestQuality: false
  });

  useEffect(() => {
    // Staggered animations for text elements
    const timeouts = [
      setTimeout(() => setVisible(prev => ({ ...prev, bestQuality: true })), 300)
    ];

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <section className="min-h-[600px] md:py-24 overflow-hidden bg-white">
      <div className="md:container mx-auto md:px-4 md:px-8">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/3 px-4 md:px-6">
            <div className="space-y-6">              
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="block text-[#58b4db]">
                  Best Quality
                </span>
                <span className="block text-[#0d2c4b]"> Home</span>
                <span className="block text-[#0d2c4b]"> Care, Multilingual</span>
                <span className="block text-[#0d2c4b]"> Expertise</span>
              </h1>
              
              <p className="text-neutral-700 mt-4">
                New York's trusted home care agency, providing personalized and top-rated home care to families for over 30 years.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/apply" className="bg-[#0d2c4b] hover:bg-[#194168] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                  <span>Apply for care</span>
                </Link>
                <Link href="/careers" className="bg-white border-2 border-[#0d2c4b] text-[#0d2c4b] hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                  <span>Join our team</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Center - Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center px-4">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto 
                transform transition-all duration-700 hover:scale-[1.02] 
                before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#0d2c4b]/20 before:to-transparent before:opacity-70 before:rounded-lg before:z-[1] 
                after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/nurse-old-man-posing-while-looking-camera.jpg"
                alt="Nurse and elderly man posing while looking at camera"
                fill
                priority
                quality={95}
                className="object-cover rounded-lg shadow-xl z-0 animate-fadeIn"
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d2c4b]/10 via-transparent to-[#58b4db]/10 rounded-lg z-[2] mix-blend-overlay" />
            </div>
          </div>
          
          {/* Right side - Stats */}
          <div className="w-full md:w-1/3 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-y-10">
              <StatCounter end={25000} label="Happy clients" delay={300} />
              <StatCounter end={7} label="Languages" delay={800} />
              <StatCounter end={30} label="Years of experience" delay={1300} />
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-neutral-800 mb-1">24/7</div>
                <div className="text-lg font-medium text-neutral-600">Client support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Hero Image - full width */}
          <div className="relative w-full h-96">
            <Image
              src="/images/nurse-old-man-posing-while-looking-camera.jpg"
              alt="Special Touch Home Care professional with client"
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          
          {/* Text content */}
          <div className="w-full px-12 mt-8 mb-4">
            <h1 className="text-4xl font-bold">
              <span className="text-[#58b4db] block text-5xl mb-1">Top Rated</span>
              <span className="text-[#0d2c4b] block">Home Care, </span>
              <span className="text-[#0d2c4b] block">Multilingual</span>
              <span className="text-[#0d2c4b] block">Expertise</span>
            </h1>
            
            <p className="text-neutral-600 mt-6 text-lg mb-10">
              New York's trusted home care agency, providing personalized and top-rated home care to families for over 30 years.
            </p>
          </div>
          
          {/* Buttons - exact match to reference */}
          <div className="flex flex-col w-full px-10 gap-6 mb-10">
            <Link 
              href="/apply" 
              className="bg-[#0d2c4b] text-white font-semibold py-4 px-6 rounded-md text-center text-lg"
            >
              Apply for care
            </Link>
            <Link 
              href="/careers" 
              className="border-2 border-[#0d2c4b] text-[#0d2c4b] font-semibold py-4 px-6 rounded-md flex items-center justify-center text-lg"
            >
              Join our team
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          {/* Stats section - hidden to match reference design */}
          <div className="hidden">
            <StatCounter end={25000} label="Happy clients" delay={300} />
            <StatCounter end={7} label="Languages" delay={800} />
            <StatCounter end={30} label="Years of experience" delay={1300} />
            <div className="flex flex-col items-center justify-center text-center w-full">
              <div className="text-4xl font-bold text-neutral-800 mb-1">24/7</div>
              <div className="text-lg font-medium text-neutral-600">Client support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 