"use client";

import { useState } from 'react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-6 z-50">
      {/* CTA Buttons - only rendered when open */}
      {isOpen && (
        <div className="mb-28 flex flex-col gap-4">
          {/* Emergency Button */}
          <a
            href="tel:+12125551234"
            className="flex items-center justify-between bg-red-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-red-700 transition-all duration-200"
          >
            <span className="font-medium">Emergency</span>
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </a>
          
          {/* Call Now Button */}
          <a
            href="tel:+12125551234"
            className="flex items-center justify-between bg-green-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-green-700 transition-all duration-200"
          >
            <span className="font-medium">Call Now</span>
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </a>
          
          {/* Get Info Button */}
          <a
            href="#contact"
            className="flex items-center justify-between bg-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-blue-700 transition-all duration-200"
          >
            <span className="font-medium">Get Info</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </a>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          )}
        </svg>
        
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-30"></span>
        )}
      </button>
    </div>
  );
};

export default FloatingCTA; 