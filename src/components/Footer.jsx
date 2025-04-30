import React from "react";
import { CloudLightning, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <CloudLightning size={32} className="text-cyan-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">
              <span className="text-cyan-400">AQ</span>Pulse
            </h3>
          </div>
          <div className="flex space-x-6">
            <a
              href="/dashboard"
              className="text-gray-300 text-lg hover:text-cyan-400 transition"
            >
              Dashboard
            </a>
            <a
              href="/about"
              className="text-gray-300 text-lg hover:text-cyan-400 transition"
            >
              About
            </a>
            <a
              href="https://github.com/hellosamyak/AQPulse"
              className="text-gray-300 text-lg hover:text-cyan-400 transition"
            >
              Github
            </a>
          </div>
        </div>
        <div className="text-center flex justify-center md:text-left text-gray-400 text-lg">
          <p>
            © {currentYear} Team QudraTECH, Dept. of CS-IoTCSBT, GGITS. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
