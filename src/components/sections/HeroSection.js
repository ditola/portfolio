/**
 * @component HeroSection
 * @description Main hero section component that displays the introduction with a 3D dashboard visualization.
 * Implements performance optimizations, accessibility features, and smooth animations.
 * 
 * Features:
 * - Optimized image loading with lazy loading
 * - 3D perspective transforms with hardware acceleration
 * - Responsive design with mobile-first approach
 * - Accessible navigation and interactive elements
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { memo, useState } from 'react';
import Button from '../ui/Button';
import dashboardHero from '../../assets/images/hero/dashboard-hero.svg';
import { CTA_LINK } from '../../data/navigation';

// Dashboard image component with optimized loading and 3D effects
const DashboardImage = memo(() => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error('Failed to load SVG image');
    setImageError(true);
  };

  return (
    <div className="w-full relative mt-12 md:mt-16 mb-24">
      <div className="relative max-w-4xl mx-auto px-8 md:px-16">
        {/* Background blur effects */}
        <div className="absolute -left-20 top-1/3 w-40 h-40 bg-emerald/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 top-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <div 
          className="relative mx-auto"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
            maxWidth: '85%',
            padding: '40px',
            marginBottom: '60px'
          }}
        >
          <div
            className="relative"
            style={{
              transform: 'rotateX(35deg) rotateY(15deg) rotateZ(-20deg) scale(1.1)',
              transformOrigin: 'center center',
              borderRadius: '16px',
              boxShadow: `
                0 70px 100px -20px rgba(0, 0, 0, 0.25),
                0 50px 60px -30px rgba(0, 0, 0, 0.15)
              `,
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              willChange: 'transform',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="scale-110">
              {!imageError ? (
                <img
                  src={dashboardHero}
                  alt="Dashboard Analytics Visualization"
                  className="w-full"
                  onError={handleImageError}
                  loading="lazy"
                  decoding="async"
                  style={{
                    borderRadius: '16px',
                    willChange: 'transform',
                  }}
                />
              ) : (
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Failed to load image</p>
                </div>
              )}
            </div>
            
            {/* Bottom shadow for depth */}
            <div 
              className="absolute -bottom-8 left-0 w-full h-32" 
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.03), transparent)',
                filter: 'blur(20px)',
                transform: 'rotate(-20deg) translateY(20%)'
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

DashboardImage.displayName = 'DashboardImage';

const HeroSection = memo(() => {
  return (
    <section 
      id="hero" 
      className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-emerald-50 to-white"
      aria-label="Sección de introducción"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-left">
          <div className="w-full max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left mb-6 mt-4">
              Resuelvo problemas de negocio con data, ciencia y diseño.
            </h1>
            <div 
              className="text-xl md:text-2xl font-semibold text-emerald mb-8 text-left max-w-2xl"
              role="doc-subtitle"
            >
              Existen tres grandes ventajas competitivas que puede generarte la tecnología actual en el mercado.
            </div>
            <div className="flex justify-left">
              <Button 
                link={CTA_LINK}
                text="Agéndame un espacio" 
                variant="primary"
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300" 
                aria-label="Agendar una conversación"
              />
            </div>
          </div>
          <div className="w-full">
            <DashboardImage />
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;