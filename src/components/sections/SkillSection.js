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

const SkillSection = () => {
  // Refs and State Management
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  // Add initial mount effect
  useEffect(() => {
    setActiveIndex(0);
    setIsInitialLoad(true);
    
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      let newActiveIndex = activeIndex;
      const isMobile = window.innerWidth < 1024;

      textRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        
        if (isMobile) {
          // More lenient check for mobile
          if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
            newActiveIndex = index;
          }
          // Special case for first section on mobile
          if (index === 0 && rect.bottom > viewportHeight * 0.3) {
            newActiveIndex = 0;
          }
        } else {
          // Desktop behavior remains the same
          if (rect.top < viewportHeight * 0.75 && rect.bottom > viewportHeight * 0.25) {
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const getOpacity = (index) => {
    // During initial load, show first image with full opacity
    if (isInitialLoad && index === 0) return 1;

    const isMobile = window.innerWidth < 1024;
    const ref = textRefs.current[index];
    if (!ref) return 0;

    const rect = ref.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Special case for first section
    if (index === 0 && rect.bottom > 0) {
      return 1;
    }

    if (index === activeIndex) return 1;

    if (isMobile) {
      if (index === activeIndex + 1) {
        // Show next section when text is 50% visible
        const enterPoint = viewportHeight * 0.3;
        // Calculate progress as text enters viewport
        const progress = (viewportHeight - rect.top) / (viewportHeight * 0.5);
        return progress > 0 ? Math.min(0.8, progress) : 0;
      }
      if (index === activeIndex - 1) {
        // Keep previous section visible until text is 50% out
        const exitPoint = viewportHeight * 0.5;
        // Calculate progress as text exits viewport
        const progress = rect.bottom / (viewportHeight * 0.5);
        return progress > 0 ? Math.min(0.8, progress) : 0;
      }
    } else {
      // Desktop: fade adjacent sections
      if (index === activeIndex - 1 || index === activeIndex + 1) {
        const elementCenter = (rect.top + rect.bottom) / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        return Math.max(0.2, Math.min(0.6, 1 - (distance / (viewportHeight * 0.75))));
      }
    }
    
    return 0;
  };

  return (
    <div id="skills" ref={sectionRef} className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="text-emerald font-semibold tracking-wide">
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
                  zIndex: index === activeIndex ? 20 : 10,
                  pointerEvents: index === activeIndex ? 'auto' : 'none'
                }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-4/5 h-auto rounded-lg shadow-2xl transition-all duration-500"
                  style={{ 
                    opacity: getOpacity(index),
                    transform: `scale(${index === activeIndex ? 1 : 0.95}) translateY(${index < activeIndex ? '10px' : index > activeIndex ? '-10px' : '0px'})`,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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