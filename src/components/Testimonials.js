"use client";

import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      content: "The caregivers from Special Touch have become like family to us. Their attention to my father's needs and their genuine compassion has made a world of difference in his quality of life and our peace of mind.",
      name: "Margaret H.",
      role: "Daughter of Client",
      imageUrl: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?q=80&w=1780&auto=format&fit=crop"
    },
    {
      content: "I cannot express enough how much Special Touch Home Care has helped my mother maintain her independence. Their staff is professional, reliable, and truly caring. I highly recommend their services to anyone in need.",
      name: "Robert W.",
      role: "Son of Client",
      imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2f9296e?q=80&w=1770&auto=format&fit=crop"
    },
    {
      content: "After my surgery, I needed assistance with daily activities. The caregiver assigned to me was not only professional but also became a wonderful companion. Their attentive care helped me recover faster than expected.",
      name: "Elizabeth T.",
      role: "Recovery Patient",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      content: "We've tried other home care services, but none compare to Special Touch. Their team takes the time to understand our unique needs and preferences, creating a care plan that truly works for our family situation.",
      name: "David L.",
      role: "Family Member",
      imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1160&auto=format&fit=crop"
    },
    {
      content: "The compassion and expertise shown by the Special Touch team has been invaluable. They've provided not just physical assistance but emotional support during a challenging time for our entire family.",
      name: "Sarah M.",
      role: "Daughter of Client",
      imageUrl: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      content: "I appreciate how flexible Special Touch has been with our changing schedule needs. Their reliable, consistent service gives us confidence that our loved one is in capable hands even when we can't be there.",
      name: "James K.",
      role: "Son of Client",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop"
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
    <section id="testimonials" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold inline-block mb-2">Testimonials</span>
          <h2 className="heading-2 text-neutral-800 mb-6">What Our Clients Say</h2>
          <p className="text-neutral-600 text-lg">
            Don't just take our word for it. Hear from the families who have experienced the difference our caring team can make.
          </p>
        </div>

        {/* Desktop Testimonials Grid with Pagination */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="h-full">
                  <TestimonialCard
                    content={testimonial.content}
                    name={testimonial.name}
                    role={testimonial.role}
                    imageUrl={testimonial.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-500 hover:border-primary-500 transition-colors group"
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
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary-500 w-8' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-500 hover:border-primary-500 transition-colors group"
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
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
            >
              <TestimonialCard
                content={testimonials[activeIndex].content}
                name={testimonials[activeIndex].name}
                role={testimonials[activeIndex].role}
                imageUrl={testimonials[activeIndex].imageUrl}
              />
            </div>
            
            {/* Mobile Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary-500 w-6' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 