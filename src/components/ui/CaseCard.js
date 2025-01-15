/**
 * @component CaseCard
 * @description An interactive card component that displays case study information with
 * smooth animations and transitions. Implements accessibility features and keyboard navigation.
 * 
 * @typedef {Object} CaseStudy
 * @property {string} id - Unique identifier
 * @property {string} title - Case study title
 * @property {React.ComponentType} icon - Icon component
 * @property {string} description - Brief description
 * 
 * @typedef {Object} CaseCardProps
 * @property {CaseStudy} caseStudy - Case study data
 * @property {() => void} onClick - Click handler
 * @property {boolean} [isSelected] - Whether the card is currently selected
 * @property {string} [className] - Additional CSS classes
 */

import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Animation variants
const cardVariants = {
  initial: { 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1]
    }
  },
  hover: { 
    scale: 1.01,
    y: -2,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1]
    }
  },
  tap: {
    scale: 0.995,
    transition: {
      duration: 0.2,
      ease: [0.32, 0.72, 0, 1]
    }
  }
};

const sharedTransition = {
  type: "spring",
  duration: 0.6,
  bounce: 0,
  ease: [0.32, 0.72, 0, 1]
};

const CaseCard = memo(({ 
  caseStudy, 
  onClick, 
  isSelected = false,
  className = ''
}) => {
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  }, [onClick]);

  return (
    <div className={`relative ${className}`}>
      <motion.div
        layoutId={`case-container-${caseStudy.id}`}
        variants={cardVariants}
        initial="initial"
        whileHover={!isSelected && "hover"}
        whileTap="tap"
        onClick={onClick}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={`Ver caso de estudio: ${caseStudy.title}`}
        className={`
          relative rounded-2xl overflow-hidden cursor-pointer h-[400px] group
          bg-slate-50 hover:bg-slate-200
          border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04)]
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
          transition-colors duration-500 ease-out
          ${isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}
        `}
        transition={sharedTransition}
      >
        {/* Content container */}
        <motion.div 
          layoutId={`content-container-${caseStudy.id}`}
          className="relative h-full p-8 flex flex-col items-center justify-center"
          transition={sharedTransition}
        >
          {/* Icon container */}
          <motion.div
            layoutId={`icon-container-${caseStudy.id}`}
            className="relative w-32 h-32 mb-8 flex items-center justify-center"
            aria-hidden="true"
            transition={sharedTransition}
          >
            <motion.div 
              layoutId={`icon-${caseStudy.id}`}
              className="flex items-center justify-center"
              transition={sharedTransition}
            >
              <caseStudy.icon className="w-16 h-16 text-gray-900" />
            </motion.div>
          </motion.div>

          {/* Title and Description */}
          <motion.div 
            layoutId={`title-container-${caseStudy.id}`}
            className="text-center space-y-2"
            transition={sharedTransition}
          >
            <motion.h3 
              layoutId={`title-${caseStudy.id}`}
              className="text-xl font-medium text-gray-900"
              transition={sharedTransition}
            >
              {caseStudy.title}
            </motion.h3>
            {caseStudy.description && (
              <motion.p
                layoutId={`description-${caseStudy.id}`}
                className="text-sm text-gray-600"
                transition={sharedTransition}
              >
                {caseStudy.description}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
});

CaseCard.displayName = 'CaseCard';

CaseCard.propTypes = {
  caseStudy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  className: PropTypes.string
};

export default CaseCard; 