import React, { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * Animation variants for hover effects
 */
const hoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 }
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 }
};

const lineVariants = {
  initial: { width: 0 },
  hover: { width: 'auto' }
};

/**
 * CaseCard Component - Displays a preview of a case study with hover interactions
 * 
 * @component
 * @param {Object} props
 * @param {Object} props.caseStudy - The case study data to display
 * @param {Function} props.onClick - Callback function when card is clicked
 */
const CaseCard = ({ caseStudy, onClick }) => (
  <motion.div
    variants={hoverVariants}
    initial="initial"
    whileHover="hover"
    transition={{ duration: 0.2 }}
    onClick={onClick}
    className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden cursor-pointer group h-[320px]"
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />

    {/* Content */}
    <div className="relative p-8 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-6">
        <caseStudy.icon className="w-8 h-8 text-emerald" aria-hidden="true" />
      </div>

      {/* Title and Description */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">
          {caseStudy.title}
        </h3>
        <p className="text-gray-300 mb-4">
          {caseStudy.shortDescription}
        </p>
      </div>

      {/* Impact Metrics */}
      <div className="flex items-center space-x-4">
        <div className="text-emerald font-semibold">
          {caseStudy.impact.headline}
        </div>
        <motion.div
          variants={lineVariants}
          className="h-px bg-emerald/30"
        />
      </div>

      {/* Hover Details Overlay */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/95 p-8 flex flex-col justify-between"
      >
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {caseStudy.impact.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-emerald font-bold text-2xl">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {caseStudy.details.slice(0, 3).map((detail, index) => (
              <div key={index} className="text-gray-300 text-sm flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald mr-2" aria-hidden="true" />
                {detail}
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-400">
          Click to view full case study
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// Memoize the component to prevent unnecessary re-renders
export default memo(CaseCard); 