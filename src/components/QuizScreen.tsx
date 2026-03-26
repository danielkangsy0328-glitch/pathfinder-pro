import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { quizQuestions, type QuizOption } from "@/data/quizData";

interface QuizScreenProps {
  onComplete: (answers: Record<number, string>) => void;
}

const QuizScreen = ({ onComplete }: QuizScreenProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [direction, setDirection] = useState(1);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;
  const isAnswered = !!answers[question.id];

  const handleSelect = (option: QuizOption) => {
    setAnswers((prev) => ({ ...prev, [question.id]: option.id }));
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setDirection(1);
      setCurrentQ((prev) => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setDirection(-1);
      setCurrentQ((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              {currentQ + 1} / {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-accent">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--gradient-coral)" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-card rounded-3xl p-6 md:p-8 mb-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="text-sm text-muted-foreground mb-2">{question.subtitle}</p>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                {question.question}
              </h2>

              <div className="grid gap-3">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(option)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                        isSelected
                          ? "border-accent bg-coral-light"
                          : "border-border bg-background hover:border-muted-foreground/30"
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                      <span className={`font-medium ${isSelected ? "text-foreground" : "text-foreground/80"}`}>
                        {option.text}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentQ === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" /> 이전
          </button>

          <motion.button
            whileHover={isAnswered ? { scale: 1.03 } : {}}
            whileTap={isAnswered ? { scale: 0.97 } : {}}
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-accent-foreground shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: isAnswered ? "var(--gradient-coral)" : "hsl(var(--muted))" }}
          >
            {currentQ === quizQuestions.length - 1 ? "결과 보기" : "다음"} <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
