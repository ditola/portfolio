/**
 * @component Footer
 * @description Site footer component with copyright information and social links.
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { memo } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../data/navigation';

const SocialIcon = memo(({ type }) => {
  switch (type) {
    case 'linkedin':
      return <FaLinkedin size={24} />;
    case 'github':
      return <FaGithub size={24} />;
    default:
      return null;
  }
});

SocialIcon.displayName = 'SocialIcon';

const Footer = memo(() => (
  <footer className="py-8 bg-off-white border-t border-system-gray">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-soft-slate">
          © {new Date().getFullYear()} Diego Torres
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ name, href, icon }) => (
            <a 
              key={name}
              href={href}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soft-slate hover:text-deep-purple transition-colors"
              aria-label={`Visitar perfil de ${name}`}
            >
              <SocialIcon type={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;