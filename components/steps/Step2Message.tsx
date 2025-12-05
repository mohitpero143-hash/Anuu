import React from 'react';
import { StepProps } from '../../types';
import { StepCard } from '../StepCard';
import { Button } from '../Button';
import { motion } from 'framer-motion';

export const Step2Message: React.FC<StepProps> = ({ onNext }) => {
  return (
    <StepCard>
      <div className="text-6xl md:text-8xl mb-6">🎉</div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white"
      >
        Happy Birthday!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-sans text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
      >
        Another year of you making the world brighter. Your existence is a gift, and I'm so lucky to witness it.
      </motion.p>

      <Button label="There's more..." onClick={onNext} />
    </StepCard>
  );
};
