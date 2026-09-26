import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden bg-krut-bg px-6 py-8 text-krut-text selection:bg-krut-accent selection:text-white md:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#090909_1px,transparent_1px),linear-gradient(to_bottom,#090909_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[42vw] font-bold leading-none tracking-[-0.08em] text-krut-dark opacity-[0.035]">
        404
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1440px] flex-col justify-between border border-krut-lines/80 p-6 md:p-10">
        <div className="flex items-center justify-between gap-6 border-b border-krut-lines pb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-krut-muted md:text-xs">
          <span className="font-display text-lg font-bold tracking-[0.16em] text-krut-text md:text-xl">
            KRUTARTH
          </span>
          <span className="text-right">ERROR // ROUTE_NOT_FOUND</span>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:py-20">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 border border-krut-lines px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-krut-muted md:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-krut-accent" />
              SIGNAL LOST
            </div>
            <h1 className="font-display text-[clamp(7rem,22vw,19rem)] font-bold leading-[0.75] tracking-[-0.06em] text-krut-text">
              404
            </h1>
            <p className="mt-10 max-w-md font-body text-base font-medium uppercase leading-relaxed tracking-[0.08em] text-krut-muted md:text-lg">
              This route drifted out of range. Let&apos;s get you back to the
              main system.
            </p>
          </div>

          <div className="w-full max-w-sm border-l-2 border-krut-accent pl-5 font-mono text-xs uppercase tracking-[0.14em] text-krut-muted md:mb-3">
            <div className="mb-5 flex justify-between gap-6 border-b border-krut-lines pb-3">
              <span>STATUS</span>
              <span className="font-bold text-krut-accent">OFFLINE</span>
            </div>
            <div className="mb-5 flex justify-between gap-6 border-b border-krut-lines pb-3">
              <span>RESPONSE</span>
              <span className="text-krut-text">404 / NULL</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>NEXT MOVE</span>
              <span className="text-right text-krut-text">REBOOT HOME</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-krut-lines pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-krut-muted">
            TECHNOLOGY IN MOTION.
          </p>
          <div className="flex flex-wrap gap-3 font-body text-xs font-bold uppercase tracking-[0.16em]">
            <Link
              href="/"
              className="bg-krut-text px-5 py-4 text-krut-bg transition-colors hover:bg-krut-accent hover:text-white"
            >
              Return Home &rarr;
            </Link>
            <a
              href="https://krutonic.com"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="border border-krut-lines px-5 py-4 transition-colors hover:border-krut-accent hover:bg-krut-accent hover:text-white"
            >
              Visit Krutonic &rarr;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
