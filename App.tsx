import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { ProgressBar } from './components/ProgressBar';
import { AppStep } from './types';
import { AnimatePresence, motion } from 'framer-motion';

// Steps
import { Step1Welcome } from './components/steps/Step1Welcome';
import { Step2Message } from './components/steps/Step2Message';
import { Step3Bento } from './components/steps/Step3Bento';
import { Step4Memory } from './components/steps/Step4Memory';
import { Step5Finale } from './components/steps/Step5Finale';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.Welcome);
  const [finaleTriggered, setFinaleTriggered] = useState(false);
  const totalSteps = 5;

  // Calculate progress percentage
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < AppStep.Finale) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case AppStep.Welcome:
        return <Step1Welcome onNext={nextStep} isActive={true} />;
      case AppStep.Message:
        return <Step2Message onNext={nextStep} isActive={true} />;
      case AppStep.Reasons:
        return <Step3Bento onNext={nextStep} isActive={true} />;
      case AppStep.Memory:
        return <Step4Memory onNext={nextStep} isActive={true} />;
      case AppStep.Finale:
        return <Step5Finale onNext={() => {}} onCelebrate={() => setFinaleTriggered(true)} isActive={true} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Background finaleTriggered={finaleTriggered} />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <ProgressBar progress={progress} />
        
        <main className="flex-grow flex items-center justify-center w-full py-10 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="w-full text-center py-4 text-white/30 font-sans text-xs">
          Made with ❤️ for you
        </footer>
      </div>
    </>
  );
};

export default App;
