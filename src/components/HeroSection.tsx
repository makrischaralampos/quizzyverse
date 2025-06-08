import { PrimaryButton } from './PrimaryButton';

export function HeroSection() {
  return (
    <section className="space-y-6 text-center">
      <h1 className="text-5xl leading-tight font-extrabold tracking-tight drop-shadow-sm sm:text-6xl">
        Welcome to <span className="text-indigo-600 dark:text-indigo-400">QuizzyVerse</span>{' '}
        <span aria-hidden="true">🌌</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-700 sm:text-xl dark:text-gray-300">
        The ultimate quiz universe — test your knowledge, earn badges, and have fun!
      </p>
      <PrimaryButton
        ariaLabel="Start the quiz now"
        variant="primary"
        size="md"
        onClick={() => {
          console.log('Start Quiz Clicked');
        }}
      >
        Start Quiz
      </PrimaryButton>
    </section>
  );
}
