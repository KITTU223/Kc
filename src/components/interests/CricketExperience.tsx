"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CricketExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-krut-bg text-krut-text py-32 overflow-hidden flex items-center border-b border-krut-lines"
    >
      {/* Abstract Cricket Field Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <div className="w-[120vw] md:w-[80vw] h-[120vw] md:h-[80vw] border-[4px] border-krut-text rounded-full flex items-center justify-center relative">
          <div className="w-16 h-48 border-[2px] border-krut-text absolute"></div>
          <div className="w-4 h-4 bg-krut-accent rounded-full absolute -top-2"></div>
        </div>
      </div>

      <div className="interest-grid w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div className="order-2 md:order-1 flex items-center justify-center relative h-[400px]">
          {/* Abstract Tactical Geometry */}
          <svg viewBox="0 0 500 500" className="w-full h-full max-w-[400px]">
            {/* Field */}
            <circle
              cx="250"
              cy="250"
              r="240"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-krut-lines"
            />
            <rect
              x="230"
              y="150"
              width="40"
              height="200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-krut-muted"
            />

            {/* Tactical Lines */}
            <motion.path
              d="M 250 350 L 100 150 M 250 350 L 400 150 M 250 350 L 250 50"
              stroke="var(--color-krut-accent)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Player Nodes */}
            <circle
              cx="100"
              cy="150"
              r="8"
              fill="currentColor"
              className="text-krut-text"
            />
            <circle
              cx="400"
              cy="150"
              r="8"
              fill="currentColor"
              className="text-krut-text"
            />
            <circle
              cx="250"
              cy="50"
              r="8"
              fill="currentColor"
              className="text-krut-text"
            />
            <circle
              cx="250"
              cy="350"
              r="8"
              fill="currentColor"
              className="text-krut-text"
            />
          </svg>
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[8rem] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-right"
          >
            READ
            <br />
            THE GAME.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-end gap-6 mb-12"
          >
            {["TIMING", "STRATEGY", "ADAPTABILITY"].map((word) => (
              <div
                key={word}
                className="font-display text-3xl uppercase tracking-widest text-krut-muted"
              >
                {word}
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg text-right ml-auto max-w-sm border-r-2 border-krut-accent pr-4"
          >
            Good software and good cricket share something: you rarely win by
            reacting late.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
