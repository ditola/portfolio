import React, { useState } from 'react';
import { IoBarChart, IoChevronDown, IoTrendingUp, IoLogoLinkedin, IoMenu, IoClose } from "react-icons/io5";
import { LuBot } from "react-icons/lu";

// Update image imports with new structure
import profileHero from '../assets/images/hero/profile-hero.jpg';
import grupogloriaLogo from '../assets/images/logos/grupogloria.png';
import vitaproLogo from '../assets/images/logos/vitapro.png';
import alicorpLogo from '../assets/images/logos/alicorp.png';
import saviaLogo from '../assets/images/logos/savia.png';
import diacsaLogo from '../assets/images/logos/diacsa.png';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-white/75 rounded-2xl shadow-lg border border-gray-200/20">
          <div className="flex justify-between items-center h-14 px-6">
            <div className="flex items-center">
              <span className="text-lg font-bold text-blue-600">Diego Torres</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 
                <IoClose className="h-6 w-6" /> : 
                <IoMenu className="h-6 w-6" />
              }
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#companies" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Let's Connect
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#portfolio" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </a>
              <a href="#companies" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Experience
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompaniesSection = () => {
  const companies = [
    { name: 'Grupo Gloria', logo: grupogloriaLogo },
    { name: 'Vitapro', logo: vitaproLogo },
    { name: 'Alicorp', logo: alicorpLogo },
    { name: 'Savia Peru', logo: saviaLogo },
    { name: 'Diacsa', logo: diacsaLogo },
  ];

  const firstRowCount = companies.length > 3 ? 3 : companies.length;
  const secondRowCount = companies.length > 3 ? companies.length - 3 : 0;

  return (
    <section id="companies" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Companies I've Worked With</h2>
        
        <div className="grid grid-cols-3 gap-8 items-center mb-8">
          {companies.slice(0, firstRowCount).map((company) => (
            <div key={company.name} className="p-6 hover:scale-105 transition-transform">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all" 
              />
            </div>
          ))}
        </div>

        {secondRowCount > 0 && (
          <div className={`grid grid-cols-${secondRowCount} gap-8 items-center w-fit mx-auto`}>
            {companies.slice(firstRowCount).map((company) => (
              <div key={company.name} className="p-6 hover:scale-105 transition-transform">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all" 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 bg-gray-900 text-gray-400">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Footer columns */}
        {/* ...existing footer column code... */}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm">© 2024 Diego Torres. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Portfolio = () => {
  const portfolioCases = [
    {
      title: "Executive Dashboards & Storytelling",
      icon: <IoBarChart className="w-12 h-12 text-blue-600" />,
      description: "Learn how to create compelling executive dashboards that tell your data story effectively. Includes a micro-bluebook on data visualization best practices and the SCQA framework.",
      details: "Download free dashboard blueprint",
      metrics: "34% faster decision-making"
    },
    {
      title: "Advanced Analytics & ML",
      icon: <IoTrendingUp className="w-12 h-12 text-blue-600" />,
      description: "Deep dive into how machine learning can optimize your business processes. From predictive analytics to process automation.",
      details: "View case study",
      metrics: "46% efficiency gain"
    },
    {
      title: "AI-Powered Solutions",
      icon: <LuBot className="w-12 h-12 text-blue-600" />,
      description: "Implement AI solutions that deliver real business value. Focus on practical applications and measurable results.",
      details: "Explore AI solutions",
      metrics: "78% accuracy rate"
    }
  ];

  const [expandedStates, setExpandedStates] = useState(new Array(portfolioCases.length).fill(false));

  const toggleExpanded = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
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
                  src={profileHero}
                  alt="Diego Torres - Data Science & ML Engineering"
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
                
                <text x="200" y="100" textAnchor="middle" className="text-sm font-medium">Data Science</text>
                <text x="200" y="120" textAnchor="middle" className="text-xs">ML/AI, Statistics</text>
                <text x="200" y="140" textAnchor="middle" className="text-xs">Predictive Modeling</text>
                
                <text x="100" y="280" textAnchor="middle" className="text-sm font-medium">Engineering</text>
                <text x="100" y="300" textAnchor="middle" className="text-xs">Full Stack</text>
                <text x="100" y="320" textAnchor="middle" className="text-xs">System Design</text>
                
                <text x="300" y="280" textAnchor="middle" className="text-sm font-medium">Business</text>
                <text x="300" y="300" textAnchor="middle" className="text-xs">Executive MBA</text>
                <text x="300" y="320" textAnchor="middle" className="text-xs">Strategy</text>
                
                <text x="200" y="240" textAnchor="middle" className="text-base font-bold">Impact</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50" id="portfolio">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioCases.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <div className={`transition-all duration-300 ${expandedStates[index] ? 'h-auto' : 'h-24'} overflow-hidden`}>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {expandedStates[index] && (
                    <div className="py-4">
                      <h4 className="font-semibold mb-2">How it works:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Analysis of current processes</li>
                        <li>Implementation of ML models</li>
                        <li>Continuous optimization</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button 
                    onClick={() => toggleExpanded(index)}
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    Find out more
                    <IoChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${expandedStates[index] ? 'rotate-180' : ''}`} />
                  </button>
                  <span className="text-sm text-gray-500">{item.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CompaniesSection />
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
      <Footer />
    </div>
  );
};

export default Portfolio;