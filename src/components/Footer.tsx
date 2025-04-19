
import React from 'react';
import { FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-dark text-white py-12 px-4 md:px-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FileCheck className="h-6 w-6 text-purple-primary" />
            <span className="text-xl font-semibold">Cover Letter Genius</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-purple-primary transition-colors">Home</Link>
            <Link to="/cover-letter" className="hover:text-purple-primary transition-colors">Cover Letters</Link>
            <Link to="/resumes" className="hover:text-purple-primary transition-colors">Resumes</Link>
            <Link to="/market-research" className="hover:text-purple-primary transition-colors">Research</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Cover Letter Genius. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
