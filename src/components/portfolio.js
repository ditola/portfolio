import React, { useState } from 'react';
import { IoBarChart, IoChevronDown, IoTrendingUp, IoMenu, IoClose } from "react-icons/io5";
import { LuBot } from "react-icons/lu";
import { FaLinkedin } from 'react-icons/fa';

// Update image imports with new structure
import profileHero from '../assets/images/hero/profile-hero.jpg';
import grupogloriaLogo from '../assets/images/logos/grupogloria.png';
import vitaproLogo from '../assets/images/logos/vitapro.png';
import alicorpLogo from '../assets/images/logos/alicorp.png';
import saviaLogo from '../assets/images/logos/savia.png';
import diacsaLogo from '../assets/images/logos/diacsa.png';

// Constants for Navigation and Footer
const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

// Experience and Skills Data
const EXPERIENCE = [
  {
    company: "Grupo Gloria",
    role: "Especialista de Transformación Digital // Finanzas",
    period: "October 2023 – September 2024",
    description: "Led the diagnosis and automation of corporate financial consolidation processes (P&L, balance sheet, and cash flow) by implementing an integrated dashboard (Power BI + SAP).",
    achievements: [
      "Process diagnosis and identification of automation opportunities, 63% of the team's time was dedicated to repetitive tasks",
      "Creation of a digital transformation roadmap and bluebook in financial planning, reducing workload by 34% through reporting automation"
    ]
  },
  {
    company: "Vitapro",
    role: "Lead Project Manager - IoT",
    period: "October 2023 – September 2024",
    description: "Led the diagnosis and automation of corporate financial consolidation processes (P&L, balance sheet, and cash flow) by implementing an integrated dashboard (Power BI + SAP).",
    achievements: [
      "Process diagnosis and identification of automation opportunities, 63% of the team's time was dedicated to repetitive tasks",
      "Creation of a digital transformation roadmap and bluebook in financial planning, reducing workload by 34% through reporting automation"
    ]
  },
];

const SKILLS = {
  technical: [
    "Full Stack Development (MERN)",
    "Data Analysis & Visualization",
    "Python + SQL",
    "Business Intelligence"
  ],
  management: [
    "Product Management",
    "Project Management",
    "OKR & Agile",
    "Technical Leadership"
  ]
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-white/75 rounded-2xl shadow-lg border border-gray-200/20">
          <div className="flex justify-between items-center h-14 px-6">
            <a href="#hero" className="flex items-center">
              <span className="text-lg font-bold text-blue-600">Diego Torres</span>
            </a>
            
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? 
                <IoClose className="h-6 w-6" /> : 
                <IoMenu className="h-6 w-6" />
              }
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Let's Connect
              </button>
            </div>
          </div>

          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map(({ href, label }) => (
                <a 
                  key={href}
                  href={href}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              ))}
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

const ExperienceCard = ({ experience }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
        <p className="text-blue-600">{experience.company}</p>
      </div>
      <span className="text-sm text-gray-500">{experience.period}</span>
    </div>
    <p className="text-gray-600 mb-4">{experience.description}</p>
    <ul className="list-disc list-inside space-y-2">
      {experience.achievements.map((achievement, index) => (
        <li key={index} className="text-gray-600">{achievement}</li>
      ))}
    </ul>
  </div>
);

const AboutSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Expert in digital transformation and technological product development, with leadership experience in consumer goods companies. 
          Skilled in identifying customer needs and pain points to design and implement digital solutions, ensuring effectiveness and 
          efficiency through OKRs and the Agile framework. Bilingual Electronic Engineer and candidate for a global executive MBA.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <ul className="space-y-2">
            {SKILLS.technical.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-600">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Management Skills</h3>
          <ul className="space-y-2">
            {SKILLS.management.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-600">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="space-y-6">
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  </section>
);

const CompaniesSection = () => {
  const companies = [
    { name: 'Grupo Gloria', logo: grupogloriaLogo },
    { name: 'Vitapro', logo: vitaproLogo },
    { name: 'Alicorp', logo: alicorpLogo },
    { name: 'Savia Peru', logo: saviaLogo },
    { name: 'Diacsa', logo: diacsaLogo },
  ];

  // Split companies into two rows
  const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
  const secondRow = companies.slice(Math.ceil(companies.length / 2));

  return (
    <section id="companies" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Companies I've Worked With</h2>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* First Row */}
          <div className="flex justify-center gap-4">
            {firstRow.map((company) => (
              <div 
                key={company.name}
                className="bg-white rounded-lg p-6 flex items-center justify-center w-48 h-24 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-w-[100%] max-h-[100%] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-center gap-4">
            {secondRow.map((company) => (
              <div 
                key={company.name}
                className="bg-white rounded-lg p-6 flex items-center justify-center w-48 h-24 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-w-[100%] max-h-[100%] w-auto h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Footer
const Footer = () => (
  <footer className="py-8 bg-white border-t border-gray-200">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Diego Torres</p>
        <a 
          href="https://linkedin.com/in/diegotorresll" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
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
      <section id="hero" className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-white">
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
      <section id="expertise" className="py-16 bg-white">
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
      <section id="portfolio" className="py-16 bg-gray-50">
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
      
      <AboutSection />
      <ExperienceSection />
      <CompaniesSection />

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white">
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