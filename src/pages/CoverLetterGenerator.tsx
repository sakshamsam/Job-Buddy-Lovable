
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const writingStyles = [
  { id: "formal", label: "Formal", description: "Professional and straightforward, ideal for traditional companies." },
  { id: "creative", label: "Creative", description: "Dynamic and engaging, great for innovative startups." },
  { id: "storytelling", label: "Storytelling", description: "Narrative approach that connects your experience to the role." },
  { id: "super-creative", label: "Super Creative", description: "Bold and distinctive, perfect for creative industries." },
  { id: "engaging", label: "Engaging", description: "Conversational and friendly, good for customer-facing roles." }
];

const resumes = [
  { id: "software-dev", name: "Software Developer Resume" },
  { id: "marketing", name: "Marketing Resume" },
  { id: "product", name: "Product Manager Resume" }
];

const CoverLetterGenerator = () => {
  const [activeTab, setActiveTab] = useState("input");
  const [jobUrl, setJobUrl] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedResume, setSelectedResume] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("formal");
  const [generatedLetter, setGeneratedLetter] = useState("");

  const handleGenerate = () => {
    // In a real app, this would call an API to generate the letter
    setGeneratedLetter(`Dear Hiring Manager,

I am writing to express my interest in the Software Engineer position at Acme Corporation. With over 5 years of experience in full-stack development and a proven track record of delivering robust applications, I believe I am well-positioned to contribute to your team's success.

My experience with React, Node.js, and cloud infrastructure aligns perfectly with your requirements. In my current role at Tech Solutions Inc., I reduced application load time by 40% and implemented CI/CD pipelines that decreased deployment time by 25%.

I am excited about the opportunity to bring my technical expertise and problem-solving skills to Acme Corporation and help drive your digital transformation initiatives.

Sincerely,
Jordan Smith`);
    
    setActiveTab("result");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 bg-gray-light">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Cover Letter <span className="text-purple-primary">Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create a personalized cover letter in minutes by providing job details and selecting your preferred style.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="input">Input Details</TabsTrigger>
                  <TabsTrigger value="result" disabled={!generatedLetter}>
                    Generated Letter
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="input" className="mt-0 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="jobUrl">Job Posting URL (optional)</Label>
                      <Input 
                        id="jobUrl" 
                        placeholder="https://example.com/job-posting" 
                        value={jobUrl}
                        onChange={(e) => setJobUrl(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="jobDescription">Job Description</Label>
                      <Textarea 
                        id="jobDescription" 
                        placeholder="Paste the job description here..." 
                        className="min-h-32" 
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="resume">Select Resume</Label>
                      <Select value={selectedResume} onValueChange={setSelectedResume}>
                        <SelectTrigger id="resume">
                          <SelectValue placeholder="Choose a resume" />
                        </SelectTrigger>
                        <SelectContent>
                          {resumes.map((resume) => (
                            <SelectItem key={resume.id} value={resume.id}>
                              {resume.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Writing Style</Label>
                      <RadioGroup 
                        value={selectedStyle} 
                        onValueChange={setSelectedStyle}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {writingStyles.map((style) => (
                          <div key={style.id} className="flex items-start space-x-2">
                            <RadioGroupItem value={style.id} id={style.id} className="mt-1" />
                            <div className="grid gap-1">
                              <Label htmlFor={style.id} className="font-medium">
                                {style.label}
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                {style.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <Button 
                      onClick={handleGenerate} 
                      className="w-full mt-6"
                      disabled={!jobDescription || !selectedResume}
                    >
                      Generate Cover Letter
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="result" className="mt-0">
                  <div className="space-y-6">
                    <div className="bg-white border rounded-md p-6">
                      <div className="whitespace-pre-line font-serif leading-relaxed">
                        {generatedLetter}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <Button variant="outline">Copy to Clipboard</Button>
                      <Button variant="outline">Download as PDF</Button>
                      <Button variant="outline">Edit Letter</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoverLetterGenerator;
