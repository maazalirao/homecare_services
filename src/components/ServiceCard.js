import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, href, imageUrl }) => {
  return (
    <div className="card group hover:border-primary-300 transition-all duration-300 h-full flex flex-col animate-fade-in">
      <div className="relative mb-6 overflow-hidden rounded-lg">
        {imageUrl ? (
          <div className="relative w-full h-52 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
            {icon}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-neutral-600 mb-6 flex-grow">{description}</p>
      
      <Link 
        href={href} 
        className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-colors mt-auto"
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
  );
};

export default ServiceCard; 