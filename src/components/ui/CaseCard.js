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
    backgroundColor: '#fafafa',
    zIndex: 10,
    scale: 1,
    y: 0
  },
  hover: { 
    backgroundColor: '#ffffff',
    zIndex: 20,
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: [0.32, 0.72, 0, 1]
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

const iconContainerVariants = {
  initial: { 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1]
    }
  },
  hover: { 
    scale: 1.05,
    rotate: 5,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1]
    }
  }
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
        whileHover="hover"
        whileTap="tap"
        onClick={onClick}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={`Ver caso de estudio: ${caseStudy.title}`}
        className={`
          relative rounded-2xl overflow-hidden cursor-pointer h-[400px] group
          border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04)]
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
          ${isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}
        `}
      >
        {/* Gradient overlay */}
        <motion.div 
          layoutId={`gradient-${caseStudy.id}`}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-blue-500/[0.04]" />
        </motion.div>
        
        {/* Content container */}
        <motion.div 
          layoutId={`content-container-${caseStudy.id}`}
          className="relative h-full p-8 flex flex-col items-center justify-center"
        >
          {/* Icon container */}
          <motion.div
            layoutId={`icon-container-${caseStudy.id}`}
            variants={iconContainerVariants}
            className="relative w-32 h-32 mb-8"
            aria-hidden="true"
          >
            <motion.div
              layoutId={`icon-bg-${caseStudy.id}`}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm"
            />
            <motion.div 
              layoutId={`icon-${caseStudy.id}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <caseStudy.icon className="w-16 h-16 text-gray-900" />
            </motion.div>
          </motion.div>

          {/* Title and Description */}
          <motion.div 
            layoutId={`title-container-${caseStudy.id}`}
            className="text-center space-y-2"
          >
            <motion.h3 
              layoutId={`title-${caseStudy.id}`}
              className="text-xl font-medium text-gray-900"
            >
              {caseStudy.title}
            </motion.h3>
            {caseStudy.description && (
              <motion.p
                layoutId={`description-${caseStudy.id}`}
                className="text-sm text-gray-600"
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