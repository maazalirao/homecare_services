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
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <div className={`mb-12 md:mb-16 text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">About Special Touch</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bringing Compassionate Care to Your Home</h2>
          <p className="text-lg text-gray-700">
            For over three decades, Special Touch Home Care has been delivering personalized, compassionate care 
            services throughout New York. Our multilingual team and innovative approach ensure every client 
            receives care that respects their unique needs, dignity, and independence.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left column - Leadership profile */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h3>
                
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-white mr-5 flex-shrink-0">
                    <span className="text-2xl font-bold">EF</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Eli Feldman</h4>
                    <p className="text-blue-700 font-medium">CEO & Founder</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-5">
                  Eli Feldman brings extensive experience and vision to Special Touch Home Care. 
                  His innovative approach to healthcare delivery has established our organization 
                  as a leader in personalized home care services.
                </p>
                
                <p className="text-gray-700">
                  Under his guidance, we've expanded our services throughout New York while maintaining 
                  our commitment to excellent care, cultural sensitivity, and client-centered support systems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Core values and mission */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Core value 1 */}
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-700 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Specialized Expertise</h3>
                <p className="text-gray-700 flex-grow">Our caregivers are extensively trained in specialized care approaches, ensuring they can meet the unique needs of each client.</p>
              </div>
              
              {/* Core value 2 */}
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-700 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Sensitivity</h3>
                <p className="text-gray-700 flex-grow">With multilingual staff and diverse cultural backgrounds, we ensure care that respects and adapts to different cultural preferences.</p>
              </div>
              
              {/* Core value 3 */}
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-700 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Plans</h3>
                <p className="text-gray-700 flex-grow">We develop customized care plans that address the specific health needs, preferences, and goals of each individual client.</p>
              </div>
              
              {/* Core value 4 */}
              <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-700 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Responsive Support</h3>
                <p className="text-gray-700 flex-grow">Our 24/7 support system ensures clients and families always have access to assistance when they need it most.</p>
              </div>
            </div>
            
            {/* Mission statement */}
            <div className="bg-blue-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Our Mission</h3>
              <p className="text-lg italic font-medium relative z-10">
                "To enhance the quality of life for our clients through compassionate, personalized care
                that promotes independence, dignity, and well-being in the comfort of their own homes."
              </p>
            </div>
          </div>
        </div>
        
        {/* Image gallery */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 relative rounded-xl overflow-hidden h-60 md:h-80">
              <Image
                src="/images/about-1.jpg"
                alt="Special Touch homecare professional with client"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
                quality={90}
              />
            </div>
            <div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden h-40 md:h-80">
              <Image
                src="/images/about-2.jpg"
                alt="Caregiver helping client"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={90}
              />
            </div>
            <div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden h-40 md:h-60">
              <Image
                src="/images/about-3.jpg"
                alt="Professional caregiver with patient"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={90}
              />
            </div>
            <div className="col-span-12 md:col-span-8 relative rounded-xl overflow-hidden h-60">
              <Image
                src="/images/about-4.jpg"
                alt="Special Touch homecare service"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 