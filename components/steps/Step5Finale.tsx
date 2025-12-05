import React, { useState } from 'react';
import { StepProps } from '../../types';
import { StepCard } from '../StepCard';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface FinaleProps extends StepProps {
  onCelebrate: () => void;
}

export const Step5Finale: React.FC<FinaleProps> = ({ onCelebrate }) => {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    setCelebrated(true);
    onCelebrate(); // Trigger global animations

    // Confetti Explosion Sequence
    const duration = 5000;
    const end = Date.now() + duration;

    // 1. Big burst from bottom corners
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.9, x: 0 },
      colors: ['#ec4899', '#ef4444', '#eab308']
    });
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.9, x: 1 },
      colors: ['#ec4899', '#ef4444', '#eab308']
    });

    // 2. Continuous rain
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ec4899', '#ef4444']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#ef4444']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // 3. Emoji confetti
    setTimeout(() => {
        const scalar = 2;
        const heart = confetti.shapeFromText({ text: '❤️', scalar });
        const sparkle = confetti.shapeFromText({ text: '✨', scalar });
        
        confetti({
          particleCount: 40,
          scalar,
          shapes: [heart, sparkle],
          spread: 360,
          startVelocity: 35,
          decay: 0.91,
          origin: { y: 0.5, x: 0.5 }
        });
    }, 500);
  };

  return (
    <StepCard>
      <div className="text-6xl md:text-8xl mb-6">🎂</div>

      <h2 className="font-serif text-4xl font-bold mb-6 text-white">My Wish For You</h2>

      <p className="font-sans text-lg text-gray-300 max-w-lg mb-8 leading-relaxed">
        May the next year bring you all the love, success, and pure happiness you so rightfully deserve. May your dreams soar higher than ever.
      </p>

      <div className="h-24 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          {!celebrated ? (
            <motion.div
              key="button"
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Button label="Celebrate!" onClick={handleCelebrate} />
            </motion.div>
          ) : (
             <motion.div
                key="msg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-center"
             >
                <h3 className="font-serif text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-red-400 animate-pulse">
                  Happy Birthday, Nushkii ! ❤️
                </h3>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StepCard>
  );
};
