'use client';

import { useEffect, useState } from 'react';

type TimerProps = {
  initialTime: number; // Initial countdown time in seconds
  onTimeout: () => void; // Callback when timer reaches zero
  resetSignal?: boolean; // Optional: signal to reset the timer externally
};

const Timer = ({ initialTime, onTimeout, resetSignal }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Countdown logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      onTimeout(); // Notify parent that time is up
    }
  }, [timeLeft, onTimeout]);

  // Reset timer when `resetSignal` changes
  useEffect(() => {
    if (resetSignal) {
      setTimeLeft(initialTime);
    }
  }, [resetSignal, initialTime]);

  return (
    <div className="text-xl font-bold">
      Time Left: <span className={timeLeft <= 10 ? 'text-red-500' : ''}>{timeLeft}s</span>
    </div>
  );
};

export default Timer;
