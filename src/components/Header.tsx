
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-purple-primary" />
            <h1 className="text-xl font-semibold tracking-tight">Cover Letter Genius</h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/cover-letter" className="text-sm font-medium hover:text-purple-primary transition-colors">
            Cover Letter Generator
          </Link>
          <Link to="/resumes" className="text-sm font-medium hover:text-purple-primary transition-colors">
            Resume Management
          </Link>
          <Link to="/market-research" className="text-sm font-medium hover:text-purple-primary transition-colors">
            Market Research
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
