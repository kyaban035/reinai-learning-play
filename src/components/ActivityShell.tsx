import { Link, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function ActivityShell({
  children,
  prevTo,
  nextTo,
  showActivities = true,
}: {
  children: ReactNode;
  prevTo?: string;
  nextTo?: string;
  showActivities?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-10">
        <div className="w-full max-w-5xl">{children}</div>
      </main>
      <nav className="border-t-2 border-border bg-soft/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <NavBtn onClick={() => (prevTo ? router.navigate({ to: prevTo }) : router.history.back())}>
            ← 이전
          </NavBtn>
          {showActivities && (
            <Link
              to="/activities"
              className="rounded-2xl border-2 border-border bg-card px-5 py-2.5 text-base sm:text-lg font-semibold text-foreground hover:border-sky hover:bg-sky/10 transition"
            >
              활동 선택
            </Link>
          )}
          {nextTo && (
            <Link
              to={nextTo}
              className="rounded-2xl border-2 border-sky bg-sky px-5 py-2.5 text-base sm:text-lg font-semibold text-sky-foreground hover:brightness-105 transition"
            >
              다음 →
            </Link>
          )}
          <Link
            to="/finish"
            className="rounded-2xl border-2 border-border bg-card px-5 py-2.5 text-base sm:text-lg font-semibold text-foreground hover:border-leaf hover:bg-leaf/20 transition"
          >
            끝내기
          </Link>
        </div>
      </nav>
    </div>
  );
}

function NavBtn({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl border-2 border-border bg-card px-5 py-2.5 text-base sm:text-lg font-semibold text-foreground hover:border-sky hover:bg-sky/10 transition"
    >
      {children}
    </button>
  );
}
