
// src/components/RoadmapSection.tsx
import React from 'react';

type RoadmapPhase = {
  title: string;
  tasks: string[];
};

type RoadmapSectionProps = {
  phases: RoadmapPhase[];
};

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ phases }) => (
  <section className="py-16 px-6 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-primary-400 mb-12">Roadmap 🗺️</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {phases.map((phase, index) => (
        <div key={index} className="bg-primary-900/60 border border-primary-400 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary-400/20">
          <h3 className="text-xl font-bold text-primary-400 mb-4">{phase.title}</h3>
          <ul className="text-gray-300 text-left list-disc list-inside space-y-2">
            {phase.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);