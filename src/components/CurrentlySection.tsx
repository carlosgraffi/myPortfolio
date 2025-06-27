
'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

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
      
      <div className="max-w-3xl mx-auto">
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
                  Head of Impact and Lead Product Designer
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
      </div>
    </section>
  );
}
