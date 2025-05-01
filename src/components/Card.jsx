import React from "react";

function Card({ nodeId, aqi, co2, co, smoke, pm25, filters }) {
  const isAqiInSelectedRanges = () => {
    if (!filters || !filters.aqiLevels) return true;

    const { good, moderate, unhealthySensitive, unhealthy, veryUnhealthy } =
      filters.aqiLevels;

    if (aqi <= 50 && !good) return false;
    if (aqi > 50 && aqi <= 100 && !moderate) return false;
    if (aqi > 100 && aqi <= 150 && !unhealthySensitive) return false;
    if (aqi > 150 && aqi <= 200 && !unhealthy) return false;
    if (aqi > 200 && !veryUnhealthy) return false;

    return true;
  };

  if (!isAqiInSelectedRanges()) return null;

  const getAqiColor = (aqi) => {
    if (aqi <= 50) return "text-green-500";
    if (aqi <= 100) return "text-teal-500";
    if (aqi <= 150) return "text-yellow-500";
    if (aqi <= 200) return "text-orange-500";
    return "text-red-500";
  };

  const getAqiLabel = (aqi) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for sensitive groups";
    if (aqi <= 200) return "Unhealthy";
    return "Very unhealthy";
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl p-4 max-w-xs border border-gray-300 dark:border-gray-800 shadow-sm transition-colors">
      <h2 className="text-lg font-semibold mb-4">{nodeId}</h2>

      <div className="space-y-2">
        {filters?.pollutants.co2 && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">
              CO<sub>2</sub>
            </span>
            <span className="text-cyan-500">{co2} ppm</span>
          </div>
        )}
        {filters?.pollutants.co && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">CO</span>
            <span className="text-cyan-500">{co} ppm</span>
          </div>
        )}
        {filters?.pollutants.smoke && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Smoke</span>
            <span className="text-cyan-500">{smoke} ppm</span>
          </div>
        )}
        {filters?.pollutants.pm25 && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">PM 2.5</span>
            <span className="text-cyan-500">{pm25} μg/m³</span>
          </div>
        )}
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">AQI</span>
          <div className="flex flex-col items-end">
            <span className={`${getAqiColor(aqi)} text-3xl font-bold`}>
              {aqi}
            </span>
            <span className={`text-xs ${getAqiColor(aqi)}`}>
              {getAqiLabel(aqi)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-cyan-500">
        Last updated: 5 seconds ago
      </div>
    </div>
  );
}

export default Card;
