import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, href, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-100 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative mb-4 overflow-hidden">
        {imageUrl ? (
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
          </div>
        ) : (
          <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
            {icon}
          </div>
        )}
      </div>
      
      <div className="px-5 pb-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        
        <Link 
          href={href} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
        >
          Learn More
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
    </div>
  );
};

export default ServiceCard; 