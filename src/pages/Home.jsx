import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import NavigateButton from "../components/NavigateButton"; // Adjust the path as needed
import {
  ChartLine,
  History,
  Microchip,
  Earth,
  Brain,
  Database,
  ShieldPlus,
} from "lucide-react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <section
        id="why-matters"
        className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center bg-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
            Why Air Quality Monitoring Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-900/50 transition transform hover:scale-105 flex flex-col items-center text-center">
              <div className="bg-cyan-500/20 p-4 rounded-full mb-6">
                <Brain size={45} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Better Cognitive Function
              </h3>
              <p className="text-gray-300 text-lg">
                Poor air quality can affect concentration and cognitive
                performance, impacting your academic success.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-900/50 transition transform hover:scale-105 flex flex-col items-center text-center">
              <div className="bg-cyan-500/20 p-4 rounded-full mb-6">
                <ShieldPlus size={45} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Respiratory Health
              </h3>
              <p className="text-gray-300 text-lg">
                Exposure to pollutants can trigger respiratory conditions and
                compromise immune systems.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-900/50 transition transform hover:scale-105 flex flex-col items-center text-center">
              <div className="bg-cyan-500/20 p-4 rounded-full mb-6">
                <Database size={45} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Data-Driven Decisions
              </h3>
              <p className="text-gray-300 text-lg">
                Real-time monitoring enables informed choices about where and
                when to study or exercise.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img
                  src="/aqi.png"
                  alt="AQI Chart"
                  className="rounded-lg shadow-lg min-w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  Understanding the Air Quality Index
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  The AQI is a unified index for reporting air quality. It tells
                  you how clean or polluted your air is, and what associated
                  health effects might be a concern for you.
                </p>
                <ul className="text-gray-300 space-y-2 text-lg">
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-green-600 inline-block mr-2 rounded-full"></span>
                    <span>0-50: Good (minimal health impacts)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-teal-600 inline-block mr-2 rounded-full"></span>
                    <span>51-100: Moderate</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-yellow-600 inline-block mr-2 rounded-full"></span>
                    <span>101-150: Unhealthy for sensitive groups</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-orange-600 inline-block mr-2 rounded-full"></span>
                    <span>151-200: Unhealthy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-red-600 inline-block mr-2 rounded-full"></span>
                    <span>
                      201-300: Very Unhealthy (everyone may experience effects)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
            About the Project
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-cyan-400/20 absolute -top-4 -left-4 w-full h-full rounded-xl"></div>
                <img
                  src="/setup.jpeg"
                  alt="Project Setup"
                  className="rounded-xl shadow-lg relative z-10 w-full"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6 text-white">
                Built by Students, for Students
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                This project is developed by CS-IoTCSBT students to help monitor
                and visualize air quality in real time using IoT sensors,
                Leaflet maps, and a custom dashboard.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                It's designed to raise awareness and promote healthier practices
                across campus, while providing valuable data to understand and
                improve our environment.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded-lg flex items-center">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-4">
                    <Microchip size={20} className="text-cyan-400" />
                  </div>
                  <span className="text-gray-200 text-lg">IoT Sensors</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex items-center">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-4">
                    <History size={20} className="text-cyan-400" />
                  </div>
                  <span className="text-gray-200 text-lg">Real-time Data</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex items-center">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-4">
                    <Earth size={20} className="text-cyan-400" />
                  </div>
                  <span className="text-gray-200 text-lg">
                    Interactive Maps
                  </span>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex items-center">
                  <div className="bg-cyan-500/20 p-2 rounded-full mr-4">
                    <ChartLine size={20} className="text-cyan-400" />
                  </div>
                  <span className="text-gray-200 text-lg">Data Analytics</span>
                </div>
              </div>

              <NavigateButton
                to="/about"
                className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg cursor-pointer text-lg hover:bg-cyan-600 transition transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                Learn More About the Project
              </NavigateButton>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to explore the data in detail?
          </h2>
          <NavigateButton
            to="/dashboard"
            className="px-10 py-5 bg-cyan-500 text-white text-xl font-semibold rounded-lg cursor-pointer hover:bg-cyan-600 transition transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Access the Dashboard
          </NavigateButton>
        </div>
      </section>
    </div>
  );
}
