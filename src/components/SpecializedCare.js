"use client";

const SpecializedCare = () => {
  const specialties = [
    {
      title: "Dementia & Alzheimer's Care",
      description: "Specialized support for memory-related conditions",
      features: ["Memory stimulation activities", "Safety protocols", "Family guidance", "Behavior management"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Post-Surgical Recovery",
      description: "Comprehensive care during recovery period",
      features: ["Wound care", "Mobility assistance", "Medication management", "Physical therapy support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
      color: "from-green-500 to-green-700"
    },
    {
      title: "Chronic Condition Management", 
      description: "Long-term support for ongoing health conditions",
      features: ["Diabetes care", "Heart condition monitoring", "Medication adherence", "Lifestyle support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Palliative & Hospice Support",
      description: "Compassionate end-of-life care and comfort",
      features: ["Comfort care", "Family support", "Dignity preservation", "24/7 availability"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
            Specialized Programs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Care for Specific Needs
          </h2>
          <p className="text-lg text-gray-700">
            Specialized care programs designed for unique health conditions and recovery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${specialty.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {specialty.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {specialty.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href="/#contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Learn More About This Program
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Specialized Care?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our specialized care coordinators will assess your unique needs and create a customized care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12125551234"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call for Consultation
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg border border-blue-500 hover:bg-blue-800 transition-colors duration-300"
              >
                Schedule Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedCare; 