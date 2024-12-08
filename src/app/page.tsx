'use client';

import { useState } from 'react';
import TipTapEditor from './components/TipTapEditor';
// import Timer from '@/components/Timer';

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
    <main className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Write or Die</h1>
        {/* <Timer initialTime={30} onTimeout={handleTimeout} resetSignal={resetTimer} /> */}
        <TipTapEditor />

        {/* <textarea
          className="w-full h-64 border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-6"
          placeholder="Start typing to keep the timer alive..."
          value={text}
          onChange={(e) => handleWriting(e.target.value)}
        /> */}
        {isIdle && (
          <p className="text-red-600 font-bold mt-4">
            You stopped writing! Start typing to continue!
          </p>
        )}
      </div>
    </main>
  );
}
