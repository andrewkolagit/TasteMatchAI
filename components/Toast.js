import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 inset-x-0 flex justify-center z-50 p-4 pb-100 pointer-events-none"
        >
          <div className="bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
