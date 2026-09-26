"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./DigitalShell.module.css";
import { createDigitalShell } from "./DigitalShellCanvas";

const clamp = (value: number) => Math.max(-1, Math.min(1, value));

export default function DigitalShell({
  src = "/images/photo.png",
  alt = "Krutarth Chauhan",
}: {
  src?: string;
  alt?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const entranceRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const entrance = entranceRef.current;
    const stage = stageRef.current;
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const hero = container?.closest("section");
    if (!container || !entrance || !stage || !image || !canvas || !hero) return;
    const shell = createDigitalShell(canvas);

    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let heroRect = hero.getBoundingClientRect();
    let portraitRect = entrance.getBoundingClientRect();
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;
    let lightX = 50,
      lightY = 40,
      targetLightX = 50,
      targetLightY = 40;
    let frame = 0,
      lastTime = 0,
      visible = false;
    let introElapsed = 0;
    let introDone = reduced.matches;
    let entranceAnimation: Animation | undefined;
    let entered = false;
    const resizeShell = () =>
      shell.resize(
        entrance.offsetWidth,
        entrance.offsetHeight,
        image.naturalWidth,
        image.naturalHeight,
      );
    const measure = () => {
      heroRect = hero.getBoundingClientRect();
      portraitRect = entrance.getBoundingClientRect();
    };
    const paint = () => {
      // RAF is the sole owner of this transform; entrance animation uses its parent.
      stage.style.transform = `translate3d(${currentX * 8}px, ${currentY * 4}px, 0) rotateX(${-currentY * 2}deg) rotateY(${currentX * 4}deg)`;
      stage.style.setProperty("--shadow-x", `${-currentX * 10}px`);
      stage.style.setProperty("--shadow-y", `${-currentY * 5}px`);
      stage.style.setProperty("--light-x", `${lightX}%`);
      stage.style.setProperty("--light-y", `${lightY}%`);
    };
    const animate = (time: number) => {
      frame = 0;
      if (!visible || document.hidden || reduced.matches) return;
      const dt = lastTime ? Math.min(time - lastTime, 50) : 1000 / 60;
      lastTime = time;
      const easing = 1 - Math.pow(0.92, dt / (1000 / 60));
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;
      lightX += (targetLightX - lightX) * easing;
      lightY += (targetLightY - lightY) * easing;
      const moving =
        Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.0001 ||
        Math.abs(targetLightX - lightX) + Math.abs(targetLightY - lightY) >
          0.01;
      if (!moving) {
        currentX = targetX;
        currentY = targetY;
        lightX = targetLightX;
        lightY = targetLightY;
      }
      paint();
      let shellActive = false;
      if (image.complete && image.naturalWidth > 0) {
        if (!entered) {
          entered = true;
          entranceAnimation = entrance.animate(
            [
              { opacity: 0, transform: "translate(-50%, 14px)" },
              { opacity: 1, transform: "translate(-50%, 0)" },
            ],
            { duration: 800, easing: "cubic-bezier(.22,1,.36,1)" },
          );
        }
        if (!introDone) {
          introElapsed += dt;
          introDone = introElapsed >= 1800;
        }
        shellActive = shell.draw(dt, introDone ? null : introElapsed / 1800);
      }
      stage.style.willChange = moving ? "transform" : "auto";
      if (moving || shellActive) frame = requestAnimationFrame(animate);
      else lastTime = 0;
    };
    const wake = () => {
      if (!frame && visible && !document.hidden && !reduced.matches)
        frame = requestAnimationFrame(animate);
    };
    const reset = () => {
      targetX = targetY = 0;
      targetLightX = 50;
      targetLightY = 40;
      wake();
    };
    const move = (event: PointerEvent) => {
      if (
        !fine.matches ||
        reduced.matches ||
        event.pointerType === "touch" ||
        !visible
      )
        return;
      const nx = clamp(
        ((event.clientX - heroRect.left) / Math.max(1, heroRect.width)) * 2 - 1,
      );
      const ny = clamp(
        ((event.clientY - heroRect.top) / Math.max(1, heroRect.height)) * 2 - 1,
      );
      const distance = Math.hypot(
        event.clientX - (portraitRect.left + portraitRect.width / 2),
        event.clientY - (portraitRect.top + portraitRect.height / 2),
      );
      const near = Math.max(
        0,
        1 -
          distance / Math.max(portraitRect.width, portraitRect.height * 0.8, 1),
      );
      const strength = 0.2 + 0.8 * near * near * (3 - 2 * near);
      targetX = nx * strength;
      targetY = ny * strength;
      targetLightX = (nx + 1) * 50;
      targetLightY = (ny + 1) * 50;
      if (introDone)
        shell.add(
          event.clientX - portraitRect.left,
          event.clientY - portraitRect.top,
        );
      else {
        targetX = targetY = 0;
      }
      wake();
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      stage.style.willChange = "auto";
    };
    const preferenceChanged = () => {
      stop();
      targetX = targetY = currentX = currentY = 0;
      lightX = targetLightX = 50;
      lightY = targetLightY = 40;
      paint();
      shell.clear();
      entranceAnimation?.cancel();
      if (reduced.matches) {
        introDone = true;
        entered = true;
      }
      wake();
    };
    const visibilityChanged = () => {
      if (document.hidden) {
        stop();
        reset();
      } else {
        measure();
        wake();
      }
    };
    const onScroll = () => {
      measure();
      reset();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        measure();
        wake();
      } else {
        stop();
        shell.clear();
        reset();
      }
    });
    observer.observe(hero);
    const resize = new ResizeObserver(() => {
      measure();
      resizeShell();
      wake();
    });
    resize.observe(hero);
    resize.observe(entrance);
    const loaded = () => {
      resizeShell();
      wake();
    };
    image.addEventListener("load", loaded);
    resizeShell();
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", reset);
    hero.addEventListener("pointercancel", reset);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", visibilityChanged);
    reduced.addEventListener("change", preferenceChanged);
    fine.addEventListener("change", preferenceChanged);
    return () => {
      stop();
      observer.disconnect();
      resize.disconnect();
      shell.clear();
      entranceAnimation?.cancel();
      image.removeEventListener("load", loaded);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      hero.removeEventListener("pointercancel", reset);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", visibilityChanged);
      reduced.removeEventListener("change", preferenceChanged);
      fine.removeEventListener("change", preferenceChanged);
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={styles.perspective}
      style={
        { "--portrait-image": `url(${JSON.stringify(src)})` } as CSSProperties
      }
    >
      <div ref={entranceRef} className={styles.entrance}>
        <div ref={stageRef} className={styles.stage}>
          <div className={styles.shadow} aria-hidden="true" />
          <div className={styles.depth} aria-hidden="true" />
          <Image
            ref={imageRef}
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            preload
          />
          <div className={styles.light} aria-hidden="true" />
          <canvas ref={canvasRef} className={styles.shell} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
