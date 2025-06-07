import { PrimaryButton } from "./PrimaryButton";

export function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
        Welcome to{" "}
        <span className="text-indigo-600 dark:text-indigo-400">
          QuizzyVerse
        </span>{" "}
        <span aria-hidden="true">🌌</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        The ultimate quiz universe — test your knowledge, earn badges, and have
        fun!
      </p>
      <PrimaryButton
        ariaLabel="Start the quiz now"
        variant="primary"
        size="md"
        onClick={() => {
          console.log("Start Quiz Clicked");
        }}
      >
        Start Quiz
      </PrimaryButton>
    </section>
  );
}
