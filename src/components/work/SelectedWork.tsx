"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "KRUTONIC",
    client: "FOUNDER / SOFTWARE STUDIO",
    status: "ACTIVE",
    desc: "TECHNOLOGY IN MOTION. Evolving product studio building sophisticated digital experiences.",
    tech: ["WEB APPS", "MOBILE APPS", "SAAS", "CUSTOM SOFTWARE"],
    products: [],
  },
  {
    id: "02",
    title: "NAKU LAUNDRY",
    client: "REAL CLIENT / UNITED KINGDOM",
    status: "LIVE",
    desc: "A complete digital ecosystem for a UK laundry business covering customer ordering, payments, management and operations.",
    tech: ["NEXT.JS", "REACT NATIVE", "EXPO", "FIREBASE", "STRIPE", "NODE.JS"],
    products: ["MOBILE APP", "ADMIN DASHBOARD", "WEBSITE"],
  },
  {
    id: "03",
    title: "IMAGE HUMANIZER",
    client: "AI / SAAS EXPERIMENT",
    status: "EXPERIMENT",
    desc: "Transform overly synthetic AI-generated imagery toward more natural photographic characteristics.",
    tech: ["DIFFUSION", "GPU COMPUTE", "MODAL", "CLOUDFLARE R2"],
    products: [],
  },
  {
    id: "04",
    title: "RESONANCE",
    client: "AUDIO PLATFORM",
    status: "ARCHIVED",
    desc: "Immersive audio platform built for modern web browsers.",
    tech: ["NEXT.JS", "POSTGRESQL", "PRISMA", "S3", "CLERK"],
    products: [],
  },
] as const;

const artwork = {
  KRUTONIC: {
    src: "/images/work/krutonic-logo.png",
    alt: "Krutonic - Technology in motion",
    background: "#000000",
    logo: true,
  },
  "NAKU LAUNDRY": {
    src: "/images/work/naku-logo.png",
    alt: "Naku Laundry",
    background: "#eeede8",
    logo: true,
  },
  "IMAGE HUMANIZER": {
    src: "/images/work/image-humanizer.svg",
    alt: "A pixelated silhouette becoming an organic portrait",
    background: "#eef0e9",
    logo: false,
  },
  RESONANCE: {
    src: "/images/work/resonance.svg",
    alt: "An expanding audio waveform",
    background: "#111815",
    logo: false,
  },
} as const;

function ProjectArtwork({ title }: { title: keyof typeof artwork }) {
  const visual = artwork[title];
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden border border-krut-lines"
      style={{
        height: "clamp(280px, 29.2vw, 420px)",
        backgroundColor: visual.background,
        color: title === "RESONANCE" ? "#eaf0e8" : "#202522",
      }}
    >
      {visual.logo ? (
        <div className="relative h-full w-full" style={{ maxWidth: 780 }}>
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="(max-width: 768px) 85vw, 780px"
            className="object-contain p-6"
            style={{
              transform: title === "NAKU LAUNDRY" ? "scale(1.7)" : undefined,
            }}
          />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-6">
          <div
            className="relative w-full"
            style={{ height: "clamp(180px, 19.5vw, 280px)", maxWidth: 440 }}
          >
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(max-width: 768px) 75vw, 440px"
              className="object-contain"
            />
          </div>
          <span
            className="text-center font-body text-sm font-medium"
            style={{ letterSpacing: "0.25em" }}
          >
            {title}
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={cardRef}
      className="project-card relative w-full min-h-[70vh] border border-krut-lines bg-krut-bg p-8 md:p-12 lg:p-20 flex flex-col justify-between overflow-hidden group mb-12 sticky top-24"
      style={{ zIndex: index }}
    >
      {/* Background Graphic / Data */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-[-10%] md:right-[10%] w-full h-[150%] pointer-events-none opacity-[0.03] flex items-center justify-end"
      >
        <div className="font-display font-bold text-[15rem] md:text-[25rem] leading-none tracking-tighter mix-blend-multiply">
          {project.id}
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-12">
        {/* Header */}
        <div className="project-header flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-krut-lines pb-8">
          <div>
            <div className="project-meta font-mono text-xs text-krut-accent mb-4 tracking-widest flex items-center gap-3">
              <span>PRJ_{project.id}</span>
              <span className="w-8 h-[1px] bg-krut-lines"></span>
              <span>{project.client}</span>
            </div>
            <h3 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-krut-text">
              {project.title}
            </h3>
          </div>

          <div className="border border-krut-lines px-4 py-2 font-mono text-xs uppercase text-krut-dark tracking-widest bg-white">
            STATUS: {project.status}
          </div>
        </div>

        <div className="mb-8">
          <ProjectArtwork title={project.title} />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="max-w-xl">
            <p className="font-body text-lg md:text-xl text-krut-dark leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div className="space-y-8 font-mono text-xs uppercase tracking-widest text-krut-muted">
            {project.products.length > 0 && (
              <div>
                <div className="mb-4 text-krut-dark">Outputs</div>
                <div className="flex flex-wrap gap-2">
                  {project.products.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 border border-krut-lines/50 bg-krut-lines/10"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.tech.length > 0 && (
              <div>
                <div className="mb-4 text-krut-dark">Technology</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-krut-text text-krut-bg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-krut-text opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-krut-text opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-krut-text opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-krut-text opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="w-full bg-krut-bg py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-krut-lines pb-12 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-krut-text">
              SELECTED
              <br />
              WORK
            </h2>
          </div>
          <a
            href="https://github.com/KITTU223"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 font-mono text-sm uppercase tracking-widest hover:text-krut-accent transition-colors"
          >
            VIEW ALL PROJECTS &rarr;
          </a>
        </div>

        <div className="relative">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
