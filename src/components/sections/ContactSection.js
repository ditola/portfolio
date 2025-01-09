import React from 'react';

/**
 * @component ContactSection
 * @description A card-style contact section with a strong call-to-action
 * that directs users to schedule a consultation.
 */
const ContactSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="bg-[#1B2B2B] rounded-[24px] p-8 sm:p-12 flex justify-between items-center">
        <div>
          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4">
            Aprovecha tu data para crecer.
          </h2>
          <p className="text-xl text-gray-300">
            Conversemos para descubrir cómo puedo ayudarte.
          </p>
        </div>
        <a
          href="https://tidycal.com/diegotorresll/30-min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00FFA3] hover:bg-[#00E693] text-black text-m font-medium px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Conversemos
        </a>
      </div>
    </div>
  );
};

export default ContactSection;