
'use client';

import { motion } from 'framer-motion';
import { Award, Quote, Star, Mic } from 'lucide-react';

interface Note {
  type: 'note' | 'accolade' | 'recognition';
  title: string;
  description: string;
  source?: string;
  year?: string;
  icon?: React.ReactNode;
  noteUrl?: string;
}

const notes: Note[] = [
  {
    type: 'note',
    title: 'Speaker at "CCI25 – Conferencia Climática Internacional 2025"',
    description: 'Guest speaker and panelist at "Artificial Intelligence (AI): Challenges and Opportunities for AI and City-led Climate Action"',
    source: 'Global Covenant of Mayors, ICLEI and Córdoba Government',
    year: '2025',
    icon: <Mic className="w-4 h-4 text-blue-400" />,
    noteUrl: 'https://example.com/cci25-conference'
  },
  {
    type: 'accolade',
    title: 'Winner at Córdoba Climate Hackaton',
    description: 'Won 1 out of 2 money prizes to develop a local resilience project in collaboration with local schools',
    source: 'Córdoba Municipality',
    year: '2025',
    icon: <Award className="w-4 h-4 text-yellow-400" />
  },
  {
    type: 'recognition',
    title: 'CityCatalyst – Selected Project at LIFT Data',
    description: 'CityCatalyst got drafted as one of the projects selected to participate of LIFT Data Lab 2025',
    source: 'LIFT Data Brazil',
    year: '2025',
    icon: <Star className="w-4 h-4 text-green-400" />,
    noteUrl: 'https://liftdata.com.br'
  },
  {
    type: 'recognition',
    title: 'Local Leader @ Interaction Design Foundation',
    description: 'Invited to be the local community leader at Córdoba IxDF Chapter',
    source: 'IxDF – Interaction Design Foundation',
    year: '2024 – Present',
    icon: <Star className="w-4 h-4 text-green-400" />,
    noteUrl: 'https://www.interaction-design.org'
  }
];



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
      
      <div className="max-w-3xl mx-auto space-y-12">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-gray-800 pb-8 last:border-b-0"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {note.icon}
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-medium text-white max-w-2xl">
                    {note.title}
                  </h3>
                  {note.year && (
                    <span className="text-sm text-gray-500 flex-shrink-0">
                      {note.year}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {note.description}
                </p>
                
                {note.source && (
                  note.noteUrl ? (
                    <a
                      href={note.noteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
                    >
                      {note.source}
                    </a>
                  ) : (
                    <p className="text-xs text-gray-600">
                      {note.source}
                    </p>
                  )
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
