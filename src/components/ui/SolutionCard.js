import React from 'react';
import { IoChevronDown } from "react-icons/io5";

const SolutionCard = ({ solution, isExpanded, onToggle }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        {solution.icon}
        <span className="text-blue-600 font-semibold">{solution.impact}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.problem}</h3>
      <div className={`transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-24'} overflow-hidden`}>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="whitespace-pre-line text-gray-700">{solution.fullDescription}</p>
          </div>
          
          {isExpanded && (
            <>
              <div className="space-y-2">
                {solution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Caso de Éxito: {solution.caseStudy.company}</h4>
                <p>{solution.caseStudy.achievement}</p>
                <p className="text-sm text-gray-600 mt-1">{solution.caseStudy.details}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    <div className="p-4 border-t border-gray-100">
      <div className="flex justify-between items-center">
        <button
          onClick={onToggle}
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <IoChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        {isExpanded && (
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => window.location.href = '#contact'}
          >
            Agendar Consulta
          </button>
        )}
      </div>
    </div>
  </div>
);

export default SolutionCard;