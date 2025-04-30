import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Footer from "./components/Footer";
import mqtt from "mqtt";

function App() {
  const [sensorData, setSensorData] = useState({
    co2: 0,
    co: 0,
    smoke: 0,
    pm25: 0,
    temperature: 0,
    humidity: 0,
    totalAqi: 0,
  });
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const options = {
      connectTimeout: 4000,
      clientId: "web_client_" + Math.random().toString(16).substr(2, 8),
      username: "",
      password: "",
      keepalive: 60,
      clean: true,
      reconnectPeriod: 1000,
    };

    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt", options);

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      // ✅ Subscribe only to the unified JSON topic
      client.subscribe("air_quality/data");
    });

    client.on("message", (topic, message) => {
      if (topic === "air_quality/data") {
        try {
          const json = JSON.parse(message.toString());
          setSensorData({
            co2: json.co2 || 0,
            co: json.co || 0,
            smoke: json.smoke || 0,
            pm25: json.pm25 || 0,
            temperature: json.temperature || 0,
            humidity: json.humidity || 0,
            totalAqi: json.totalAqi || 0,
          });
        } catch (e) {
          console.error("Invalid JSON from MQTT:", e);
        }
      }
    });

    client.on("error", (error) => {
      console.error("MQTT Connection Error:", error);
    });

    return () => {
      if (client) client.end();
    };
  }, []);

  return (
    <>
      {!isDashboard && <Navbar />}
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard data={sensorData} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
