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
    achievements: [
      "Led team of 5 data scientists",
      "Improved model accuracy by 34%"
    ],
    technologies: ["Python", "TensorFlow", "AWS"]
  },
  // ... other experiences
];