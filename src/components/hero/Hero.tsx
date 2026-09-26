"use client";

import { useRef } from "react";
import DigitalShell from "./DigitalShell";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="hero-section relative w-full h-[100svh] min-h-[800px] flex items-center justify-center overflow-hidden bg-krut-bg text-krut-text"
    >
      {/* Background Technical Grid & Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#090909_1px,transparent_1px),linear-gradient(to_bottom,#090909_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-display font-bold text-krut-dark opacity-[0.03] select-none leading-none tracking-tighter mix-blend-multiply">
          026
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-grid relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.2fr_auto_1fr] items-center h-full pt-20">
        {/* LEFT PANEL */}
        <div className="hero-copy flex flex-col items-start justify-center z-20">
          <div className="text-xs font-mono text-krut-muted mb-6 border border-krut-lines px-3 py-1.5 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-krut-accent animate-pulse"></span>
            SYS.ONLINE // KRUT_001
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[7.5rem] font-display font-bold uppercase leading-[0.85] tracking-tighter mb-8 text-krut-text mix-blend-difference drop-shadow-md">
            KRUTARTH
            <br />
            CHAUHAN
          </h1>

          <div className="space-y-1.5 mb-10 font-body text-sm lg:text-base font-semibold tracking-widest text-krut-dark uppercase">
            <p className="flex items-center gap-3">
              <span className="text-krut-accent">/</span> Full Stack Developer
            </p>
            <p className="flex items-center gap-3">
              <span className="text-krut-accent">/</span> Creative Builder
            </p>
            <p className="flex items-center gap-3">
              <span className="text-krut-accent">/</span> Founder of Krutonic
            </p>
          </div>

          <div className="space-y-1 mb-12 font-mono text-xs text-krut-muted uppercase">
            <p>LOC. GUJARAT, INDIA</p>
            <p>BUILDING DIGITAL PRODUCTS</p>
            <p className="text-krut-accent font-semibold mt-2">
              TECHNOLOGY IN MOTION.
            </p>
          </div>

          <div className="hero-actions flex items-center gap-6">
            <button className="bg-krut-text text-krut-bg px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.2em] hover:bg-krut-accent transition-colors relative overflow-hidden group">
              <span className="relative z-10 group-hover:text-white transition-colors">
                View Work &rarr;
              </span>
            </button>
            <a
              href="https://krutonic.com"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="border border-krut-lines px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.2em] hover:border-krut-accent hover:bg-krut-accent hover:text-krut-bg transition-colors"
            >
              Hire Me &rarr;
            </a>
          </div>
        </div>

        {/* CENTER DIGITAL SHELL */}
        <div className="hero-portrait relative w-full max-w-[500px] lg:max-w-[600px] h-[600px] lg:h-[800px] mx-auto flex items-end justify-center pointer-events-auto z-10">
          <DigitalShell />
        </div>

        {/* RIGHT PANEL */}
        <div className="hero-status hidden lg:flex flex-col items-end justify-center gap-8 z-20">
          {/* Card 1 */}
          <div className="w-64 border border-krut-lines p-6 relative bg-white/5 backdrop-blur-sm">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-krut-text"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-krut-text"></div>

            <div className="text-xs font-mono text-krut-muted uppercase mb-6 flex justify-between">
              <span>CURRENT STATUS</span>
              <span>[01]</span>
            </div>
            <div className="text-2xl font-display uppercase tracking-wider leading-none mb-4">
              BUILDING
              <br />
              KRUTONIC
            </div>
            <div className="text-xs font-mono text-krut-muted uppercase mb-4">
              TECHNOLOGY IN MOTION.
            </div>
            <div className="flex items-center justify-between text-xs font-mono uppercase border-t border-krut-lines pt-4">
              <span>STATUS</span>
              <span className="text-krut-accent flex items-center gap-2 font-bold">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-64 border border-krut-lines p-6 relative bg-white/5 backdrop-blur-sm">
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-krut-text"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-krut-text"></div>

            <div className="text-xs font-mono text-krut-muted uppercase mb-6 flex justify-between">
              <span>QUICK INFO</span>
              <span>[02]</span>
            </div>

            <div className="space-y-4 text-sm font-body font-semibold uppercase tracking-wider">
              <div className="flex justify-between border-b border-krut-lines pb-2">
                <span className="text-krut-muted">FOCUS</span>
                <span className="text-right">Products</span>
              </div>
              <div className="flex justify-between border-b border-krut-lines pb-2">
                <span className="text-krut-muted">CLIENT</span>
                <span className="text-right">UK</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-krut-muted">STACK</span>
                <span className="text-right text-xs leading-relaxed">
                  WEB
                  <br />
                  MOBILE
                  <br />
                  SAAS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
