import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Toast from '../components/Toast';
import Onboarding from '../components/Onboarding';
import HomeTab from '../components/HomeTab';
import MenuIdeasTab from '../components/MenuIdeasTab';
import CityInsightsTab from '../components/CityInsightsTab';
import FavoritesTab from '../components/FavoritesTab';
import AIChatTab from '../components/AIChatTab';
import ProfileTab from '../components/ProfileTab';
import BottomNav from '../components/BottomNav';
import { ChefHat } from 'lucide-react';

export default function HomePage() {
  const [toast, setToast] = useState({ message: '', visible: false });
  const showToast = (msg) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  };

  const [currentTab, setCurrentTab] = useState('home');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    type: '',
    cuisine: '',
    demographic: '',
    inspiration: ''
  });

  const handleCreate = () => setShowOnboarding(false);
  const handleUpdate = () => showToast('Profile updated successfully!');

  const contentKey = showOnboarding ? 'onboarding' : currentTab;
  const content = showOnboarding
    ? <Onboarding profile={profile} onChange={setProfile} onSubmit={handleCreate} />
    : {
        home: <HomeTab profile={profile} />, 
        menu: <MenuIdeasTab />, 
        cities: <CityInsightsTab />, 
        favorites: <FavoritesTab />, 
        chat: <AIChatTab />, 
        profile: <ProfileTab profile={profile} onChange={setProfile} onUpdate={handleUpdate} />
      }[currentTab];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Toast */}
      <Toast message={toast.message} isVisible={toast.visible} />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-30">
        <div className="h-full px-6 flex items-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">TasteMatchAI</h1>
        </div>
      </header>

      {/* Scrollable Content Container: padding matches header/nav */}
      <div className="flex-1 overflow-auto pt-16 pb-16">
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={contentKey}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.15 }}
            className="w-full"
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fixed Bottom Nav */}
      {!showOnboarding && (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white z-30">
          <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
        </nav>
      )}
    </div>
  );
}
