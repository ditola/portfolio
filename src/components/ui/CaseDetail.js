import React, { useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

/**
 * @typedef {Object} CaseStudy
 * @property {string} id - Unique identifier for the case study
 * @property {string} title - Title of the case study
 * @property {string} solution - Detailed solution description
 * @property {Object} quote - Customer testimonial
 * @property {Object} impact - Impact metrics and results
 * @property {Object} implementation - Implementation details
 */

/**
 * Mapping of case study IDs to their corresponding hero images
 * Using high-quality images that represent each case's domain
 */
const CASE_HERO_IMAGES = {
  "alicorp-optimization": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "gloria-analytics": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "vitapro-automation": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};

/**
 * Animation variants for modal content
 */
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
};

/**
 * DonutChart Component - Renders a circular progress indicator
 */
const DonutChart = memo(({ value, size = 120, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90 w-24 md:w-[120px] p-4">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#f3f4f6"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#059669"
        strokeWidth={strokeWidth}
        strokeDasharray={`${progress} ${circumference}`}
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
});

/**
 * CaseDetail Component - Displays detailed information about a case study in a modal
 * 
 * @component
 * @param {Object} props - Component props
 * @param {CaseStudy} props.caseStudy - The case study data to display
 * @param {Function} props.onClose - Callback function to close the modal
 */
const CaseDetail = ({ caseStudy, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scroll
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Memoize the content click handler
  const handleContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  // Updated metric card render function
  const renderMetric = useCallback(({ value, label }, index) => {
    const numericValue = parseInt(value, 10);
    return (
      <div key={index} className="text-center relative">
        <div className="relative inline-flex items-center justify-center">
          <DonutChart value={numericValue} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold text-emerald">{value}</div>
          </div>
        </div>
        <div className="text-gray-600 mt-4">{label}</div>
      </div>
    );
  }, []);

  // Render technology badge
  const renderTechBadge = useCallback((tech, index) => (
    <span 
      key={index} 
      className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
    >
      {tech}
    </span>
  ), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
    >
      <div className="min-h-screen px-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close modal"
        >
          <IoClose className="w-6 h-6 text-white" />
        </button>

        <div 
          className="max-w-4xl mx-auto pt-24 pb-16"
          onClick={handleContentClick}
        >
          {/* Hero Image */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0.1 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16 bg-white shadow-2xl"
          >
            <img
              src={CASE_HERO_IMAGES[caseStudy.id]}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0.2 }}
            className="space-y-12 bg-white rounded-2xl p-6 md:p-20 pt-20 md:pt-40 pb-20 md:pb-40 shadow-2xl"
          >
            {/* Header Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600">
                {caseStudy.solution}
              </p>
            </div>

            {/* Quote Section */}
            <blockquote className="border-l-2 border-emerald pl-6 py-4">
              <p className="text-xl text-gray-600 italic mb-4">
                "{caseStudy.quote.text}"
              </p>
              <footer>
                <cite className="text-gray-500 not-italic">
                  {caseStudy.quote.author}, {caseStudy.quote.company}
                </cite>
              </footer>
            </blockquote>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 py-8">
              {caseStudy.impact.metrics.map(renderMetric)}
            </div>

            {/* Implementation Details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Implementation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Approach
                  </h3>
                  <p className="text-gray-600">
                    {caseStudy.implementation.approach}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseStudy.technologies.map(renderTechBadge)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 mr-3" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(CaseDetail); 