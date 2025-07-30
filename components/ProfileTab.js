import React from "react";

export default function ProfileTab({ profile, onChange, onUpdate }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Restaurant Profile</h2>
      <div className="bg-white rounded-xl p-6 shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdate();
          }}
          className="space-y-6"
        >
          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={profile.name}
              onChange={(e) => onChange({ ...profile, name: e.target.value })}
            />
          </div>

          {/* Restaurant Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant Type
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={profile.type}
              onChange={(e) => onChange({ ...profile, type: e.target.value })}
            >
              <option value="fine-dining">Fine Dining</option>
              <option value="casual">Casual Dining</option>
              <option value="fast-casual">Fast Casual</option>
              <option value="fusion">Fusion</option>
              <option value="food-truck">Food Truck</option>
              <option value="cafe">Cafe</option>
            </select>
          </div>

          {/* Cuisine Focus */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cuisine Focus
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="e.g., Italian, Asian Fusion, Modern American"
              value={profile.cuisine}
              onChange={(e) => onChange({ ...profile, cuisine: e.target.value })}
            />
          </div>

          {/* Target Demographic */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Demographic
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="e.g., Young professionals, Families, Food enthusiasts"
              value={profile.demographic}
              onChange={(e) => onChange({ ...profile, demographic: e.target.value })}
            />
          </div>

          {/* Inspiration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Inspiration
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Music, films, brands that align with your concept"
              value={profile.inspiration}
              onChange={(e) => onChange({ ...profile, inspiration: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
