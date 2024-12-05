'use client';

import { useState } from 'react';
import Timer from '@/components/Timer';

export default function Home() {
  const [text, setText] = useState('');
  const [resetTimer, setResetTimer] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  // Handle timeout (when user stops writing)
  const handleTimeout = () => {
    setIsIdle(true);
  };

  // Handle writing
  const handleWriting = (value: string) => {
    setText(value);
    setIsIdle(false);
    setResetTimer((prev) => !prev); // Reset the timer
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Write or Die</h1>
      <Timer initialTime={30} onTimeout={handleTimeout} resetSignal={resetTimer} />
      <textarea
        className="w-full max-w-2xl h-64 border rounded-lg p-4 text-lg bg-white focus:outline-none shadow-md mt-6"
        placeholder="Start typing to keep the timer alive..."
        value={text}
        onChange={(e) => handleWriting(e.target.value)}
      />
      {isIdle && (
        <p className="text-red-600 font-bold mt-4">
          You stopped writing! Start typing to continue!
        </p>
      )}
    </main>
  );
}
