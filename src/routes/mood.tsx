import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ActivityShell } from "@/components/ActivityShell";

export const Route = createFileRoute("/mood")({
  component: Mood,
});

const MOODS = [
  { label: "신나요" },
  { label: "괜찮아요" },
  { label: "화나요" },
  { label: "슬퍼요" },
  { label: "힘들어요" },
];

function Mood() {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <ActivityShell prevTo="/" nextTo="/activities">
      <h1 className="text-center text-4xl sm:text-6xl font-display text-foreground mb-8 sm:mb-10">
        재인아, 오늘 기분은 어때?
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {MOODS.map((m) => {
          const active = picked === m.label;
          return (
            <button
              key={m.label}
              onClick={() => setPicked(m.label)}
              className={`card-soft card-soft-hover p-5 sm:p-7 flex flex-col items-center justify-center gap-2 ${
                active ? "border-leaf bg-leaf/20" : "bg-card"
              }`}
            >
              <span className="text-xl sm:text-2xl font-display text-foreground">{m.label}</span>
            </button>
          );
        })}
      </div>

      {picked && (
        <div className="mt-8 sm:mt-10 text-center">
          <div className="card-soft inline-block px-8 py-6 bg-praise/40 border-praise">
            <p className="text-2xl sm:text-3xl font-display text-foreground">
              잘했어! 알려줘서 고마워.
            </p>
            <div className="text-6xl mt-3">👍⭐</div>
          </div>
        </div>
      )}
    </ActivityShell>
  );
}
