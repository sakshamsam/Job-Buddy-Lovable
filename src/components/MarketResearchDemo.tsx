
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Award, 
  Target 
} from "lucide-react";

const researchCategories = [
  {
    icon: Globe,
    title: "Company Overview",
    points: [
      "Founded in 2012 with headquarters in San Francisco",
      "Series D funding with $200M+ raised to date",
      "500+ employees across 5 global offices"
    ]
  },
  {
    icon: TrendingUp,
    title: "Market Position",
    points: [
      "15% market share in the enterprise collaboration space",
      "Growing at 35% YoY compared to industry average of 22%",
      "Recently expanded into APAC region with 40% growth"
    ]
  },
  {
    icon: Users,
    title: "Culture & Leadership",
    points: [
      "CEO previously led product at Salesforce for 5 years",
      "Ranked in Top 50 Places to Work for 3 consecutive years",
      "Remote-first policy with quarterly team gatherings"
    ]
  },
  {
    icon: Target,
    title: "Strategic Focus",
    points: [
      "Investing heavily in AI-powered features for 2023",
      "Recent acquisition of data analytics startup DataViz",
      "Expanding enterprise customer base in healthcare sector"
    ]
  },
  {
    icon: Award,
    title: "Competitive Edge",
    points: [
      "Proprietary machine learning algorithm with 3 patents",
      "Industry-leading customer retention rate of 94%",
      "First-to-market with blockchain verification feature"
    ]
  }
];

const MarketResearchDemo = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Strategic <span className="text-purple-primary">Company Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get competitive intelligence and market research to prepare for interviews and stand out as a candidate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Acme Corporation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Comprehensive market intelligence report designed to give you an edge in your application and interview process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-primary">
                    <Globe className="h-5 w-5" />
                    <span className="font-medium">Company Overview</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-primary">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-medium">Market Position</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Culture & Leadership</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-primary">
                    <Target className="h-5 w-5" />
                    <span className="font-medium">Strategic Focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-primary">
                    <Award className="h-5 w-5" />
                    <span className="font-medium">Competitive Edge</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            {researchCategories.map((category, index) => (
              <Card key={index} className="hover-glow">
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <category.icon className="h-5 w-5 text-purple-primary" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <span className="text-purple-primary font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketResearchDemo;
