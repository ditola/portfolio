/**
 * @component CasesSection
 * @description Displays a grid of case studies with an interactive modal view.
 * Implements performance optimizations, accessibility features, and smooth transitions.
 * 
 * Features:
 * - Responsive grid layout
 * - Modal with scroll lock
 * - Keyboard navigation
 * - ARIA attributes
 * - Performance optimizations
 * 
 * @typedef {Object} CaseStudy
 * @property {string} id - Unique identifier
 * @property {string} title - Case study title
 * @property {React.ComponentType} icon - Icon component
 * @property {string} problem - Problem statement
 * @property {Object} impact - Impact information
 * @property {string} impact.headline - Impact headline
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { useState, useCallback, useEffect, memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CASES_DATA } from '../../data/cases';
import CaseCard from '../ui/CaseCard';
import CaseDetail from '../ui/CaseDetail';
import PropTypes from 'prop-types';

// Modal container component for better organization
const ModalContainer = memo(({ children }) => (
  <div 
    className="fixed inset-0 z-50 will-change-transform"
    style={{ 
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden'
    }}
  >
    <div 
      className="absolute inset-0 overflow-y-auto"
      style={{
        perspective: '1000px',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  </div>
));

ModalContainer.displayName = 'ModalContainer';
ModalContainer.propTypes = {
  children: PropTypes.node.isRequired
};

// Main component
const CasesSection = memo(() => {
  const [selectedCase, setSelectedCase] = useState(null);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    const body = document.body;
    
    if (selectedCase) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Lock scroll but preserve position
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Small timeout to ensure smooth transition
      const timer = setTimeout(() => {
        body.style.overflow = '';
        body.style.paddingRight = '';
      }, 10);

      return () => clearTimeout(timer);
    }

    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [selectedCase]);

  // Memoized handlers
  const handleCloseDetail = useCallback(() => {
    setSelectedCase(null);
  }, []);

  const handleSelectCase = useCallback((caseStudy) => {
    setSelectedCase(caseStudy);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && selectedCase) {
      handleCloseDetail();
    }
  }, [selectedCase, handleCloseDetail]);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section 
      id="cases" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden relative"
      aria-labelledby="cases-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 
            id="cases-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Casos de Estudio
          </h2>
          <p className="text-gray-600 text-lg">
            Existen tres niveles de iniciativas que se pueden implementar hoy con la tecnología actual.
          </p>
        </div>

        {/* Cases Grid */}
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
                isSelected={selectedCase?.id === caseStudy.id}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {selectedCase && (
            <ModalContainer>
              <CaseDetail
                caseStudy={selectedCase}
                onClose={handleCloseDetail}
              />
            </ModalContainer>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

CasesSection.displayName = 'CasesSection';

export default CasesSection; 