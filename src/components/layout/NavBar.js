import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { NAV_LINKS } from '../../constants';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-white/75 rounded-2xl shadow-lg border border-gray-200/20">
          <div className="flex justify-between items-center h-14 px-6">
            <a href="#hero" className="flex items-center">
              <span className="text-lg font-bold text-blue-600">Diego Torres</span>
            </a>
            
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? 
                <IoClose className="h-6 w-6" /> : 
                <IoMenu className="h-6 w-6" />
              }
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Agendar Consulta
              </button>
            </div>
          </div>
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;