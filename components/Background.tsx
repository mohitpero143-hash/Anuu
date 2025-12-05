import React from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingHearts } from './FloatingHearts';
import { motion } from 'framer-motion';

interface BackgroundProps {
  finaleTriggered: boolean;
}

export const Background: React.FC<BackgroundProps> = ({ finaleTriggered }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0c0a09]">
      {/* Layer 1: Animated Aurora Gradient */}
      <div className="absolute inset-0 opacity-60">
        {/* Blob 1: Pink */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pink-600 blur-[120px] opacity-40 mix-blend-screen" 
        />
        {/* Blob 2: Purple */}
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-700 blur-[120px] opacity-30 mix-blend-screen" 
        />
        {/* Blob 3: Blue */}
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[100px] opacity-30 mix-blend-screen" 
        />
        {/* Blob 4: Gold */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-yellow-600 blur-[100px] opacity-20 mix-blend-screen" 
        />
      </div>

      {/* Layer 2: 3D Floating Hearts */}
      <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff0f5" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
              <FloatingHearts isLeaving={finaleTriggered} />
          </Canvas>
      </div>
    </div>
  );
};
