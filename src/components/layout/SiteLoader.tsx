"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./SiteLoader.module.css";

export default function SiteLoader({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dismissRef = useRef<() => void>(() => {});
  const [visible, setVisible] = useState(true);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const originalOverflow = document.documentElement.style.overflow;
    const previousFocus = document.activeElement;
    const started = performance.now();
    let disposed = false;
    let dismissing = false;
    let readyCount = 1; // React has hydrated the page.
    const timers: ReturnType<typeof setTimeout>[] = [];
    const removeListeners: (() => void)[] = [];
    let exitAnimation: Animation | undefined;

    content.inert = true;
    document.documentElement.style.overflow = "hidden";

    const release = () => {
      content.inert = false;
      document.documentElement.style.overflow = originalOverflow;
      if (overlay.contains(document.activeElement)) {
        const target =
          previousFocus instanceof HTMLElement &&
          previousFocus !== document.body
            ? previousFocus
            : content.querySelector<HTMLElement>("a, button");
        target?.focus({ preventScroll: true });
      }
    };
    const finish = () => {
      if (disposed) return;
      document.removeEventListener("keydown", onKey);
      reduced.removeEventListener("change", dismiss);
      release();
      setVisible(false);
    };
    const dismiss = () => {
      if (disposed || dismissing) return;
      dismissing = true;
      timers.forEach(clearTimeout);
      if (reduced.matches) {
        finish();
        return;
      }
      overlay.dataset.leaving = "true";
      exitAnimation = overlay.animate(
        [{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 100% 0)" }],
        {
          duration: 550,
          easing: "cubic-bezier(.76,0,.24,1)",
          fill: "forwards",
        },
      );
      exitAnimation.onfinish = finish;
    };
    dismissRef.current = dismiss;
    const markReady = () => {
      if (disposed || dismissing) return;
      readyCount += 1;
      setCompleted(readyCount);
      if (readyCount === 3) {
        // A short entrance beat; readiness is based on real assets, not fake percentages.
        timers.push(
          setTimeout(
            dismiss,
            Math.max(
              0,
              (reduced.matches ? 0 : 1200) - (performance.now() - started),
            ),
          ),
        );
      }
    };
    timers.push(
      setTimeout(() => setCompleted((count) => Math.max(count, 1)), 0),
    );
    document.fonts.ready.then(markReady, markReady);
    const portrait = content.querySelector<HTMLImageElement>(
      'img[alt="Krutarth Chauhan"]',
    );
    if (!portrait || portrait.complete) {
      Promise.resolve().then(markReady);
    } else {
      const imageReady = () => {
        portrait.removeEventListener("load", imageReady);
        portrait.removeEventListener("error", imageReady);
        markReady();
      };
      portrait.addEventListener("load", imageReady);
      portrait.addEventListener("error", imageReady);
      removeListeners.push(() => {
        portrait.removeEventListener("load", imageReady);
        portrait.removeEventListener("error", imageReady);
      });
    }
    // Slow or failed assets must never trap the visitor behind the intro.
    timers.push(setTimeout(dismiss, reduced.matches ? 500 : 3500));
    const onKey = (event: KeyboardEvent) => {
      if (dismissing) return;
      if (event.key === "Escape") dismiss();
      if (
        ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(
          event.key,
        )
      )
        event.preventDefault();
    };
    document.addEventListener("keydown", onKey);
    reduced.addEventListener("change", dismiss);
    return () => {
      disposed = true;
      timers.forEach(clearTimeout);
      removeListeners.forEach((remove) => remove());
      exitAnimation?.cancel();
      document.removeEventListener("keydown", onKey);
      reduced.removeEventListener("change", dismiss);
      release();
      dismissRef.current = () => {};
    };
  }, []);

  return (
    <>
      {visible && (
        <div ref={overlayRef} className={styles.overlay} data-lenis-prevent>
          <div className={styles.topline}>
            <span className={styles.brand}>
              KRUTARTH<span className={styles.dot}>.</span>
            </span>
            <span className={styles.edition}>PORTFOLIO / 026</span>
          </div>
          <div className={styles.center}>
            <div className={styles.eyebrow}>
              <span className={styles.signal} /> SYSTEM BOOT / KRUT_001
            </div>
            <div className={styles.title} aria-hidden="true">
              TECHNOLOGY
              <br />
              <span>IN MOTION.</span>
            </div>
            <div className={styles.telemetry}>
              <span role="status" aria-live="polite">
                {completed === 3 ? "SYSTEM READY" : "INITIALIZING EXPERIENCE"}
              </span>
              <span className={styles.counter} aria-hidden="true">
                0{completed}
                <span> / 03</span>
              </span>
            </div>
            <div className={styles.track} aria-hidden="true">
              <div style={{ transform: `scaleX(${completed / 3})` }} />
            </div>
            <div className={styles.checks} aria-hidden="true">
              {["INTERFACE", "TYPE + PORTRAIT", "READY TO EXPLORE"].map(
                (label, index) => (
                  <span key={label} data-ready={completed > index}>
                    {completed > index ? "+" : "-"} {label}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className={styles.bottomline}>
            <span>
              GUJARAT, INDIA{" "}
              <span className={styles.coordinates}>
                / BUILDING DIGITAL PRODUCTS
              </span>
            </span>
            <button
              type="button"
              onClick={() => dismissRef.current()}
              className={styles.skip}
            >
              SKIP INTRO <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      )}
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </>
  );
}
