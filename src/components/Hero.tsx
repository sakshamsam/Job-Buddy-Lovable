
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 px-4 md:px-6 lg:pt-24 lg:pb-32 animate-fade-in">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          AI-Powered <span className="text-purple-primary">Cover Letters</span> and Job Insights
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
          Automatically generate personalized cover letters based on job descriptions and your resume. 
          Get competitive market research to stand out in your next interview.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="px-8 hover-scale">
            <Link to="/cover-letter">Create Cover Letter</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8 hover-scale">
            <Link to="/resumes">Upload Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
