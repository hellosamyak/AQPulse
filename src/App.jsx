import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isDashboard && <Navbar />}
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
