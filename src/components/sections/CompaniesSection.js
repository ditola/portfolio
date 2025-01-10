import React from 'react';
import { COMPANIES_DATA } from '../../data/companies';
import CompanyCard from '../ui/CompanyCard';

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Organizaciones que respaldan mi trayectoria:</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {COMPANIES_DATA.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;