"use client";

import { motion } from "framer-motion";
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
      <div className="flex items-end">
        <span
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thunderLight uppercase mr-1 sm:mr-2 leading-[96px] sm:leading-[112px] md:leading-[144px] lg:leading-[192px] xl:leading-[192px]"
          aria-hidden="true"
        >
          I
        </span>
        {/* Crop window — height must match word slot leading exactly */}
        <div
          className="overflow-hidden h-[96px] sm:h-[112px] md:h-[144px] lg:h-[192px] xl:h-[192px]"
          role="timer"
          aria-label={`Palabra actual: ${words[index]}`}
          aria-live="polite"
        >
          {/* Single persistent column — slides up on each step */}
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : { y: `-${(index * 100) / words.length}%` }
            }
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            {words.map((word) => (
              <div
                key={word}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thunder leading-[96px] sm:leading-[112px] md:leading-[144px] lg:leading-[192px] xl:leading-[192px] whitespace-nowrap"
                aria-hidden="true"
              >
                {word}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <span
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thunderLight leading-[96px] sm:leading-[112px] md:leading-[144px] lg:leading-[192px] xl:leading-[192px]"
        aria-hidden="true"
      >
        with purpose
      </span>
    </div>
  );
}
