import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-primary-600 font-semibold">About Us</span>
              <h2 className="heading-2 text-neutral-800 mt-2">Compassionate Home Care You Can Trust</h2>
            </div>
            
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              Since our founding, Special Touch Home Care Group has been dedicated to providing exceptional home care services to New York families, allowing our clients to maintain their independence and dignity in the comfort of their own homes.
            </p>
            
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Our experienced caregivers are carefully selected not just for their skills and qualifications, but for their compassion and dedication to improving the lives of those they serve. We believe in personalized care that addresses each client's unique needs, preferences, and circumstances.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1">Trusted Expertise</h3>
                  <p className="text-neutral-600">Over 15 years of specialized home care experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1">Qualified Staff</h3>
                  <p className="text-neutral-600">Extensively trained and certified caregivers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1">24/7 Support</h3>
                  <p className="text-neutral-600">Always available when you need assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1">Multilingual Staff</h3>
                  <p className="text-neutral-600">Services available in 7+ languages.</p>
                </div>
              </div>
            </div>
            
            {/* Mission statement */}
            <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Our Mission</h3>
              <p className="text-primary-700 italic">
                "To enhance the quality of life for our clients through compassionate, personalized care that promotes independence, dignity, and well-being in the comfort of their own homes."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg transform translate-y-6">
                <Image
                  src="/images/about-1.jpg"
                  alt="Caregiver with elderly client"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-2.jpg"
                  alt="Home care services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-3.jpg"
                  alt="Professional caregiver"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg transform translate-y-6">
                <Image
                  src="/images/about-4.jpg"
                  alt="Elderly client smiling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 