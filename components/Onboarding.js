import React from "react";
import { ChefHat } from "lucide-react";

export default function Onboarding({ profile, onChange, onSubmit }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              TasteMatchAI
            </h1>
            <p className="text-gray-600">
              Let's set up your restaurant profile
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="space-y-6"
          >
            {/** Name **/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Restaurant Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your restaurant name"
                value={profile.name}
                onChange={(e) =>
                  onChange({ ...profile, name: e.target.value })
                }
                required
              />
            </div>
            {/** Type **/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Restaurant Type
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={profile.type}
                onChange={(e) =>
                  onChange({ ...profile, type: e.target.value })
                }
                required
              >
                <option value="">Select restaurant type</option>
                <option value="fine-dining">Fine Dining</option>
                <option value="casual">Casual Dining</option>
                <option value="fast-casual">Fast Casual</option>
                <option value="fusion">Fusion</option>
                <option value="food-truck">Food Truck</option>
                <option value="cafe">Cafe</option>
              </select>
            </div>
            {/** Cuisine **/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cuisine Focus
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., Italian, Asian Fusion, Modern American"
                value={profile.cuisine}
                onChange={(e) =>
                  onChange({ ...profile, cuisine: e.target.value })
                }
                required
              />
            </div>
            {/** Demographic **/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Demographic (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., Young professionals, Families"
                value={profile.demographic}
                onChange={(e) =>
                  onChange({ ...profile, demographic: e.target.value })
                }
              />
            </div>
            {/** Inspiration **/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inspiration
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Music, films, brands that align with your concept"
                value={profile.inspiration}
                onChange={(e) =>
                  onChange({ ...profile, inspiration: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
            >
              Create Profile & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
