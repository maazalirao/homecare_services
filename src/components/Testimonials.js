"use client";

import { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      content: "Special Touch caregivers became like family. Their genuine compassion made all the difference for my father's quality of life.",
      name: "Margaret H.",
      role: "Daughter of Client",
      rating: 5,
      imageUrl: null
    },
    {
      content: "Professional, reliable, and truly caring staff. Helped my mother maintain her independence. Highly recommend.",
      name: "Robert W.",
      role: "Son of Client",
      rating: 5,
      imageUrl: null
    },
    {
      content: "After surgery, their caregiver was professional and became a wonderful companion. Helped me recover faster.",
      name: "Elizabeth T.",
      role: "Recovery Patient",
      rating: 5,
      imageUrl: null
    },
    {
      content: "They understand our unique needs and create care plans that truly work for our family situation.",
      name: "David L.",
      role: "Family Member",
      rating: 5,
      imageUrl: null
    },
    {
      content: "Compassionate team provided both physical assistance and emotional support during a challenging time.",
      name: "Sarah M.",
      role: "Daughter of Client",
      rating: 5,
      imageUrl: null
    },
    {
      content: "Flexible with our changing schedules. Reliable service gives us confidence our loved one is in capable hands.",
      name: "James K.",
      role: "Son of Client",
      rating: 5,
      imageUrl: null
    }
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? Math.floor(testimonials.length / 3) - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === Math.floor(testimonials.length / 3) - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-700 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-700 rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/4 pointer-events-none"></div>
        
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-900 font-semibold text-sm mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Real reviews from families who have experienced our caring, professional home care services.
          </p>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-blue-200 text-sm">(200+ reviews)</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-white text-sm font-medium">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className={`hidden md:block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="h-full">
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  imageUrl={testimonial.imageUrl}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => {
                setIsAnimating(true);
                setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className="w-12 h-12 rounded-full border border-blue-700 flex items-center justify-center text-white hover:text-blue-300 hover:border-blue-300 transition-colors group"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {[0, 1].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    if (index === 0) {
                      setActiveIndex(0);
                    } else {
                      setActiveIndex(3);
                    }
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeIndex < 3 && index === 0 || activeIndex >= 3 && index === 1 
                    ? 'bg-white w-8' 
                    : 'bg-blue-700/50 w-3 hover:bg-blue-700/70'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => {
                setIsAnimating(true);
                setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className="w-12 h-12 rounded-full border border-blue-700 flex items-center justify-center text-white hover:text-blue-300 hover:border-blue-300 transition-colors group"
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className={`md:hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden pb-8">
            <div
              className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
            >
              <TestimonialCard
                content={testimonials[activeIndex].content}
                name={testimonials[activeIndex].name}
                role={testimonials[activeIndex].role}
                rating={testimonials[activeIndex].rating}
                imageUrl={testimonials[activeIndex].imageUrl}
              />
            </div>
            
            {/* Mobile Navigation Arrows and Dots */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-white w-6' : 'bg-blue-400/50 w-2.5'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 