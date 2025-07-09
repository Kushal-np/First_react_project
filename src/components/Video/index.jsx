import { useState } from "react";

function ImageLanding() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex justify-center items-center w-full px-6 sm:px-8 md:px-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Clean image container */}
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg">
          {/* Simple loading placeholder */}
          {!imageLoaded && (
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Clean image display */}
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration workspace"
            className={`w-full h-auto object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageLanding;