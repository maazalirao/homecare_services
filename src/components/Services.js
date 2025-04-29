"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import ServiceCard from './ServiceCard';

const Services = () => {
  const servicesRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const services = [
    {
      title: "Personal Care",
      description: "Assistance with daily activities including bathing, dressing, grooming, toileting, and mobility support.",
      imageUrl: "https://images.unsplash.com/photo-1576765608866-5b51f8501d99?q=80&w=1887&auto=format&fit=crop",
      href: "/services/personal-care"
    },
    {
      title: "Nursing Services",
      description: "Professional nursing care including medication management, wound care, vital signs monitoring, and health assessments.",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1887&auto=format&fit=crop",
      href: "/services/nursing"
    },
    {
      title: "Companion Care",
      description: "Friendly companionship, conversation, and emotional support for seniors living alone or feeling isolated.",
      imageUrl: "https://images.unsplash.com/photo-1595781516977-50a7194d6b0a?q=80&w=1887&auto=format&fit=crop",
      href: "/services/companion"
    },
    {
      title: "Household Support",
      description: "Light housekeeping, meal preparation, laundry, shopping, and errands to maintain a safe and clean living environment.",
      imageUrl: "https://images.unsplash.com/photo-1493603268518-36488d51a716?q=80&w=1950&auto=format&fit=crop",
      href: "/services/household"
    },
    {
      title: "Specialized Care",
      description: "Tailored care for clients with Alzheimer's, Parkinson's, or other specific medical conditions.",
      imageUrl: "https://images.unsplash.com/photo-1523841470613-3bcb6f158efd?q=80&w=1935&auto=format&fit=crop",
      href: "/services/specialized"
    },
    {
      title: "Respite Care",
      description: "Temporary relief for family caregivers, allowing them to take a break while ensuring their loved ones receive quality care.",
      imageUrl: "https://images.unsplash.com/photo-1604024554928-5624a20aa7c4?q=80&w=1935&auto=format&fit=crop",
      href: "/services/respite"
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

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold inline-block mb-2">Our Services</span>
          <h2 className="heading-2 text-neutral-800 mb-6">Comprehensive Home Care Solutions</h2>
          <p className="text-neutral-600 text-lg">
            We offer a wide range of personalized home care services designed to meet the unique needs of each client. Our compassionate caregivers are trained to provide professional support while promoting independence and dignity.
          </p>
        </div>

        {/* Desktop services grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              href={service.href}
            />
          ))}
        </div>

        {/* Mobile services slider */}
        <div className="md:hidden relative">
          <div 
            className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-5 hide-scrollbar"
            ref={servicesRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-[85%]">
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
                  index === 0 ? 'bg-primary-500' : 'bg-neutral-300'
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