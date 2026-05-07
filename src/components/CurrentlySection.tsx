
'use client';

import { motion } from 'framer-motion';
import { Building2, Rocket } from 'lucide-react';

export default function CurrentlySection() {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="currently-section-title"
    >
      <motion.h2 
        id="currently-section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl mb-24 text-center"
      >
        Currently
      </motion.h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-gray-800 p-8 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Building2 className="w-5 h-5 text-blue-400" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-white">
                  Impact Lead and Product Design Manager
                </h3>
                <span className="text-sm text-gray-500 flex-shrink-0">
                  2022 – Present
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Leading product design and impact strategy for climate tech tools at Open Earth Foundation.
                Designing systems that help cities and organizations measure, plan, and act on climate change.
              </p>

              <a
                href="https://openearth.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
              >
                Open Earth Foundation
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-gray-800 p-8 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Rocket className="w-5 h-5 text-green-400" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-white">
                  Founder, Rediseñ.ar
                </h3>
                <span className="text-sm text-gray-500 flex-shrink-0">
                  2024 – Present
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                A space to develop side projects and collaborate with the community at the intersection of design,
                technology, and climate action. Recent projects include{' '}
                <a
                  href="https://ayudapatagonia.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white underline transition-colors duration-200"
                >
                  AyudaPatagonia.ar
                </a>
                {' '}— a site to coordinate donations and support for brigades and families affected by the
                Patagonia wildfires in 2025 and 2026.
              </p>

              <a
                href="https://redisenar.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
              >
                Rediseñ.ar
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
