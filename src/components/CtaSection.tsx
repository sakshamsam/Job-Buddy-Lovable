
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-r from-purple-light to-gray-light">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Ready to Supercharge Your Job Applications?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of job seekers who are saving time and landing more interviews with Cover Letter Genius.
        </p>
        <Button size="lg" className="px-8 text-lg hover-scale">
          Get Started For Free
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
