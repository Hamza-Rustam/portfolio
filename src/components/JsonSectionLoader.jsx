import React, { useState, useEffect } from "react";

const JsonSectionLoader = ({ jsonPath, renderComponent, fallback = null }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(jsonPath);

        if (!response.ok) {
          throw new Error(
            `Failed to load data: ${response.status} ${response.statusText}`
          );
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error("Error loading JSON data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (jsonPath) {
      loadData();
    }
  }, [jsonPath]);

  // Loading state
  if (loading) {
    return (
      fallback || (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      )
    );
  }

  // Error state
  if (error) {
    return (
      fallback || (
        <div className="flex items-center justify-center p-8">
          <div className="text-red-500 text-center">
            <div className="text-lg font-semibold mb-2">Error Loading Data</div>
            <div className="text-sm">{error}</div>
          </div>
        </div>
      )
    );
  }

  // Success state - render the component with data
  if (data && renderComponent) {
    return renderComponent(data);
  }

  // No data or render component
  return null;
};

export default JsonSectionLoader;
