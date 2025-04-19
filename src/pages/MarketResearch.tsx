
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  Search
} from "lucide-react";

const MarketResearch = () => {
  const [companyName, setCompanyName] = useState("");
  const [isResearchGenerated, setIsResearchGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleGenerateResearch = () => {
    if (companyName) {
      setIsResearchGenerated(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 bg-gray-light">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Market <span className="text-purple-primary">Research</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get competitive intelligence and insights about companies to help you prepare for interviews.
            </p>
          </div>
          
          {!isResearchGenerated ? (
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input 
                      id="companyName" 
                      placeholder="Enter company name..." 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleGenerateResearch} 
                    className="w-full"
                    disabled={!companyName}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Generate Research Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">{companyName} Research Report</CardTitle>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="market">Market</TabsTrigger>
                      <TabsTrigger value="culture">Culture</TabsTrigger>
                      <TabsTrigger value="strategy">Strategy</TabsTrigger>
                      <TabsTrigger value="competitive">Competitive</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-0">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-purple-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium text-lg">Company Overview</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Founded in 2012 with headquarters in San Francisco</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Series D funding with $200M+ raised to date</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>500+ employees across 5 global offices</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="market" className="mt-0">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-purple-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium text-lg">Market Position</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>15% market share in the enterprise collaboration space</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Growing at 35% YoY compared to industry average of 22%</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Recently expanded into APAC region with 40% growth</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="culture" className="mt-0">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-purple-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium text-lg">Culture & Leadership</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>CEO previously led product at Salesforce for 5 years</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Ranked in Top 50 Places to Work for 3 consecutive years</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Remote-first policy with quarterly team gatherings</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="strategy" className="mt-0">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-purple-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium text-lg">Strategic Focus</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Investing heavily in AI-powered features for 2023</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Recent acquisition of data analytics startup DataViz</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Expanding enterprise customer base in healthcare sector</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="competitive" className="mt-0">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-purple-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium text-lg">Competitive Edge</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Proprietary machine learning algorithm with 3 patents</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>Industry-leading customer retention rate of 94%</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-primary font-bold">•</span>
                                <span>First-to-market with blockchain verification feature</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Want to search for another company?</p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsResearchGenerated(false)}
                >
                  New Search
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketResearch;
