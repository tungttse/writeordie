'use client';

import { useState } from 'react';

type Flashcard = {
  id: number;
  front: string;
  back: string;
};

const FlashcardPage = () => {
  // Example flashcards
  const flashcards: Flashcard[] = [
    { id: 1, front: 'What is React?', back: 'A JavaScript library for building user interfaces' },
    { id: 2, front: 'What is Next.js?', back: 'A React framework for server-rendered applications' },
    { id: 3, front: 'What is JSX?', back: 'A syntax extension for JavaScript' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcard Viewer</h1>
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-96 h-64 flex items-center justify-center bg-white text-black border rounded-lg shadow-md cursor-pointer transform transition-transform duration-300"
      >
        {flipped ? currentCard.back : currentCard.front}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default FlashcardPage;
