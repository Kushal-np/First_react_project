function CardComponents({ id, title, details }) {
  return (
    <div className="relative h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] w-full bg-black border border-gray-800 rounded-[25px] overflow-hidden group cursor-pointer">
      
      {/* Canvas-like reveal effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 sm:p-8">
        
        {/* Title */}
        <div className=" fonty text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-6 transform transition-all duration-500 group-hover:scale-105">
          {title}
        </div>
        
        {/* Description */}
        <div className=" fonty text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transform transition-all duration-500 delay-100 group-hover:text-gray-300 group-hover:translate-y-1">
          {details}
        </div>
        
      </div>
      
      {/* Bottom reveal line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      
    </div>
  );
}

export default CardComponents;