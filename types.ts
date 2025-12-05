export interface StepProps {
  onNext: () => void;
  isActive: boolean;
}

export enum AppStep {
  Welcome = 0,
  Message = 1,
  Reasons = 2,
  Memory = 3,
  Finale = 4,
}

// Particle types or other shared types can go here
