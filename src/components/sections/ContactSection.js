import React from 'react';
import profileHero from '../../assets/images/hero/profile-hero.png';
import Button from '../ui/Button';

/**
 * @component ContactSection
 * @description A responsive contact section with three equal parts that stack vertically on mobile
 * and display horizontally on desktop.
 */
const ContactSection = () => (
  <div id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
    <div className="rounded-[24px] w-full mx-auto bg-gradient-to-br from-[hsl(60,5%,44%)] to-[hsl(30,5%,25%)] overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 flex items-center justify-center p-16">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Aprovecha tu propia data.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300">
              Incrementa tu eficiencia con Inteligencia Artificial.
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-40 lg:w-[280px] h-40 lg:h-[280px] overflow-hidden">
            <img
              src={profileHero}
              alt="Diego Torres - Data Science & ML Engineering"
              className="w-full h-full object-cover object-center"
              style={{
                objectPosition: 'center 5%',
                transform: 'scale(1)'
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex-1 flex items-center justify-center pb-20 lg:p-8">
          <div className="flex flex-col gap-4">
            <Button
              link="https://tidycal.com/diegotorresll/30-min"
              text="Conversemos"
              variant="primary"
              className="w-full"
            />
            <Button
              link="/resume.pdf"
              text="Descargar CV"
              variant="secondary"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;