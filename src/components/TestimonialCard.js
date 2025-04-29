import Image from 'next/image';

const TestimonialCard = ({ content, name, role, imageUrl }) => {
  return (
    <div className="card relative flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-12 h-12 text-primary-100">
        <svg
          fill="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-grow mb-6 min-h-[160px]">
        <p className="text-neutral-600 italic leading-relaxed text-lg">{content}</p>
      </div>

      {/* Author info */}
      <div className="flex items-center mt-auto">
        {imageUrl ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover object-center"
              quality={90}
              sizes="64px"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mr-4 shadow-md flex-shrink-0">
            <span className="text-lg font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-neutral-800 text-lg">{name}</h4>
          {role && <p className="text-neutral-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 