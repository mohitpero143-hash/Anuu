import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  children: React.ReactNode;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative w-full max-w-2xl p-8 md:p-12 mx-4
        bg-black/40 backdrop-blur-2xl 
        border border-white/10 rounded-[2rem] 
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        flex flex-col items-center text-center
        overflow-hidden
        ${className}
      `}
    >
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </motion.div>
  );
};
