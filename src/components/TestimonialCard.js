import Image from 'next/image';

const TestimonialCard = ({ content, name, role, imageUrl }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-neutral-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
      {/* Quote decoration */}
      <div className="absolute -top-4 -left-4 text-8xl text-[#58b4db]/10 font-serif pointer-events-none">"</div>
      
      {/* Content */}
      <p className="text-neutral-700 relative z-10 mb-6 flex-grow italic">
        {content}
      </p>
      
      {/* Author */}
      <div className="flex items-center mt-4">
        {imageUrl ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#0d2c4b]/20">
            <Image 
              src={imageUrl} 
              alt={name} 
              width={50} 
              height={50} 
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#58b4db]/20 text-[#0d2c4b] font-bold flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-[#0d2c4b]">{name}</h4>
          <p className="text-neutral-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 