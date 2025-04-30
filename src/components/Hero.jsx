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
        <div className="absolute inset-0 bg-gray-700 bg-opacity-70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <div className="flex justify-center items-center mb-6">
            <CloudLightning size={48} className="text-cyan-400 mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="text-cyan-400">AQ</span>Pulse
            </h1>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Real-Time <span className="text-cyan-400">Air Quality</span>{" "}
            Monitoring
          </h2>

          <p className="text-lg sm:text-2xl text-gray-300 mb-8">
            Stay informed about the air you breathe on the GGITS campus with our
            IoT-enabled monitoring system. Make healthier choices with real-time
            data.
          </p>

          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Link to="/dashboard">
              <button className="px-8 py-4 text-lg bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Go to Dashboard
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-4 text-lg bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-900/30 transition hover:scale-105">
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
