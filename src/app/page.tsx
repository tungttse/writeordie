// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [text, setText] = useState('');

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
    document.documentElement.classList.toggle('dark', !isDarkMode);
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

  return (
    <div className="h-full flex">
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
          className="p-2 rounded-md hover:bg
::contentReference[oaicite:16]{index=16}
 
