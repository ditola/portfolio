import React from 'react';
import { IoChevronDown } from "react-icons/io5";
import { CheckIcon } from "@radix-ui/react-icons";
import Button from './Button';

const SolutionCard = ({ solution, isExpanded, onToggle }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        {solution.icon}
        <span className="text-emerald font-semibold">{solution.impact}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
      <p className="mt-4 text-gray-600">{solution.description}</p>
      <div className={`transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-24'} overflow-hidden`}>
        <div className="space-y-4">
          {solution.features && solution.features.length > 0 && (
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Características principales:</h4>
              <ul className="space-y-2">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isExpanded && solution.benefits && (
            <div className="space-y-2">
              {solution.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald rounded-full"></span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          )}
          {isExpanded && solution.caseStudy && (
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Caso de Éxito: {solution.caseStudy.company}</h4>
              <p>{solution.caseStudy.achievement}</p>
              {solution.caseStudy.details && (
                <p className="text-sm text-gray-600 mt-1">{solution.caseStudy.details}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="p-4 border-t border-gray-100">
      <div className="flex justify-between items-center">
        <button
          onClick={onToggle}
          className="text-emerald hover:text-[#00E693] flex items-center gap-2"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <IoChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        {isExpanded && (
          <Button 
            link="#contact" 
            text="Agendar Consulta" 
            variant="primary" 
          />
        )}
      </div>
    </div>
  </div>
);

export default SolutionCard;