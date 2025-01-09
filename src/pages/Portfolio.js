/**
 * @component Portfolio
 * @description Main portfolio page component that orchestrates the layout and sections
 * of the personal portfolio website. Includes navigation, hero section, solutions,
 * experience showcase, company partnerships, animations, and contact information.
 * 
 * Component Structure:
 * - NavBar: Top navigation
 * - HeroSection: Introduction and main call-to-action
 * - SolutionsSection: Services and solutions offered
 * - ExperienceSection: Professional background
 * - CompaniesSection: Partner companies and clients
 * - AnimationSection: Interactive scroll animations
 * - ContactSection: Contact form and information
 * - Footer: Site footer with links and copyright
 * 
 * @author Diego Torres
 * @version 1.0.0
 */

import React from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import CompaniesSection from '../components/sections/CompaniesSection';
import ContactSection from '../components/sections/ContactSection';
import SkillSection from '../components/sections/SkillSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <SolutionsSection />
      <ExperienceSection />
      <CompaniesSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;