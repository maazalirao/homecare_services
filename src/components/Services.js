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
      imageUrl: "/images/service-personal-care.jpg",
      href: "/services/personal-care"
    },
    {
      title: "Nursing Services",
      description: "Professional nursing care including medication management, wound care, vital signs monitoring, and health assessments.",
      imageUrl: "/images/service-nursing.jpg",
      href: "/services/nursing"
    },
    {
      title: "Companion Care",
      description: "Friendly companionship, conversation, and emotional support for seniors living alone or feeling isolated.",
      imageUrl: "/images/service-companion.jpg",
      href: "/services/companion"
    },
    {
      title: "Household Support",
      description: "Light housekeeping, meal preparation, laundry, shopping, and errands to maintain a safe and clean living environment.",
      imageUrl: "/images/service-household.jpg",
      href: "/services/household"
    },
    {
      title: "Specialized Care",
      description: "Tailored care for clients with Alzheimer's, Parkinson's, or other specific medical conditions.",
      imageUrl: "/images/service-specialized.jpg",
      href: "/services/specialized"
    },
    {
      title: "Respite Care",
      description: "Temporary relief for family caregivers, allowing them to take a break while ensuring their loved ones receive quality care.",
      imageUrl: "/images/service-respite.jpg",
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
    const walk = (x - startX) * 2; // Scroll speed multiplier
    servicesRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 text-neutral-800 mb-4">Our Services</h2>
          <p className="text-neutral-600 text-lg">
            At Special Touch Home Care Group, we treat our clients like family. Our personalized home care services are delivered with genuine love, attention, and the utmost care.
          </p>
        </div>

        {/* Desktop Services Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Mobile Services Carousel - Scrollable/Swipeable */}
        <div 
          className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide relative"
          ref={servicesRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
            {services.map((service, index) => (
              <div key={index} className="w-80 flex-shrink-0">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  href={service.href}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-20 pt-16 border-t border-neutral-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-neutral-800 mb-4">How It Works</h2>
            <p className="text-neutral-600 text-lg">
              Getting started with Special Touch Home Care is simple. Our streamlined process ensures you or your loved one receives the right care quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">1</div>
              <h3 className="heading-3 text-neutral-800 mb-3">Initial Consultation</h3>
              <p className="text-neutral-600">
                We start with a free consultation to understand your needs and explain how we can help. This can be done in-person or virtually.
              </p>
            </div>

            <div className="card text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">2</div>
              <h3 className="heading-3 text-neutral-800 mb-3">Personalized Care Plan</h3>
              <p className="text-neutral-600">
                Our team develops a customized care plan tailored to your specific needs, preferences, and medical requirements.
              </p>
            </div>

            <div className="card text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">3</div>
              <h3 className="heading-3 text-neutral-800 mb-3">Caregiver Matching</h3>
              <p className="text-neutral-600">
                We carefully match you with the right caregiver based on needs, personality, and schedule to ensure the perfect fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 