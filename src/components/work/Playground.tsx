"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiments = [
  {
    id: "EXP_001",
    cat: "THREE.JS",
    title: "SHADER DISPLACEMENT",
    status: "STABLE",
  },
  { id: "EXP_002", cat: "AI", title: "IMAGE HUMANIZER", status: "PROTOTYPE" },
  {
    id: "EXP_003",
    cat: "MOTION",
    title: "CINEMATIC TIMELINE",
    status: "ACTIVE",
  },
  {
    id: "EXP_004",
    cat: "AUTOMATION",
    title: "N8N WORKFLOWS",
    status: "TESTING",
  },
  {
    id: "EXP_005",
    cat: "MOBILE",
    title: "REACT NATIVE ARCHITECTURE",
    status: "STABLE",
  },
  { id: "EXP_006", cat: "UI", title: "MAGNETIC BRACKETS", status: "ACTIVE" },
];

export default function Playground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="playground"
      ref={ref}
      className="w-full bg-krut-bg text-krut-text py-32 overflow-hidden border-b border-krut-lines"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-krut-text mb-4">
            LAB /<br />
            PLAYGROUND
          </h2>
          <div className="font-mono text-sm uppercase tracking-widest text-krut-muted max-w-lg">
            UNFINISHED IDEAS, UI EXPLORATIONS, AI PROTOTYPES, AND THREE.JS
            SCENES.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-64 border border-krut-lines bg-krut-bg p-6 flex flex-col justify-between overflow-hidden cursor-crosshair hover:border-krut-text transition-colors"
            >
              {/* Abstract Lab Graphic Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:10px_10px]"></div>
              </div>

              <div className="flex justify-between items-start relative z-10">
                <div className="font-mono text-xs uppercase tracking-widest text-krut-accent bg-krut-accent/10 px-2 py-1">
                  {exp.id}
                </div>
                <div className="font-mono text-[10px] uppercase text-krut-muted">
                  STATUS: {exp.status}
                </div>
              </div>

              <div className="relative z-10">
                <div className="font-mono text-xs uppercase text-krut-muted mb-2">
                  {exp.cat}
                </div>
                <div className="font-display text-2xl uppercase tracking-widest group-hover:text-krut-accent transition-colors">
                  {exp.title}
                </div>
              </div>

              {/* Corner brackets for tech feel */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-krut-lines group-hover:border-krut-accent transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-krut-lines group-hover:border-krut-accent transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
