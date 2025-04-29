"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
  const sectionRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
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

  const services = [
    {
      id: 1,
      title: "Personal Care & Support",
      description: "Our caregivers support daily activities, prioritizing health, comfort, safety, and peace of mind for you or your loved one.",
      details: [
        "Personal Care & Feeding",
        "Bathing and personal hygiene, dressing and grooming, toileting, transferring and positioning, feeding assistance, special diet management.",
        "Household Chores & Errands",
        "Laundry, light housekeeping, meal preparation, shopping, and other household chores.",
        "Health Management",
        "Medication reminders and management."
      ],
      imageUrl: "/images/doctor-taking-care-senior-woman-home.jpg",
      href: "/services/personal-care",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Nursing & Therapy",
      description: "With Special Touch, you or your loved one will always have the medical support you need at home.",
      details: [
        "Physical Well-being",
        "Gait and balance training, health evaluations and screenings, home safety assessments, respiratory care, wound care.",
        "Health Management",
        "Medication management, nutritional management, chronic condition monitoring.",
        "Therapeutic Support",
        "Therapy sessions, rehabilitation programs, specialized care plans."
      ],
      imageUrl: "/images/doctor-talking-with-her-elder-patient.jpg",
      href: "/services/nursing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Companionship",
      description: "Friendly companionship, conversation, and emotional support for seniors living alone or feeling isolated.",
      imageUrl: "/images/medium-shot-women-looking-each-other.jpg",
      href: "/services/companion",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Live-In Care",
      description: "24/7 care and support for those who need round-the-clock assistance in the comfort of their own home.",
      imageUrl: "/images/senior-woman-talking-with-her-doctor.jpg",
      href: "/services/live-in",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "CDPAP",
      description: "Consumer Directed Personal Assistance Program allowing loved ones to provide paid care.",
      imageUrl: "/images/happy-old-woman-nursing-home-sitting-couch-talking-with-her-caretaker-retired-woman-with-crutches.jpg",
      href: "/services/cdpap",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - servicesRef.current.offsetLeft);
    setScrollLeft(servicesRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - servicesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    servicesRef.current.scrollLeft = scrollLeft - walk;
  };

  // Render service details with bullet points
  const renderServiceDetails = (details) => {
    if (!details) return null;
    
    const items = [];
    for (let i = 0; i < details.length; i += 2) {
      if (i + 1 < details.length) {
        items.push(
          <div key={i} className="mb-4">
            <h4 className="text-lg font-semibold text-blue-800 mb-1">{details[i]}</h4>
            <p className="text-gray-700">{details[i + 1]}</p>
          </div>
        );
      }
    }
    
    return items;
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">Our Care Services</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Home Care Solutions</h2>
          <p className="text-lg text-gray-700">
            We offer a range of specialized services designed to meet the unique needs of each client,
            providing compassionate care and support in the comfort of their own homes.
          </p>
        </div>

        {/* Desktop services alternating layout */}
        <div className={`hidden md:block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.slice(0, 2).map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                
                {/* Service details with bullet points */}
                <div className="space-y-4 mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  {renderServiceDetails(service.details)}
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors duration-300 transform hover:-translate-y-1 shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30"
                >
                  Request This Service
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-96">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={90}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-blue-500/20 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Rest of the services in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.slice(2).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>

        {/* Mobile services slider */}
        <div className={`md:hidden relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div 
            className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-4 hide-scrollbar"
            ref={servicesRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => handleMouseDown(e.touches[0])}
            onTouchEnd={handleMouseUp}
            onTouchMove={(e) => handleMouseMove(e.touches[0])}
          >
            {services.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-[85%]">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  href={service.href}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-50 pointer-events-none"></div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === 0 ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 