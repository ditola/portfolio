import React from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import CompaniesSection from '../components/sections/CompaniesSection';
import ContactSection from '../components/sections/ContactSection';
import AnimationSection from '../components/sections/AnimationSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <SolutionsSection />
      <ExperienceSection />
      <CompaniesSection />
      <AnimationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;