import React from "react";
import { Heart } from "lucide-react";

export default function FavoritesTab() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Favorites</h2>
      <div className="flex gap-4 mb-6">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">
          Dishes
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300">
          Menus
        </button>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No Favorites Yet
          </h3>
          <p className="text-gray-600">
            Save dishes and menus you like to access them quickly
          </p>
        </div>
      </div>
    </div>
  );
}
