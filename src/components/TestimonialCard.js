import Image from 'next/image';

const TestimonialCard = ({ content, name, role, imageUrl }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 h-full flex flex-col relative overflow-hidden group transform hover:-translate-y-1">
      {/* Quote decoration */}
      <div className="absolute -top-4 -left-4 text-8xl text-blue-400/10 font-serif pointer-events-none">"</div>
      
      {/* Content */}
      <p className="text-gray-700 relative z-10 mb-6 flex-grow">
        {content}
      </p>
      
      {/* Author */}
      <div className="flex items-center mt-4">
        {imageUrl ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
            <Image 
              src={imageUrl} 
              alt={name} 
              width={50} 
              height={50} 
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-50 rounded-tl-3xl -mb-8 -mr-8 transform rotate-45 group-hover:bg-blue-100/50 transition-colors duration-300"></div>
    </div>
  );
};

export default TestimonialCard; 