"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

const Services = () => {
  const servicesRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
        "Medication reminders."
      ],
      imageUrl: "/images/doctor-taking-care-senior-woman-home.jpg",
      href: "/services/personal-care"
    },
    {
      id: 2,
      title: "Nursing & Therapy",
      description: "With Royal Care, you or your loved one will always have the medical support you need at home.",
      details: [
        "Physical Well-being",
        "Gait and balance training, Health evaluations and screenings, Home safety assessments, Respiratory care, Wound care.",
        "Health Management",
        "Medication management, Nutritional management.",
        "Therapeutic Support",
        "Therapy sessions, Rehabilitation programs."
      ],
      imageUrl: "/images/doctor-talking-with-her-elder-patient.jpg",
      href: "/services/nursing"
    },
    {
      id: 3,
      title: "Companionship",
      description: "Friendly companionship, conversation, and emotional support for seniors living alone or feeling isolated.",
      imageUrl: "/images/medium-shot-women-looking-each-other.jpg",
      href: "/services/companion"
    },
    {
      id: 4,
      title: "Live-In Care",
      description: "24/7 care and support for those who need round-the-clock assistance in the comfort of their own home.",
      imageUrl: "/images/senior-woman-talking-with-her-doctor.jpg",
      href: "/services/live-in"
    },
    {
      id: 5,
      title: "CDPAP",
      description: "Consumer Directed Personal Assistance Program allowing loved ones to provide paid care.",
      imageUrl: "/images/happy-old-woman-nursing-home-sitting-couch-talking-with-her-caretaker-retired-woman-with-crutches.jpg",
      href: "/services/cdpap"
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
            <h4 className="text-lg font-semibold text-[#0d2c4b] mb-1">{details[i]}</h4>
            <p className="text-neutral-700">{details[i + 1]}</p>
          </div>
        );
      }
    }
    
    return items;
  };

  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-[#0d2c4b] font-semibold inline-block px-4 py-1 bg-neutral-200 rounded-full mb-2">Our Services</span>
          <h2 className="heading-2 text-[#0d2c4b] mb-4">We Offer:</h2>
        </div>

        {/* Desktop services alternating layout */}
        <div className="hidden md:block">
          {services.slice(0, 2).map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0d2c4b] mb-4">{service.title}</h3>
                <p className="text-neutral-700 text-lg mb-5">{service.description}</p>
                
                {/* Service details with bullet points */}
                <div className="space-y-2 mb-6">
                  {renderServiceDetails(service.details)}
                </div>
                
                <Link 
                  href={service.href}
                  className="bg-[#0d2c4b] hover:bg-[#194168] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center inline-flex"
                >
                  Apply for care
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Rest of the services in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {services.slice(2).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                href={service.href}
              />
            ))}
          </div>
        </div>

        {/* Mobile services slider */}
        <div className="md:hidden relative">
          <div 
            className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-4 hide-scrollbar"
            ref={servicesRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {services.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-[85%]">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  href={service.href}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white pointer-events-none"></div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === 0 ? 'bg-[#0d2c4b]' : 'bg-neutral-300'
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