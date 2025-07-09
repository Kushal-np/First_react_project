import { useState } from "react";

function LandingText() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8 relative text-center">
      
      <h1 className="fonty text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight sm:leading-none drop-shadow-2xl">
        <span className="inline-block animate-pulse bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Smart Tools
        </span>
        <br />
        <span className="inline-block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
          to Empower
        </span>
        <br />
        <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Your Team
        </span>
      </h1>

      <p className="mt-6 text-gray-200 max-w-2xl text-base sm:text-lg lg:text-xl font-light tracking-wide leading-relaxed">
        <span className=" fonty bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
          Our adaptable template works flawlessly on any device, so you set it up once and enjoy lasting, polished results that scale with your business.
        </span>
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
        <button 
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white rounded-2xl font-semibold text-base shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          onMouseEnter={() => setHoveredButton('primary')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get Started
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        <button 
          className="group relative px-8 py-4 bg-gradient-to-r from-white/10 to-blue-100/20 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold text-base shadow-xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          onMouseEnter={() => setHoveredButton('secondary')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 103 3M9 10h3m-3 0v8a2 2 0 002 2h1M9 18h3" />
            </svg>
            Request a Demo
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </div>

      {/* Floating decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-40" />
      
      {/* Soft background blur layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-blue-700/5 rounded-3xl blur-3xl -z-10" />
    </div>
  );
}

export default LandingText;
