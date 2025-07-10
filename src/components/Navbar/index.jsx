import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/demo", label: "Demo" },
    { href: "/projects", label: "Our Projects" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[999] bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <div className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-[1340px] mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="w-[120px]">
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold tracking-wide text-white hover:text-gray-300 transition"
            >
              LUME
            </Link>
          </div>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden xl:flex flex-1 justify-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-sm fonty font-medium text-gray-300 hover:text-blue-400 transition duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden xl:flex items-center justify-end w-[140px] space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-sm text-white border border-gray-600 rounded-md hover:bg-white/10 transition whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="xl:hidden z-50 p-2 text-white hover:bg-white/10 rounded transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 sm:w-72 md:w-80 bg-[#0d0d0d]/90 backdrop-blur-lg
          transform transition-transform duration-300 ease-in-out
          xl:hidden flex flex-col px-6 pt-24 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {[...navLinks, { href: "/login", label: "Login" }, { href: "/signup", label: "Sign Up" }].map(
          ({ href, label }) => (
            <Link
              key={href}
              to={href}
              className="text-gray-200 py-4 border-b border-gray-700 hover:text-blue-400 transition-colors text-base"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          )
        )}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
