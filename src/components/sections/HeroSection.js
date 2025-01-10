import React from 'react';
import { CASES_DATA } from '../../data/cases';
import { IoChevronDown } from "react-icons/io5";
import Button from '../ui/Button';

const HeroSection = () => (
  <section id="hero" className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-emerald-50 to-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-8 items-center">
        <div className="md:col-span-5 space-y-6">
          <div className="text-sm font-semibold text-emerald mb-2">
            Transformando desafíos empresariales en resultados medibles
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            ¿Te enfrentas a alguno de estos retos?
          </h1>
          <div className="space-y-4 pt-4">
            {CASES_DATA.map(caseStudy => (
              <a 
                key={caseStudy.id} 
                href={`#${caseStudy.id}`}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <caseStudy.icon className="w-6 h-6 text-emerald" />
                    <div>
                      <p className="font-medium text-gray-900">{caseStudy.problem}</p>
                      <p className="text-emerald font-semibold">{caseStudy.impact.headline}</p>
                    </div>
                  </div>
                  <IoChevronDown className="text-gray-400" />
                </div>
              </a>
            ))}
          </div>
          <div className="pt-6">
            <Button 
              link="#cases" 
              text="Ver Casos" 
              variant="primary" 
            />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald rounded-lg transform translate-x-2 translate-y-2 opacity-20"></div>
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 to-transparent mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Abstract Technology Visualization"
                className="w-full hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;