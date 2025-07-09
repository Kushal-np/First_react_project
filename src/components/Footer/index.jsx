function JoinPlatform() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.1),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(75,0,130,0.1),transparent)] opacity-40"></div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-gray-600 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-gray-500 rounded-full animate-pulse opacity-40 animation-delay-150"></div>
      <div className="absolute bottom-16 left-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full animate-pulse opacity-25 animation-delay-300"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="fonty text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-wide">
            Join The Product-First Platform
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-6 opacity-60"></div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-lg">
          
          {/* Primary Button */}
          <button className="group relative flex-1 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 overflow-hidden">
            <span className="relative z-10 text-base sm:text-lg">Start Building</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
          </button>
          
          {/* Secondary Button */}
          <button className="group relative flex-1 bg-transparent border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20 overflow-hidden">
            <span className="relative z-10 text-base sm:text-lg">Schedule Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          
        </div>
        
        {/* Subtle call-to-action hint */}
        <div className="mt-8 sm:mt-10 text-gray-500 text-xs sm:text-sm tracking-wider uppercase opacity-70">
          No credit card required
        </div>
        
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      
    </div>
  );
}

export default JoinPlatform;