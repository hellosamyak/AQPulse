import React from "react";
import {
  Users,
  Cpu,
  Cloud,
  BarChart2,
  Shield,
  CloudLightning,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Aniket Kori",
      role: "Hardware Expert (IoT), Founder (Batch: 2022-2026)",
      description:
        "Conceptualized and led the development of the AQI Monitoring System; designed and integrated microcontrollers, sensors, and communication modules for real-time air quality data acquisition and transmission.",
      image: "/aniket.jpeg",
      linkedin: "https://www.linkedin.com/in/aniket-kori",
      github: "",
    },
    {
      name: "Priyanshi Kapse",
      role: "Fullstack Developer, Co-founder (Batch: 2022-2026)",
      description:
        "Architected and developed the backend infrastructure to securely handle IoT data streams, implemented REST APIs and database schemas for efficient storage and retrieval; contributed to team strategy and project direction.",
      image: "/priyanshi.jpeg",
      linkedin: "",
      github: "",
    },
    {
      name: "Aman Raj Tiwari",
      role: "Fullstack Developer (Batch: 2022-2026)",
      description:
        "Built and optimized MQTT-based communication between microcontrollers and server; programmed microcontrollers for sensor data collection and device management; contributed to backend & frontend development.",
      image: "/aman.jpeg",
      linkedin: "",
      github: "https://github.com/Aman99ART",
    },
    {
      name: "Kashish Bhatt",
      role: "Presentation and Communication Lead (Batch: 2022-2026)",
      description:
        "Managed project documentation, presentation design, and faculty communication; coordinated between hardware and software teams to ensure consistent technical messaging.",
      image: "/kashish.jpeg",
      linkedin: "",
      github: "",
    },
    {
      name: "Samyak Jain",
      role: "Frontend Developer (Batch: 2023-2027)",
      description:
        "Designed and developed a fully responsive web interface with real-time AQI visualization; integrated interactive maps and all system functionalities for a seamless user experience.",
      image: "/samyak.png",
      linkedin: "https://www.linkedin.com/in/samyak-jain-sj1208/",
      github: "https://github.com/hellosamyak",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 pb-20 pt-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto space-y-20">
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
            <CloudLightning
              size={48}
              className="text-blue-600 dark:text-cyan-400"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            AQPulse
          </h1>
          <p className="text-xl text-blue-600 dark:text-cyan-300">
            Real-time Air Quality Monitoring
          </p>
          <p className="max-w-2xl text-lg mx-auto text-gray-600 dark:text-gray-400">
            Advanced IoT-powered air quality monitoring solution by QudraTECH,
            delivering real-time insights for healthier environments.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-gray-200 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            As a student-led initiative at Gyan Ganga Institute of Technology &
            Sciences, QudraTECH is committed to ensuring everyone has access to
            clean air and reliable environmental data. AQPulse, our college
            project, leverages affordable and accurate IoT technology to empower
            individuals and communities with real-time air quality insights,
            enabling informed decisions for healthier living.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <Cpu className="h-6 w-6 text-blue-600 dark:text-cyan-400 mr-3" />
                ),
                title: "Advanced Sensing",
                description:
                  "Multiple sensor types capture PM2.5, PM10, CO2, VOCs, temperature, and humidity for comprehensive air quality assessment.",
              },
              {
                icon: (
                  <Cloud className="h-6 w-6 text-blue-600 dark:text-cyan-400 mr-3" />
                ),
                title: "Real-time Monitoring",
                description:
                  "Continuous data streaming with second-by-second updates and intelligent alerts when air quality degrades.",
              },
              {
                icon: (
                  <BarChart2 className="h-6 w-6 text-blue-600 dark:text-cyan-400 mr-3" />
                ),
                title: "Trend Analysis",
                description:
                  "Historical data visualization and predictive modeling to understand patterns and anticipate air quality changes.",
              },
              {
                icon: (
                  <Shield className="h-6 w-6 text-blue-600 dark:text-cyan-400 mr-3" />
                ),
                title: "Health Recommendations",
                description:
                  "Personalized health advice based on current air quality conditions and individual sensitivity profiles.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-gray-800/30 p-6 rounded-lg border border-gray-300 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="font-medium text-xl">{feature.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-gray-200 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-4">
            AQPulse integrates both hardware and software technologies for
            real-time air quality monitoring:
          </p>
          <ul className="list-disc text-lg text-center max-w-2xl mx-auto space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Hardware:{" "}
              </span>
              ESP32 microcontrollers, MQ-series gas sensors, DHT11/22 sensors
              for temperature & humidity, and Wi-Fi modules for connectivity
            </li>
            <li>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Communication Protocol:{" "}
              </span>
              MQTT for efficient IoT data transmission
            </li>
            <li>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Frontend:{" "}
              </span>
              React (responsive interface with real-time AQI and map
              visualization using Leaflet)
            </li>
            <li>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Backend:{" "}
              </span>
              Node.js (API and data handling)
            </li>
            <li>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Hosting & Cloud:{" "}
              </span>
              Vercel (frontend), AWS (backend and database)
            </li>
            <li>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Version Control:{" "}
              </span>
              Git and GitHub
            </li>
          </ul>
        </section>

        {/* Team */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Users size={48} className="text-blue-600 dark:text-cyan-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Meet the Team
            </h1>
            <p className="max-w-2xl text-lg mx-auto text-gray-600 dark:text-gray-400">
              The students behind QudraTECH who brought AQPulse to life.
            </p>
          </div>

          <div className="space-y-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800/40 rounded-xl border border-gray-300 dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-cyan-900/20 transition-shadow duration-300"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center bg-gradient-to-b from-gray-50 dark:from-gray-800/50 to-white dark:to-gray-900/50`}
                >
                  <div className="w-full md:w-1/3 aspect-[4/3] p-4">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-cyan-500/30 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-6 md:p-8 space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-cyan-400 text-lg font-medium">
                      {member.role}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 pt-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700/70 hover:bg-white transition-colors duration-200 border border-gray-300 dark:border-gray-600/50"
                        >
                          <svg
                            className="w-5 h-5 text-blue-500 dark:text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700/70 hover:bg-white transition-colors duration-200 border border-gray-300 dark:border-gray-600/50"
                        >
                          <svg
                            className="w-5 h-5 text-blue-500 dark:text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
