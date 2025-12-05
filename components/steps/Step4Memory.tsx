import React, { useRef, useState } from 'react';
import { StepProps } from '../../types';
import { StepCard } from '../StepCard';
import { Button } from '../Button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Step4Memory: React.FC<StepProps> = ({ onNext }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StepCard>
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">That One Time...</h2>

      <div className="perspective-1000 w-full flex justify-center mb-8">
        <motion.div
          className="relative bg-white p-4 pb-12 shadow-2xl w-64 md:w-80 transform-style-3d cursor-pointer"
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ rotate: -5 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
        >
          {/* Tape Effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-2 shadow-sm z-10" />

          <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-4">
             <img 
              src="https://i.supaimg.com/1924d58f-aa81-4a3a-9ba3-cf20a1f165b0.jpg" 
              alt="Shared Memory" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <p className="font-serif text-gray-800 text-center text-xl italic font-bold">Our Recollections.</p>
        </motion.div>
      </div>

      <p className="font-sans text-gray-300 text-center max-w-md mb-2 text-sm md:text-base leading-relaxed">
      We have met only once, but that one time is equal to many years. Even today, all the memories of that day are in my mind. At that time, I did not say anything because I thought you would be like the others, but when I heard about you, I felt that there is something different in you.
      </p>

      <Button label="One last thing..." onClick={onNext} />
    </StepCard>
  );
};
