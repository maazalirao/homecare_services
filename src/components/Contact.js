"use client";

import { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // This would be the API call in a real implementation
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Failed to submit');
      
      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-[#0d2c4b] mb-4">Get in Touch</h2>
          <p className="text-neutral-700 text-lg">
            Have questions about our services or need more information? Our team is here to help.
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-8">
            <Link href="/apply" className="bg-[#0d2c4b] hover:bg-[#194168] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center">
              Apply for Care
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card animate-fade-in">
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="heading-3 text-[#0d2c4b] mb-3">Message Sent!</h3>
                <p className="text-neutral-700 mb-6">
                  Thank you for reaching out to Special Touch Home Care Group. We'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)} 
                  className="bg-[#0d2c4b] hover:bg-[#194168] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="heading-3 text-[#0d2c4b] mb-6">Send Us a Message</h3>
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                    {submitError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0d2c4b] mb-1">
                      Your Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#58b4db] focus:border-[#58b4db] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0d2c4b] mb-1">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#58b4db] focus:border-[#58b4db] outline-none transition-colors"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0d2c4b] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#58b4db] focus:border-[#58b4db] outline-none transition-colors"
                        placeholder="+1 (___) ___-____"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#0d2c4b] mb-1">
                      Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#58b4db] focus:border-[#58b4db] outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0d2c4b] mb-1">
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#58b4db] focus:border-[#58b4db] outline-none transition-colors"
                      placeholder="Please type your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#0d2c4b] hover:bg-[#194168] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="card animate-fade-in">
              <h3 className="heading-3 text-[#0d2c4b] mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="min-w-[40px] h-10 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d2c4b]">Address</h4>
                    <p className="text-neutral-700">123 Broadway, Suite 456, New York, NY 10001</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[40px] h-10 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d2c4b]">Phone</h4>
                    <p className="text-neutral-700">
                      <a href="tel:+12125551234" className="hover:text-[#58b4db] transition-colors">(212) 555-1234</a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[40px] h-10 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d2c4b]">Email</h4>
                    <p className="text-neutral-700">
                      <a href="mailto:info@specialtouchhomecare.com" className="hover:text-[#58b4db] transition-colors">info@specialtouchhomecare.com</a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[40px] h-10 rounded-full bg-[#58b4db]/20 flex items-center justify-center text-[#0d2c4b] mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d2c4b]">Hours</h4>
                    <p className="text-neutral-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-neutral-700">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-neutral-700">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <Link href="/apply" className="flex items-center text-[#0d2c4b] font-medium hover:text-[#58b4db] transition-colors">
                  <span>Apply for Care</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Map placeholder - in a real implementation, you'd use Google Maps or similar */}
            <div className="rounded-2xl overflow-hidden h-[300px] bg-neutral-100 animate-fade-in relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343057!2d-73.98823492396799!3d40.74844994246894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc7c6a2768!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1651255266799!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 