import React from "react";
import { MapPin } from "lucide-react";

export default function CityInsightsTab() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        City-Specific Predictions
      </h2>
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Find Your Perfect Location
          </h3>
          <p className="text-gray-600 mb-6">
            Discover which cities match your restaurant concept based on local taste patterns
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200">
            Analyze Cities
          </button>
        </div>
      </div>
    </div>
  );
}
