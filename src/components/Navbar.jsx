import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CloudLightning, Funnel, Menu, X } from "lucide-react";

function Navbar({ toggleSidebar }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { text: "Home", path: "/" },
    { text: "Dashboard", path: "/dashboard" },
    { text: "About", path: "/about" },
  ];
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <CloudLightning className="w-8 h-8 text-cyan-400" />
            <span className="text-3xl font-bold text-white">
              <span className="text-cyan-400">AQ</span>Pulse
            </span>
          </div>
          <div className="hidden lg:block">
            <span className="text-xl text-white font-semibold">
              Gyan Ganga Institute of Technology & Sciences
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.text}
                to={link.path}
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
            {isDashboard && (
              <div
                className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                onClick={toggleSidebar}
              >
                <Funnel className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            {isDashboard && (
              <div
                className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer mr-2"
                onClick={toggleSidebar}
              >
                <Funnel className="w-6 h-6 text-white" />
              </div>
            )}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden bg-black bg-opacity-90 backdrop-blur-md`}
      >
        <div className="px-4 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.text}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
          <span className="text-base text-white font-semibold pt-2 border-t border-gray-700">
            Gyan Ganga Institute of Technology & Sciences
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
