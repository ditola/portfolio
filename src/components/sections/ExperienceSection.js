import React from 'react';
import { EXPERIENCE_DATA } from '../../data/experience';
import ExperienceCard from '../ui/ExperienceCard';

const ExperienceSection = () => (
  <section id="experience" className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;