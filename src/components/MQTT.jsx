import React, { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mqtt from "mqtt";

// Default Leaflet marker icon
const defaultIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Offline grey icon
const offlineIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/565/565547.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [1, -20],
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

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
  }, [nodes, filters.aqiLevels]);

  // MQTT Setup + Node Updates
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
          console.warn("⚠️ Invalid payload received:", payload);
          return;
        }

        setNodes((prevNodes) =>
          prevNodes.map((node) =>
            node.id === nodeId
              ? {
                  ...node,
                  CO2: co2,
                  CO: co,
                  smoke: smoke,
                  pm25: pm25,
                  temperature: temperature,
                  humidity: humidity,
                  AQI: aqi,
                  lastUpdated: Date.now(),
                }
              : node
          )
        );
      } catch (error) {
        console.error("❌ Failed to parse MQTT message:", error.message);
      }
    });

    return () => client.end();
  }, []);

  // Marker icon based on last update
  const getNodeIcon = (node) => {
    const isOffline =
      !node.lastUpdated || Date.now() - node.lastUpdated > 15000; // 15 sec
    return isOffline ? offlineIcon : defaultIcon;
  };

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
              <Marker
                key={node.id}
                position={node.position}
                icon={getNodeIcon(node)}
              >
                <Popup>
                  <div className="popup-content">
                    <Card
                      nodeId={node.id}
                      aqi={node.AQI}
                      co2={node.CO2}
                      co={node.CO}
                      smoke={node.smoke}
                      pm25={node.pm25}
                      temperature={node.temperature}
                      humidity={node.humidity}
                      filters={filters}
                    />
                    {node.lastUpdated ? (
                      <p style={{ fontSize: "12px", marginTop: "5px" }}>
                        Last Updated:{" "}
                        {new Date(node.lastUpdated).toLocaleTimeString()}
                      </p>
                    ) : (
                      <p
                        style={{
                          fontSize: "12px",
                          marginTop: "5px",
                          color: "red",
                        }}
                      >
                        Node Offline
                      </p>
                    )}
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
