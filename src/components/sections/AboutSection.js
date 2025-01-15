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
 * @version 1.2.1
 */

import React, { useEffect, useRef, useState } from 'react';
// TODO: Replace placeholder images with actual SVGs
/*
import dataImage from '../../assets/images/about/data-driven.svg';
import innovationImage from '../../assets/images/about/innovation.svg';
import experienceImage from '../../assets/images/about/experience.svg';
import collaborationImage from '../../assets/images/about/collaboration.svg';
import visionImage from '../../assets/images/about/vision.svg';
*/

// Temporary placeholder images
const dataImage = 'https://placehold.co/600x400/2563eb/ffffff/png?text=Data+Solutions';
const innovationImage = 'https://placehold.co/600x400/16a34a/ffffff/png?text=Innovation';
const experienceImage = 'https://placehold.co/600x400/dc2626/ffffff/png?text=Experience';
const collaborationImage = 'https://placehold.co/600x400/9333ea/ffffff/png?text=Collaboration';
const visionImage = 'https://placehold.co/600x400/0891b2/ffffff/png?text=Vision';

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
      image: dataImage
    },
    {
      label: "Metodología",
      title: "Innovación Práctica",
      content: "Aplico metodologías ágiles y design thinking para desarrollar soluciones que equilibran innovación con practicidad. Cada proyecto se construye sobre evidencia y se valida con resultados concretos.",
      image: innovationImage
    },
    {
      label: "Experiencia",
      title: "Impacto Comprobado",
      content: "Con más de una década transformando negocios a través de tecnología, he ayudado a empresas a alcanzar mejoras significativas en eficiencia operativa y ventaja competitiva.",
      image: experienceImage
    },
    {
      label: "Colaboración",
      title: "Trabajo en Equipo",
      content: "Creo en el poder de la colaboración. Trabajo estrechamente con equipos internos para asegurar que las soluciones no solo resuelven problemas, sino que también empoderan a las personas que las utilizan.",
      image: collaborationImage
    },
    {
      label: "Visión",
      title: "Futuro Sostenible",
      content: "Mi objetivo es crear soluciones que no solo resuelven los desafíos de hoy, sino que también preparan a las organizaciones para el futuro, con un enfoque en sostenibilidad y escalabilidad.",
      image: visionImage
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
      const navbarHeight = 80; // Height of the fixed navbar

      textRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const adjustedTop = rect.top - navbarHeight;
        
        if (isMobile) {
          if (adjustedTop < viewportHeight * 0.7 && rect.bottom > viewportHeight * 0.3) {
            newActiveIndex = index;
          }
          if (index === 0 && rect.bottom > viewportHeight * 0.4) {
            newActiveIndex = 0;
          }
        } else {
          if (adjustedTop < viewportHeight * 0.65 && rect.bottom > viewportHeight * 0.35) {
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
    if (isInitialLoad && index === 0) return 1;
    if (index === activeIndex) return 1;
    return 0;
  };

  return (
    <div id="about" ref={sectionRef} className="relative bg-off-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="relative">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="min-h-[70vh] lg:min-h-[85vh] flex flex-col lg:flex-row items-start lg:items-center px-4 lg:px-8 py-12 lg:py-0"
            >
              {/* Mobile-only image */}
              <div className="block lg:hidden w-full mb-8 mt-6">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg glass-effect">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    loading="lazy"
                    decoding="async"
                    style={{ opacity: getOpacity(index) }}
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full">
                <div className="mb-6">
                  <div className="text-deep-purple font-semibold tracking-wide uppercase text-sm">
                    {section.label}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-steel-blue">
                  {section.title}
                </h3>
                <p 
                  ref={el => textRefs.current[index] = el}
                  data-index={index}
                  className="text-base lg:text-xl text-soft-slate leading-relaxed"
                >
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Desktop Images Only */}
        <div className="hidden lg:block relative">
          <div className="sticky top-20 min-h-[85vh] flex items-center">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: getOpacity(index),
                  transition: 'opacity 0.6s ease-in-out',
                  zIndex: index === activeIndex ? 20 : 10,
                  pointerEvents: index === activeIndex ? 'auto' : 'none'
                }}
              >
                <div className="relative aspect-[3/2] w-4/5 overflow-hidden rounded-lg glass-effect">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover shadow-2xl transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    style={{ 
                      transform: `scale(${index === activeIndex ? 1 : 0.95}) translateY(${index < activeIndex ? '10px' : index > activeIndex ? '-10px' : '0px'})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;