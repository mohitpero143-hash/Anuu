import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236, 72, 153, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      className="
        group relative px-8 py-4 mt-8
        bg-gradient-to-r from-pink-500 to-red-600
        rounded-full text-white font-sans font-bold text-lg tracking-wide
        shadow-[0_0_15px_rgba(236,72,153,0.4)]
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
      "
      {...props}
    >
      <span className="relative z-10">{label}</span>
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};
