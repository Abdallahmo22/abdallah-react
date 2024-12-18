import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <h3 className="text-3xl font-bold text-white-100 cursor-pointer tracking-widest"><span className='text-blue-700 text-4xl'>A</span>bdallah<span className='text-blue-700'>.</span></h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Abdallah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}