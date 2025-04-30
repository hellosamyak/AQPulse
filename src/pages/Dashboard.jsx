import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Create icon outside component to prevent recreating on each render
const defaultIcon = new Icon({
  iconUrl: markerIcon,
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Filters updated:", newFilters);
  };

  const nodes = [
    {
      id: "Node1",
      position: [23.12926974316946, 79.87484603838551],
      AQI: 68,
      CO2: 45,
      CO: 88,
      smoke: 33,
      pm25: 9,
    },
    {
      id: "Node2",
      position: [23.12880794824008, 79.87480537336475],
      AQI: 102,
      CO2: 50,
      CO: 90,
      smoke: 45,
      pm25: 20,
    },
    {
      id: "Node3",
      position: [23.12905747694216, 79.87398180727102],
      AQI: 160,
      CO2: 60,
      CO: 70,
      smoke: 55,
      pm25: 80,
    },
  ];

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
  }, [filters.aqiLevels]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex-grow w-full relative" style={{ marginTop: "64px" }}>
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onFilterChange={handleFilterChange}
        />

        <div className="h-full" style={{ height: "calc(100vh - 115px)" }}>
          <MapContainer
            center={[23.12926974316946, 79.87484603838551]}
            zoom={20}
            className="h-full w-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {filteredNodes.map((node) => (
              <Marker key={node.id} position={node.position} icon={defaultIcon}>
                <Popup>
                  <div className="popup-content">
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

      <Footer />
    </div>
  );
}

export default Dashboard;
