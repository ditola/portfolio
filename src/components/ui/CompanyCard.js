import React from 'react';

const CompanyCard = ({ company }) => (
  <a 
    href={company.linkedIn}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center h-24 transition-all group"
  >
    <div className="flex items-center justify-center">
      <img 
        src={company.logo}
        alt={`${company.name} logo`} 
        className="max-w-[120px] h-[48px] object-contain grayscale brightness-95 contrast-75 group-hover:brightness-60 group-hover:contrast-100 transition-all duration-300" 
      />
    </div>
  </a>
);

export default CompanyCard;