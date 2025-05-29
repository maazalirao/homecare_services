"use client";

import { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Initial assessment of care needs and preferences",
      details: [
        "In-home or phone consultation",
        "Care needs evaluation",
        "Family preferences discussion",
        "Insurance verification"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      )
    },
    {
      step: "02", 
      title: "Care Plan Creation",
      description: "Customized care plan tailored to specific needs",
      details: [
        "Personalized care schedule",
        "Service specifications",
        "Emergency protocols",
        "Family communication plan"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      )
    },
    {
      step: "03",
      title: "Caregiver Matching", 
      description: "Professional caregiver matched to personality and needs",
      details: [
        "Background-checked caregivers",
        "Language preferences",
        "Experience matching",
        "Meet & greet session"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      step: "04",
      title: "Care Begins",
      description: "Ongoing support with regular monitoring and updates",
      details: [
        "Care services start",
        "Regular check-ins",
        "Progress monitoring", 
        "24/7 coordinator support"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Home Care Works
          </h2>
          <p className="text-lg text-gray-700">
            From consultation to ongoing care - our streamlined process ensures your loved one gets the right support.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 cursor-pointer ${
                      activeStep === index 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                        : 'bg-white border-2 border-blue-200 text-blue-600 hover:border-blue-400'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    {step.icon}
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm font-bold text-blue-600 mb-2 block">{step.step}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    
                    {activeStep === index && (
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <ul className="text-sm space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-gray-700">
                              <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activeStep === index ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-blue-600 block">{step.step}</span>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${activeStep === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              {activeStep === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Start Your Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 