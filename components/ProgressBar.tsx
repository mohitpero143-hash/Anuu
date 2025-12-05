import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 backdrop-blur-sm z-50">
      <motion.div 
        className="h-full bg-gradient-to-r from-pink-500 to-red-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
};
