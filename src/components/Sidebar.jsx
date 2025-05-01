import React, { useState } from "react";

function Sidebar({ isOpen, onClose, onFilterChange }) {
  const [filters, setFilters] = useState({
    pollutants: {
      co2: true,
      co: true,
      smoke: true,
      pm25: true,
    },
    aqiLevels: {
      good: true,
      moderate: true,
      unhealthySensitive: true,
      unhealthy: true,
      veryUnhealthy: true,
    },
  });

  const handlePollutantChange = (pollutant) => {
    const updatedFilters = {
      ...filters,
      pollutants: {
        ...filters.pollutants,
        [pollutant]: !filters.pollutants[pollutant],
      },
    };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const handleAQILevelChange = (level) => {
    const updatedFilters = {
      ...filters,
      aqiLevels: {
        ...filters.aqiLevels,
        [level]: !filters.aqiLevels[level],
      },
    };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const Checkbox = ({ checked, onChange, label, color }) => (
    <div className="flex items-center mb-3 transition-colors">
      <div
        className={`w-6 h-6 rounded-full ${
          checked ? color || "bg-cyan-800" : "bg-gray-300 dark:bg-gray-700"
        } flex items-center justify-center mr-3 cursor-pointer transition-colors`}
        onClick={onChange}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-cyan-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-base text-black dark:text-white">{label}</span>
    </div>
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-black text-black dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">FILTERS</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Pollutants */}
        <div className="mb-8">
          <h3 className="text-base text-blue-600 dark:text-cyan-400 mb-4">
            Pollutants
          </h3>
          <div className="space-y-1">
            <Checkbox
              checked={filters.pollutants.co2}
              onChange={() => handlePollutantChange("co2")}
              label="CO₂"
            />
            <Checkbox
              checked={filters.pollutants.co}
              onChange={() => handlePollutantChange("co")}
              label="CO"
            />
            <Checkbox
              checked={filters.pollutants.smoke}
              onChange={() => handlePollutantChange("smoke")}
              label="Smoke"
            />
            <Checkbox
              checked={filters.pollutants.pm25}
              onChange={() => handlePollutantChange("pm25")}
              label="PM 2.5"
            />
          </div>
        </div>

        {/* AQI Levels */}
        <div className="mb-8">
          <h3 className="text-base text-blue-600 dark:text-cyan-400 mb-4">
            AQI Level
          </h3>
          <div className="space-y-1">
            {/* Reuse Checkbox with color props */}
            <Checkbox
              checked={filters.aqiLevels.good}
              onChange={() => handleAQILevelChange("good")}
              label="Good"
              color="bg-green-600"
            />
            <Checkbox
              checked={filters.aqiLevels.moderate}
              onChange={() => handleAQILevelChange("moderate")}
              label="Moderate"
              color="bg-teal-600"
            />
            <Checkbox
              checked={filters.aqiLevels.unhealthySensitive}
              onChange={() => handleAQILevelChange("unhealthySensitive")}
              label="Unhealthy for sensitive groups"
              color="bg-yellow-600"
            />
            <Checkbox
              checked={filters.aqiLevels.unhealthy}
              onChange={() => handleAQILevelChange("unhealthy")}
              label="Unhealthy"
              color="bg-orange-600"
            />
            <Checkbox
              checked={filters.aqiLevels.veryUnhealthy}
              onChange={() => handleAQILevelChange("veryUnhealthy")}
              label="Very unhealthy"
              color="bg-red-600"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-auto">
          <h3 className="text-base font-semibold mb-4">LEGEND</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2" />
              <span className="text-base">0 - 50</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-teal-500 mr-2" />
              <span className="text-base">51 - 100</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2" />
              <span className="text-base">Unhealthy for sensitive groups</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-orange-500 mr-2" />
              <span className="text-base">Unhealthy</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2" />
              <span className="text-base">Very unhealthy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
