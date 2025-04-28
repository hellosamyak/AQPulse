import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
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

  useEffect(() => {
    const options = {
      connectTimeout: 4000,
      clientId: "web_client_" + Math.random().toString(16).substr(2, 8),
      username: "Airquality", // agar HiveMQ me username/password nahi hai to blank chhodo
      password: "Amanrajtiwari99",
      keepalive: 60,
      clean: true,
      reconnectPeriod: 1000,
    };

    const client = mqtt.connect("0d136a5d9e184012bc8534b1844f7098.s1.eu.hivemq.cloud:8884/mqtt", options);

    client.on("connect", () => {
      console.log("Connected to MQTT broker");

      // Subscribe karte hain required topics pe
      client.subscribe("air_quality/co2");
      client.subscribe("air_quality/co");
      client.subscribe("air_quality/smoke");
      client.subscribe("air_quality/pm25");
      client.subscribe("air_quality/temperature");
      client.subscribe("air_quality/humidity");
      client.subscribe("air_quality/total_aqi");
    });

    client.on("message", (topic, message) => {
      const payload = parseFloat(message.toString());
      setSensorData(prevData => {
        switch (topic) {
          case "air_quality/co2":
            return { ...prevData, co2: payload };
          case "air_quality/co":
            return { ...prevData, co: payload };
          case "air_quality/smoke":
            return { ...prevData, smoke: payload };
          case "air_quality/pm25":
            return { ...prevData, pm25: payload };
          case "air_quality/temperature":
            return { ...prevData, temperature: payload };
          case "air_quality/humidity":
            return { ...prevData, humidity: payload };
          case "air_quality/total_aqi":
            return { ...prevData, totalAqi: payload };
          default:
            return prevData;
        }
      });
    });

    client.on("error", (error) => {
      console.error("MQTT Connection Error:", error);
    });

    // Cleanup on unmount
    return () => {
      if (client) {
        client.end();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* Dashboard me sensorData ko props me bhej rahe hain */}
      <Dashboard data={sensorData} />
    </div>
  );
}

export default App;
