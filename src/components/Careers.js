import Image from 'next/image';
import Link from 'next/link';

const JobCard = ({ title, type, location, description }) => {
  return (
    <div className="card group hover:border-primary-300 h-full flex flex-col animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">{title}</h3>
          <div className="flex items-center mt-2 text-sm text-neutral-500">
            <span>{type}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
          </div>
        </div>
        <span className="text-xs font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">New</span>
      </div>
      <p className="text-neutral-600 mb-6 flex-grow">{description}</p>
      <Link 
        href="/careers" 
        className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-colors mt-auto"
      >
        Apply Now
        <svg 
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

const Careers = () => {
  const jobs = [
    {
      title: "Registered Nurse (RN)",
      type: "Full-time",
      location: "New York City",
      description: "Join our team as a Registered Nurse providing high-quality care to our clients in their homes. Requires valid RN license and 2+ years of experience."
    },
    {
      title: "Home Health Aide (HHA)",
      type: "Full-time / Part-time",
      location: "New York City",
      description: "Provide compassionate personal care and assistance with daily activities to help our clients maintain their independence and dignity at home."
    },
    {
      title: "Care Coordinator",
      type: "Full-time",
      location: "New York City",
      description: "Oversee client care plans, coordinate services between caregivers and clients, and ensure all care needs are met with the highest quality standards."
    },
    {
      title: "Physical Therapist",
      type: "Contract",
      location: "New York City",
      description: "Work with clients to improve mobility, reduce pain, and increase strength through customized therapeutic exercise programs in their homes."
    }
  ];

  return (
    <section id="careers" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/careers.jpg"
                alt="Special Touch Home Care careers"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="heading-2 text-neutral-800 mb-4">Join Our Team</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              At Special Touch Home Care Group, we're always looking for compassionate and dedicated professionals to join our team. When you work with us, you become part of a supportive community that values your contribution to our clients' well-being.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Competitive Pay</h3>
                  <p className="text-neutral-600">Earn what you deserve with our competitive salary packages and bonuses.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work with you to create a schedule that fits your life and commitments.</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Career Growth</h3>
                  <p className="text-neutral-600">Opportunities for advancement, continuing education, and professional development.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link href="/careers" className="btn-primary">
                View All Openings
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-neutral-800 mb-4">Current Openings</h2>
            <p className="text-neutral-600 text-lg">
              Explore our available positions and find the perfect role where you can make a difference in people's lives every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                type={job.type}
                location={job.location}
                description={job.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers; 