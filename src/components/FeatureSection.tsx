
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, BarChart3 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Management",
    description: "Upload and store multiple versions of your resume to quickly select the most relevant one for each application."
  },
  {
    icon: BookOpen,
    title: "Cover Letter Generation",
    description: "Create personalized cover letters by simply providing a job URL and selecting your resume to apply quickly."
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Access concise market analysis reports to better understand potential employers before interviews."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Features That <span className="text-purple-primary">Accelerate</span> Your Job Search
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save time and improve your job applications with our powerful tools designed for modern job seekers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-glow">
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-purple-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
