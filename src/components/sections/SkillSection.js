import React, { useEffect, useRef, useState } from 'react';

/**
 * @component SkillSection
 * @description A scrolling animation section that displays content in two columns:
 * - Left column: Scrollable content sections
 * - Right column: Sticky images that transition with scroll progress
 * 
 * Features:
 * - Early image transitions triggered by minimal scroll movement
 * - Multiple animation phases per section
 * - Responsive layout with proper scroll-based timing
 * - Optimized performance with useRef and useState hooks
 * 
 * @author Diego Torres
 * @version 1.0.0
 */

/**
 * Configuration for transition timing
 * @constant {number} TRANSITION_OFFSET - Controls how early the image transitions occur
 */
const TRANSITION_THRESHOLDS = Array.from({ length: 41 }, (_, i) => i * 0.025); // More granular thresholds

const SkillSection = () => {
  // Refs and State Management
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Content sections configuration
   * @constant {Array<Object>} sections
   * @property {string} label - Section category label
   * @property {string} title - Main section heading
   * @property {string} content - Descriptive text
   * @property {string} image - URL for section image
   */
  const sections = [
    {
      label: "Data-Driven Leadership",
      title: "Transform Decisions into Results",
      content: "Empower your executive team with data-driven insights. My solutions have accelerated decision-making by 34% and driven 28% revenue growth through precise, actionable analytics dashboards tailored for C-level executives.",
      image: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Executive+Insights"
    },
    {
      label: "Cost Optimization",
      title: "Maximize Operational Efficiency",
      content: "Optimize your bottom line with ML-powered solutions. I've helped organizations achieve 46% reduction in operational costs and 3.2x ROI within the first year through strategic process automation and predictive maintenance.",
      image: "https://via.placeholder.com/400x300/16a34a/ffffff?text=Cost+Optimization"
    },
    {
      label: "Risk Mitigation",
      title: "Protect Your Business",
      content: "Stay ahead of market risks with 89% prediction accuracy. My risk management solutions have helped prevent over $2.4M in potential losses by identifying and mitigating business risks before they impact operations.",
      image: "https://via.placeholder.com/400x300/dc2626/ffffff?text=Risk+Management"
    },
    {
      label: "Competitive Intelligence",
      title: "Lead Your Market",
      content: "Turn market data into competitive advantage. Companies using my analytics frameworks have captured 23% more market share through real-time competitor analysis and predictive market modeling.",
      image: "https://via.placeholder.com/400x300/9333ea/ffffff?text=Market+Leadership"
    },
    {
      label: "Digital Transformation",
      title: "Future-Proof Your Business",
      content: "Modernize your operations with AI-driven solutions. My implementations have reduced manual processes by 75% and increased team productivity by 40% through intelligent automation and workflow optimization.",
      image: "https://via.placeholder.com/400x300/0891b2/ffffff?text=Digital+Future"
    }
  ];

  // Constants for viewport calculations
  const VIEWPORT_THRESHOLDS = {
    MOBILE: {
      TOP_MARGIN: '-40%',
      BOTTOM_MARGIN: '-10%',
      SCROLL_DOWN: {
        TRIGGER_POINT: 0.1,     // Show next image when next section starts appearing (10% visible)
        FADE_START: 0.2,
      },
      SCROLL_UP: {
        TRIGGER_POINT: 0.25,    // Keep image until 25% visible
        FADE_START: 0.8,
        FADE_END: 0.2,
      },
      OPACITY_MAX: 1,
      OPACITY_MIN: 0
    },
    DESKTOP: {
      TOP_MARGIN: '-40%',
      BOTTOM_MARGIN: '-30%',
      SCROLL_DOWN: {
        TRIGGER_POINT: 0.95,    // Show next image when next section is 95% visible
        FADE_START: 0.4,        // Start fade transition at 40%
      },
      SCROLL_UP: {
        TRIGGER_POINT: 0.65,
        FADE_START: 0.4,
      },
      OPACITY_MAX: 1,
      OPACITY_MIN: 0,
      TRANSITION_SPEED: 2.5
    }
  };

  const getOpacity = (index) => {
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
      if (index === activeIndex) {
        const ref = textRefs.current[index];
        if (!ref) return 1;

        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = visibleHeight / rect.height;
        const topPosition = rect.top / viewportHeight;
        
        // Special handling for first section
        if (index === 0) {
          // Ensure full opacity when at the top
          if (topPosition >= -0.1 && topPosition <= 0.1) return 1;
          return Math.max(0.3, Math.min(1, (1 - Math.abs(topPosition)) * 1.5));
        }
        return Math.max(0.3, Math.min(1, visibilityPercentage * 1.2));
      }
      
      if (index === activeIndex + 1) {
        const ref = textRefs.current[index];
        if (!ref) return 0;

        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = visibleHeight / rect.height;
        
        // Special handling for transition from first section
        if (activeIndex === 0) {
          return Math.max(0, Math.min(1, visibilityPercentage * 1.2));
        }
        return Math.max(0, Math.min(1, visibilityPercentage - 0.3));
      }
      
      if (index === activeIndex - 1) {
        const ref = textRefs.current[index];
        if (!ref) return 0;

        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const bottomVisibility = rect.bottom / viewportHeight;
        
        return Math.min(1, Math.max(0, bottomVisibility * 1.2));
      }
      return 0;
    }

    // Desktop behavior
    if (index === activeIndex) {
      // Special handling for first section
      if (index === 0) {
        const ref = textRefs.current[index];
        if (!ref) return 1;

        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topPosition = rect.top / viewportHeight;
        
        // Ensure clean transition for first section
        if (topPosition > 0.5) return 0;
        if (topPosition < 0.2) return 1;
        
        return Math.min(1, Math.max(0, 1 - (topPosition * 3)));
      }
      return 1;
    }
    if (index === activeIndex - 1) {
      const ref = textRefs.current[index];
      if (!ref) return 0;

      const rect = ref.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Special handling for Cost Optimization when transitioning to first section
      if (activeIndex === 0) {
        const topPosition = rect.top / viewportHeight;
        
        // Force complete fade out as it moves up
        if (topPosition < -0.2) return 0;
        if (topPosition > 0.3) return 1;
        
        return Math.min(1, Math.max(0, (topPosition + 0.2) * 2));
      }
      
      const bottomVisibility = rect.bottom / viewportHeight;
      return Math.min(1, Math.max(0, bottomVisibility - 0.2));
    }
    if (index === activeIndex + 1) {
      const ref = textRefs.current[index];
      if (!ref) return 0;

      const rect = ref.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visibilityPercentage = visibleHeight / rect.height;
      
      return Math.max(0, Math.min(1, (visibilityPercentage - 0.4) * 1.5));
    }
    return 0;
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const options = {
      root: null,
      rootMargin: `${isMobile ? VIEWPORT_THRESHOLDS.MOBILE.TOP_MARGIN : '-20%'} 0px ${isMobile ? VIEWPORT_THRESHOLDS.MOBILE.BOTTOM_MARGIN : '-20%'} 0px`,
      threshold: TRANSITION_THRESHOLDS
    };

    let lastScrollY = window.scrollY;
    let lastActiveIndex = activeIndex;
    let scrollTimeout;

    const observer = new IntersectionObserver((entries) => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Sort entries by their position in viewport
      const sortedEntries = entries.sort((a, b) => {
        const rectA = a.boundingClientRect;
        const rectB = b.boundingClientRect;
        return rectA.top - rectB.top;
      });

      let newIndex = lastActiveIndex;

      sortedEntries.forEach(entry => {
        const index = parseInt(entry.target.dataset.index);
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = visibleHeight / rect.height;
        const sectionPosition = rect.bottom / viewportHeight;

        if (scrollingDown) {
          if (visibilityPercentage > (isMobile ? 0.4 : 0.5) && index > newIndex) {
            newIndex = index;
          }
        } else {
          // Enhanced upward scrolling logic
          const topVisibility = (viewportHeight - rect.top) / viewportHeight;
          if (topVisibility > (isMobile ? 0.3 : 0.4) && sectionPosition > 0.2) {
            newIndex = Math.max(0, index);
          }
        }
      });

      if (newIndex !== lastActiveIndex) {
        lastActiveIndex = newIndex;
        setActiveIndex(newIndex);
      }

      // Fallback check for edge cases
      scrollTimeout = setTimeout(() => {
        const mostVisibleSection = sortedEntries.reduce((prev, current) => {
          const prevRect = prev.boundingClientRect;
          const currentRect = current.boundingClientRect;
          const prevCenter = (prevRect.top + prevRect.bottom) / 2;
          const currentCenter = (currentRect.top + currentRect.bottom) / 2;
          
          // Prefer sections closer to the middle of the viewport
          const viewportCenter = window.innerHeight / 2;
          const prevDistance = Math.abs(prevCenter - viewportCenter);
          const currentDistance = Math.abs(currentCenter - viewportCenter);
          
          return currentDistance < prevDistance ? current : prev;
        });

        const centerIndex = parseInt(mostVisibleSection.target.dataset.index);
        if (centerIndex !== lastActiveIndex) {
          lastActiveIndex = centerIndex;
          setActiveIndex(centerIndex);
        }
      }, 100);
    }, options);

    textRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => {
      observer.disconnect();
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [activeIndex, VIEWPORT_THRESHOLDS.MOBILE.TOP_MARGIN, VIEWPORT_THRESHOLDS.MOBILE.BOTTOM_MARGIN]);

  return (
    <div ref={sectionRef} className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="relative">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="min-h-[60vh] lg:min-h-[75vh] flex flex-col lg:flex-row items-start lg:items-center px-4 lg:px-8 py-8 lg:py-0"
            >
              {/* Mobile-only image */}
              <div className="block lg:hidden w-full mb-6 mt-4">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto rounded-lg shadow-2xl transition-all duration-500"
                  style={{ opacity: getOpacity(index) }}
                />
              </div>
              
              {/* Content */}
              <div className="w-full">
                <div className="mb-4">
                  <div className="text-blue-600 font-semibold tracking-wide">
                    {section.label}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900">
                  {section.title}
                </h3>
                <p 
                  ref={el => textRefs.current[index] = el}
                  data-index={index}
                  className="text-base lg:text-xl text-gray-600 leading-relaxed"
                >
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Desktop Images Only */}
        <div className="hidden lg:block relative">
          <div className="sticky top-0 min-h-[75vh] flex items-center">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="absolute inset-0 flex items-center justify-center pt-16"
                style={{
                  zIndex: index === activeIndex ? 20 : 
                         index === activeIndex - 1 ? 10 : 
                         index === activeIndex + 1 ? 15 : 0
                }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-4/5 h-auto rounded-lg shadow-2xl transition-all duration-700"
                  style={{ 
                    opacity: getOpacity(index),
                    transform: `scale(${index === activeIndex ? 1 : 0.95})`,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;