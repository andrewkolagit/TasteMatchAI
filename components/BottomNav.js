import React from "react";
import {
  Home,
  Lightbulb,
  MapPin,
  Heart,
  MessageCircle,
  User
} from "lucide-react";

export default function BottomNav({ currentTab, onTabChange }) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "menu", icon: Lightbulb, label: "Menu Ideas" },
    { id: "cities", icon: MapPin, label: "City Insights" },
    { id: "favorites", icon: Heart, label: "Favorites" },
    { id: "chat", icon: MessageCircle, label: "AI Chat" },
    { id: "profile", icon: User, label: "Profile" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="flex justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                active ? "text-orange-500 bg-orange-50" : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
