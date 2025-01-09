import React, { useEffect, useRef, useState } from 'react';

const AnimationSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Increase offset to trigger much earlier - try these values to find the perfect timing
  const TRANSITION_OFFSET = 0.001; // This will trigger the transition very early

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const relativeScroll = scrollPosition - sectionTop;
      const sectionHeight = window.innerHeight * 0.75;
      
      // Added offset to trigger transition earlier
      const adjustedScroll = relativeScroll + (sectionHeight * TRANSITION_OFFSET);
      const scrollProgress = adjustedScroll / sectionHeight;
      const newIndex = Math.min(Math.max(Math.floor(scrollProgress), 0), sections.length - 1);
      
      const phaseProgress = (scrollProgress % 1) * 3;
      const newPhase = Math.min(Math.floor(phaseProgress), 2);
      
      setActiveIndex(newIndex);
      setAnimationPhase(newPhase);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      label: "Strategic Impact",
      title: "Drive Business Growth with Data",
      content: "Transform raw data into actionable insights that directly impact your bottom line. Our solutions have helped executives achieve 34% faster decision-making and 28% revenue growth.",
      image: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Strategic+Impact"
    },
    {
      label: "ROI Focus",
      title: "Maximize Return on Investment",
      content: "Leverage ML models that deliver measurable results. Our clients report an average 46% reduction in operational costs and 3.2x ROI within the first year.",
      image: "https://via.placeholder.com/400x300/16a34a/ffffff?text=ROI+Focus"
    },
    {
      label: "Risk Management",
      title: "Mitigate Risks with Predictive Analytics",
      content: "Stay ahead of market changes with 89% prediction accuracy. Our risk management solutions have helped prevent $2.4M in potential losses for our enterprise clients.",
      image: "https://via.placeholder.com/400x300/dc2626/ffffff?text=Risk+Management"
    },
    {
      label: "Market Intelligence",
      title: "Gain Competitive Advantage",
      content: "Access real-time market insights and competitor analysis. Companies using our platform have captured 23% more market share in their respective industries.",
      image: "https://via.placeholder.com/400x300/9333ea/ffffff?text=Market+Intelligence"
    },
    {
      label: "Executive Dashboard",
      title: "Simplified Decision Making",
      content: "Get a clear view of your KPIs with executive-friendly dashboards. Reduce meeting prep time by 75% and make data-driven decisions with confidence.",
      image: "https://via.placeholder.com/400x300/0891b2/ffffff?text=Executive+Dashboard"
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-2">
        <div className="relative">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="min-h-[75vh] flex items-center px-8"
              id={`section-${index}`}
            >
              <div className="w-full">
                <div className="mb-4">
                  <div className="text-blue-600 font-semibold tracking-wide">
                    {section.label}
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-0 min-h-[75vh] flex items-center">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className={`w-4/5 h-auto rounded-lg shadow-2xl transition-all duration-500
                    ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
                    ${index === activeIndex && animationPhase === 0 ? 'scale-100 rotate-0' : ''}
                    ${index === activeIndex && animationPhase === 1 ? 'scale-110 rotate-3' : ''}
                    ${index === activeIndex && animationPhase === 2 ? 'scale-105 rotate-0' : ''}
                    ${index !== activeIndex ? 'scale-90' : ''}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;