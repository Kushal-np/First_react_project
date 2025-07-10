import { Instagram, Facebook, Twitter, Phone } from "lucide-react";

function PermanentFooter() {
  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-8">

          {/* Sections Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 mb-8">
            {/* Explore */}
            <div className="group">
              <h3 className="text-white text-center text-base sm:text-lg font-bold mb-6 relative">
                Explore
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-3">
                <a href="/objective" className="block text-gray-400 hover:text-white transition duration-300 hover:translate-x-2 hover:drop-shadow-lg text-center">Objective</a>
                <a href="/features" className="block text-gray-400 hover:text-white transition duration-300 hover:translate-x-2 hover:drop-shadow-lg text-center">Features</a>
              </div>
            </div>

            {/* Programs */}
            <div className="group">
              <h3 className="text-white text-center text-base sm:text-lg font-bold mb-6 relative">
                Programs
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-3">
                <a href="/account" className="block text-gray-400 hover:text-white transition duration-300 hover:translate-x-2 hover:drop-shadow-lg text-center">My Account</a>
                <a href="/signup" className="block text-gray-400 hover:text-white transition duration-300 hover:translate-x-2 hover:drop-shadow-lg text-center">Sign Up</a>
              </div>
            </div>

            {/* Connect */}
            <div className="group">
              <h3 className="text-white text-center text-base sm:text-lg font-bold mb-6 relative">
                Connect
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-3 mb-6">
                <a href="/contact" className="block text-gray-400 hover:text-white transition duration-300 hover:translate-x-2 hover:drop-shadow-lg text-center">Contact Us</a>
                <a href="/about" className="block text-gray-400 hover:text-white transition duration-300 hover:translate-x-2 hover:drop-shadow-lg text-center">About Us</a>
                <div className="flex items-center text-gray-400 hover:text-white transition duration-300 text-sm">
                  
                  
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center flex-wrap gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`group p-3 bg-gray-800/50 rounded-xl transition duration-300 hover:scale-110 hover:shadow-lg ${
                      idx === 0
                        ? "hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/25"
                        : idx === 1
                        ? "hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-blue-500/25"
                        : "hover:bg-gradient-to-r from-gray-600 to-gray-500 hover:shadow-gray-500/25"
                    }`}
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-white transition duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-gradient-to-r from-transparent via-black to-transparent">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm">
            <div className="text-gray-500 text-center sm:text-left">
              © 2025 LUME. All rights reserved. Crafted with passion.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a href="/privacy" className="text-gray-500 hover:text-white transition duration-300">Privacy Policy</a>
              <a href="/terms" className="text-gray-500 hover:text-white transition duration-300">Terms of Service</a>
              <a href="/cookies" className="text-gray-500 hover:text-white transition duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-25 delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-3000"></div>
      </div>
    </div>
  );
}

export default PermanentFooter;
