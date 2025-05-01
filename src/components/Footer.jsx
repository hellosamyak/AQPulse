import React from "react";
import { Link } from "react-router-dom";
import { CloudLightning } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <CloudLightning
              size={32}
              className="text-blue-600 mr-3 dark:text-cyan-400"
            />
            <h3 className="text-2xl font-bold text-black dark:text-white">
              <span className="text-blue-600 dark:text-cyan-400">AQ</span>Pulse
            </h3>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/dashboard"
              className="text-black dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-black dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              About
            </Link>
            <a
              href="https://github.com/hellosamyak/AQPulse"
              className="text-black dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-cyan-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="text-center text-black dark:text-gray-400 text-lg">
          <p>
            © {currentYear} Team QudraTECH, Dept. of CS-IoTCSBT, GGITS. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
