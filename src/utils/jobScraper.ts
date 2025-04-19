
import { toast } from "sonner";

export interface ScrapedJobData {
  title: string;
  company: string;
  location: string;
  description: string;
}

export const scrapeJobDescription = async (jobUrl: string): Promise<ScrapedJobData | null> => {
  try {
    // In a real implementation, this would call a backend API to scrape the job posting
    // For demonstration purposes, we'll simulate a successful scrape with a delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Extract domain name for simulation purposes
    const domain = new URL(jobUrl).hostname.replace('www.', '');
    
    // Simulate different job data based on the URL domain
    const mockJobData: ScrapedJobData = {
      title: `Software Engineer${domain.includes('linkedin') ? ' II' : domain.includes('indeed') ? ' - Full Stack' : ''}`,
      company: domain.includes('linkedin') ? 'Tech Innovations Inc.' : 
               domain.includes('indeed') ? 'Digital Solutions LLC' : 
               domain.includes('glassdoor') ? 'Future Systems' : 'Acme Corporation',
      location: 'Remote, United States',
      description: `We are seeking a talented Software Engineer to join our team. The ideal candidate will have experience with React, Node.js, and cloud infrastructure. Key responsibilities include developing robust applications, implementing CI/CD pipelines, and collaborating with cross-functional teams to deliver high-quality software solutions.

Required Skills:
- Proficiency in JavaScript/TypeScript
- Experience with React and modern frontend frameworks
- Knowledge of backend technologies like Node.js
- Familiarity with cloud services (AWS, GCP, or Azure)
- Strong problem-solving abilities and attention to detail

Benefits:
- Competitive salary and benefits package
- Remote-first work environment
- Professional development opportunities
- Collaborative and inclusive culture`
    };
    
    return mockJobData;
  } catch (error) {
    console.error('Error scraping job description:', error);
    toast("Error", {
      description: "Failed to scrape job description. Please check the URL and try again.",
      variant: "destructive",
    });
    return null;
  }
};
