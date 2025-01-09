import React from 'react';
import { HiDocumentDownload } from 'react-icons/hi';

/**
 * @component ContactSection
 * @description A card-style contact section with a primary call-to-action for consultation
 * and a secondary action to download resume.
 */
const ContactSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="bg-[#1B2B2B] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4">
            Aprovecha tu data para crecer.
          </h2>
          <p className="text-xl text-gray-300">
            Conversemos para descubrir cómo puedo ayudarte.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://tidycal.com/diegotorresll/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00FFA3] hover:bg-[#00E693] text-black text-m font-medium px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap w-full text-center"
          >
            Conversemos
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white text-m font-medium px-8 py-3 rounded-lg transition-all duration-200 whitespace-nowrap w-full text-center flex items-center justify-center gap-2"
          >
            <HiDocumentDownload className="text-xl" />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;