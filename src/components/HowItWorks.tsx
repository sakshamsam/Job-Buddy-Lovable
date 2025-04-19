
import React from 'react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Upload Your Resume",
    description: "Start by uploading your resume. You can store multiple versions for different job types."
  },
  {
    number: "02",
    title: "Paste Job Description",
    description: "Enter the job URL or paste the job description you're applying for."
  },
  {
    number: "03",
    title: "Select Writing Style",
    description: "Choose from multiple writing styles to match the company culture."
  },
  {
    number: "04",
    title: "Generate & Customize",
    description: "Our AI generates a personalized cover letter that you can edit and download."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How It <span className="text-purple-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to create the perfect cover letter and prepare for your interview.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="text-4xl font-bold text-purple-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="px-8 hover-scale">Try It Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
