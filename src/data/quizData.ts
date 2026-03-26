export interface QuizOption {
  id: string;
  text: string;
  emoji: string;
  scores: Record<string, number>; // category -> score
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

export interface CareerResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  keywords: string[];
  highSchoolSubjects: string[];
  universities: string[];
  careers: string[];
  advice: string;
  color: "coral" | "indigo" | "teal" | "amber" | "violet";
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "수학 시간에 가장 재미있었던 순간은?",
    subtitle: "초등·중등 수학 경험을 떠올려보세요",
    options: [
      { id: "1a", text: "도형을 그리고 넓이를 구할 때", emoji: "📐", scores: { engineer: 3, designer: 2, scientist: 1 } },
      { id: "1b", text: "규칙을 찾아 다음 수를 예측할 때", emoji: "🔢", scores: { data: 3, scientist: 2, finance: 1 } },
      { id: "1c", text: "실생활 문제를 수식으로 풀 때", emoji: "💡", scores: { engineer: 2, finance: 2, data: 1 } },
      { id: "1d", text: "통계나 그래프를 해석할 때", emoji: "📊", scores: { data: 3, finance: 2, bio: 1 } },
    ],
  },
  {
    id: 2,
    question: "과학 실험에서 가장 흥미로웠던 주제는?",
    subtitle: "과학 탐구 활동 경험을 생각해보세요",
    options: [
      { id: "2a", text: "전기 회로를 만들고 불을 켤 때", emoji: "⚡", scores: { engineer: 3, data: 1, scientist: 1 } },
      { id: "2b", text: "식물이 자라는 조건을 비교할 때", emoji: "🌱", scores: { bio: 3, scientist: 2, designer: 0 } },
      { id: "2c", text: "화학 반응으로 색이 변할 때", emoji: "🧪", scores: { scientist: 3, bio: 1, engineer: 1 } },
      { id: "2d", text: "힘과 운동 실험으로 물체를 움직일 때", emoji: "🚀", scores: { engineer: 3, scientist: 2, data: 0 } },
    ],
  },
  {
    id: 3,
    question: "모둠 활동에서 주로 맡는 역할은?",
    subtitle: "평소 협업 스타일을 생각해보세요",
    options: [
      { id: "3a", text: "계획을 세우고 전체를 조율하는 리더", emoji: "👑", scores: { finance: 2, engineer: 2, data: 1 } },
      { id: "3b", text: "자료를 수집하고 분석하는 조사원", emoji: "🔍", scores: { data: 3, scientist: 2, bio: 1 } },
      { id: "3c", text: "창의적인 아이디어를 내는 기획자", emoji: "✨", scores: { designer: 3, bio: 1, scientist: 1 } },
      { id: "3d", text: "꼼꼼하게 결과를 정리하는 기록자", emoji: "📝", scores: { scientist: 2, data: 2, finance: 1 } },
    ],
  },
  {
    id: 4,
    question: "이런 뉴스에 자연스럽게 눈이 가요",
    subtitle: "관심 분야를 파악하는 문항이에요",
    options: [
      { id: "4a", text: "AI와 로봇이 바꾸는 미래 기술", emoji: "🤖", scores: { data: 3, engineer: 3, designer: 0 } },
      { id: "4b", text: "신약 개발과 바이오 기술 소식", emoji: "💊", scores: { bio: 3, scientist: 2, data: 1 } },
      { id: "4c", text: "친환경 에너지와 지구 환경 문제", emoji: "🌍", scores: { scientist: 2, engineer: 2, bio: 2 } },
      { id: "4d", text: "경제 트렌드와 투자 이야기", emoji: "💰", scores: { finance: 3, data: 2, engineer: 0 } },
    ],
  },
  {
    id: 5,
    question: "중학교 과학에서 가장 기억에 남는 단원은?",
    subtitle: "과학 영역별 선호도를 확인해요",
    options: [
      { id: "5a", text: "힘과 운동, 에너지 전환", emoji: "⚙️", scores: { engineer: 3, scientist: 2, finance: 0 } },
      { id: "5b", text: "세포와 유전, 생태계", emoji: "🧬", scores: { bio: 3, scientist: 1, designer: 0 } },
      { id: "5c", text: "물질의 구성과 화학 반응", emoji: "⚗️", scores: { scientist: 3, engineer: 1, bio: 1 } },
      { id: "5d", text: "지구와 우주, 기후 변화", emoji: "🌌", scores: { scientist: 2, bio: 1, engineer: 1, designer: 1 } },
    ],
  },
  {
    id: 6,
    question: "자유 시간에 자연스럽게 하게 되는 활동은?",
    subtitle: "일상 속 흥미를 통해 적성을 파악해요",
    options: [
      { id: "6a", text: "코딩이나 앱 만들기", emoji: "💻", scores: { data: 3, engineer: 2, designer: 1 } },
      { id: "6b", text: "다큐멘터리 시청 (자연, 우주 등)", emoji: "🎬", scores: { scientist: 2, bio: 2, engineer: 1 } },
      { id: "6c", text: "무언가를 설계하거나 만들기 (레고, 3D 등)", emoji: "🏗️", scores: { engineer: 3, designer: 2, scientist: 0 } },
      { id: "6d", text: "퍼즐, 전략 게임, 두뇌 활동", emoji: "🧩", scores: { data: 2, finance: 2, scientist: 1 } },
    ],
  },
  {
    id: 7,
    question: "미래에 이런 사람이 되고 싶어요",
    subtitle: "꿈꾸는 모습을 자유롭게 골라보세요",
    options: [
      { id: "7a", text: "새로운 기술을 발명하는 사람", emoji: "🔬", scores: { engineer: 3, scientist: 2, data: 1 } },
      { id: "7b", text: "데이터로 세상을 읽는 사람", emoji: "📈", scores: { data: 3, finance: 2, scientist: 1 } },
      { id: "7c", text: "생명과 건강을 지키는 사람", emoji: "🏥", scores: { bio: 3, scientist: 2, designer: 0 } },
      { id: "7d", text: "사회와 경제를 움직이는 사람", emoji: "🌐", scores: { finance: 3, data: 1, designer: 1 } },
    ],
  },
  {
    id: 8,
    question: "수학에서 이 개념이 제일 자신 있어요",
    subtitle: "수학 역량을 점검하는 문항이에요",
    options: [
      { id: "8a", text: "함수와 그래프 (변화율, 기울기)", emoji: "📉", scores: { engineer: 2, data: 2, scientist: 2 } },
      { id: "8b", text: "확률과 통계 (데이터 분석)", emoji: "🎲", scores: { data: 3, finance: 2, bio: 1 } },
      { id: "8c", text: "도형과 공간 (기하, 벡터)", emoji: "🔷", scores: { engineer: 3, designer: 2, scientist: 1 } },
      { id: "8d", text: "방정식과 논리적 추론", emoji: "🧮", scores: { scientist: 2, finance: 2, data: 1 } },
    ],
  },
  {
    id: 9,
    question: "학교 과제를 할 때 나의 스타일은?",
    subtitle: "학습 방식을 통해 성향을 분석해요",
    options: [
      { id: "9a", text: "정확한 데이터와 근거를 중시", emoji: "🎯", scores: { data: 2, scientist: 2, finance: 1 } },
      { id: "9b", text: "직접 만들고 실험해보는 걸 좋아함", emoji: "🛠️", scores: { engineer: 3, scientist: 1, designer: 1 } },
      { id: "9c", text: "시각적으로 보기 좋게 정리", emoji: "🎨", scores: { designer: 3, bio: 1, data: 1 } },
      { id: "9d", text: "효율적이고 빠르게 핵심만 파악", emoji: "⚡", scores: { finance: 2, data: 2, engineer: 1 } },
    ],
  },
  {
    id: 10,
    question: "10년 뒤, 이런 프로젝트를 하고 있다면?",
    subtitle: "미래의 나를 상상해보세요",
    options: [
      { id: "10a", text: "자율주행차 알고리즘 개발", emoji: "🚗", scores: { engineer: 3, data: 2, scientist: 1 } },
      { id: "10b", text: "희귀 질환 치료제 연구", emoji: "🧬", scores: { bio: 3, scientist: 2, data: 1 } },
      { id: "10c", text: "글로벌 금융 데이터 분석", emoji: "🏦", scores: { finance: 3, data: 2, engineer: 0 } },
      { id: "10d", text: "지속 가능한 스마트시티 설계", emoji: "🏙️", scores: { engineer: 2, designer: 2, scientist: 1, bio: 1 } },
    ],
  },
];

export const careerResults: Record<string, CareerResult> = {
  engineer: {
    type: "engineer",
    title: "정밀한 설계자",
    emoji: "⚙️",
    description: "논리적 사고와 창의적 설계 능력을 겸비한 당신! 복잡한 문제를 체계적으로 분석하고, 실질적인 해결책을 만들어내는 데 탁월합니다.",
    keywords: ["미적분", "물리학", "공학설계", "프로그래밍"],
    highSchoolSubjects: ["미적분", "기하", "물리학Ⅰ·Ⅱ", "정보", "공학 일반"],
    universities: ["서울대 기계공학부", "KAIST 전기전자공학부", "연세대 전기전자공학", "한양대 로봇공학과"],
    careers: ["기계공학자", "로봇 엔지니어", "자동차 설계 전문가", "항공우주 엔지니어"],
    advice: "중학교 '힘과 운동' 단원이 고교 물리학의 기초가 돼요. 수학의 함수·미적분 개념을 탄탄히 쌓아두면 공학 전공에서 큰 힘이 됩니다!",
    color: "indigo",
  },
  data: {
    type: "data",
    title: "데이터 해독가",
    emoji: "📊",
    description: "숫자와 패턴 속에서 의미를 찾아내는 당신! 데이터를 통해 세상의 흐름을 읽고, 미래를 예측하는 능력이 돋보입니다.",
    keywords: ["확률과통계", "프로그래밍", "인공지능", "빅데이터"],
    highSchoolSubjects: ["확률과 통계", "미적분", "정보", "인공지능 수학", "경제"],
    universities: ["서울대 컴퓨터공학부", "KAIST 데이터사이언스", "고려대 통계학과", "성균관대 소프트웨어학과"],
    careers: ["데이터 사이언티스트", "AI 엔지니어", "머신러닝 연구원", "비즈니스 애널리스트"],
    advice: "중학교 '통계' 단원의 평균·분산 개념이 고교 확률과 통계의 기초예요. 코딩(파이썬)도 미리 접해보면 큰 도움이 됩니다!",
    color: "teal",
  },
  scientist: {
    type: "scientist",
    title: "끈질긴 탐구자",
    emoji: "🔬",
    description: "'왜?'라는 질문을 멈추지 않는 당신! 자연 현상의 원리를 파헤치고, 새로운 사실을 발견하는 데서 큰 보람을 느끼는 진정한 과학자 기질입니다.",
    keywords: ["화학", "물리학", "자연과학", "연구방법론"],
    highSchoolSubjects: ["물리학Ⅰ·Ⅱ", "화학Ⅰ·Ⅱ", "미적분", "기하", "과학탐구실험"],
    universities: ["서울대 자연과학대학", "KAIST 물리학과", "포항공대 화학과", "연세대 화학과"],
    careers: ["물리학 연구원", "화학 연구원", "소재 과학자", "대학 교수"],
    advice: "중학교 '물질의 구성'과 '화학 반응' 단원이 고교 화학의 핵심 기초입니다. 실험 보고서 쓰는 습관도 길러두세요!",
    color: "violet",
  },
  bio: {
    type: "bio",
    title: "생명 탐구가",
    emoji: "🧬",
    description: "생명의 신비와 건강에 깊은 관심을 가진 당신! 세포부터 생태계까지, 살아 있는 모든 것에 호기심이 넘치는 생명과학 전문가 타입입니다.",
    keywords: ["생명과학", "유전학", "생태학", "바이오테크"],
    highSchoolSubjects: ["생명과학Ⅰ·Ⅱ", "화학Ⅰ", "확률과 통계", "생태와 환경", "과학탐구실험"],
    universities: ["서울대 생명과학부", "연세대 의예과", "KAIST 바이오공학", "고려대 생명공학부"],
    careers: ["의사", "생명과학 연구원", "제약 연구원", "유전상담사", "바이오 스타트업 창업"],
    advice: "중학교 '세포와 유전' 단원이 고교 생명과학의 뼈대예요. 생물 관련 독서와 실험 경험을 꾸준히 쌓아보세요!",
    color: "coral",
  },
  finance: {
    type: "finance",
    title: "전략적 경영인",
    emoji: "💼",
    description: "숫자 감각과 전략적 사고가 뛰어난 당신! 경제 흐름을 읽고 합리적 의사결정을 내리는 능력이 탁월합니다.",
    keywords: ["경제수학", "통계", "경영학", "금융공학"],
    highSchoolSubjects: ["확률과 통계", "미적분", "경제", "사회·문화", "정보"],
    universities: ["서울대 경영대학", "고려대 경영학과", "연세대 경제학과", "성균관대 글로벌경영학과"],
    careers: ["금융 애널리스트", "경영 컨설턴트", "핀테크 기획자", "투자 전문가"],
    advice: "중학교 수학의 '함수'와 '통계' 단원이 경제·경영 분야의 기초가 됩니다. 경제 뉴스를 꾸준히 읽는 습관을 추천해요!",
    color: "amber",
  },
  designer: {
    type: "designer",
    title: "창의적 혁신가",
    emoji: "🎨",
    description: "아름다움과 기능을 조화시키는 당신! 사용자 중심의 사고와 창의적 표현력으로 세상을 더 나은 곳으로 만드는 잠재력이 있습니다.",
    keywords: ["디자인씽킹", "UX", "건축", "융합예술"],
    highSchoolSubjects: ["기하", "정보", "미술", "기술·가정", "공학 일반"],
    universities: ["서울대 건축학과", "홍익대 디자인학부", "KAIST 산업디자인", "연세대 언더우드학부"],
    careers: ["UX/UI 디자이너", "건축가", "제품 디자이너", "크리에이티브 디렉터"],
    advice: "중학교 '도형과 공간' 단원이 기하학적 사고의 기초예요. 다양한 창작 활동과 포트폴리오를 미리 준비해보세요!",
    color: "coral",
  },
};

export function calculateResult(answers: Record<number, string>): CareerResult {
  const scores: Record<string, number> = {};

  Object.values(answers).forEach((optionId) => {
    for (const q of quizQuestions) {
      const option = q.options.find((o) => o.id === optionId);
      if (option) {
        Object.entries(option.scores).forEach(([cat, score]) => {
          scores[cat] = (scores[cat] || 0) + score;
        });
      }
    }
  });

  const topCategory = Object.entries(scores).sort(([, a], [, b]) => b - a)[0]?.[0] || "engineer";
  return careerResults[topCategory];
}
