/**
 * @fileoverview Navigation and social links configuration
 * 
 * @description Defines the main navigation structure and social media links
 * for the portfolio website. All links are configured here for easy maintenance
 * and consistency across components.
 * 
 * @version 1.2.0
 */

export const NAV_LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#cases', label: 'Casos' },
  { href: '#companies', label: 'Compañías' },
  { href: '#about', label: 'Acerca' },
  { href: '#contact', label: 'Contacto' }
];

export const SOCIAL_LINKS = [
  { 
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/diegotorresll',
    icon: 'linkedin'
  },
  { 
    name: 'GitHub',
    href: 'https://github.com/ditola',
    icon: 'github'
  }
];

export const CTA_LINK = 'https://tidycal.com/diegotorresll/30-min';