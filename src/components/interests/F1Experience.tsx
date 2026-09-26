"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function F1Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-krut-bg text-krut-text py-32 overflow-hidden flex items-center border-b border-krut-lines"
    >
      {/* Abstract Background Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg
          viewBox="0 0 1000 1000"
          className="absolute top-0 right-[-20%] w-[120vw] h-[120vw] origin-center -rotate-12"
        >
          <path
            d="M 0 500 Q 250 200 500 500 T 1000 500"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 0 550 Q 250 250 500 550 T 1000 550"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 600 Q 250 300 500 600 T 1000 600"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 0 650 Q 250 350 500 650 T 1000 650"
            stroke="var(--color-krut-accent)"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>

      <div className="interest-grid w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-[8rem] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
              PRECISION
              <br />
              MATTERS.
            </h2>
            <div className="font-mono text-xs uppercase tracking-widest text-krut-muted mb-8 border-l-2 border-krut-accent pl-4">
              WHY FORMULA 1 INSPIRES ME
            </div>
            <p className="font-body text-xl max-w-lg leading-relaxed mb-12">
              Formula 1 is more than speed. It&apos;s engineering, iteration,
              decision-making and finding milliseconds where others see nothing.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-8">
          {[
            { title: "PRECISION", val: "0.001" },
            { title: "ITERATION", val: "V.124" },
            { title: "ENGINEERING", val: "AERO" },
            { title: "PERFORMANCE", val: "MAX" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="f1-stat flex items-center justify-between border-b border-krut-lines pb-4 group"
            >
              <div className="font-display text-4xl uppercase tracking-tighter group-hover:text-krut-accent transition-colors">
                {item.title}
              </div>
              <div className="font-mono text-sm text-krut-muted">
                [{item.val}]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
