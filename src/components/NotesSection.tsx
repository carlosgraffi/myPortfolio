
'use client';

import { motion } from 'framer-motion';
import { Award, Mic, Quote, Star } from 'lucide-react';

interface Note {
  type: 'note' | 'accolade' | 'recognition';
  title: string;
  description: string;
  source?: string;
  year?: string;
  icon?: React.ReactNode;
}

const notes: Note[] = [
  {
    type: 'note',
    title: 'Speaker at "CCI25 – Conferencia Climática Internacional 2025"',
    description: 'Guest speaker and panelist at "Artificial Intelligence (AI): Challenges and Opportunities for AI and City-led Climate Action"',
    source: 'Global Covenant of Mayors, ICLEI and Córdoba Government',
    year: '2025',
    icon: <Mic className="w-5 h-5" />
  },
  {
    type: 'accolade',
    title: 'Winner at Córdoba Climate Hackaton',
    description: 'Won 1 out of 2 money prizes to develop a local resilience project in collaboration with local schools',
    source: 'Córdoba Municipality',
    year: '2025',
    icon: <Award className="w-5 h-5" />
  },
  {
    type: 'recognition',
    title: 'CityCatalyst – Selected Project at LIFT Data',
    description: 'CityCatalyst got drafted as one of the projects selected to participate of LIFT Data Lab 2025',
    source: 'LIFT Data Brazil',
    year: '2025',
    icon: <Star className="w-5 h-5" />
  },
  {
    type: 'recognition',
    title: 'Local Leader @ Interaction Design Foundation',
    description: 'Invited to be the local community leader at Córdoba IxDF Chapter',
    source: 'IxDF – Interaction Design Foundation',
    year: '2024 – Present',
    icon: <Star className="w-5 h-5" />
  }
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'accolade':
      return <Award className="w-5 h-5 text-yellow-400" />;
    case 'recognition':
      return <Star className="w-5 h-5 text-blue-400" />;
    default:
      return <Quote className="w-5 h-5 text-green-400" />;
  }
};

export default function NotesSection() {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="notes-section-title"
    >
      <motion.h2 
        id="notes-section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl mb-24 text-center"
      >
        Notes & Accolades
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {note.icon || getIconForType(note.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {note.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-400 mt-1 sm:mt-0">
                    {note.source && (
                      <span>{note.source}</span>
                    )}
                    {note.year && (
                      <span className="bg-gray-800 px-2 py-1 rounded">
                        {note.year}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {note.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
