/**
 * @fileoverview Solutions and services offered
 * @description Defines the portfolio of solutions, including technical capabilities,
 * business impact, and implementation details.
 * 
 * @typedef {Object} Solution
 * @property {string} title - Solution name
 * @property {string} description - Detailed description
 * @property {string} icon - Icon identifier
 * @property {Object} metrics - Performance metrics
 * @property {string} metrics.value - Numerical value
 * @property {string} metrics.label - Metric description
 * @property {string[]} features - Key features and capabilities
 * 
 * @type {Solution[]}
 */

export const solutions = [
  {
    title: "ML Optimization",
    description: "Enterprise-grade machine learning solutions",
    icon: "chart-bar",
    metrics: { value: "89%", label: "Accuracy Rate" },
    features: [
      "Automated model training",
      "Real-time predictions",
      "Custom algorithms"
    ]
  },
  // ... other solutions
];