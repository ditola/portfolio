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
import { IoMenu, IoClose, IoArrowUp } from "react-icons/io5";
import { NAV_LINKS, CTA_LINK } from '../../data/navigation';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';

const NavLink = memo(({ href, label, onClick }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 56 + 32 + 12;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

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

const SpinningIcon = () => (
  <motion.div
    className="relative w-10 h-10 border-2 border-deep-purple/50 overflow-hidden"
    animate={{
      rotate: [0, 0, 360]
    }}
    transition={{
      duration: 3,
      times: [0, 0.5, 1],
      ease: [0.32, 0, 0.67, 1],
      repeat: Infinity,
      repeatDelay: 3
    }}
  >
    <motion.div
      className="absolute -inset-[2px] bg-deep-purple/40 origin-bottom"
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: [0, 1, 1, 0]
      }}
      transition={{
        duration: 3,
        times: [0, 0.25, 0.5, 1],
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 3
      }}
    />
  </motion.div>
);

const NavBar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide back to top button
      setShowBackToTop(currentScrollY > 500);
      
      // Handle navbar visibility
      if (currentScrollY === 0) {
        setHideNav(false);
        setIsScrolled(false);
      } else if (currentScrollY < 100) {
        setHideNav(false);
        setIsScrolled(true);
      } else if (currentScrollY > lastScrollY + 5 && !isMobileMenuOpen) {
        setHideNav(true);
      } else if (currentScrollY < lastScrollY - 5) {
        setHideNav(false);
      }
      
      // Detect active section
      const viewportHeight = window.innerHeight;
      const sections = NAV_LINKS.map(link => document.querySelector(link.href));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5;
      });
      
      if (currentSection) {
        setActiveSection('#' + currentSection.id);
      }
      
      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const scrollToTop = useCallback(() => {
    // First show navbar and reset states
    setHideNav(false);
    setIsScrolled(false);
    setShowBackToTop(false);
    setLastScrollY(0);
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Full screen backdrop blur when mobile menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-lg z-40 touch-none"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav 
        className="w-screen top-0 z-50 fixed px-2 pt-3"
        initial={{ y: -100 }}
        animate={{ 
          y: hideNav ? -100 : 0,
          transition: {
            duration: 0.3,
            ease: [0.32, 0.72, 0, 1]
          }
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-5xl mx-auto">
          <div className={`
            relative bg-white/95 backdrop-blur-sm rounded-lg overflow-visible
            border border-gray-200/20
            transition-all duration-300
            ${isScrolled ? 'shadow-lg' : ''}
            ${isMobileMenuOpen ? 'z-50' : ''}
          `}>
            <div className="relative flex justify-between items-center h-14 px-3">
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
                  style={{ maxWidth: '100vw' }}
                >
                  <div className="p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200/20">
                    <BentoGrid className="grid-cols-3 auto-rows-[8rem] gap-2">
                      {NAV_LINKS.map(({ href, label }) => {
                        const getDescription = () => {
                          switch(label) {
                            case "Inicio":
                              return "Regresa al principio";
                            case "Compañías":
                                return "Conoce mi experiencia corporativa";
                            case "Acerca":
                              return "Descubre mi trayectoria profesional";
                            case "Casos":
                              return "Explora mis proyectos destacados";
                            case "Servicios":
                              return "Conoce cómo puedo ayudarte";
                            case "Contacto":
                              return "Encuentra mis datos de contacto";
                            default:
                              return "Explora esta sección";
                          }
                        };

                        return (
                          <BentoGridItem
                            key={href}
                            title={
                              <div className="grid grid-cols-[0.9fr,auto] items-center gap-3">
                                <div>
                                  <div>{label}</div>
                                  <p className="text-xs text-gray-500/60">{getDescription()}</p>
                                </div>
                                {label === "Casos" && <SpinningIcon />}
                              </div>
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.querySelector(href);
                              if (element) {
                                const navbarHeight = 56 + 32;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.scrollY - navbarHeight;

                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: "smooth"
                                });
                                setIsMobileMenuOpen(false);
                              }
                            }}
                            isActive={activeSection === href}
                            className={`bg-gray-50 hover:bg-gray-100 ${label === "Casos" ? "col-span-2" : ""}`}
                          />
                        );
                      })}
                      <BentoGridItem
                        className="col-span-3 bg-deep-purple hover:bg-gray-100 [&>div>div]:!my-0 [&>div>div]:text-gray-50"
                        onClick={() => window.open(CTA_LINK, '_blank')}
                        title="Conversemos"
                        description="Ingresa a mi calendario para agendar un espacio"
                        header={
                          <div className="h-full">
                            <motion.div
                              initial="initial"
                              animate="animate"
                              variants={{
                                initial: {
                                  backgroundPosition: "100%",
                                },
                                animate: {
                                  backgroundPosition: "-100%",
                                },
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"	
                              }}
                              className="col-span-1 h-full rounded-lg"
                              style={{
                                background: "linear-gradient(90deg, transparent 10%, rgb(243 244 246) 50%, transparent 90%)",
                                backgroundSize: "200% 100%",
                              }}
                            />
                            <div className="col-span-4" />
                          </div>
                        }
                      />
                    </BentoGrid>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <div className="max-w-5xl mx-auto relative">
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-20 p-3 bg-deep-purple text-white rounded-full shadow-lg md:hidden
                hover:bg-deep-purple/90 focus:outline-none focus:ring-2 focus:ring-deep-purple focus:ring-offset-2
                z-50 transition-colors duration-300"
              aria-label="Volver arriba"
            >
              <IoArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;