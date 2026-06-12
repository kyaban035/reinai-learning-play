import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Start,
});

function Start() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-background">
      <div className="text-center max-w-3xl">
        <h1 className="font-display text-5xl sm:text-7xl text-foreground leading-tight">
          재인이를 위한
          <br />
          <span className="text-sky-foreground">신나는 언어 수업</span>
        </h1>
        <div className="my-10 sm:my-12 flex items-center justify-center">
          <div className="card-soft px-10 py-10 sm:px-16 sm:py-14 bg-sunny/60 border-praise">
            <p className="text-2xl sm:text-3xl font-display text-foreground text-center">
              재인아, 오늘도 신나는 수업을<br />시작해 볼까?
            </p>
          </div>
        </div>

        <Link
          to="/mood"
          className="inline-block card-soft card-soft-hover bg-sky text-sky-foreground px-12 py-6 sm:px-16 sm:py-7 text-3xl sm:text-4xl font-display border-sky"
        >
          오늘의 활동 시작하기
        </Link>
      </div>
    </div>
  );
}
