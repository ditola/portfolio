import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { NAV_LINKS } from '../../data/navigation';
import Button from '../ui/Button';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Fallback to an empty array if NAV_LINKS is undefined
  const links = NAV_LINKS || [];

  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <div className="max-w-5xl mx-auto rounded-2xl">
        <div className="backdrop-blur-md bg-gray-50/80 rounded-lg shadow-lg">
          <div className="flex justify-between items-center h-14 px-6">
            <a href="#hero" className="flex items-center">
              <span className="text-lg font-bold text-emerald">Diego Torres</span>
            </a>
            <button 
              className="md:hidden text-gray-800 hover:text-emerald transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
            </button>
            <div className="hidden md:flex items-center space-x-8">
              {links.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="text-gray-800 hover:text-emerald transition-colors font-medium"
                >
                  {label}
                </a>
              ))}
              <Button 
                link="https://tidycal.com/diegotorresll/30-min" 
                text="Conversemos" 
                variant="primary"
              />
            </div>
          </div>
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-6 py-4 space-y-4">
              {links.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="block text-gray-800 hover:text-emerald transition-colors font-medium"
                >
                  {label}
                </a>
              ))}
              <Button 
                link="https://tidycal.com/diegotorresll/30-min" 
                text="Conversemos" 
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;