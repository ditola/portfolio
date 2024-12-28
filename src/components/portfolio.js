import React, { useState } from 'react';
import { Bot } from './path/to/Bot'; // Adjust the import path as necessary
import { EfficiencyIcon } from './path/to/Bot'; // Adjust the import path as necessary
import { ChevronDown } from './path/to/ChevronDown'; // Adjust the import path as necessary
import { Linkedin } from './path/to/Linkedin'; // Adjust the import path as necessary

const Portfolio = () => {
  const portfolioCases = [
    {
      title: "Efficiency Improvement",
      icon: <EfficiencyIcon className="w-12 h-12 text-green-600" />, // Adjust the import path as necessary
      description: "Achieve significant efficiency improvements through optimized processes.",
      details: "View case study",
      metrics: "46% efficiency gain"
    },
    {
      title: "AI-Powered Solutions",
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      description: "Implement AI solutions that deliver real business value. Focus on practical applications and measurable results.",
      details: "Explore AI solutions",
      metrics: "78% accuracy rate"
    }
  ];

  const [expandedStates, setExpandedStates] = useState(portfolioCases.map(() => false));

  return (
    <>
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <span className="text-lg font-bold text-blue-600">Diego Torres</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-8 items-center">
            <div className="md:col-span-5 space-y-6">
              <div className="text-sm font-semibold text-blue-600 mb-2">Data Science & ML Engineering</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bridging Data Science and Business Impact
              </h1>
              <p className="text-xl text-gray-600">
                Electronic Engineer and MBA candidate helping executives solve complex business problems through data science and machine learning. Specializing in clear, actionable insights using the SCQA and Minto Pyramid principles.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-600">34% Process Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-600">46% Reliability Improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-600">78% Uncertainty Reduction</span>
                </div>
              </div>
              <div className="pt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Explore Solutions
                </button>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-2 translate-y-2 opacity-20"></div>
                <img
                  src="/api/placeholder/600/400"
                  alt="Data Science Visualization"
                  className="relative rounded-lg shadow-xl w-full hover:transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Venn Diagram */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where I Add Value</h2>
            <p className="text-gray-600">At the intersection of data science, engineering, and business impact</p>
          </div>
          
          <div className="relative h-96 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="150" r="120" fill="rgba(59, 130, 246, 0.1)" />
                <circle cx="120" cy="270" r="120" fill="rgba(16, 185, 129, 0.1)" />
                <circle cx="280" cy="270" r="120" fill="rgba(245, 158, 11, 0.1)" />
                
                <text x="200" y="120" textAnchor="middle" className="text-sm font-medium">Data Science</text>
                <text x="200" y="140" textAnchor="middle" className="text-xs">ML/AI, Statistics</text>
                <text x="200" y="160" textAnchor="middle" className="text-xs">Predictive Modeling</text>
                
                <text x="120" y="240" textAnchor="middle" className="text-sm font-medium">Engineering</text>
                <text x="120" y="260" textAnchor="middle" className="text-xs">Full Stack</text>
                <text x="120" y="280" textAnchor="middle" className="text-xs">System Design</text>
                
                <text x="280" y="240" textAnchor="middle" className="text-sm font-medium">Business</text>
                <text x="280" y="260" textAnchor="middle" className="text-xs">Executive MBA</text>
                <text x="280" y="280" textAnchor="middle" className="text-xs">Strategy</text>
                
                <text x="200" y="240" textAnchor="middle" className="text-base font-bold">Impact</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50" id="portfolio">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioCases.map((item, index) => {
                const isExpanded = expandedStates[index];
                const toggleExpand = () => {
                    const newExpandedStates = [...expandedStates];
                    newExpandedStates[index] = !newExpandedStates[index];
                    setExpandedStates(newExpandedStates);
                };
              
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <div className={`transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-24'} overflow-hidden`}>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {isExpanded && (
                      <div className="py-4">
                        <h4 className="font-semibold mb-2">How it works:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Analysis of current processes</li>
                          <li>Implementation of ML models</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={toggleExpand}
                      className="text-blue-600 hover:text-blue-700 flex items-center"
                    >
                      Find out more
                      <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    <span className="text-sm text-gray-500">{item.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Unlock Your Potential with Diego</h2>
          <p className="text-xl mb-8">
            Connect with Diego to explore innovative collaboration opportunities in Business Intelligence,
            Machine Learning, and AI.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            <a 
              href="https://linkedin.com/in/diegotorresll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <div className="text-center text-sm text-gray-600">
            © 2024 Diego Torres. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;