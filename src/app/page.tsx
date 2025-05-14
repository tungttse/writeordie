'use client';

import { useState, useEffect, FormEvent } from 'react';
import CircularTimer from './components/CircularTimer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [text, setText] = useState('');
  const [wordTarget, setWordTarget] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showWordTargetInput, setShowWordTargetInput] = useState(false);
  const [showTimerInput, setShowTimerInput] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    // Implement sound toggle functionality
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';
    link.click();
  };

  const clearText = () => {
    setText('');
  };

  const handleSetWordTarget = () => {
    setShowWordTargetInput(true);
  };

  const handleSetTimer = () => {
    setShowTimerInput(true);
  };

  const handleWordTargetSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget.elements.namedItem('wordTarget') as HTMLInputElement;
    if (target) {
      setWordTarget(parseInt(target.value, 10));
      setShowWordTargetInput(false);
    }
  };

  const handleTimerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const time = event.currentTarget.elements.namedItem('timer') as HTMLInputElement;
    if (time) {
      setTimer(parseInt(time.value, 10) * 60); // Convert minutes to seconds
      setIsTimerActive(true);
      setShowTimerInput(false);
    }
  };

  const handleTimerTimeout = () => {
    setIsTimerActive(false);
    // Add any additional timeout logic here
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="h-full w-full flex">
      {/* Sidebar */}
      <aside className="w-16 md:w-20 lg:w-24 bg-gray-200 dark:bg-gray-800 flex flex-col items-center py-4 space-y-4">
        <button
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={toggleFullScreen}
          title="Full Screen"
        >
          {/* Full Screen Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 3H5a2 2 0 00-2 2v3m0 10v3a2 2 0 002 2h3m10-18h3a2 2 0 012 2v3m0 10v3a2 2 0 01-2 2h-3"
            />
          </svg>
        </button>
        <button
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={toggleDarkMode}
          title="Dark Mode"
        >
          {/* Dark Mode Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-12.66l-.707.707M4.05 19.95l-.707-.707M21 12h-1M4 12H3m16.66 4.66l-.707-.707M4.05 4.05l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={toggleSound}
          title="Toggle Sound"
        >
          {/* Sound Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5v14l11-7L9 5z"
            />
          </svg>
        </button>
        <button
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={handleSetWordTarget}
          title="Set Target"
        >
          {/* Set Target Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
        </button>
        <button
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={handleSetTimer}
          title="Set Timer"
        >
          {/* Set Timer Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={clearText}
          title="Clear Text"
        >
          {/* Clear Text Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </aside>
      <div className="relative flex-1">
        <textarea
          className="h-full w-full bg-white dark:bg-gray-900 text-black dark:text-white"
          style={{
            paddingTop: '48px',
            paddingBottom: '45vh',
            paddingLeft: 'calc((100% - 720px) / 2)',
            paddingRight: 'calc((100% - 720px) / 2)',
            fontFamily: "'Roboto Mono', serif",
            fontSize: '18px', // Increased font size
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {/* Word Count Display */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-200 dark:bg-gray-800 text-center">
          {wordCount} of {wordTarget}
        </div>
      </div>

      {/* Circular Timer */}
      {isTimerActive && (
        <CircularTimer
          initialTime={timer}
          onTimeout={handleTimerTimeout}
        />
      )}

      {/* Word Target Modal */}
      {showWordTargetInput && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-md w-1/4">
            <h2 className="text-lg font-bold mb-4">Set Word Target</h2>
            <form onSubmit={handleWordTargetSubmit}>
              <input
                type="number"
                name="wordTarget"
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-md w-full mb-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                placeholder="Enter word count target"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
                  onClick={() => setShowWordTargetInput(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Set
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Timer Modal */}
      {showTimerInput && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-md w-1/4">
            <h2 className="text-lg font-bold mb-4">Set Timer</h2>
            <form onSubmit={handleTimerSubmit}>
              <input
                type="number"
                name="timer"
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-md w-full mb-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                placeholder="Enter timer in minutes"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
                  onClick={() => setShowTimerInput(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Set
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}