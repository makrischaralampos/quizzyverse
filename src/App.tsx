import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-6 py-12 text-gray-900 transition-colors duration-500 dark:from-[#0f0f1f] dark:to-[#1a1a2e] dark:text-white">
      <HeroSection />
    </main>
  );
}

export default App;
