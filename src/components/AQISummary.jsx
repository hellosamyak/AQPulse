import React from "react";

function AqiSummary({ nodes = [] }) {
  // Calculate average AQI
  const averageAqi =
    nodes.length > 0
      ? Math.round(
          nodes.reduce((sum, node) => sum + node.AQI, 0) / nodes.length
        )
      : 0;

  // Find node with worst AQI (highest value)
  const worstNode =
    nodes.length > 0
      ? nodes.reduce((worst, node) => (node.AQI > worst.AQI ? node : worst))
      : { id: "N/A", AQI: 0 };

  return (
    <div className="flex flex-col mt-4 sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-40 py-4 bg-white dark:bg-gray-950">
      <div className="flex-1 p-6 bg-white dark:bg-gray-800/50 text-black dark:text-blue-200 rounded-lg shadow-lg text-center transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Average AQI
        </h3>
        <p className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
          {averageAqi}
        </p>
      </div>
      <div className="flex-1 p-6 bg-white dark:bg-gray-800/50 text-black dark:text-blue-200 rounded-lg shadow-lg text-center transition-colors duration-300 mt-4 sm:mt-0 sm:ml-4">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Worst Area
        </h3>
        <p className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
          {worstNode.id}
        </p>
      </div>
    </div>
  );
}

export default AqiSummary;
