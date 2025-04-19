
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import CoverLetterDemo from '@/components/CoverLetterDemo';
import MarketResearchDemo from '@/components/MarketResearchDemo';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <CoverLetterDemo />
        <MarketResearchDemo />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
