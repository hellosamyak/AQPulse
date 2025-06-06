import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CloudLightning, Funnel, Menu, X } from "lucide-react";
import ToggleThemeButton from "./ToggleThemeButton";

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
    <nav className="fixed w-full z-50 bg-white dark:bg-black bg-opacity-90 backdrop-blur-md shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <CloudLightning className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
            <span className="text-3xl font-bold text-black dark:text-white">
              <span className="text-blue-600 dark:text-cyan-400">AQ</span>Pulse
            </span>
          </div>

          <div className="hidden lg:block">
            <span className="text-xl text-black dark:text-white font-semibold">
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
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-black dark:text-white hover:text-blue-600 dark:hover:text-cyan-400"
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <ToggleThemeButton />
            {isDashboard && (
              <div
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                onClick={toggleSidebar}
              >
                <Funnel className="w-6 h-6 text-black dark:text-white" />
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            {isDashboard && (
              <div
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer mr-2"
                onClick={toggleSidebar}
              >
                <Funnel className="w-6 h-6 text-black dark:text-white" />
              </div>
            )}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden bg-white dark:bg-black bg-opacity-90 backdrop-blur-md`}
      >
        <div className="px-4 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.text}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-black dark:text-white hover:text-cyan-400"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
          <ToggleThemeButton />
          <span className="text-base text-black dark:text-white font-semibold pt-2 border-t border-gray-300 dark:border-gray-700">
            Gyan Ganga Institute of Technology & Sciences
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
