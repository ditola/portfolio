/**
 * @fileoverview Case studies and success stories
 * @description Defines the portfolio of client cases, including challenges solved,
 * impact achieved, and implementation details.
 */

import { IoRocket, IoTrendingUp, IoSpeedometer } from "react-icons/io5";

export const cases = [
  {
    id: "alicorp-optimization",
    title: "Alicorp's ML Optimization",
    shortDescription: "46% efficiency improvement through ML",
    heroImage: "/cases/alicorp-hero.png",
    problem: "Complex decision-making slowing operations",
    solution: "Enterprise-grade machine learning solutions that transform operational data into actionable insights.",
    icon: IoSpeedometer,
    impact: {
      headline: "46% Efficiency Improvement",
      metrics: [
        { value: "46%", label: "Efficiency Gain" },
        { value: "28%", label: "Cost Reduction" },
        { value: "89%", label: "Prediction Accuracy" }
      ]
    },
    quote: {
      text: "The ML implementation has transformed how we make operational decisions. The impact on our efficiency has been remarkable.",
      author: "Operations Director",
      company: "Alicorp"
    },
    details: [
      "Automated model training and deployment",
      "Real-time predictions for operational decisions",
      "Custom algorithms for specific business needs",
      "Integrated monitoring and retraining pipeline"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker"],
    implementation: {
      approach: "Agile methodology with 2-week sprints",
      timeline: "4 months",
      team: "4 data scientists, 2 ML engineers"
    }
  },
  {
    id: "gloria-analytics",
    title: "Grupo Gloria's Predictive Analytics",
    shortDescription: "28% revenue growth through data",
    heroImage: "/cases/gloria-hero.png",
    problem: "Struggling to predict market changes",
    solution: "Advanced analytics platform that helps stay ahead of market trends with data-driven decisions.",
    icon: IoTrendingUp,
    impact: {
      headline: "28% Revenue Growth",
      metrics: [
        { value: "28%", label: "Revenue Growth" },
        { value: "34%", label: "Forecast Accuracy" },
        { value: "65%", label: "Time Saved" }
      ]
    },
    quote: {
      text: "The predictive analytics platform has given us unprecedented visibility into market trends. We can now make proactive decisions with confidence.",
      author: "Chief Strategy Officer",
      company: "Grupo Gloria"
    },
    details: [
      "Market trend analysis engine",
      "Risk assessment framework",
      "Demand forecasting system",
      "Automated reporting dashboard"
    ],
    technologies: ["R", "Python", "Power BI", "Azure"],
    implementation: {
      approach: "Phased rollout with continuous feedback",
      timeline: "6 months",
      team: "3 data analysts, 2 BI developers"
    }
  },
  {
    id: "vitapro-automation",
    title: "Vitapro's AI Automation",
    shortDescription: "75% process automation achieved",
    heroImage: "/cases/vitapro-hero.png",
    problem: "Manual processes consuming resources",
    solution: "AI-powered automation solutions that streamline operations and reduce manual effort.",
    icon: IoRocket,
    impact: {
      headline: "75% Time Saved",
      metrics: [
        { value: "75%", label: "Time Saved" },
        { value: "32%", label: "Cost Reduction" },
        { value: "94%", label: "Process Accuracy" }
      ]
    },
    quote: {
      text: "The automation solution has revolutionized our operations. What used to take days now happens in minutes with greater accuracy.",
      author: "Head of Operations",
      company: "Vitapro"
    },
    details: [
      "Process automation framework",
      "Intelligent workflow routing",
      "24/7 automated operations",
      "Error detection and correction"
    ],
    technologies: ["Python", "UiPath", "SQL Server", "Azure Functions"],
    implementation: {
      approach: "Iterative automation with priority queuing",
      timeline: "5 months",
      team: "3 automation engineers, 1 solution architect"
    }
  }
];

export const CASES_DATA = cases; 