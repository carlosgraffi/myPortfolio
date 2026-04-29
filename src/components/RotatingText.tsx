"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "build",
  "lead",
  "design",
  "think",
  "manage",
  "create",
  "speak",
  "write",
  "teach",
  "learn",
  "collaborate",
  "innovate",
  "imagine",
  "connect",
  "inspire",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isPaused && !prefersReducedMotion) {
      const timer = setInterval(() => {
        setIndex((current) => (current + 1) % words.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setIndex((current) => (current + 1) % words.length);
      } else if (e.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + words.length) % words.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className="flex flex-col items-start mb-8"
      role="region"
      aria-label="Texto rotativo"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
    >
      <div className="flex items-baseline">
        <span
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thunderLight uppercase mr-1 sm:mr-2 leading-[4rem] sm:leading-[5rem] md:leading-[6rem] lg:leading-[8rem] xl:leading-[8rem] transition-all"
          aria-hidden="true"
        >
          I
        </span>
        <div
          className="inline-block"
          role="timer"
          aria-label={`Palabra actual: ${words[index]}`}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
              transition={{ duration: 0.85 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thunder leading-[4rem] sm:leading-[5rem] md:leading-[6rem] lg:leading-[8rem] xl:leading-[8rem] inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <span
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thunderLight leading-[4rem] sm:leading-[5rem] md:leading-[6rem] lg:leading-[8rem] xl:leading-[8rem] transition-all"
        aria-hidden="true"
      >
        with purpose
      </span>
    </div>
  );
}
