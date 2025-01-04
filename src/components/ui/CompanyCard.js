import React from 'react';

const CompanyCard = ({ company }) => (
  <div className="bg-white rounded-lg p-6 flex items-center justify-center w-48 h-24 hover:shadow-lg transition-shadow">
    <img 
      src={`/assets/images/logos/${company.logo}`}
      alt={`${company.name} logo`} 
      className="max-w-[100%] max-h-[100%] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
    />
  </div>
);

export default CompanyCard;