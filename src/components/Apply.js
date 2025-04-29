import Image from 'next/image';
import ApplyForm from './ApplyForm';

const Apply = () => {
  return (
    <section id="apply" className="section bg-primary-900 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="max-w-xl">
              <span className="text-primary-300 font-semibold">Get Started Today</span>
              <h2 className="text-white heading-2 mt-2 mb-6">Apply for Quality Home Care Services</h2>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                Take the first step toward compassionate, professional home care for yourself or your loved one. Our team is ready to provide the support and assistance needed to maintain independence and quality of life at home.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-primary-300 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Free Initial Assessment</h3>
                    <p className="text-primary-200">We'll evaluate care needs without any obligation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-primary-300 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Customized Care Plans</h3>
                    <p className="text-primary-200">Tailored services to meet specific health needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center text-primary-300 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Insurance Assistance</h3>
                    <p className="text-primary-200">Help navigating insurance and payment options.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-800 p-6 rounded-2xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-primary-300 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-primary-100">
                    <span className="block font-semibold text-white">Medicaid Accepted</span>
                    We work with various insurance and Medicaid programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ApplyForm />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_2)">
            <path d="M190.14 66.94C181.52 53.09 169.11 42.31 154.44 35.76C139.76 29.2 123.45 27.17 107.7 29.93C91.95 32.69 77.42 40.11 66.1 51.17C54.78 62.22 47.04 76.55 44.04 92.24C41.04 107.93 42.94 124.27 49.4 139.05C55.87 153.83 66.56 166.38 80.36 175.17C94.15 183.97 110.42 188.53 126.85 188.28C143.28 188.02 159.38 182.97 172.88 173.77L156.36 152.69C147.4 158.72 136.75 162.16 125.77 162.33C114.79 162.5 104.03 159.41 94.88 153.63C85.72 147.86 78.6 139.71 74.48 130.14C70.35 120.56 69.38 110.05 71.67 100.01C73.96 89.98 79.39 80.91 87.17 73.92C94.94 66.93 104.71 62.36 115.15 60.85C125.58 59.33 136.24 60.94 145.64 65.44C155.04 69.95 162.76 77.15 167.69 86.13L190.14 66.94Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      
      <div className="absolute left-0 top-20 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20" />
        </svg>
      </div>
    </section>
  );
};

export default Apply; 