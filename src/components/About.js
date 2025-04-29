import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-primary-500 font-semibold">About Us</span>
              <h2 className="heading-2 text-neutral-800 mt-2 mb-6">Dedicated to Improving Lives Through Quality Care</h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Special Touch Home Care Group has been providing exceptional care services throughout New York for over 15 years. 
                Our dedicated team of caregivers is committed to enhancing the quality of life for our clients through personalized, 
                compassionate care that respects dignity and fosters independence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1 group-hover:text-primary-600 transition-colors">Trusted Expertise</h3>
                  <p className="text-neutral-600">Over 15 years of specialized home care experience.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1 group-hover:text-primary-600 transition-colors">Qualified Staff</h3>
                  <p className="text-neutral-600">Extensively trained and certified caregivers.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1 group-hover:text-primary-600 transition-colors">In-Home Service</h3>
                  <p className="text-neutral-600">Care provided in the comfort of your own home.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1 group-hover:text-primary-600 transition-colors">Custom Care Plans</h3>
                  <p className="text-neutral-600">Personalized care tailored to individual needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-primary-700 italic text-lg">
                "To enhance the quality of life for our clients through compassionate, personalized care that promotes independence, dignity, and well-being in the comfort of their own homes."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg transform translate-y-6 card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1454418747937-bd95bb945625?q=80&w=1770&auto=format&fit=crop"
                  alt="Caregiver with elderly client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1770&auto=format&fit=crop"
                  alt="Home care services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1624300603538-1c12b9e44e4a?q=80&w=1974&auto=format&fit=crop"
                  alt="Professional caregiver"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg transform translate-y-6 card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1770&auto=format&fit=crop"
                  alt="Elderly client smiling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
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