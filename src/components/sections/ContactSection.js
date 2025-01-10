import React from 'react';
import profileHero from '../../assets/images/hero/profile-hero.png';
import Button from '../ui/Button';

/**
 * @component ContactSection
 * @description A responsive contact section with cell-based alignment for all elements.
 */
const ContactSection = () => (
  <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
    <div 
      className="rounded-[24px] overflow-hidden w-[90%] mx-auto relative"
      style={{ 
        background: 'radial-gradient(circle at 55% 50%, hsl(60, 5%, 44%) 5%, hsl(30, 5%, 25%) 65%)',
        height: '200px'
      }}
    >
      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 h-full">
        {/* Text Content - Cell 1 */}
        <div className="flex items-center px-6 lg:px-12">
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Aprovecha tu propia data.
            </h2>
            <p className="text-m lg:text-l text-gray-300">
              Conversemos para descubrir cómo lograrlo.
            </p>
          </div>
        </div>

        {/* Profile Image - Cell 2 */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-48 lg:w-[200px] h-48 lg:h-[200px] object-cover object-[center_0%] lg:object-[center_0%] overflow-hidden">
            <img
              src={profileHero}
              alt="Diego Torres - Data Science & ML Engineering"
              className="w-full h-full object-cover object-[center_30%] lg:object-[center_0%] scale-110 lg:scale-1"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Buttons - Cell 3 */}
        <div className="flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-4 w-full max-w-[280px]">
            <Button
              link="https://tidycal.com/diegotorresll/30-min"
              text="Conversemos"
              variant="primary"
              className="w-full lg:w-auto"
            />
            <Button
              link="/resume.pdf"
              text="Descargar CV"
              variant="secondary"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;