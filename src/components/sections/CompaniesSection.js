import React from 'react';
import { COMPANIES_DATA } from '../../data/companies';
import CompanyCard from '../ui/CompanyCard';

const CompaniesSection = () => {
  const firstRow = COMPANIES_DATA.slice(0, Math.ceil(COMPANIES_DATA.length / 2));
  const secondRow = COMPANIES_DATA.slice(Math.ceil(COMPANIES_DATA.length / 2));

  return (
    <section id="companies" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Organizaciones que respaldan mi trayectoria:</h2>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="flex justify-center gap-4">
            {firstRow.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>

          <div className="flex justify-center gap-4">
            {secondRow.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;