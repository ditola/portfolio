import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../data/navigation';

const Footer = () => (
  <footer className="py-8 bg-white border-t border-gray-200">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Diego Torres</p>
        <a 
          href={SOCIAL_LINKS.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-emerald transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;