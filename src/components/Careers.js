"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const JobCard = ({ title, type, location, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-secondary-200 transition-all duration-300 h-full flex flex-col animate-fade-in p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">{title}</h3>
          <div className="flex flex-wrap items-center mt-2 text-sm text-neutral-700">
            <span>{type}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
          </div>
        </div>
        <span className="text-xs font-medium bg-gradient-to-r from-secondary-400 to-secondary-500 text-white py-1 px-3 rounded-full shadow-sm">New</span>
      </div>
      <p className="text-neutral-700 mb-6 flex-grow relative z-10">{description}</p>
      <Link 
        href="/careers" 
        className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-700 transition-colors mt-auto relative z-10 group"
      >
        Apply Now
        <svg 
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const jobsSliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('careers');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - jobsSliderRef.current.offsetLeft);
    setScrollLeft(jobsSliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - jobsSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    jobsSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const jobs = [
    {
      title: "Registered Nurse (RN)",
      type: "Full-time",
      location: "New York City",
      description: "Join our team as a Registered Nurse providing high-quality care to our clients in their homes. Requires valid RN license and 2+ years of experience."
    },
    {
      title: "Home Health Aide (HHA)",
      type: "Full-time / Part-time",
      location: "New York City",
      description: "Provide compassionate personal care and assistance with daily activities to help our clients maintain their independence and dignity at home."
    },
    {
      title: "Care Coordinator",
      type: "Full-time",
      location: "New York City",
      description: "Oversee client care plans, coordinate services between caregivers and clients, and ensure all care needs are met with the highest quality standards."
    },
    {
      title: "Physical Therapist",
      type: "Contract",
      location: "New York City",
      description: "Work with clients to improve mobility, reduce pain, and increase strength through customized therapeutic exercise programs in their homes."
    }
  ];

  return (
    <section id="careers" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        {/* Career headline with gradient background */}
        <div className="relative mb-8 md:mb-10 inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-tl-lg rounded-br-lg transform rotate-1 scale-105 opacity-20"></div>
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 text-white px-6 py-4 rounded-tl-lg rounded-br-lg shadow-md relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Special Touch Home Care careers</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/medium-shot-nurse-checking-man.jpg"
                alt="Special Touch Home Care careers"
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/50 to-transparent"></div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.2s"}}>
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-tl-lg rounded-br-lg transform -rotate-1 scale-105 opacity-20"></div>
              <div className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 py-4 rounded-tl-lg rounded-br-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Join Our Team</h2>
              </div>
            </div>
            <p className="text-neutral-700 text-lg leading-relaxed mb-8">
              At Special Touch Home Care Group, we're always looking for compassionate and dedicated professionals to join our team. When you work with us, you become part of a supportive community that values your contribution to our clients' well-being.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-600 mb-1">Competitive Pay</h3>
                  <p className="text-neutral-700">Earn what you deserve with our competitive salary packages and bonuses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-600 mb-1">Flexible Scheduling</h3>
                  <p className="text-neutral-700">We work with you to create a schedule that fits your life and commitments.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-600 mb-1">Career Growth</h3>
                  <p className="text-neutral-700">Opportunities for advancement, continuing education, and professional development.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link 
                href="/careers" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                View All Openings
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.4s"}}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-tl-lg rounded-br-lg transform rotate-1 scale-105 opacity-20"></div>
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-tl-lg rounded-br-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Current Openings</h2>
              </div>
            </div>
            <p className="text-neutral-700 text-lg px-4">
              Explore our available positions and find the perfect role where you can make a difference in people's lives every day.
            </p>
          </div>
          
          {/* Desktop Job Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                type={job.type}
                location={job.location}
                description={job.description}
              />
            ))}
          </div>
          
          {/* Mobile Jobs Slider */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-4 hide-scrollbar"
              ref={jobsSliderRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {jobs.map((job, index) => (
                <div key={index} className="flex-shrink-0 w-[85%]">
                  <JobCard
                    title={job.title}
                    type={job.type}
                    location={job.location}
                    description={job.description}
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white pointer-events-none"></div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {jobs.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === 0 
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-500' 
                      : 'w-2.5 bg-neutral-300'
                  }`}
                  aria-label={`Go to job ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers; 