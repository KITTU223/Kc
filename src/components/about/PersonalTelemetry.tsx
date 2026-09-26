"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "01", title: "CODE", desc: "PRODUCT ENGINEERING", x: 10, y: 50 },
  { id: "02", title: "F1", desc: "PRECISION / SPEED", x: 26, y: 20 },
  { id: "03", title: "CRICKET", desc: "STRATEGY / TIMING", x: 42, y: 20 },
  { id: "04", title: "GAMING", desc: "IMMERSION / INTERACTION", x: 58, y: 80 },
  { id: "05", title: "BUSINESS", desc: "VALUE / EXECUTION", x: 74, y: 80 },
  { id: "06", title: "AI", desc: "EXPERIMENTATION", x: 90, y: 50 },
];

export default function PersonalTelemetry() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen bg-krut-dark text-krut-bg py-32 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4"
          >
            BEYOND
            <br />
            THE CODE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm tracking-widest text-krut-muted uppercase"
          >
            THE THINGS THAT SHAPE HOW I BUILD.
          </motion.p>
        </div>

        {/* Telemetry Visualization */}
        <div className="telemetry-chart relative w-full h-[400px] md:h-[600px]">
          {/* Abstract Track / Path (Desktop only for accurate alignment, stacked on mobile) */}
          <div className="telemetry-path absolute inset-0 pointer-events-none hidden md:block">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 100 200 L 260 80 L 420 80 L 580 320 L 740 320 L 900 200"
                stroke="#1A1C23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d="M 100 200 L 260 80 L 420 80 L 580 320 L 740 320 L 900 200"
                stroke="var(--color-krut-accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                className="drop-shadow-[0_0_10px_rgba(255,59,48,0.5)]"
              />
            </svg>
          </div>

          {/* Nodes */}
          <div className="telemetry-nodes relative z-10 w-full h-full flex flex-col md:block justify-between items-center gap-12 md:gap-0">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                className="telemetry-node md:absolute group cursor-crosshair flex flex-col items-center md:-translate-x-1/2 md:-translate-y-1/2"
                style={{
                  left: `var(--md-left, ${node.x}%)`,
                  top: `var(--md-top, ${node.y}%)`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.5, delay: 0.5 + i * 0.3 }}
              >
                {/* Node Target */}
                <div className="flex items-center justify-center w-12 h-12 relative shrink-0">
                  <div className="absolute inset-0 border border-krut-lines/20 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                  <div className="absolute w-2 h-2 bg-krut-muted rounded-full group-hover:bg-krut-accent group-hover:scale-125 transition-all duration-300 shadow-none group-hover:shadow-[0_0_15px_rgba(255,59,48,0.8)]"></div>
                  <div className="absolute w-[1px] h-full bg-krut-lines/20 group-hover:bg-krut-accent/50 transition-colors"></div>
                  <div className="absolute h-[1px] w-full bg-krut-lines/20 group-hover:bg-krut-accent/50 transition-colors"></div>
                </div>

                {/* Node Content */}
                <div
                  className={cn(
                    "telemetry-label mt-4 text-center whitespace-nowrap transition-all duration-500",
                    "md:absolute md:top-full md:opacity-30 md:group-hover:opacity-100",
                    "md:group-hover:translate-y-2",
                  )}
                >
                  <div className="font-mono text-xs text-krut-accent mb-1">
                    {node.id}
                  </div>
                  <div className="font-display text-2xl uppercase tracking-widest mb-1 text-krut-bg">
                    {node.title}
                  </div>
                  <div className="font-body text-[10px] text-krut-muted uppercase tracking-widest bg-krut-dark/80 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                    {node.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('/images/noise.png')]"></div>
    </section>
  );
}
