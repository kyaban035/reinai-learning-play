import { createFileRoute, Link } from "@tanstack/react-router";
import { ActivityShell } from "@/components/ActivityShell";

export const Route = createFileRoute("/activities")({
  component: Activities,
});

const CARDS = [
  { to: "/choose", title: "둘 중 하나 고르기", icon: "🍕  🎨", bg: "bg-sky/30", border: "border-sky" },
  { to: "/situation", title: "상황 해결하기", icon: "❓ 🏠", bg: "bg-sunny/60", border: "border-praise" },
  { to: "/predict", title: "어떻게 될까요?", icon: "💭", bg: "bg-leaf/30", border: "border-leaf" },
  { to: "/finish", title: "오늘 활동 마무리", icon: "⭐ 👍", bg: "bg-praise/40", border: "border-praise" },
] as const;

function Activities() {
  return (
    <ActivityShell prevTo="/mood" showActivities={false}>
      <h1 className="text-center text-4xl sm:text-6xl font-display text-foreground mb-8 sm:mb-12">
        오늘은 어떤 활동을 해볼까?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
        {CARDS.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className={`card-soft card-soft-hover p-8 sm:p-10 flex flex-col items-center justify-center gap-4 min-h-44 sm:min-h-56 ${c.bg} ${c.border}`}
          >
            <div className="text-6xl sm:text-7xl">{c.icon}</div>
            <div className="text-2xl sm:text-3xl font-display text-foreground text-center">
              {c.title}
            </div>
          </Link>
        ))}
      </div>
    </ActivityShell>
  );
}
