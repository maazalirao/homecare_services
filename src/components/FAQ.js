"use client";

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can you start providing care?",
      answer: "We can typically begin services within 24-48 hours of your initial consultation, depending on your specific needs and caregiver availability."
    },
    {
      question: "Do you accept insurance coverage?",
      answer: "Yes, we accept most major insurance plans including Medicare, Medicaid, and private insurance. Our team will help verify your coverage and handle the paperwork."
    },
    {
      question: "What languages do your caregivers speak?",
      answer: "Our team speaks 7+ languages including English, Spanish, Russian, Hebrew, Arabic, Chinese, and others to serve New York's diverse communities."
    },
    {
      question: "Are your caregivers licensed and background checked?",
      answer: "Absolutely. All our caregivers are licensed, bonded, insured, and undergo comprehensive background checks and ongoing training."
    },
    {
      question: "What areas of New York do you serve?",
      answer: "We provide services throughout all five boroughs of New York City and surrounding areas. Contact us to confirm coverage in your specific location."
    },
    {
      question: "Can I choose my caregiver?",
      answer: "Yes, we work with you to match the right caregiver based on your preferences, care needs, and personality compatibility."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About Our Care
          </h2>
          <p className="text-lg text-gray-700">
            Get quick answers to the most common questions about our home care services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our care coordinators are here to help answer any specific questions about your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12125551234"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now: (212) 555-1234
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg border border-blue-700 hover:bg-blue-50 transition-colors duration-300"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 