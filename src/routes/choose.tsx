import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ActivityShell } from "@/components/ActivityShell";

export const Route = createFileRoute("/choose")({
  component: Choose,
});

type Pair = { left: string; right: string; leftIcon?: string; rightIcon?: string; color?: boolean };
type Topic = {
  id: string;
  emoji: string;
  title: string;
  prompts: string[];
  pairs: Pair[];
};

const TOPICS: Topic[] = [
  {
    id: "food",
    emoji: "🍕",
    title: "음식",
    prompts: ["왜 이것을 골랐을까?", "언제 먹고 싶어?", "누구랑 먹고 싶어?"],
    pairs: [
      { left: "피자", right: "햄버거", leftIcon: "🍕", rightIcon: "🍔" },
      { left: "우유", right: "주스", leftIcon: "🥛", rightIcon: "🧃" },
      { left: "사탕", right: "젤리", leftIcon: "🍬", rightIcon: "🍮" },
      { left: "포도", right: "딸기", leftIcon: "🍇", rightIcon: "🍓" },
      { left: "수박", right: "사과", leftIcon: "🍉", rightIcon: "🍎" },
      { left: "바나나", right: "망고", leftIcon: "🍌", rightIcon: "🥭" },
      { left: "과자", right: "케이크", leftIcon: "🍪", rightIcon: "🍰" },
      { left: "아이스크림", right: "콜라", leftIcon: "🍦", rightIcon: "🥤" },
      { left: "샌드위치", right: "파스타", leftIcon: "🥪", rightIcon: "🍝" },
      { left: "김밥", right: "유부초밥", leftIcon: "🍙", rightIcon: "🍣" },
    ],
  },
  {
    id: "color",
    emoji: "🎨",
    title: "색깔",
    prompts: ["왜 이 색이 좋아?", "이 색을 보면 무엇이 떠올라?", "어디서 본 색이야?"],
    pairs: [
      { left: "파랑", right: "노랑", color: true },
      { left: "빨강", right: "초록", color: true },
      { left: "보라", right: "주황", color: true },
      { left: "검정", right: "하양", color: true },
    ],
  },
  {
    id: "transport",
    emoji: "🚗",
    title: "교통수단",
    prompts: ["왜 이것을 탔으면 좋겠어?", "어디로 가고 싶어?", "누구랑 타고 싶어?"],
    pairs: [
      { left: "기차", right: "비행기", leftIcon: "🚆", rightIcon: "✈️" },
      { left: "배", right: "택시", leftIcon: "🚢", rightIcon: "🚕" },
      { left: "자동차", right: "소방차", leftIcon: "🚗", rightIcon: "🚒" },
      { left: "경찰차", right: "덤프트럭", leftIcon: "🚓", rightIcon: "🚛" },
      { left: "자전거", right: "킥보드", leftIcon: "🚲", rightIcon: "🛴" },
    ],
  },
  {
    id: "place",
    emoji: "🏠",
    title: "장소",
    prompts: ["왜 거기에 가고 싶어?", "거기서 무엇을 할 거야?", "누구랑 가고 싶어?"],
    pairs: [
      { left: "병원", right: "학교", leftIcon: "🏥", rightIcon: "🏫" },
      { left: "약국", right: "이마트", leftIcon: "💊", rightIcon: "🛒" },
      { left: "주유소", right: "정비소", leftIcon: "⛽", rightIcon: "🔧" },
      { left: "편의점", right: "은행", leftIcon: "🏪", rightIcon: "🏦" },
      { left: "도서관", right: "수영장", leftIcon: "📚", rightIcon: "🏊" },
      { left: "동물원", right: "맥도널드", leftIcon: "🦁", rightIcon: "🍟" },
      { left: "롯데리아", right: "편의점", leftIcon: "🍔", rightIcon: "🏪" },
    ],
  },
];

const PRAISES = [
  "좋아! 재인이가 골랐어.",
  "잘 골랐어요!",
  "끝까지 봤어요!",
  "생각하고 눌렀어요!",
  "좋아요, 다음 문제로 가볼까요?",
];

const COLOR_MAP: Record<string, string> = {
  파랑: "#7dd3fc",
  노랑: "#fde68a",
  빨강: "#fca5a5",
  초록: "#86efac",
  보라: "#c4b5fd",
  주황: "#fdba74",
  검정: "#1f2937",
  하양: "#ffffff",
};

function Choose() {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<"left" | "right" | null>(null);
  const [praiseIdx, setPraiseIdx] = useState(0);

  if (!topic) {
    return (
      <ActivityShell prevTo="/activities">
        <h1 className="text-center text-4xl sm:text-6xl font-display text-foreground mb-8 sm:mb-12">
          무엇을 골라볼까?
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTopic(t);
                setIdx(0);
                setPicked(null);
              }}
              className="card-soft card-soft-hover p-8 sm:p-10 flex flex-col items-center justify-center gap-3 min-h-40 bg-sunny/60 border-praise"
            >
              <div className="text-6xl sm:text-7xl">{t.emoji}</div>
              <div className="text-2xl sm:text-3xl font-display text-foreground">{t.title}</div>
            </button>
          ))}
        </div>
      </ActivityShell>
    );
  }

  const pair = topic.pairs[idx];
  const prompt = topic.prompts[idx % topic.prompts.length];

  const pick = (side: "left" | "right") => {
    setPicked(side);
    setPraiseIdx(Math.floor(Math.random() * PRAISES.length));
  };

  const next = () => {
    setPicked(null);
    setIdx((i) => (i + 1) % topic.pairs.length);
  };

  return (
    <ActivityShell prevTo="/activities">
      <div className="text-center">
        <button
          onClick={() => setTopic(null)}
          className="text-base sm:text-lg text-muted-foreground underline mb-3"
        >
          ← 주제 다시 고르기
        </button>
        <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-2">
          {topic.emoji} {topic.title}
        </h2>
        <p className="text-2xl sm:text-4xl font-display text-foreground mt-4 mb-8">어느 것이 좋아?</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
        {(["left", "right"] as const).map((side) => {
          const label = side === "left" ? pair.left : pair.right;
          const icon = side === "left" ? pair.leftIcon : pair.rightIcon;
          const active = picked === side;
          return (
            <button
              key={side}
              onClick={() => pick(side)}
              className={`card-soft card-soft-hover p-6 sm:p-10 flex flex-col items-center justify-center gap-4 min-h-52 sm:min-h-64 ${
                active ? "border-leaf bg-leaf/20" : "bg-card"
              }`}
            >
              {pair.color ? (
                <div
                  className="w-28 h-28 sm:w-40 sm:h-40 rounded-3xl border-4 border-border"
                  style={{ background: COLOR_MAP[label] }}
                />
              ) : (
                <div className="text-7xl sm:text-8xl">{icon}</div>
              )}
              <div className="text-2xl sm:text-3xl font-display text-foreground">{label}</div>
            </button>
          );
        })}
      </div>

      {picked && (
        <div className="mt-8 text-center">
          <div className="card-soft inline-block px-6 py-5 bg-praise/40 border-praise max-w-xl">
            <p className="text-2xl sm:text-3xl font-display text-foreground">
              {PRAISES[praiseIdx]} ⭐
            </p>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground">
              💬 선생님 발문: {prompt}
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={next}
              className="card-soft card-soft-hover bg-sky text-sky-foreground border-sky px-8 py-4 text-2xl font-display"
            >
              다음 문제 →
            </button>
          </div>
        </div>
      )}
    </ActivityShell>
  );
}
