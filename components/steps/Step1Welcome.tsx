import React from 'react';
import { StepProps } from '../../types';
import { StepCard } from '../StepCard';
import { Button } from '../Button';
import { motion } from 'framer-motion';

export const Step1Welcome: React.FC<StepProps> = ({ onNext }) => {
  return (
    <StepCard>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl md:text-8xl mb-6 filter drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
      >
        ❤️
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-serif text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-white to-pink-200"
      >
        Hey Nushkii
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-sans text-lg md:text-xl text-gray-300 max-w-md leading-relaxed"
      >
        I tried to build a little world for you, to bring a smile to your beautiful face on your special day.
      </motion.p>

      <Button label="Let's Begin" onClick={onNext} />
    </StepCard>
  );
};
