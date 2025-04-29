"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="section bg-neutral-50 overflow-hidden">
      <div className="container-custom">
        <div className={`text-center mb-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-[#0d2c4b] font-semibold inline-block mb-2 px-4 py-1 bg-neutral-200 rounded-full">About Us</span>
          <h2 className="heading-2 text-[#0d2c4b] max-w-3xl mx-auto">Dedicated to Improving Lives Through Quality Care</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column */}
          <div className={`space-y-6 order-2 lg:order-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Special Touch Home Care Group has been providing exceptional care services throughout New York for over 15 years. 
              Our dedicated team of caregivers is committed to enhancing the quality of life for our clients through personalized, 
              compassionate care that respects dignity and fosters independence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d2c4b] mb-1 group-hover:text-[#0d2c4b] transition-colors">Trusted Expertise</h3>
                  <p className="text-neutral-700">Over 15 years of specialized home care experience.</p>
                </div>
              </div>
              
              <div className="flex items-start group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d2c4b] mb-1 group-hover:text-[#0d2c4b] transition-colors">Qualified Staff</h3>
                  <p className="text-neutral-700">Extensively trained and certified caregivers.</p>
                </div>
              </div>
              
              <div className="flex items-start group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d2c4b] mb-1 group-hover:text-[#0d2c4b] transition-colors">In-Home Service</h3>
                  <p className="text-neutral-700">Care provided in the comfort of your own home.</p>
                </div>
              </div>
              
              <div className="flex items-start group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d2c4b] mb-1 group-hover:text-[#0d2c4b] transition-colors">Custom Care Plans</h3>
                  <p className="text-neutral-700">Personalized care tailored to individual needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0d2c4b] p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white italic text-lg">
                "To enhance the quality of life for our clients through compassionate, personalized care that promotes independence, dignity, and well-being in the comfort of their own homes."
              </p>
            </div>
          </div>
          
          {/* Right Column - Image Gallery */}
          <div className={`relative order-1 lg:order-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="grid grid-cols-12 gap-2">
              {/* First image - large top */}
              <div className="col-span-12 md:col-span-7 h-60 sm:h-72 md:h-80 relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/about-1.jpg"
                  alt="Special Touch homecare professional with client"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              
              {/* Second image - right column top */}
              <div className="col-span-6 md:col-span-5 h-48 sm:h-60 md:h-64 relative overflow-hidden rounded-2xl shadow-lg mt-2 md:mt-0 md:ml-2">
                <Image
                  src="/images/about-2.jpg"
                  alt="Caregiver helping elderly client"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              
              {/* Third image - left bottom */}
              <div className="col-span-6 md:col-span-5 h-48 sm:h-60 md:h-64 relative overflow-hidden rounded-2xl shadow-lg mt-2 md:mt-2 md:ml-2">
                <Image
                  src="/images/about-3.jpg"
                  alt="Professional caregiver with patient"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              
              {/* Fourth image - right bottom */}
              <div className="col-span-12 md:col-span-7 h-60 sm:h-72 md:h-80 relative overflow-hidden rounded-2xl shadow-lg mt-2">
                <Image
                  src="/images/about-4.jpg"
                  alt="Special Touch homecare service"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-[#58b4db]/20 rounded-full opacity-70 z-0"></div>
            <div className="hidden md:block absolute -bottom-10 -left-10 w-32 h-32 bg-[#58b4db]/20 rounded-full opacity-70 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 