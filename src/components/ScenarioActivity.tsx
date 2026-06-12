import { useState } from "react";
import { ActivityShell } from "./ActivityShell";

export type ScenarioQ = {
  situation: string;
  illustration: string;
  question: string;
  options: { label: string; icon: string }[];
  correctIndex: number;
  correctMsg: string;
  retryMsg: string;
};

export function ScenarioActivity({
  title,
  questions,
  prevTo,
}: {
  title: string;
  questions: ScenarioQ[];
  prevTo: string;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  const q = questions[idx];
  const isCorrect = picked !== null && picked === q.correctIndex;

  const onPick = (i: number) => setPicked(i);
  const next = () => {
    setPicked(null);
    setIdx((n) => (n + 1) % questions.length);
  };

  return (
    <ActivityShell prevTo={prevTo}>
      <div className="text-center mb-2">
        <h2 className="text-2xl sm:text-3xl font-display text-muted-foreground">{title}</h2>
        <p className="text-base text-muted-foreground mt-1">
          {idx + 1} / {questions.length}
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-3xl sm:text-5xl font-display text-foreground">{q.situation}</p>
        <div className="my-6 sm:my-8 text-7xl sm:text-9xl">{q.illustration}</div>
        <p className="text-2xl sm:text-4xl font-display text-foreground">{q.question}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto mt-8">
        {q.options.map((opt, i) => {
          const active = picked === i;
          const showCorrect = active && i === q.correctIndex;
          const showWrong = active && i !== q.correctIndex;
          return (
            <button
              key={i}
              onClick={() => onPick(i)}
              className={`card-soft card-soft-hover p-6 sm:p-8 flex flex-col items-center justify-center gap-3 min-h-44 sm:min-h-52 ${
                showCorrect
                  ? "border-leaf bg-leaf/25"
                  : showWrong
                  ? "border-praise bg-sunny/60"
                  : "bg-card"
              }`}
            >
              <div className="text-6xl sm:text-7xl">{opt.icon}</div>
              <div className="text-xl sm:text-2xl font-display text-foreground text-center">
                {opt.label}
              </div>
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="mt-8 text-center">
          <div
            className={`card-soft inline-block px-6 py-5 max-w-2xl ${
              isCorrect ? "bg-leaf/25 border-leaf" : "bg-sunny/70 border-praise"
            }`}
          >
            <p className="text-2xl sm:text-3xl font-display text-foreground">
              {isCorrect ? `${q.correctMsg} ⭐` : `${q.retryMsg} 💡`}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {!isCorrect && (
              <button
                onClick={() => setPicked(null)}
                className="card-soft card-soft-hover bg-card border-border px-6 py-3 text-xl font-display"
              >
                다시 선택하기
              </button>
            )}
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
