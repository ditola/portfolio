/**
 * @component AboutSection
 * @description A scrolling animation section that displays content about the author's
 * expertise and approach to solving business problems.
 * 
 * Features:
 * - Smooth scroll-based animations
 * - Responsive layout with sticky images
 * - Progressive content reveal
 * - Performance optimized transitions
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
      label: "Mi Enfoque",
      title: "Soluciones Basadas en Datos",
      content: "Transformo datos en decisiones estratégicas. Mi enfoque combina análisis avanzado con visualización intuitiva para crear soluciones que impulsan resultados medibles y sostenibles.",
      image: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Data+Driven"
    },
    {
      label: "Metodología",
      title: "Innovación Práctica",
      content: "Aplico metodologías ágiles y design thinking para desarrollar soluciones que equilibran innovación con practicidad. Cada proyecto se construye sobre evidencia y se valida con resultados concretos.",
      image: "https://via.placeholder.com/400x300/16a34a/ffffff?text=Innovation"
    },
    {
      label: "Experiencia",
      title: "Impacto Comprobado",
      content: "Con más de una década transformando negocios a través de tecnología, he ayudado a empresas a alcanzar mejoras significativas en eficiencia operativa y ventaja competitiva.",
      image: "https://via.placeholder.com/400x300/dc2626/ffffff?text=Experience"
    },
    {
      label: "Colaboración",
      title: "Trabajo en Equipo",
      content: "Creo en el poder de la colaboración. Trabajo estrechamente con equipos internos para asegurar que las soluciones no solo resuelven problemas, sino que también empoderan a las personas que las utilizan.",
      image: "https://via.placeholder.com/400x300/9333ea/ffffff?text=Collaboration"
    },
    {
      label: "Visión",
      title: "Futuro Sostenible",
      content: "Mi objetivo es crear soluciones que no solo resuelven los desafíos de hoy, sino que también preparan a las organizaciones para el futuro, con un enfoque en sostenibilidad y escalabilidad.",
      image: "https://via.placeholder.com/400x300/0891b2/ffffff?text=Vision"
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
        // const enterPoint = viewportHeight * 0.3;
        // Calculate progress as text enters viewport
        const progress = (viewportHeight - rect.top) / (viewportHeight * 0.5);
        return progress > 0 ? Math.min(0.8, progress) : 0;
      }
      if (index === activeIndex - 1) {
        // Keep previous section visible until text is 50% out
        // const exitPoint = viewportHeight * 0.5;
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
        return Math.max(0.2, Math.min(0.6, 1 - (distance / (viewportHeight * 0.6))));
      }
    }
    
    return 0;
  };

  return (
    <div id="about" ref={sectionRef} className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default AboutSection;