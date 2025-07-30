import React from "react";
import { TrendingUp, Utensils, Star } from "lucide-react";

export default function HomeTab({ profile }) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome back, {profile.name}!
        </h2>
        <p className="text-gray-600">
          Here are some personalized suggestions for your {profile.cuisine} restaurant
        </p>
      </div>

      <div className="space-y-6">
        {/* Trending Now */}
        <div>
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Trending Now</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Based on current cultural trends and your restaurant profile
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card example */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 hover:border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                  95% Match
                </span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2 text-lg">
                Korean-Inspired Tacos
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Fusion dish combining Korean BBQ flavors with Mexican street food format
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                Perfect for your fusion concept
              </div>
            </div>
            {/* …add the other three cards similarly */}
          </div>
        </div>

        {/* Similar Restaurants */}
        <div>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-red-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">
              Similar Restaurants Are Serving
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Popular dishes among restaurants with similar profiles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* …four more cards */}
          </div>
        </div>
      </div>
    </div>
  );
}
