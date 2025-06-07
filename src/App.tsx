import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-[#0f0f1f] dark:to-[#1a1a2e] text-gray-900 dark:text-white transition-colors duration-500">
      <HeroSection />
    </main>
  );
}

export default App;
