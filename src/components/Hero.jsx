import React from "react";
import { Link } from "react-router-dom";
import { CloudLightning } from "lucide-react";

function Hero() {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/college.jpg"
          alt="College background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gray-300 bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-60 mix-blend-multiply transition-colors" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <div className="flex justify-center items-center mb-6">
            <CloudLightning
              size={48}
              className="text-blue-600 dark:text-cyan-400 mr-3"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white">
              <span className="text-blue-600 dark:text-cyan-400">AQ</span>Pulse
            </h1>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white">
            Real-Time{" "}
            <span className="text-blue-500 dark:text-cyan-400">
              Air Quality
            </span>{" "}
            Monitoring
          </h2>

          <p className="px-8 py-4 bg-blue-900/30 text-white dark:bg-transparent border-2 border-none rounded-xl text-lg sm:text-2xl dark:text-gray-200 mb-8 transition-colors">
            Stay informed about the air you breathe on the GGITS campus with our
            IoT-enabled monitoring system. Make healthier choices with real-time
            data.
          </p>

          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Link to="/dashboard">
              <button className="px-8 py-4 text-lg bg-blue-600 dark:bg-cyan-500 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-cyan-600 transition hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Go to Dashboard
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-4 text-lg border-2 border-blue-500 dark:border-cyan-500 text-white dark:text-cyan-400 font-semibold rounded-lg bg-blue-900/30 dark:bg-transparent dark:hover:bg-cyan-900/30 transition hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
