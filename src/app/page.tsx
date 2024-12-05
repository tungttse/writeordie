import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Flashcard App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Master your knowledge with interactive flashcards. Create decks, review, and track your progress.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/decks"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          View Decks
        </Link>
        <Link
          href="/decks/new"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          Create a New Deck
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
