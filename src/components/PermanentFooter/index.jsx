import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

function PermanentFooter() {
  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Main footer content */}
      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto w-[80%] max-w-[1340px]">
          
          {/* Top section with logo and main content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Logo section */}
            <div className="lg:col-span-1 flex flex-col items-start">
              <a 
                href="/" 
                className="group relative inline-block mb-6"
              >
                <div className="relative">
                  <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    LUME
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                Illuminating your digital experience with cutting-edge technology and innovative solutions.
              </p>
            </div>
            
            {/* Explore section */}
            <div className="group">
              <h3 className="text-white text-lg font-bold mb-6 relative">
                Explore
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-3">
                <a 
                  href="/objective" 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 hover:drop-shadow-lg"
                >
                  Objective
                </a>
                <a 
                  href="/features" 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 hover:drop-shadow-lg"
                >
                  Features
                </a>
              </div>
            </div>
            
            {/* Programs section */}
            <div className="group">
              <h3 className="text-white text-lg font-bold mb-6 relative">
                Programs
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-3">
                <a 
                  href="/account" 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 hover:drop-shadow-lg"
                >
                  My Account
                </a>
                <a 
                  href="/signup" 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 hover:drop-shadow-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
            
            {/* Contact section */}
            <div className="group">
              <h3 className="text-white text-lg font-bold mb-6 relative">
                Connect
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-3 mb-6">
                <a 
                  href="/contact" 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 hover:drop-shadow-lg"
                >
                  Contact Us
                </a>
                <a 
                  href="/about" 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 hover:drop-shadow-lg"
                >
                  About Us
                </a>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
              
              {/* Social media icons */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="group relative p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group relative p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group relative p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Separator line */}
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
          
          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2025 LUME. All rights reserved. Crafted with passion.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
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