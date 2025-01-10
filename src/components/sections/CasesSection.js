import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CASES_DATA } from '../../data/cases';
import CaseCard from '../ui/CaseCard';
import CaseDetail from '../ui/CaseDetail';

/**
 * CasesSection Component - Displays a grid of case studies with detailed modal view
 * 
 * This section showcases successful client projects and their outcomes.
 * It uses a responsive grid layout and handles the modal state for detailed views.
 * 
 * @component
 */
const CasesSection = () => {
  // State for tracking which case study is currently selected for detailed view
  const [selectedCase, setSelectedCase] = useState(null);

  // Memoized handler for closing the detail modal
  const handleCloseDetail = useCallback(() => {
    setSelectedCase(null);
  }, []);

  // Memoized handler for selecting a case study
  const handleSelectCase = useCallback((caseStudy) => {
    setSelectedCase(caseStudy);
  }, []);

  return (
    <section 
      id="cases" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="cases-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 
            id="cases-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Casos de Éxito
          </h2>
          <p className="text-gray-600 text-lg">
            Transformando desafíos empresariales en resultados medibles a través 
            de soluciones de Data Science y Machine Learning.
          </p>
        </div>

        {/* Cases Grid - Responsive layout with 1, 2, or 3 columns */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Case studies grid"
        >
          {CASES_DATA.map((caseStudy) => (
            <div key={caseStudy.id} role="listitem">
              <CaseCard
                caseStudy={caseStudy}
                onClick={() => handleSelectCase(caseStudy)}
              />
            </div>
          ))}
        </div>

        {/* Modal for detailed case study view */}
        <AnimatePresence mode="wait">
          {selectedCase && (
            <CaseDetail
              caseStudy={selectedCase}
              onClose={handleCloseDetail}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CasesSection; 