import { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound"; 
import PathSelection from '../components/PathSelection';
import AngleSelection from '../components/AngleSelection';
import LapSelection from '../components/LapSelection';
import LimbSelection from '../components/LimbSelection';
import HoldingTypeSelection from '../components/HoldingTypeSelection';

const sounds: Record<string, { default: string }> = import.meta.glob(
    "../assets/sounds/**/*.mp3",
    { eager: true }
);

export default function ExerciseFollowThePathSelectScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [angle, setAngle] = useState(0);
  const [laps, setLaps] = useState(3);
  const [limb, setLimb] = useState<string | null>(null);
  const [holding, setHolding] = useState<string | null>(null);

  const [playNext] = useSound(sounds["../assets/sounds/next.mp3"]?.default || "");
  const [playBack] = useSound(sounds["../assets/sounds/back.mp3"]?.default || "");

  const handleNextStep = () => {
    playNext();
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 500); 
  };

  const handleStepBack = () => {
    playBack(); 
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  const handleStartCountdown = () => {
    navigate('/countdown');
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {step === 1 && (
        <PathSelection onNext={handleNextStep} onBack={handleStepBack}  />
      )}
      {step === 2 && (
        <AngleSelection
          angle={angle}
          setAngle={setAngle}
          onNext={handleNextStep}
          onBack={handleStepBack}
        />
      )}
      {step === 3 && (
        <LapSelection
          laps={laps}
          setLaps={setLaps}
          onNext={handleNextStep}
          onBack={handleStepBack}
        />
      )}
      {step === 4 && (
        <LimbSelection
          selectedLimb={limb}
          setSelectedLimb={setLimb}
          onNext={handleNextStep}
          onBack={handleStepBack}
        />
      )}
      {step === 5 && (
        <HoldingTypeSelection
          selectedHolding={holding}
          setSelectedHolding={setHolding}
          onBack={handleStepBack}
          onStartCountdown={handleStartCountdown}
        />
      )}
    </Box>
  );
}
