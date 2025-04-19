
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const writingStyles = [
  {
    id: "formal",
    label: "Formal",
    content: `Dear Hiring Manager,

I am writing to express my interest in the Software Engineer position at Acme Corporation. With over 5 years of experience in full-stack development and a proven track record of delivering robust applications, I believe I am well-positioned to contribute to your team's success.

My experience with React, Node.js, and cloud infrastructure aligns perfectly with your requirements. In my current role at Tech Solutions Inc., I reduced application load time by 40% and implemented CI/CD pipelines that decreased deployment time by 25%.

I am excited about the opportunity to bring my technical expertise and problem-solving skills to Acme Corporation and help drive your digital transformation initiatives.

Sincerely,
Jordan Smith`
  },
  {
    id: "creative",
    label: "Creative",
    content: `Dear Acme Corporation Team,

When I saw your Software Engineer position, I couldn't help but think: "This is where code meets creativity!" As someone who's been building digital experiences for over 5 years, I'm excited about the chance to join your innovative team.

I've been the architect behind Tech Solutions' most successful app redesign, weaving React and Node.js together to create seamless user journeys. My code doesn't just work—it tells a story of efficiency, with 40% faster load times and a deployment process that's practically at warp speed.

I'd love to bring my technical toolkit and creative problem-solving approach to help Acme push the boundaries of what's possible.

Ready to code something amazing together,
Jordan Smith`
  },
  {
    id: "storytelling",
    label: "Storytelling",
    content: `Dear Hiring Team,

My journey with coding began when I built my first website at 14. What started as curiosity has evolved into a 5-year professional adventure in software engineering, and I believe the next chapter could be with Acme Corporation.

Throughout my career at Tech Solutions, I've faced challenging plot twists: legacy systems that needed modernization, performance bottlenecks that seemed impossible to solve. The resolution? A complete React/Node.js transformation that resulted in applications running 40% faster and deployments that happen in minutes instead of hours.

I see Acme's digital transformation as an exciting narrative I'd like to help write, bringing my experience as both a technical lead and collaborative team member to your story.

Eager to continue this conversation,
Jordan Smith`
  }
];

const CoverLetterDemo = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Choose Your <span className="text-purple-primary">Writing Style</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select from multiple writing styles to match the company culture and make your application stand out.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="formal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {writingStyles.map((style) => (
                <TabsTrigger key={style.id} value={style.id} className="text-sm md:text-base">
                  {style.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {writingStyles.map((style) => (
              <TabsContent key={style.id} value={style.id} className="mt-0">
                <Card className="border shadow-lg animate-scale-in">
                  <CardContent className="p-6">
                    <div className="whitespace-pre-line font-serif text-sm md:text-base leading-relaxed">
                      {style.content}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CoverLetterDemo;
