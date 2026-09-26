"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const timeline = [
  {
    id: 1,
    year: "BCA",
    role: "FOUNDATION",
    story: "Undergraduate degree in computer applications.",
    tech: ["FUNDAMENTALS"],
  },
  {
    id: 2,
    year: "MCA",
    role: "PARUL UNIVERSITY",
    story: "Postgraduate studies focusing on advanced software engineering.",
    tech: ["ARCHITECTURE"],
  },
  {
    id: 3,
    year: "CALCS",
    role: "FULL STACK INTERNSHIP",
    story: "First professional role building web applications.",
    tech: ["REACT", "NODE.JS"],
  },
  {
    id: 4,
    year: "FREELANCE",
    role: "DEVELOPMENT",
    story: "Independent contracting for various global clients.",
    tech: ["NEXT.JS", "TAILWIND"],
  },
  {
    id: 5,
    year: "NAKU LAUNDRY",
    role: "UK CLIENT",
    story: "Lead development of a complete cross-platform laundry ecosystem.",
    tech: ["REACT NATIVE", "STRIPE"],
  },
  {
    id: 6,
    year: "KRUTONIC",
    role: "FOUNDER",
    story: "Established software studio for building products.",
    tech: ["BUSINESS"],
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "journey-item relative w-full flex items-center justify-between py-12 transition-all duration-700",
        isInView ? "opacity-100 scale-100" : "opacity-30 scale-95",
      )}
    >
      {/* Center Node */}
      <div className="journey-node absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <div
          className={cn(
            "w-4 h-4 rounded-full transition-colors duration-500",
            isInView
              ? "bg-krut-accent shadow-[0_0_15px_rgba(255,59,48,0.5)]"
              : "bg-krut-lines border border-krut-muted/30",
          )}
        ></div>
      </div>

      {/* Left Content */}
      <div
        className={cn(
          "journey-side w-1/2 pr-12 md:pr-24 text-right",
          !isEven && "opacity-0",
        )}
      >
        {isEven && (
          <div className="flex flex-col items-end">
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-2">
              {item.year}
            </h3>
            <div className="font-mono text-xs text-krut-accent mb-4 tracking-widest uppercase">
              {item.role}
            </div>
            <p className="font-body text-krut-muted max-w-sm text-sm">
              {item.story}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono border border-krut-lines/30 px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div
        className={cn(
          "journey-side w-1/2 pl-12 md:pl-24 text-left",
          isEven && "opacity-0",
        )}
      >
        {!isEven && (
          <div className="flex flex-col items-start">
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-2">
              {item.year}
            </h3>
            <div className="font-mono text-xs text-krut-accent mb-4 tracking-widest uppercase">
              {item.role}
            </div>
            <p className="font-body text-krut-muted max-w-sm text-sm">
              {item.story}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono border border-krut-lines/30 px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative w-full bg-krut-dark text-krut-bg py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-32 text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4 text-center">
            FROM CURIOSITY
            <br />
            TO CREATION
          </h2>
          <div className="w-[1px] h-24 bg-krut-lines/30 mt-12"></div>
        </div>

        <div className="relative w-full">
          {/* Background Rail */}
          <div className="journey-rail absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-krut-lines/10 z-0"></div>

          {/* Animated Progress Rail */}
          <motion.div
            style={{ height: railHeight }}
            className="journey-rail absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-krut-accent z-10 origin-top shadow-[0_0_20px_rgba(255,59,48,0.6)]"
          ></motion.div>

          <div className="relative z-20 py-12 flex flex-col gap-8 md:gap-0">
            {timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
