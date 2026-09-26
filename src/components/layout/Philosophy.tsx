"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Adjust parallax to compress smoothly without completely overlapping
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="philosophy-section w-full h-screen bg-krut-bg flex items-center justify-center overflow-hidden border-b border-krut-lines relative"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.02]">
        <div className="w-[1px] h-full bg-krut-text"></div>
        <div className="h-[1px] w-full bg-krut-text absolute"></div>
      </div>

      {/* Changed leading-[0.8] to leading-[0.95] to prevent total overlap */}
      <div className="philosophy-words relative flex flex-col items-center justify-center font-display font-bold uppercase tracking-tighter text-[12vw] md:text-[10rem] leading-[0.95] text-krut-text mix-blend-multiply">
        <motion.div style={{ y: y1 }} className="relative z-[1]">
          BUILD.
        </motion.div>
        <motion.div style={{ y: y2 }} className="relative z-[2]">
          SHIP.
        </motion.div>
        <motion.div style={{ y: y3 }} className="relative z-[3]">
          LEARN.
        </motion.div>
        <motion.div style={{ y: y4 }} className="relative z-[4]">
          REPEAT.
        </motion.div>
        <motion.div
          style={{ y: y5 }}
          className="relative z-[5] text-krut-accent"
        >
          MOVE.
        </motion.div>
      </div>

      <div className="absolute bottom-12 font-mono text-xs tracking-widest uppercase text-krut-muted">
        KRUTONIC // TECHNOLOGY IN MOTION.
      </div>
    </section>
  );
}
