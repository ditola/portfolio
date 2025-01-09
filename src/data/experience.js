/**
 * @fileoverview Professional experience data
 * @description Defines career history, roles, responsibilities, and achievements
 * across different positions and organizations.
 * 
 * @typedef {Object} Experience
 * @property {string} role - Job title
 * @property {string} company - Company name
 * @property {string} period - Employment duration
 * @property {string[]} achievements - Key accomplishments in the role
 * @property {string[]} technologies - Technologies and tools used
 * 
 * @type {Experience[]}
 */

export const experience = [
  {
    role: "Senior Data Scientist",
    company: "TechCorp",
    period: "2020-Present",
    description: "Leading data science initiatives and ML implementations",
    achievements: [
      "Led team of 5 data scientists",
      "Improved model accuracy by 34%",
      "Reduced operational costs by 46%"
    ],
    technologies: ["Python", "TensorFlow", "AWS"]
  },
  {
    role: "ML Engineer",
    company: "DataVision",
    period: "2018-2020",
    description: "Developed and deployed ML models at scale",
    achievements: [
      "Built real-time prediction system",
      "Increased processing speed by 65%",
      "Implemented automated ML pipeline"
    ],
    technologies: ["PyTorch", "Docker", "GCP"]
  },
  {
    role: "Data Analyst",
    company: "InnovateLabs",
    period: "2016-2018",
    description: "Analytics and business intelligence",
    achievements: [
      "Created executive dashboards",
      "Optimized reporting workflow",
      "Developed KPI tracking system"
    ],
    technologies: ["SQL", "Tableau", "R"]
  }
];

export const EXPERIENCE_DATA = experience; // Alias for backward compatibility