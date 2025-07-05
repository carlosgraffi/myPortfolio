"use client";
import React from "react";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText";

export default function Header() {
  return (
    <header className="max-w-3xl mx-auto relative py-12 md:py-16 lg:py-20" role="banner">
      <div className="flex flex-col max-w-3xl items-start justify-center min-h-[40vh] md:min-h-[50vh]">
        {/* Main heading */}
        <span className="max-w-sm flex gap-2 text-lg md:text-xl text-gray-400 mb-4 leading-none">
          <p className="line-through">I'm a passionate designer who makes simple solutions out of complex problems</p>
        </span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <RotatingText />
        </motion.div>
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View portfolio projects"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://redisenar.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Read my publication Rediseñar"
            >
              Read Rediseñar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
