'use client';

import { useEffect, useState } from 'react';

type CircularTimerProps = {
  initialTime: number; // Initial countdown time in seconds
  onTimeout: () => void; // Callback when timer reaches zero
  resetSignal?: boolean; // Optional: signal to reset the timer externally
};

const CircularTimer = ({ initialTime, onTimeout, resetSignal }: CircularTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

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

  // Calculate the stroke dashoffset for the progress circle
  const progress = (timeLeft / initialTime) * circumference;
  const strokeDashoffset = circumference - progress;

  return (
    <div className="fixed top-4 right-4 w-16 h-16">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`transition-all duration-1000 ease-linear ${
            timeLeft <= 10 ? 'text-red-500' : 'text-blue-500'
          }`}
        />
      </svg>
      {/* Time display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-500' : ''}`}>
          {timeLeft}
        </span>
      </div>
    </div>
  );
};

export default CircularTimer; 