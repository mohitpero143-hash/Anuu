import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

const HeartShape = () => {
    const shape = useMemo(() => {
      const x = 0, y = 0;
      const heartShape = new THREE.Shape();
      heartShape.moveTo(x + 5, y + 5);
      heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
      heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
      heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
      heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
      heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
      heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
      return heartShape;
    }, []);
    return shape;
};

interface HeartProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  isLeaving: boolean;
}

const HeartInstance: React.FC<HeartProps> = ({ position, rotation, scale, isLeaving }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const shape = HeartShape();
    
    // Random color variation
    const color = useMemo(() => {
        const colors = ['#ec4899', '#db2777', '#f472b6', '#ef4444'];
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.y += delta * 0.2;
            
            // If finale trigger (isLeaving), float up faster
            if (isLeaving) {
                meshRef.current.position.y += delta * 5;
                meshRef.current.position.x += (Math.random() - 0.5) * 0.1;
                meshRef.current.material.opacity = THREE.MathUtils.lerp(meshRef.current.material.opacity, 0, delta);
            }
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh 
                ref={meshRef} 
                position={position} 
                rotation={rotation} 
                scale={scale * 0.02} // Scale down standard shape
            >
                <extrudeGeometry args={[shape, { depth: 4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 }]} />
                <meshPhysicalMaterial 
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.2}
                    roughness={0.2}
                    metalness={0.1}
                    transparent
                    opacity={0.9}
                    transmission={0.2} // Glassy look
                    thickness={2}
                />
            </mesh>
        </Float>
    );
};

export const FloatingHearts: React.FC<{ isLeaving: boolean }> = ({ isLeaving }) => {
    // Generate random positions
    const hearts = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            position: [
                (Math.random() - 0.5) * 30, // X spread
                (Math.random() - 0.5) * 20, // Y spread
                (Math.random() - 0.5) * 10 - 5 // Z depth
            ] as [number, number, number],
            rotation: [0, 0, Math.PI] as [number, number, number], // Flip shape to be upright
            scale: 0.5 + Math.random() * 0.8
        }));
    }, []);

    return (
        <group>
            {hearts.map(heart => (
                <HeartInstance 
                    key={heart.id}
                    position={heart.position}
                    rotation={heart.rotation}
                    scale={heart.scale}
                    isLeaving={isLeaving}
                />
            ))}
        </group>
    );
};
