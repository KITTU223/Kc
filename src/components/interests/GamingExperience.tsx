"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  { id: "RACING", desc: "SIMULATION / PRECISION" },
  { id: "STORY", desc: "NARRATIVE / EMOTION" },
  { id: "ACTION", desc: "REFLEX / MECHANICS" },
  { id: "SIMULATION", desc: "SYSTEMS / LOGIC" },
];

export default function GamingExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-krut-dark text-krut-bg py-32 overflow-hidden flex items-center"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-6xl md:text-[8rem] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-6">
            PRESS
            <br />
            START.
          </h2>
          <div className="font-mono text-sm uppercase tracking-widest text-krut-accent">
            GAMES ARE INTERACTIVE SYSTEMS.
          </div>
        </div>

        <div className="gaming-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "gaming-card relative aspect-square border border-krut-lines/20 p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-crosshair group",
                hoveredId === cat.id ? "bg-white/5" : "bg-transparent",
              )}
            >
              <div className="font-mono text-xs text-krut-muted uppercase flex justify-between">
                <span>SYSTEM</span>
                <span>[{i + 1}]</span>
              </div>

              <div className="relative z-10">
                <div className="font-display text-4xl uppercase tracking-widest mb-2 group-hover:text-krut-accent transition-colors">
                  {cat.id}
                </div>
                <div className="font-mono text-[10px] uppercase text-krut-muted">
                  {cat.desc}
                </div>
              </div>

              {/* Minimal Animated Grid Background on Hover */}
              <div
                className={cn(
                  "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1rem_1rem]",
                )}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
