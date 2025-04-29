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

// Mobile version of stat counter with same animation logic
const MobileStatCounter = ({ end, label, suffix = "+", delay = 0 }) => {
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
    <div ref={counterRef} className="flex flex-col items-center text-center">
      <div className="text-4xl sm:text-5xl font-bold text-neutral-700 mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-lg text-neutral-500">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const [visible, setVisible] = useState({
    bestQuality: false
  });
  
  // States for typing animation
  const words = ["Proficient", "Skilled", "Top Rated", "Specialized"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // Staggered animations for text elements
    const timeouts = [
      setTimeout(() => setVisible(prev => ({ ...prev, bestQuality: true })), 300)
    ];

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(150);
        
        // Finished typing
        if (currentText === word) {
          // Pause at the end of word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(75);
        
        // Finished deleting
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words]);

  return (
    <section className="pt-0 pb-8 sm:pb-12 md:py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/3 px-4 md:px-6">
            <div className="space-y-6">              
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="block text-[#58b4db]">
                  Specialized
                </span>
                <span className="block text-[#0d2c4b]"> HomeCare</span>
                <span className="block text-[#0d2c4b]">Multilingual</span>
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
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-[3/4] max-w-lg mx-auto 
                transform transition-all duration-700 hover:scale-[1.02] 
                before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#0d2c4b]/20 before:to-transparent before:opacity-70 before:rounded-lg before:z-[1] 
                after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/long-shot-nurse-helping-old-woman-with-her-coat.jpg"
                alt="Nurse helping elderly woman with her coat"
                fill
                priority
                quality={95}
                className="object-cover rounded-lg shadow-xl z-0 animate-fadeIn"
                sizes="(max-width: 768px) 100vw, 50vw"
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
          {/* Mobile image with improved styling */}
          <div className="relative w-full max-w-md aspect-[4/3] mb-6">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#58b4db]/30 to-[#0d2c4b]/30 rounded-xl blur-md z-0"></div>
            <div className="relative w-full h-full overflow-hidden rounded-xl z-10">
              <Image
                src="/images/long-shot-nurse-helping-old-woman-with-her-coat.jpg"
                alt="Nurse helping elderly woman with her coat"
                fill
                priority
                quality={95}
                className="object-cover z-10 transition-transform duration-700 scale-[1.02]"
                sizes="100vw"
                style={{ objectPosition: '50% 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d2c4b]/50 z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d2c4b]/10 via-transparent to-[#58b4db]/20 mix-blend-overlay z-20"></div>
            </div>
          </div>
          
          {/* Mobile text heading with improved styling */}
          <div className="w-full mb-8 relative">
            <div className="relative z-10 px-2">
              <h1 className="font-bold leading-tight text-center">
                <span className="inline-block text-[#58b4db] text-5xl mb-1 relative after:content-[''] after:absolute after:h-[6px] after:w-12 after:bg-[#58b4db]/40 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full pb-2">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
                <div className="flex flex-col mt-1 bg-white py-3 px-2 rounded-lg shadow-sm">
                  <span className="block text-[#0d2c4b] text-3xl">HomeCare</span>
                  <span className="block text-[#0d2c4b] text-3xl">Multilingual</span>
                  <span className="block text-[#0d2c4b] text-3xl">Expertise</span>
                </div>
              </h1>
              
              <p className="text-neutral-600 text-base mt-5 max-w-md mx-auto text-center px-4 bg-white/80 py-3 rounded-lg shadow-sm backdrop-blur-sm">
                New York's trusted home care agency, providing personalized and top-rated home care to families for over 30 years.
              </p>
            </div>
          </div>
          
          {/* Mobile Stats Section with improved styling */}
          <div className="w-full max-w-md mb-8 px-2">
            <div className="grid grid-cols-2 gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <MobileStatCounter end={25000} label="Happy clients" delay={300} />
              <MobileStatCounter end={7} label="Languages" delay={600} />
              <MobileStatCounter end={30} label="Years of experience" delay={900} />
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl sm:text-5xl font-bold text-neutral-700 mb-1">24/7</div>
                <div className="text-sm sm:text-lg text-neutral-500">Client support</div>
              </div>
            </div>
          </div>
          
          {/* Buttons with improved styling */}
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-4 mb-6 px-4">
            <Link 
              href="/apply" 
              className="bg-[#0d2c4b] hover:bg-[#194168] text-white font-semibold py-3.5 px-5 rounded-xl transition-all duration-300 text-center text-base shadow-lg flex-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Apply for care</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b] to-[#194168] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </Link>
            <Link 
              href="/careers" 
              className="border-2 border-[#0d2c4b] text-[#0d2c4b] hover:bg-gray-50 font-semibold py-3.5 px-5 rounded-xl transition-all duration-300 flex items-center justify-center text-base shadow-md flex-1 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Join our team
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 