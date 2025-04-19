
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Plus, Upload, Trash } from "lucide-react";

const dummyResumes = [
  { 
    id: "resume-1", 
    name: "Software Developer Resume", 
    category: "tech", 
    lastUpdated: "2025-03-15", 
    fileSize: "120 KB" 
  },
  { 
    id: "resume-2", 
    name: "Marketing Resume", 
    category: "marketing", 
    lastUpdated: "2025-02-28", 
    fileSize: "105 KB" 
  },
  { 
    id: "resume-3", 
    name: "Product Manager Resume", 
    category: "product", 
    lastUpdated: "2025-04-02", 
    fileSize: "115 KB" 
  }
];

const categories = [
  { id: "tech", name: "Technology" },
  { id: "marketing", name: "Marketing" },
  { id: "product", name: "Product Management" },
  { id: "design", name: "Design" },
  { id: "other", name: "Other" }
];

const ResumeManagement = () => {
  const [resumes, setResumes] = useState(dummyResumes);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredResumes = selectedCategory 
    ? resumes.filter(resume => resume.category === selectedCategory) 
    : resumes;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 bg-gray-light">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Resume <span className="text-purple-primary">Management</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Upload and organize your resumes for different job applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span>New Category</span>
              </Button>
              <Button className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                <span>Upload Resume</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filter By Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Fix: Changed empty string value to "all" */}
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    {resumes.length} total resumes
                  </p>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-dashed border-2 bg-background/50 hover:bg-background/80 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center h-full py-12">
                    <div className="rounded-full bg-purple-light p-4 mb-4">
                      <Plus className="h-8 w-8 text-purple-primary" />
                    </div>
                    <p className="font-medium">Upload New Resume</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      PDF, DOCX formats supported
                    </p>
                  </CardContent>
                </Card>
                
                {/* Update the filter logic to work with the new "all" value */}
                {(selectedCategory === "all" ? resumes : filteredResumes).map((resume) => (
                  <Card key={resume.id} className="hover-glow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="rounded-full bg-purple-light p-2 mb-2">
                          <FileText className="h-5 w-5 text-purple-primary" />
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                      <CardTitle className="text-lg">{resume.name}</CardTitle>
                      <CardDescription>
                        {categories.find(c => c.id === resume.category)?.name || 'Uncategorized'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Last updated: {resume.lastUpdated}</span>
                        <span>{resume.fileSize}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 pt-0">
                      <Button variant="ghost" size="sm" className="flex-1">
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        Edit
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeManagement;
