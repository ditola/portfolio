/**
 * @component NavBar
 * @description Main navigation component with responsive design, accessibility features,
 * and smooth animations. Implements ARIA landmarks and keyboard navigation.
 * 
 * Features:
 * - Responsive mobile menu with animations
 * - Keyboard navigation support
 * - ARIA landmarks and labels
 * - Focus management
 * - Scroll-based visibility
 * 
 * @author Diego Torres
 * @version 1.2.5
 */

import React, { useState, useCallback, useEffect, memo } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { NAV_LINKS, CTA_LINK } from '../../data/navigation';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';

const NavLink = memo(({ href, label, onClick }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 56 + 32;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (onClick) {
        setTimeout(onClick, 100);
      }
    }
  }, [href, onClick]);

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="relative block px-4 py-2 group"
    >
      {/* Background hover effect */}
      <div className="absolute inset-0 bg-deep-purple/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Label */}
      <span className="relative font-medium text-soft-slate group-hover:text-deep-purple transition-colors duration-300">
        {label}
      </span>
    </a>
  );
});

NavLink.displayName = 'NavLink';

const NavBar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle keyboard navigation
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Handle mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Fallback to an empty array if NAV_LINKS is undefined
  const links = NAV_LINKS || [];

  return (
    <>
      {/* Full screen backdrop blur when mobile menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-lg z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav 
        className="fixed w-full top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-5xl mx-auto p-4">
          <div className={`
            relative bg-white rounded-lg overflow-visible
            transition-all duration-300
            ${isScrolled ? 'shadow-lg' : ''}
          `}>
            <div className="relative flex justify-between items-center h-14 px-6">
              <a 
                href="#hero"
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-deep-purple focus:ring-offset-2 rounded-lg px-2 py-1"
                aria-label="Ir al inicio"
              >
                <span className="text-lg font-bold text-steel-blue">Diego Torres</span>
              </a>

              {/* Mobile menu button */}
              <button 
                className="md:hidden text-soft-slate hover:text-deep-purple transition-colors
                  p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-purple focus:ring-offset-2"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <NavLink key={href} href={href} label={label} onClick={handleLinkClick} />
                ))}
                <Button 
                  link={CTA_LINK}
                  text="Conversemos" 
                  variant="primary"
                  className="ml-4"
                  ariaLabel="Agendar una conversación"
                />
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute top-full left-0 right-0 md:hidden mt-2 rounded-lg shadow-lg"
                >
                  <div className="p-4 bg-white rounded-lg">
                    <BentoGrid className="grid-cols-2 auto-rows-[8rem] gap-3">
                      {NAV_LINKS.map(({ href, label }) => (
                        <BentoGridItem
                          key={href}
                          title={label}
                          description="Explora esta sección"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(href);
                            if (element) {
                              const navbarHeight = 56 + 32;
                              const elementPosition = element.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                              });
                              setIsMobileMenuOpen(false);
                            }
                          }}
                          isActive={activeSection === href}
                          className="bg-gray-50 hover:bg-gray-100"
                        />
                      ))}
                      <BentoGridItem
                        title="Conversemos"
                        description="¿Listo para empezar?"
                        onClick={() => window.open(CTA_LINK, '_blank')}
                        className="col-span-2 bg-gray-100 hover:bg-gray-200"
                      />
                    </BentoGrid>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;