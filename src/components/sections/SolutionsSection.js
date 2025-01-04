import React, { useState } from 'react';
import { CORE_SOLUTIONS } from '../../data/solutions';
import SolutionCard from '../ui/SolutionCard';

const SolutionsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Soluciones Comprobadas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_SOLUTIONS.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              isExpanded={expandedId === solution.id}
              onToggle={() => setExpandedId(expandedId === solution.id ? null : solution.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;