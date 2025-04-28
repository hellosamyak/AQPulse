import React from "react";
import { Menu, CloudLightning } from "lucide-react";

function Navbar({ toggleSidebar }) {
  const links = [{ text: "Home" }, { text: "Dashboard" }];

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-lg bg-black flex justify-between items-center p-4">
      <div className="flex items-center text-white">
        <CloudLightning className="w-8 h-8 mr-2 text-cyan-400" />
        <span className="text-3xl font-bold">AQPulse</span>
      </div>
      <div className="flex items-center space-x-6">
        {links.map((link) => (
          <div
            key={link.text}
            className="text-white text-xl cursor-pointer hover:text-cyan-400 transition-colors"
          >
            {link.text}
          </div>
        ))}
        <div
          className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
          onClick={toggleSidebar}
        >
          <Menu className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
