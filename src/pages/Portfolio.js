/**
 * @component Portfolio
 * @description Main portfolio page component that orchestrates the layout and sections
 * of the personal portfolio website. Implements performance optimizations through
 * React.lazy loading and component memoization.
 * 
 * Performance Optimizations:
 * - Lazy loading of section components
 * - Memoization of static components
 * - Optimized rendering with React.memo
 * 
 * Component Structure:
 * - NavBar: Top navigation
 * - HeroSection: Introduction and main call-to-action
 * - CasesSection: Project case studies
 * - CompaniesSection: Partner companies and clients
 * - AboutSection: Personal background and approach
 * - ContactSection: Contact form and information
 * - Footer: Site footer with links and copyright
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { Suspense } from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

// Lazy load section components for better initial load performance
const HeroSection = React.lazy(() => import('../components/sections/HeroSection'));
const CasesSection = React.lazy(() => import('../components/sections/CasesSection'));
const CompaniesSection = React.lazy(() => import('../components/sections/CompaniesSection'));
const ContactSection = React.lazy(() => import('../components/sections/ContactSection'));
const AboutSection = React.lazy(() => import('../components/sections/AboutSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Portfolio = React.memo(() => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CasesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CompaniesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  );
});

// Add display name for better debugging
Portfolio.displayName = 'Portfolio';

export default Portfolio;