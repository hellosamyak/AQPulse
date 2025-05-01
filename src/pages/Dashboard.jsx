import React, { useState, useEffect, useMemo, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mqtt from "mqtt";
import { ThemeContext } from "../App";
import AqiSummary from "../components/AQISummary";

const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Dashboard() {
  const [filters, setFilters] = useState({
    pollutants: { co2: true, co: true, smoke: true, pm25: true },
    aqiLevels: {
      good: true,
      moderate: true,
      unhealthySensitive: true,
      unhealthy: true,
      veryUnhealthy: true,
    },
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [nodes, setNodes] = useState([
    {
      id: "Node1",
      position: [23.12926974316946, 79.87484603838551],
      AQI: 0,
      CO2: 0,
      CO: 0,
      smoke: 0,
      pm25: 0,
      temperature: 0,
      humidity: 0,
      lastUpdated: null,
    },
    {
      id: "Node2",
      position: [23.12880794824008, 79.87480537336475],
      AQI: 0,
      CO2: 0,
      CO: 0,
      smoke: 0,
      pm25: 0,
      temperature: 0,
      humidity: 0,
      lastUpdated: null,
    },
    {
      id: "Node3",
      position: [23.12905747694216, 79.87398180727102],
      AQI: 0,
      CO2: 0,
      CO: 0,
      smoke: 0,
      pm25: 0,
      temperature: 0,
      humidity: 0,
      lastUpdated: null,
    },
  ]);

  const { theme } = useContext(ThemeContext);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Filters updated:", newFilters);
  };

  const getAqiLevel = (aqi) => {
    if (aqi <= 50) return "good";
    if (aqi <= 100) return "moderate";
    if (aqi <= 150) return "unhealthySensitive";
    if (aqi <= 200) return "unhealthy";
    return "veryUnhealthy";
  };

  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      const level = getAqiLevel(node.AQI);
      return filters.aqiLevels[level];
    });
  }, [filters.aqiLevels, nodes]);

  // MQTT
  useEffect(() => {
    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

    client.on("connect", () => {
      console.log("✅ MQTT Connected");
      client.subscribe("air_quality/#");
    });

    client.on("message", (topic, message) => {
      try {
        const payload = JSON.parse(message.toString());
        const { nodeId, co2, co, smoke, pm25, temperature, humidity, aqi } =
          payload;

        if (!nodeId || typeof co2 === "undefined") {
          console.warn("⚠️ Invalid payload:", payload);
          return;
        }

        setNodes((prev) =>
          prev.map((node) =>
            node.id === nodeId
              ? {
                  ...node,
                  CO2: co2,
                  CO: co,
                  smoke,
                  pm25,
                  temperature,
                  humidity,
                  AQI: aqi,
                  lastUpdated: Date.now(),
                }
              : node
          )
        );
      } catch (err) {
        console.error("❌ MQTT JSON Parse Error:", err.message);
      }
    });

    return () => client.end();
  }, []);

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tileAttribution = isDark
    ? '© <a href="https://carto.com/">CARTO</a>'
    : '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex-grow relative pt-16">
        <AqiSummary nodes={nodes} />
        <div className="px-4 sm:px-8 lg:px-40 mt-4 mb-8">
          <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] max-h-[600px] w-full">
            <MapContainer
              center={[23.12926974316946, 79.87484603838551]}
              zoom={20}
              className="h-full w-full z-0 rounded-lg shadow-md"
              scrollWheelZoom={false}
            >
              <TileLayer url={tileUrl} attribution={tileAttribution} />
              {filteredNodes.map((node) => (
                <Marker
                  key={node.id}
                  position={node.position}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="dark:bg-gray-900 text-black dark:text-white p-2 rounded-lg shadow-md">
                      <Card
                        nodeId={node.id}
                        aqi={node.AQI}
                        co2={node.CO2}
                        co={node.CO}
                        smoke={node.smoke}
                        pm25={node.pm25}
                        filters={filters}
                      />
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onFilterChange={handleFilterChange}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
