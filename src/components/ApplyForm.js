"use client";

import { useState } from 'react';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    language: '',
    referral: '',
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
      // const response = await fetch('/api/apply', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Failed to submit');
      
      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        language: '',
        referral: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('There was an error submitting your application. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="heading-3 text-neutral-800 mb-3">Application Submitted!</h3>
          <p className="text-neutral-600 mb-6">
            Thank you for reaching out to Special Touch Home Care Group. We'll contact you within one business day to discuss your care needs.
          </p>
          <button 
            onClick={() => setSubmitSuccess(false)} 
            className="btn-primary"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <>
          <h3 className="heading-3 text-neutral-800 text-center mb-6">Apply for Care</h3>
          <p className="text-neutral-600 text-center mb-8">We'll reach out to you within one business day.</p>
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                placeholder="+1 (___) ___-____"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                placeholder="johndoe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-neutral-700 mb-1">
                What language do you speak?<span className="text-red-500">*</span>
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              >
                <option value="">Choose the language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Russian">Russian</option>
                <option value="French">French</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-neutral-700 mb-1">
                How did you hear about us?<span className="text-red-500">*</span>
              </label>
              <select
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              >
                <option value="">How you heard about us?</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Family">Friend/Family</option>
                <option value="Healthcare Provider">Healthcare Provider</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Additional information (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                placeholder="Please share any specific care needs or questions you have."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Apply'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ApplyForm; 