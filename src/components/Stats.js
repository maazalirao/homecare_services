"use client";

import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            setCount(Math.min(Math.floor(start), end));
            if (start >= end) {
              clearInterval(timer);
            }
          }, 16);
          
          observerRef.current.disconnect();
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.25 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <div className="bg-primary-500 text-white py-3 px-4 mb-6 rounded-lg md:rounded-xl mx-auto max-w-max">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Trusted by Many, Personal to Each</h2>
          </div>
          <p className="text-neutral-600 text-base md:text-lg px-4">
            Our track record of excellence speaks for itself through the thousands of families we've helped and the quality care we consistently provide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 md:mb-2">
              <CountUp end={15000} suffix="+" />
            </div>
            <p className="text-base md:text-lg font-medium text-neutral-700 mb-1">Happy Clients</p>
            <p className="text-sm text-neutral-500">served across New York</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 md:mb-2">
              <CountUp end={5} />
            </div>
            <p className="text-base md:text-lg font-medium text-neutral-700 mb-1">Star Rating</p>
            <p className="text-sm text-neutral-500">by thousands of reviews</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 md:mb-2">
              <CountUp end={1} suffix=" min" />
            </div>
            <p className="text-base md:text-lg font-medium text-neutral-700 mb-1">Response Time</p>
            <p className="text-sm text-neutral-500">guaranteed service</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 md:mb-2">
              <CountUp end={15} suffix="+" />
            </div>
            <p className="text-base md:text-lg font-medium text-neutral-700 mb-1">Years Experience</p>
            <p className="text-sm text-neutral-500">of quality home care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 