import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { scrapeJobDescription, ScrapedJobData } from '@/utils/jobScraper';
import { generateCoverLetter } from '@/utils/coverLetterGenerator';
import { copyToClipboard, downloadAsPDF } from '@/utils/exportUtils';

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
  const [scrapedJobData, setScrapedJobData] = useState<ScrapedJobData | null>(null);
  const [selectedResume, setSelectedResume] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["formal"]);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isScraping, setIsScraping] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const handleStyleToggle = (styleId: string) => {
    setSelectedStyles(current =>
      current.includes(styleId)
        ? current.filter(id => id !== styleId)
        : [...current, styleId]
    );
  };

  const handleScrapeJob = async () => {
    if (!jobUrl) {
      toast("Error", {
        description: "Please enter a job URL",
        variant: "destructive",
      });
      return;
    }

    setIsScraping(true);
    try {
      const jobData = await scrapeJobDescription(jobUrl);
      if (jobData) {
        setScrapedJobData(jobData);
        toast("Success", {
          description: "Job description scraped successfully!",
        });
      }
    } catch (error) {
      console.error('Error scraping job:', error);
    } finally {
      setIsScraping(false);
    }
  };

  const handleGenerate = async () => {
    if (!jobUrl || !selectedResume || selectedStyles.length === 0 || !scrapedJobData) {
      toast("Error", {
        description: "Please fill in all required fields and scrape the job description",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const letter = await generateCoverLetter({
        jobData: scrapedJobData,
        resumeId: selectedResume,
        writingStyles: selectedStyles,
      });
      
      setGeneratedLetter(letter);
      setActiveTab("result");
      toast("Success", {
        description: "Cover letter generated successfully!",
      });
    } catch (error) {
      console.error('Error generating letter:', error);
      toast("Error", {
        description: "Failed to generate cover letter",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(generatedLetter);
  };

  const handleDownloadPDF = () => {
    downloadAsPDF('cover-letter-content', `CoverLetter-${scrapedJobData?.company || 'Company'}`);
  };

  const handleEditLetter = () => {
    setActiveTab("input");
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
                    <div className="relative">
                      <Label htmlFor="jobUrl">Job Posting URL</Label>
                      <div className="relative">
                        <Input 
                          id="jobUrl" 
                          placeholder="https://example.com/job-posting" 
                          value={jobUrl}
                          onChange={(e) => setJobUrl(e.target.value)}
                          className="pl-10"
                        />
                        <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      </div>
                      <Button 
                        onClick={handleScrapeJob} 
                        className="mt-2" 
                        variant="outline"
                        disabled={!jobUrl || isScraping}
                      >
                        {isScraping ? "Scraping..." : "Scrape Job Details"}
                      </Button>
                      
                      {scrapedJobData && (
                        <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
                          <p className="text-sm font-medium text-green-800">Job Details Retrieved:</p>
                          <p className="text-sm mt-1"><span className="font-medium">Title:</span> {scrapedJobData.title}</p>
                          <p className="text-sm mt-1"><span className="font-medium">Company:</span> {scrapedJobData.company}</p>
                          <p className="text-sm mt-1"><span className="font-medium">Location:</span> {scrapedJobData.location}</p>
                        </div>
                      )}
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
                      <Label>Writing Styles (Select multiple)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {writingStyles.map((style) => (
                          <div key={style.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={style.id}
                              checked={selectedStyles.includes(style.id)}
                              onCheckedChange={() => handleStyleToggle(style.id)}
                              className="mt-1"
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor={style.id} className="font-medium">
                                {style.label}
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                {style.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleGenerate} 
                      className="w-full mt-6"
                      disabled={!jobUrl || !selectedResume || selectedStyles.length === 0 || isLoading || !scrapedJobData}
                    >
                      {isLoading ? "Generating..." : "Generate Cover Letter"}
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="result" className="mt-0">
                  <div className="space-y-6">
                    <div className="bg-white border rounded-md p-6" id="cover-letter-content" ref={letterRef}>
                      <div className="whitespace-pre-line font-serif leading-relaxed">
                        {generatedLetter}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <Button variant="outline" onClick={handleCopyToClipboard}>
                        Copy to Clipboard
                      </Button>
                      <Button variant="outline" onClick={handleDownloadPDF}>
                        Download as PDF
                      </Button>
                      <Button variant="outline" onClick={handleEditLetter}>
                        Edit Letter
                      </Button>
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
