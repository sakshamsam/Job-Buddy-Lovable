
import { ScrapedJobData } from "./jobScraper";

export interface CoverLetterOptions {
  jobData: ScrapedJobData;
  resumeId: string;
  writingStyles: string[];
}

export const generateCoverLetter = async (options: CoverLetterOptions): Promise<string> => {
  const { jobData, resumeId, writingStyles } = options;
  
  // In a real implementation, this would call an AI service to generate the letter
  // For demonstration purposes, we'll create a template-based letter
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Determine tone based on selected writing styles
  let tone = "professional";
  let intro = "I am writing to express my interest in";
  let strengths = "My experience with React, Node.js, and cloud infrastructure aligns perfectly with your requirements.";
  let conclusion = "I am excited about the opportunity to bring my technical expertise and problem-solving skills to";

  if (writingStyles.includes("creative") || writingStyles.includes("super-creative")) {
    tone = "creative";
    intro = "I was thrilled to discover";
    strengths = "My journey through the tech landscape has equipped me with a robust toolkit in React, Node.js, and cloud infrastructure—skills that directly address your needs.";
    conclusion = "I'm eager to infuse my technical creativity and problem-solving energy into the innovative work happening at";
  }
  
  if (writingStyles.includes("storytelling")) {
    tone = "narrative";
    intro = "My journey as a developer led me to discover";
    strengths = "Throughout my career, I've honed my skills in React, Node.js, and cloud infrastructure, consistently delivering solutions that drive business results.";
    conclusion = "I can envision the next chapter of my story contributing meaningful innovations to the team at";
  }
  
  if (writingStyles.includes("engaging")) {
    tone = "conversational";
    intro = "When I came across";
    strengths = "I've spent years developing expertise in React, Node.js, and cloud infrastructure—exactly what you're looking for!";
    conclusion = "I'd love to discuss how my background and enthusiasm can add value to the talented team at";
  }
  
  // Resume-specific customization (simulated based on selected resume)
  let experienceHighlight = "";
  if (resumeId === "software-dev") {
    experienceHighlight = "In my current role at Tech Solutions Inc., I reduced application load time by 40% and implemented CI/CD pipelines that decreased deployment time by 25%.";
  } else if (resumeId === "marketing") {
    experienceHighlight = "In my current role, I've managed technical marketing initiatives, working closely with development teams to translate complex features into compelling value propositions.";
  } else if (resumeId === "product") {
    experienceHighlight = "As a Product Manager with technical expertise, I've led cross-functional teams in delivering user-centric features while maintaining technical excellence.";
  }
  
  // Create the letter
  return `Dear Hiring Manager,

${intro} the ${jobData.title} position at ${jobData.company}. With over 5 years of experience in full-stack development and a proven track record of delivering robust applications, I believe I am well-positioned to contribute to your team's success.

${strengths} ${experienceHighlight}

${conclusion} ${jobData.company} and help drive your digital transformation initiatives.

Sincerely,
Jordan Smith`;
};
