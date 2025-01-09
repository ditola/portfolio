/**
 * @fileoverview Company partnerships and client data
 * @description Defines the list of companies and organizations that have been clients
 * or partners, including their logos, descriptions, and relevant metrics.
 * 
 * @typedef {Object} Company
 * @property {string} name - Company name
 * @property {string} logo - Path to company logo image
 * @property {string} description - Brief description of partnership/engagement
 * @property {Object} metrics - Key performance metrics
 * @property {string} metrics.value - Numerical value of the metric
 * @property {string} metrics.label - Description of what the metric represents
 * 
 * @type {Company[]}
 */

export const companies = [
  {
    name: "TechCorp",
    logo: "/images/companies/techcorp.png",
    description: "Implemented ML solutions for process optimization",
    metrics: { value: "46%", label: "Efficiency Improvement" }
  },
  // ... other companies
];