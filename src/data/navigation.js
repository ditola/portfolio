/**
 * @fileoverview Navigation configuration for the portfolio website
 * @description Defines the navigation items and their properties for the main navigation bar
 * 
 * @typedef {Object} NavigationItem
 * @property {string} label - Display text for the navigation item
 * @property {string} href - Target URL or anchor link
 * 
 * @type {NavigationItem[]}
 */

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];