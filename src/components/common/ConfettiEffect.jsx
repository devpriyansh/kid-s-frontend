import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  return <Confetti numberOfPieces={200} recycle={false} />;
};

export default ConfettiEffect;