'use client';

import { motion } from 'framer-motion';
import RotatingText from './RotatingText';

export default function Header() {
  return (
    <header className="pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thunder leading-tight mb-8">
            Designer who builds things with a purpose
          </h1>
          <div className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            <p>
              Leading product design at Open Earth Foundation, developing open-source digital tools to accelerate climate action.
            </p>
          </div>
          <RotatingText />
        </motion.div>
      </div>
    </header>
  );
}