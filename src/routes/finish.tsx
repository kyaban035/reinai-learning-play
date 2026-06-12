import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/finish")({
  component: Finish,
});

function Finish() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-display text-foreground mb-8">
            오늘 활동 끝! 🎉
          </h1>

          <div className="card-soft px-8 py-10 sm:px-14 sm:py-14 bg-sunny/70 border-praise">
            <p className="text-3xl sm:text-5xl font-display text-foreground leading-snug">
              재인아, 오늘도 열심히 했어!
              <br />
              너는 멋진 심재인이야.
            </p>
            <div className="mt-6 text-7xl sm:text-8xl">⭐ 👍 🌟</div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="card-soft card-soft-hover bg-sky text-sky-foreground border-sky px-8 py-5 text-2xl sm:text-3xl font-display"
            >
              처음으로 가기
            </Link>
            <Link
              to="/activities"
              className="card-soft card-soft-hover bg-card border-border px-8 py-5 text-2xl sm:text-3xl font-display"
            >
              활동 끝내기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
