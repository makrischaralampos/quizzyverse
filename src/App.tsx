function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-[#0f0f1f] dark:to-[#1a1a2e] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
          Welcome to{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            QuizzyVerse
          </span>{" "}
          🌌
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          The ultimate quiz universe — test your knowledge, earn badges, and
          have fun!
        </p>
        <button
          type="button"
          aria-label="Start Quiz"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Start Quiz
        </button>
      </div>
    </main>
  );
}

export default App;
