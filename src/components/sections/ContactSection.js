import React from 'react';
import profileHero from '../../assets/images/hero/profile-hero.png';
import Button from '../ui/Button';

/**
 * @component ContactSection
 * @description A three-column contact section with text, profile image, and call-to-action buttons.
 */
const ContactSection = () => (
  <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
    <div className="rounded-[24px] p-0 h-[250px] overflow-hidden w-[90%] mx-auto" style={{ background: 'radial-gradient(circle at 55% 50%, hsl(60, 5%, 44%) 5%, hsl(30, 5%, 25%) 65%)' }}>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 h-full">
        <div className="w-full lg:w-1/3 flex flex-col items-start justify-center text-left pl-20">
          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-2">
            Aprovecha tu propia data.
          </h2>
          <p className="text-xl text-gray-300">
            Conversemos para descubrir cómo lograrlo.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center mt-56">
          <div className="relative h-full">
            <img
              src={profileHero}
              alt="Diego Torres - Data Science & ML Engineering"
              className="relative w-full h-full object-cover"
              style={{ border: 'none' }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <Button
              link="https://tidycal.com/diegotorresll/30-min"
              text="Conversemos"
              variant="primary"
            />
            <br />
            <Button
              link="/resume.pdf"
              text="Descargar CV"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;