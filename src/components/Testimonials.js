"use client";

import { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef(null);

  const testimonials = [
    {
      content: "Having Special Touch caregivers in our home has been a blessing. They've provided exceptional care for my mother, allowing her to maintain her independence while giving our family peace of mind. The staff is professional, compassionate, and truly cares about their clients.",
      name: "Jennifer Rodriguez",
      role: "Client's Daughter",
      imageUrl: "/images/testimonial-1.jpg"
    },
    {
      content: "My father needed care after his surgery, and Special Touch was recommended by his doctor. The care coordinator took the time to understand his specific needs, and the caregiver they matched him with was perfect. She was knowledgeable, patient, and helped speed up his recovery.",
      name: "Michael Thompson",
      role: "Client's Son",
      imageUrl: "/images/testimonial-2.jpg"
    },
    {
      content: "As someone living with a chronic condition, I needed consistent support at home. The team at Special Touch has been there for me every step of the way. My caregiver has become like family, and the quality of care I receive has significantly improved my quality of life.",
      name: "Sarah Williams",
      role: "Client",
      imageUrl: "/images/testimonial-3.jpg"
    },
    {
      content: "We had Andy as PT. He is very attentive and conscientious. We would definitely choose him again. The administrative staff was also very helpful in coordinating care and answering all our questions promptly.",
      name: "Thomas Droppelmann",
      role: "Client",
      imageUrl: "/images/testimonial-4.jpg"
    },
    {
      content: "My grandmother needed 24/7 care, and Special Touch made the process seamless. They handled everything from insurance paperwork to caregiver scheduling. Their multilingual staff was especially helpful as my grandmother primarily speaks Spanish. Highly recommend!",
      name: "David Martinez",
      role: "Client's Grandson",
      imageUrl: "/images/testimonial-5.jpg"
    },
    {
      content: "After interviewing several agencies, we chose Special Touch for my wife's care needs. Their attention to detail and personalized approach set them apart. Her caregiver is not only skilled but genuinely cares about her wellbeing and comfort.",
      name: "Robert Johnson",
      role: "Client's Husband",
      imageUrl: "/images/testimonial-6.jpg"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setTimeout(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 text-neutral-800 mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 text-lg">
            Don't just take our word for it. Hear from the families who have experienced the difference our caring team can make.
          </p>
        </div>

        {/* Desktop Testimonials Grid with Pagination */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div
              className={`grid grid-cols-3 gap-8 transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
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
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-primary-50 hover:border-primary-300 transition-colors"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {Array(Math.ceil(testimonials.length / 3)).fill(0).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-primary-50 hover:border-primary-300 transition-colors"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Testimonials - Single Column */}
        <div className="md:hidden space-y-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              imageUrl={testimonial.imageUrl}
            />
          ))}
          
          <div className="text-center pt-4">
            <a href="/testimonials" className="btn-secondary inline-flex items-center">
              View All Testimonials
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 