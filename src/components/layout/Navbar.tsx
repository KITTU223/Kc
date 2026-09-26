"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const links = ["About", "Work", "Journey", "Playground", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = matchMedia("(min-width: 1101px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <nav
      aria-label="Main navigation"
      className={`${styles.nav} fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-krut-bg`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="text-xl font-display font-bold uppercase tracking-widest">
        KRUTARTH
      </div>
      <div
        className={`${styles.desktopLinks} flex items-center gap-8 text-sm font-body font-medium uppercase tracking-widest`}
      >
        {links.map((label) => (
          <Link
            key={label}
            href={`#${label.toLowerCase()}`}
            className="hover:text-krut-accent transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
      <div
        className={`${styles.availability} text-sm font-body font-medium uppercase tracking-widest`}
      >
        <a
          href="https://drive.google.com/file/d/1QmM4JuB-666L_oUIPP4_7wdWiZfnIbjn/view?usp=drive_link"
          target="_blank"
          rel="_blank"
          referrerPolicy="no-referrer"
          className="hover:text-krut-accent transition-colors"
        >
          [ RESUME &rarr; ]
        </a>
      </div>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "CLOSE" : "MENU"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id="mobile-navigation" className={styles.mobileLinks} hidden={!open}>
        {links.map((label, index) => (
          <Link
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">0{index + 1}</span>
            {label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
