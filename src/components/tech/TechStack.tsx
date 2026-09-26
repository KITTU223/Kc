"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stackGroups = [
  {
    title: "FRONTEND",
    items: [
      { name: "React", context: "COMPONENT ARCHITECTURE" },
      { name: "Next.js", context: "SERVER-SIDE RENDERING & ROUTING" },
      { name: "TypeScript", context: "TYPE-SAFE ENGINEERING" },
      { name: "Tailwind", context: "UTILITY-FIRST DESIGN SYSTEMS" },
      { name: "Three.js", context: "WEBGL & 3D EXPERIENCES" },
      { name: "GSAP", context: "COMPLEX CINEMATIC ANIMATIONS" },
    ],
  },
  {
    title: "MOBILE",
    items: [
      { name: "React Native", context: "CROSS-PLATFORM DEVELOPMENT" },
      { name: "Expo", context: "ACCELERATED NATIVE BUILDS" },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", context: "SCALABLE SERVER ARCHITECTURE" },
      { name: "Express", context: "RESTFUL API DESIGN" },
      { name: "PostgreSQL", context: "RELATIONAL DATA MODELING" },
      { name: "MongoDB", context: "DOCUMENT-BASED STORAGE" },
    ],
  },
  {
    title: "CLOUD / SERVICES",
    items: [
      { name: "Firebase", context: "REALTIME DB & AUTH" },
      { name: "Supabase", context: "OPEN SOURCE BACKEND" },
      { name: "AWS", context: "INFRASTRUCTURE & COMPUTE" },
      { name: "Cloudflare", context: "EDGE NETWORKS & STORAGE" },
    ],
  },
  {
    title: "AI / AUTOMATION",
    items: [
      { name: "LLM APIs", context: "LANGUAGE MODEL INTEGRATION" },
      { name: "RAG", context: "RETRIEVAL-AUGMENTED GENERATION" },
      { name: "n8n", context: "WORKFLOW AUTOMATION" },
    ],
  },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeContext, setActiveContext] = useState<string | null>(null);

  return (
    <section
      id="tech"
      ref={ref}
      className="w-full bg-krut-bg text-krut-text py-32 overflow-hidden border-b border-krut-lines relative"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-krut-lines pb-12 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-krut-text">
              THE
              <br />
              TOOLBOX.
            </h2>
          </div>
          <div className="font-mono text-sm uppercase tracking-widest text-krut-muted">
            TECHNICAL INVENTORY
          </div>
        </div>

        <div className="flex flex-col gap-16 relative">
          {/* Dynamic Context Display */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full pointer-events-none z-0">
            <div className="sticky top-1/2 -translate-y-1/2">
              {activeContext ? (
                <motion.div
                  key={activeContext}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs uppercase tracking-widest text-krut-accent border border-krut-lines p-4 bg-white/50 backdrop-blur-md"
                >
                  CONTEXT / {activeContext}
                </motion.div>
              ) : (
                <div className="font-mono text-xs uppercase tracking-widest text-krut-muted/50 border border-transparent p-4">
                  HOVER FOR CONTEXT
                </div>
              )}
            </div>
          </div>

          {/* Groups */}
          <div className="lg:w-2/3 flex flex-col gap-12 z-10">
            {stackGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="flex flex-col"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-krut-muted mb-6 flex items-center gap-4">
                  <span>{group.title}</span>
                  <div className="h-[1px] flex-grow bg-krut-lines/50"></div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      onMouseEnter={() => setActiveContext(item.context)}
                      onMouseLeave={() => setActiveContext(null)}
                      className="font-display text-2xl md:text-4xl uppercase tracking-tighter px-4 py-2 border border-krut-lines hover:bg-krut-text hover:text-krut-bg transition-colors cursor-crosshair"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
