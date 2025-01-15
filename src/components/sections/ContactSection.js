/**
 * @component ContactSection
 * @description A responsive contact section with three equal parts that stack vertically on mobile
 * and display horizontally on desktop.
 * 
 * Features:
 * - Optimized image loading with lazy loading and proper sizing
 * - Responsive layout with mobile-first approach
 * - Accessible buttons and interactive elements
 * - Direct PDF downloads from public directory
 * 
 * @author Diego Torres
 * @version 1.2.1
 */

import React, { memo } from 'react';
import profileHero from '../../assets/images/hero/profile-hero.png';
import Button from '../ui/Button';
import { CTA_LINK } from '../../data/navigation';

const ContactSection = memo(() => (
  <section id="contact" className="py-12 sm:py-20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="rounded-[24px] w-full mx-auto bg-gradient-to-br from-[hsl(60,5%,44%)] to-[hsl(30,5%,25%)] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 flex items-center justify-center p-16 lg:p-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Aprovecha tu propia data.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80">
                Puedo ayudarte.
              </p>
            </div>
          </div>

          {/* Profile Image - Desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="relative w-[280px] h-[280px]">
              <img
                src={profileHero}
                alt="Diego Torres - Data Science & ML Engineering"
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
                style={{
                  transform: 'scale(1.01)',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>

          {/* Buttons and Mobile Image */}
          <div className="flex-1 flex flex-col items-center justify-center pb-16 lg:p-8">
            {/* Mobile Profile Image */}
            <div className="lg:hidden relative w-48 h-48 mb-5">
              <img
                src={profileHero}
                alt="Diego Torres - Data Science & ML Engineering"
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
                style={{
                  transform: 'scale(1.2)',
                  willChange: 'transform'
                }}
              />
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Button
                link={CTA_LINK}
                text="Conversemos"
                variant="primary"
                className="w-3/4 mx-auto"
                ariaLabel="Agendar una conversación"
              />
              <Button
                href="/assets/pdf/Resume_Diego_Torres_ESP.pdf"
                text="CV en Español"
                variant="secondary"
                className="w-3/4 mx-auto !border-soft-slate text-soft-slate"
                download="Resume_Diego_Torres_ESP.pdf"
                ariaLabel="Descargar CV en Español"
              />
              <Button
                href="/assets/pdf/Resume_Diego_Torres_ENG.pdf"
                text="CV in English"
                variant="secondary"
                className="w-3/4 mx-auto !border-soft-slate text-soft-slate"
                download="Resume_Diego_Torres_ENG.pdf"
                ariaLabel="Download CV in English"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection;