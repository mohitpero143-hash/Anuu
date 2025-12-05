import React from 'react';
import { StepProps } from '../../types';
import { StepCard } from '../StepCard';
import { Button } from '../Button';
import { motion } from 'framer-motion';

const BentoItem = ({ title, text, className, delay }: { title: string, text: string, className?: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-center text-left hover:bg-white/10 transition-colors ${className}`}
  >
    <h3 className="font-serif text-xl font-bold text-pink-200 mb-2">{title}</h3>
    <p className="font-sans text-sm text-gray-300 leading-relaxed">{text}</p>
  </motion.div>
);

export const Step3Bento: React.FC<StepProps> = ({ onNext }) => {
  return (
    <StepCard className="max-w-4xl">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white"
      >
        A Few Things I Adore About You
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
        <BentoItem 
          title="✨ Your Unmatched Kindness"
          text="I don't know you very well still your words alone show how kind you are."
          className="col-span-1 md:col-span-2"
          delay={0.2}
        />
        <BentoItem 
          title="😊 That Smile"
          text="I didn't get chance to see much, but It's a work of art."
          className="col-span-1"
          delay={0.4}
        />
        <BentoItem 
          title="🌟 Your Radiant Spirit"
          text="Your cheerful personality is charming. I wish i get a chance to spend plenty of time with u."
          className="col-span-1 md:col-span-2"
          delay={0.6}
        />
      </div>

      <Button label="Remember this?" onClick={onNext} />
    </StepCard>
  );
};
