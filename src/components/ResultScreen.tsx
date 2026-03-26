import { motion } from "framer-motion";
import { RotateCcw, BookOpen, GraduationCap, Briefcase, Lightbulb, Hash } from "lucide-react";
import type { CareerResult } from "@/data/quizData";

interface ResultScreenProps {
  result: CareerResult;
  onRestart: () => void;
}

const colorMap: Record<string, { bg: string; text: string; lightBg: string }> = {
  coral: { bg: "hsl(var(--coral))", text: "hsl(var(--coral))", lightBg: "hsl(var(--coral-light))" },
  indigo: { bg: "hsl(var(--indigo))", text: "hsl(var(--indigo))", lightBg: "hsl(var(--indigo-light))" },
  teal: { bg: "hsl(var(--teal))", text: "hsl(var(--teal))", lightBg: "hsl(var(--teal-light))" },
  amber: { bg: "hsl(var(--amber))", text: "hsl(var(--amber))", lightBg: "hsl(var(--amber-light))" },
  violet: { bg: "hsl(var(--violet))", text: "hsl(var(--violet))", lightBg: "hsl(var(--violet-light))" },
};

const ResultScreen = ({ result, onRestart }: ResultScreenProps) => {
  const colors = colorMap[result.color] || colorMap.coral;

  const sections = [
    {
      icon: Hash,
      title: "핵심 키워드",
      content: (
        <div className="flex flex-wrap gap-2">
          {result.keywords.map((kw) => (
            <span key={kw} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: colors.lightBg, color: colors.text }}>
              #{kw}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: BookOpen,
      title: "추천 고교 선택 과목",
      content: (
        <div className="flex flex-wrap gap-2">
          {result.highSchoolSubjects.map((s) => (
            <span key={s} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: GraduationCap,
      title: "대학 권장 학과",
      content: (
        <ul className="space-y-1.5">
          {result.universities.map((u) => (
            <li key={u} className="text-sm text-foreground/80 flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colors.bg }} />
              {u}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Briefcase,
      title: "연계 직업군",
      content: (
        <div className="flex flex-wrap gap-2">
          {result.careers.map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-lg text-sm bg-muted text-muted-foreground font-medium">
              {c}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full"
      >
        {/* Hero card */}
        <div className="rounded-3xl p-8 text-center mb-6 text-accent-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elevated)" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            {result.emoji}
          </motion.div>
          <p className="text-sm opacity-80 mb-1 tracking-wide">당신의 진로 유형</p>
          <h1 className="text-3xl font-extrabold mb-3">{result.title}</h1>
          <p className="text-sm opacity-90 leading-relaxed max-w-sm mx-auto">
            {result.description}
          </p>
        </div>

        {/* Detail sections */}
        <div className="space-y-4">
          {sections.map(({ icon: Icon, title, content }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-card rounded-2xl p-5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4" style={{ color: colors.text }} />
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
              </div>
              {content}
            </motion.div>
          ))}

          {/* Advice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="rounded-2xl p-5 flex gap-3"
            style={{ background: colors.lightBg, boxShadow: "var(--shadow-soft)" }}
          >
            <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.text }} />
            <p className="text-sm leading-relaxed" style={{ color: colors.text }}>
              {result.advice}
            </p>
          </motion.div>
        </div>

        {/* Restart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-8"
        >
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            다시 테스트하기
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultScreen;
