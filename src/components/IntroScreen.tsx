import { motion } from "framer-motion";
import { Sparkles, BookOpen, GraduationCap } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-lg w-full text-center"
      >
        {/* Floating icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: BookOpen, delay: 0 },
            { icon: Sparkles, delay: 0.2 },
            { icon: GraduationCap, delay: 0.4 },
          ].map(({ icon: Icon, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + delay, type: "spring", stiffness: 200 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
              style={{
                background: i === 0 ? "hsl(var(--coral-light))" : i === 1 ? "hsl(var(--indigo-light))" : "hsl(var(--teal-light))",
                color: i === 0 ? "hsl(var(--coral))" : i === 1 ? "hsl(var(--indigo))" : "hsl(var(--teal))",
                animationDelay: `${delay}s`,
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-medium text-accent tracking-widest uppercase mb-3"
        >
          진로 심리 테스트
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight"
        >
          나에게 맞는
          <br />
          <span className="text-accent">미래 진로</span>를 찾아보세요
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground mb-8 text-base leading-relaxed"
        >
          초·중등 수학·과학 학습 경험을 바탕으로
          <br />
          고교 선택 과목과 대학 전공을 추천해드려요
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-accent-foreground text-lg shadow-lg transition-all"
          style={{ background: "var(--gradient-coral)" }}
        >
          <Sparkles className="w-5 h-5" />
          테스트 시작하기
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          약 3분 소요 · 10문항
        </motion.p>
      </motion.div>
    </div>
  );
};

export default IntroScreen;
