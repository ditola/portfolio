/**
 * @component CompaniesSection
 * @description Displays a section of company logos with different behaviors for mobile and desktop:
 * - Mobile: Infinite horizontal scroll animation
 * - Desktop: Static single row centered layout
 * 
 * The component uses a double array of companies for mobile to ensure smooth infinite scrolling,
 * while desktop view shows the original array in a single row.
 */
import React from 'react';
import { COMPANIES_DATA } from '../../data/companies';
import CompanyCard from '../ui/CompanyCard';

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">
          Experiencia respaldada por empresas líderes
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Colaborando con organizaciones que impulsan la innovación a través de la ciencia de datos y machine learning.
        </p>
        
        <div className="overflow-hidden">
          {/* Mobile scrolling view - Uses doubled array for smooth infinite scroll */}
          <div className="md:hidden">
            <div className="companies-scroll">
              {[...COMPANIES_DATA, ...COMPANIES_DATA].map((company, index) => (
                <div 
                  key={`${company.name}-${index}`} 
                  className="flex-shrink-0 w-[160px]"
                >
                  <CompanyCard company={company} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop single row view - Static centered layout */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {COMPANIES_DATA.map((company) => (
              <div 
                key={company.name} 
                className="flex-shrink-0 w-[200px]"
              >
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;