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
    id: "ml-optimization",
    title: "ML Optimization",
    shortDescription: "Optimize business processes with ML",
    problem: "Complex decision-making slowing you down?",
    fullDescription: "Enterprise-grade machine learning solutions that transform your data into actionable insights.",
    icon: "chart-bar",
    impact: "89% Accuracy Rate",
    metrics: { value: "89%", label: "Accuracy Rate" },
    benefits: [
      "Automated model training",
      "Real-time predictions",
      "Custom algorithms"
    ],
    caseStudy: {
      company: "TechCorp",
      achievement: "46% reduction in operational costs",
      details: "Implemented automated decision system"
    }
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    shortDescription: "Forecast business outcomes",
    problem: "Struggling to predict market changes?",
    fullDescription: "Advanced analytics that help you stay ahead of market trends and make data-driven decisions.",
    icon: "trending-up",
    impact: "34% Better Forecasting",
    metrics: { value: "34%", label: "Forecast Accuracy" },
    benefits: [
      "Market trend analysis",
      "Risk assessment",
      "Demand forecasting"
    ],
    caseStudy: {
      company: "DataVision",
      achievement: "28% revenue growth",
      details: "Implemented predictive market analysis"
    }
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    shortDescription: "Automate repetitive tasks",
    problem: "Manual processes eating up resources?",
    fullDescription: "AI-powered automation solutions that streamline operations and reduce manual effort.",
    icon: "bot",
    impact: "75% Time Saved",
    metrics: { value: "75%", label: "Efficiency Gain" },
    benefits: [
      "Process automation",
      "Intelligent workflows",
      "24/7 operation"
    ],
    caseStudy: {
      company: "InnovateLabs",
      achievement: "3.2x ROI in first year",
      details: "Automated customer service processes"
    }
  }
];

export const CORE_SOLUTIONS = solutions;