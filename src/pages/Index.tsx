import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import { calculateResult, type CareerResult } from "@/data/quizData";

type Screen = "intro" | "quiz" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [result, setResult] = useState<CareerResult | null>(null);

  const handleStart = () => setScreen("quiz");

  const handleComplete = (answers: Record<number, string>) => {
    setResult(calculateResult(answers));
    setScreen("result");
  };

  const handleRestart = () => {
    setResult(null);
    setScreen("intro");
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {screen === "intro" && <IntroScreen onStart={handleStart} />}
          {screen === "quiz" && <QuizScreen onComplete={handleComplete} />}
          {screen === "result" && result && (
            <ResultScreen result={result} onRestart={handleRestart} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
